import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

export default function RootLayout() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <section className="flex-grow-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
