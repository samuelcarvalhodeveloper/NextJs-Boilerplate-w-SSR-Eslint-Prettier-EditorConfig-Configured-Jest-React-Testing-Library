import "../assets/css/global_styles.css";
import "../assets/css/not_found_page_styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
