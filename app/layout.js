import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "ehz",
  description: "Generated by Next.js",
  keywords: "elias",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "norma"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
