import { Button, TransitionLink } from "@/shared/components";
import { ROUTES } from "@/shared/utils";

export default function NotFound() {
  return (
    <div className="flex w-full py-32 flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-neutral-800">404</h1>
      <p className="mt-4 text-2xl text-neutral-600 ">Nie znaleziono strony</p>
      <p className="mt-2 text-lg text-neutral-500 ">
        Przykro nam, ale wygląda na to, że taka strona nie istnieje
      </p>

      <div className="pt-6">
        <TransitionLink href={ROUTES.home}>
          <Button>Wróć</Button>
        </TransitionLink>
      </div>
    </div>
  );
}
