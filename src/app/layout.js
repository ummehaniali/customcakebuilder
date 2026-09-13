import "./globals.css";


export const metadata = {
  title: "Custom Cake Builder",
  description: "Create Your own Custom Cake",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
  
    >
      <body>
        {children}
      </body>
    </html>
  );
}
