"use client";

import { useFormState } from "react-dom";

import { shareMeal } from "@/lib/actions";

import FormInput from "../formInput/formInput";
import ImagePicker from "../imagePicker/image-picker";
import MealsFormSubmit from "../meals-form-submit/meals-form-submit";

import classes from "./share-meal-page-main.module.scss";

export default function ShareMealPageMain() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <main className={classes.main}>
      <form className={classes.form} action={formAction}>
        <div className={classes.row}>
          <FormInput name="name" label="Your name" />
          <FormInput name="email" label="Your email" type="email" />
        </div>
        <FormInput name="title" label="Title" />
        <FormInput name="summary" label="Short Summary" />
        <FormInput name="instructions" label="Instructions" area />
        <ImagePicker label="Your image" name="image" />
        <p>{state?.message ? <p>{state?.message}</p> : null}</p>
        <p className={classes.actions}>
          <MealsFormSubmit />
        </p>
      </form>
    </main>
  );
}
