import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="container-standard flex min-h-[60vh] flex-col items-center justify-center section-spacing text-center">
      <span className="section-badge">Error 404</span>
      <h1 className="text-h1 mt-2">Page Not Found</h1>
      <p className="text-body mt-4 max-w-lg">
        Sorry, the page you are looking for might have been moved, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-6"
      >
        Return to Home
      </Link>
    </main>
  );
}
