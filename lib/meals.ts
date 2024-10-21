import fs from 'node:fs';

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { TGetMeal, TPostMeal } from "./types";


const db = sql("meals.db");

export async function getMeals(): Promise<Array<TGetMeal>> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * from meals").all() as Array<TGetMeal>;
}

export function getMeal(slug: TGetMeal["slug"]): TGetMeal {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as TGetMeal;
}

export async function saveMeal(meal: TPostMeal) {
  const slug = slugify(meal?.title, { lower: true });
  const instructions = xss(meal?.instructions);

  const extension = meal?.image?.name.split('.').pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal?.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('Saving image failed !');
    }
  });

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run({
    ...meal,
    image: `/images/${fileName}`,
    instructions,
    slug
  })
}