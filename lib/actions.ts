"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { TCustomFormData, TPostMeal } from "./types";

const isInvalidText = (text: string) => !text || text.trim() === "";

const checkMealForm = (meal: TPostMeal) =>
  isInvalidText(meal?.title) ||
  isInvalidText(meal?.summary) ||
  isInvalidText(meal?.instructions) ||
  isInvalidText(meal?.creator) ||
  isInvalidText(meal?.creator_email) ||
  !meal?.creator_email?.includes("@") ||
  !meal?.image ||
  meal?.image?.size === 0;

export async function shareMeal(
  _prevState: { message: string },
  formData: TCustomFormData
) {
  const meal: TPostMeal = {
    title: formData?.get("title"),
    summary: formData?.get("summary"),
    instructions: formData?.get("instructions"),
    image: formData?.get("image"),
    creator: formData?.get("name"),
    creator_email: formData?.get("email"),
  };

  if (checkMealForm(meal)) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
