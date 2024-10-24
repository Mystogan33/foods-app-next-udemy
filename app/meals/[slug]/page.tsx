import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import { TGetMeal } from "@/lib/types";

import classes from "./page.module.scss";

type TMealDetailsPageProps = {
  params: {
    slug: string;
  };
};

type TMealDetailsPageHeaderProps = {
  meal: TGetMeal;
};

export async function generateMetadata({
  params,
}: TMealDetailsPageProps): Promise<Metadata> {
  const meal = getMeal(params?.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: `NextLevel Food - ${meal?.title}`,
    description: meal?.summary,
  };
}

const MealDetailsPageHeader = ({ meal }: TMealDetailsPageHeaderProps) => (
  <header className={classes.header}>
    <div className={classes.image}>
      <Image src={meal?.image} alt={meal?.title} fill />
    </div>
    <div className={classes.headerText}>
      <h1>{meal?.title}</h1>
      <p className={classes.creator}>
        by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
      </p>
      <p className={classes.summary}>{meal?.summary}</p>
    </div>
  </header>
);

export default function MealDetailsPage({ params }: TMealDetailsPageProps) {
  const meal = getMeal(params?.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <MealDetailsPageHeader meal={meal} />
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal?.instructions?.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
}
