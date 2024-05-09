import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotify",
  description: "Marketing page for Spotify spotlighting top 10 artists of 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
