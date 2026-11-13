import type { Metadata } from "next";
import { Home, Compass } from "lucide-react";
import { Button, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-[#F8FBFB]">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-4">
        <Badge variant="primary" dot size="md">
          Error 404 • Page Not Found
        </Badge>
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-secondary leading-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-text/80 leading-relaxed font-sans max-w-sm">
          The requested page may have moved or is temporarily unavailable. Browse our clinical directory or return to the main clinic homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            rounded="full"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="shadow-md"
          >
            Return to Home
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="md"
            rounded="full"
            icon={<Compass className="w-4 h-4" />}
            iconPosition="left"
          >
            Explore Treatments
          </Button>
        </div>
      </div>
    </div>
  );
}
