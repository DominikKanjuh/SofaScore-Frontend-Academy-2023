import Sidebar from "../components/Sidebar";
import { Main } from "../components/Main";
import "../public/styles/globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Quiz App",
  description:
    "Quiz App made with Next.js, TypeScript, SWR and Styled Components. Author: @DominikKanjuh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
