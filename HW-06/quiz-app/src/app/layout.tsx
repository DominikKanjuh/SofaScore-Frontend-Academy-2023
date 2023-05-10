export const metadata = {
  icons: {
    icon: "/quiz.png",
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
      <body>{children}</body>
    </html>
  );
}
