import { Button } from "@/shared/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex py-32 flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">
        404
      </h1>
      <p className="mt-4 text-2xl text-neutral-600 dark:text-neutral-500">
        Nie znaleziono strony
      </p>
      <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-300">
        Przykro nam, ale wygląda na to, że taka strona nie istnieje
      </p>

      <div className="pt-6">
        <Button variant="link" href="/">
          Wróć
        </Button>
      </div>
    </div>
  );
}
