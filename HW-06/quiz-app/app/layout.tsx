import Sidebar from "../components/Sidebar";
import { Main } from "../components/Main";
import { Body } from "../components/Body";

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
      <body
        style={{
          height: "100vh",
          width: "100vw",
          padding: "0px",
          margin: "0px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Sidebar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
