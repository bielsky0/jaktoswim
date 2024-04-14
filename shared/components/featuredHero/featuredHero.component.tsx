import Image from "next/image";
import heroImgSrc from "@/public/featuredHero.png";
import { Button } from "@/shared/components";

export const FeatureHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="">Kim Jesteśmy</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold">
              Odkryj Radość Pływania z Profesjonalnym Instruktorem
            </h2>
          </div>

          <div>
            <p className="text-lg">
              Z nami pływanie staje się nie tylko nauką, ale także źródłem
              radości. Profesjonalni instruktorzy, bezpieczna atmosfera i
              indywidualne podejście sprawiają, że każde zanurzenie to nie tylko
              lekcja, ale również przygoda. Dołącz do naszej pływackiej rodziny
              i doświadcz, jak rozwijamy umiejętności, budujemy pewność siebie i
              kształtujemy miłość do wody.
            </p>
          </div>
          <div className="pt-8">
            <Button>Poznaj Trenera</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <Image
          src={heroImgSrc}
          className="w-full max-w-96 max-h-[456px]"
          alt="dasd"
        />
      </div>
    </div>
  );
};
