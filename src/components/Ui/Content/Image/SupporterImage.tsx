import { CloudinaryImage } from '~/components/Ui/Content/Image/CloudinaryImage';
import { fit } from '@cloudinary/url-gen/actions/resize';

type ImageProps = {
  imageId: string;
  size?: 'large' | 'normal';
};

export default function SupporterImage({
  imageId,
  size = 'normal',
}: ImageProps) {
  const dimensions = {
    large: {
      width: 320,
      height: 120,
      imageWidth: 300,
      imageHeight: 110,
      className: 'w-[320px] h-[120px]',
    },
    normal: {
      width: 200,
      height: 60,
      imageWidth: 180,
      imageHeight: 55,
      className: 'w-[200px] h-[60px]',
    },
  };

  const selected = dimensions[size];

  return (
    <div className={`${selected.className} flex items-center justify-center`}>
      <CloudinaryImage
        id={imageId}
        width={selected.width}
        height={selected.height}
        alterImage={(image) =>
          image.resize(
            fit()
              .width(selected.imageWidth)
              .height(selected.imageHeight)
          )
        }
        objectFit="contain"
        alt="image preview"
        className="w-full h-full mx-auto md:mx-0 object-contain"
      />
    </div>
  );
}