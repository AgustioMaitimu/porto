import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#16191D]">{children}</body>
    </html>
  );
}
