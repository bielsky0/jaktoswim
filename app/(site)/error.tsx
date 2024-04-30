"use client";

import { Button } from "@/shared/components";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-neutral-100 dark:bg-neutral-900">
          <h1 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">
            Coś poszło nie tak
          </h1>
          <pre className="mt-2 text-lg text-neutral-500 dark:text-neutral-300">
            {JSON.stringify(error, null, 2)}
          </pre>
          <Button onClick={reset} variant="button">
            Spróbuj Ponowanie
          </Button>
        </div>
      </body>
    </html>
  );
}
