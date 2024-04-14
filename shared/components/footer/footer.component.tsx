import { Logo } from "@/shared/components";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-32">
      <div className="flex flex-col md:flex-row w-full items-center gap-16 justify-between">
        <div>
          <Logo variant="white" className="w-[200px]" />
        </div>

        <div className="flex flex-col px-4  sm:flex-row w-full justify-center gap-8 md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <h4 className="text-white text-lg font-bold">Eskploruj</h4>
            </div>

            <div>
              <h6 className="text-white">O Nas</h6>
            </div>

            <div>
              <h6 className="text-white">Blog</h6>
            </div>

            <div>
              <h6 className="text-white">Zajęcia</h6>
            </div>

            <div>
              <h6 className="text-white">Galeria</h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <h4 className="text-white text-lg font-bold">
                Bądźmy w Kontakcie
              </h4>
            </div>

            <div>
              <h6 className="text-white">+48 777 777 777</h6>
            </div>

            <div>
              <h6 className="text-white">example@gmail.com</h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <h4 className="text-white text-lg font-bold">Zaobserwuj Nas</h4>
            </div>

            <div>
              <h6 className="text-white">Instagram</h6>
            </div>

            <div>
              <h6 className="text-white">Facebook</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
        <div>
          <h6 className="text-white text-sm">
            2024 JakToSwim. Wszystkie Prawa Zastrzeżone
          </h6>
        </div>

        <div className="flex gap-8">
          <div>
            <h6 className="text-white  text-sm">Polityka Prywatności</h6>
          </div>
          <div>
            <h6 className="text-white  text-sm">Zasady Użycia</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
