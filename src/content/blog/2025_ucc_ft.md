---
title: "ucc-ft: Verifying Fault-Tolerance in Quantum Circuits"
author: "Brad Chase"
day: 15
month: 8
year: 2025
tags:
- ucc
- fault tolerance
- formal verification
- open source
---

### The Critical Need for Fault-Tolerance

As we build larger and more powerful quantum computers, we face a fundamental obstacle: **noise**. Qubits, are incredibly sensitive to their environment, which can introduce errors that corrupt our computations. The leading strategy to combat this is **Quantum Error Correction (QEC)**, which uses redundant qubits to encode and protect logical information.

However, QEC introduces a new challenge: the very circuits that perform the error correction must themselves be **fault-tolerant**. This means they can't introduce or spread more errors than the code can handle. Manually proving that a circuit is fault-tolerant is a painstaking and error-prone process, especially for the complex codes needed for large-scale quantum computers.

Recently, researchers developed a powerful technique using **formal verification** to automatically prove whether a quantum circuit is fault-tolerant [^1]. This method uses symbolic execution to analyze all possible error propagation paths, providing a rigorous guarantee of a circuit's fault tolerance. The authors also released a [Julia language implementation](https://zenodo.org/records/15313204) of the technique, and demonstrate it's performance on a variety of codes.

[`ucc-ft`](https://github.com/unitaryfoundation/ucc-ft) builds on this foundation to make these sophisticated verification techniques accessible to the entire quantum community. By providing a user-friendly Python interface and accepting standard circuit formats like OpenQASM3, `ucc-ft` bridges the gap between cutting-edge research and practical application. `ucc-ft` is part of the [Unitary Compiler Collection (UCC)](https://github.com/unitaryfoundation/ucc), a broader initiative to build a modular, open-source, and community-driven quantum compiler stack. You can read more about UCC in the [launch announcement blogpost](https://unitary.foundation/posts/2025_ucc_launch_blog/).

### How it Works: An Example

So, what does `ucc-ft` look like in action? Let's take a common task: preparing a Quantum cat state, a fundamental building block in many quantum algorithms and error correction gadgets. Although itself a quantum error correcting code, we can still consider how well it tolerates errors. A standard approach is to prepare the state and then run a check, repeating the process if the check fails. However, a subtle bug in the checking part of the circuit can allow errors to go undetected.

Consider the faulty cat state preparation circuit shown below (figure from [^1]). An error at a specific point (marked with an **X**) can propagate in a way that the parity check fails to catch.

<div style="display: flex; justify-content: center;">
    <img style="margin-top: 0; margin-bottom: 0;" src="/images/2025_ucc_ft/ucc_ft_cat_fail.png" alt="Diagram of the non-FT cat state preparation circuit" width="500"/>
</div>

Using `ucc-ft`, we can automatically detect this flaw. The tool takes the stabilizer definition of the desired state and the circuit implementation in OpenQASM3 and checks if it meets the fault-tolerance criteria.

Here's a code snippet showing how you would use `ucc-ft` to find the bug:

```py
from ucc_ft.codes import CatStateStabilizer
from ucc_ft.checker import ft_check

# Define the stabilizer code for the cat state
code = CatStateStabilizer(num_qubits=4, max_faults=2)

# The circuit implementation in OpenQASM
circuit = """
OPENQASM 3.0;
include "stdgates.inc";
const uint size = 4;
qubit[size] state;
qubit ancilla;

def cat_prep() {
    bit res = 1;
    while(res != 0) {
        reset state[0];
        h state[0];
        for int i in [1:(size-1)] {
            reset state[i];
            cx state[0], state[i];
        }

        // Parity check
        reset ancilla;
        cx state[1], ancilla;
        cx state[2], ancilla;
        res = measure ancilla;
    }
}
"""

# Run the fault-tolerance check
result = ft_check(code, circuit, "cat_prep", "prepare", num_ancilla=1)

# The tool identifies the fault!
print(result)
# Prints:
#  Circuit is not fault-tolerant. Fault-tolerant error locations:
#  [Line  15] X-Pauli error on qubit 0 after CNOT(qubit 0,qubit 2)
```

As you can see, `ucc-ft` not only tells us that the circuit is not fault-tolerant but also pinpoints the exact location and type of error that causes the failure. Notice the use of complex control flow and looping supported by QASM3. This level of automated, precise feedback is invaluable for designing and debugging robust quantum circuits.

### What's Next?
The journey for `ucc-ft` is just beginning; it's really at a proof of concept phase today. We are interested in exploring

- Support for alternative definitions of fault-tolerance and different error models, such as those including correlated noise, to better reflect physical realities.
- Integration with other error correction tools like [Stim](https://github.com/quantumlib/Stim) and [Crumble](https://algassert.com/crumble) to create a more seamless workflow from code definition to verification and visualization.
- Automating synthesis and discovery of new, optimized, and provably fault-tolerant gadgets in a feedback loop with the checker.
- Performance improvements and a library of pre-validated sub-circuits to enable validating larger codes

### Get Involved
`ucc-ft` is an open-source project and we'd love your input! Whether you're a researcher designing new QEC codes, a developer building compilers, or simply passionate about reliable quantum computing, we welcome your contributions and feedback. Please check out the repository [unitaryfoundation/ucc-ft](https://github.com/unitaryfoundation/ucc-ft), or join us on [`#ucc`](https://discord.com/channels/764231928676089909/1346546840526524427) channel the Unitary Foundation Discord to discuss the future of fault-tolerant quantum computing!

### Acknowledgements

Huge thank you to Kean Chen and Gushu Li for their fantastic research work, Julia implementation, and willingness to answer questions and support prototyping this tool.

------------------------------------------------------

[^1]: Chen K, Liu Y, Fang W, Paykin J, Wu X-C, Schmitz A, Zdancewic S, Li G (2025) Verifying Fault-Tolerance of Quantum Error Correction Codes. https://doi.org/10.48550/arXiv.2501.14380
