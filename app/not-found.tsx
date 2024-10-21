import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextLevel Food - Page not found",
  description:
    "Unfortunately, we could not find the requested page or resource.",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
