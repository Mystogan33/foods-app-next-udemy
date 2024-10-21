import { TGetMeal } from "@/lib/types";
import MealItem from "../mealItem/meal-item";

import classes from "./meals-grid.module.scss";

type TMealsGridProps = {
  meals: Array<TGetMeal>;
};

export default function MealsGrid({ meals }: TMealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal?.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
