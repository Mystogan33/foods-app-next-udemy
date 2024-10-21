import Image from "next/image";

import classes from "./image-preview.module.scss";

type TImagePreviewProps = {
  pickedImage: string;
};

export default function ImagePreview({ pickedImage }: TImagePreviewProps) {
  return (
    <div className={classes.preview}>
      {!pickedImage ? (
        <p>No image picked yet.</p>
      ) : (
        <Image src={pickedImage} alt="The image selected by the user." fill />
      )}
    </div>
  );
}
