// app/layout.jsx
"use client";
import "./styles/global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-inter">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/*
<html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter bg-gray-100 min-h-screen flex flex-col">
        
        <main className="flex-grow">{children}</main>
        
      </body>
    </html>
*/
