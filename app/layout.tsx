import MainHeader from "@/components/main-header/main-header";
import { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "NextLevel Food - Homepage",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
