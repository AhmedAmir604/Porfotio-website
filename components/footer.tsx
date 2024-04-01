import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mb-10 px-4 text-gray-500">
      <small className="text-xs block mb-2">
        &copy; 2024 Jhon Elia. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>
        built with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
