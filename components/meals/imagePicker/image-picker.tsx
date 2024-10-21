"use client";

import { useRef, useState } from "react";

import ImagePreview from "../imagePreview/image-preview";

import classes from "./image-picker.module.css";

type TImagePickerProps = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: TImagePickerProps) {
  const inputRef = useRef(null);
  const [pickedImage, setPickedImage] = useState(null);

  const pickImageHandler = () => inputRef?.current?.click();

  const handleImageChange = (event) => {
    const file = event?.target?.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => setPickedImage(fileReader?.result);

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <ImagePreview pickedImage={pickedImage} />
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
