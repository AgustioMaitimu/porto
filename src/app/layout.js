import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Agustio Maitimu | Front-End Developer Portfolio</title>
      <body className="z-50 bg-[#16191D]">{children}</body>
    </html>
  );
}
