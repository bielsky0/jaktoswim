import { Button } from "@/shared/components";

export const FeaturedHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-32">
      <div className="flex w-full pb-4 md:pb-0">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">Nasza Galeria</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Uśmiech w Wodzie
            </h2>
          </div>

          <div>
            <Button>Poznaj Całą Historie</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-sm lg:text-base">
            Z nami pływanie staje się nie tylko nauką, ale także źródłem
            radości. Profesjonalni instruktorzy, bezpieczna atmosfera i
            indywidualne podejście sprawiają, że każde zanurzenie to nie tylko
            lekcja, ale również przygoda. Dołącz do naszej pływackiej rodziny i
            doświadcz, jak rozwijamy umiejętności, budujemy pewność siebie i
            kształtujemy miłość do wody.
          </p>
        </div>
      </div>
    </div>
  );
};
