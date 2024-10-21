import ShareMealPageMain from "@/components/meals/shareMealPageMain/share-meal-page-main";

import classes from "./page.module.scss";

const ShareMealPageHeader = () => (
  <header className={classes.header}>
    <h1>
      Share your <span className={classes.highlight}>favorite meal</span>
    </h1>
    <p>Or any other meal you feel needs sharing!</p>
  </header>
);

export default function ShareMealPage() {
  return (
    <>
      <ShareMealPageHeader />
      <ShareMealPageMain />
    </>
  );
}
