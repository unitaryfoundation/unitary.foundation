import { Cloudinary } from '@cloudinary/url-gen';

const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'dcz4ywuer';

export const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
  url: {
    secure: true,
  },
});
