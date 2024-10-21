import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import classes from "./image-preview.module.css";

type TImagePreviewProps = {
  pickedImage: string | StaticImport;
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
