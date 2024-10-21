export type TPostMeal = {
  title: string;
  image: File;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type TGetMeal = TPostMeal & {
  image: string;
  id: string | number;
  slug: string;
};

export interface TCustomFormData extends FormData {
  get(key: "title"): string | null;
  get(key: "summary"): string | null;
  get(key: "instructions"): string | null;
  get(key: "image"): File | null;
  get(key: "name"): string | null;
  get(key: "email"): string | null;
}
