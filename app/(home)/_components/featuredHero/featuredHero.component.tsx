import Image from "next/image";
import heroImgSrc from "@/public/featuredHero.png";
import { Button } from "@/shared/components";

export const FeatureHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 ">
      <div className="flex w-full h-full my-auto">
        <div className="flex flex-col lg:pr-16">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">Kim Jesteśmy</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Odkryj Radość Pływania z Profesjonalnym Instruktorem
            </h2>
          </div>

          <div className="pb-4">
            <p className="text-sm lg:text-base">
              Z nami pływanie staje się nie tylko nauką, ale także źródłem
              radości. Profesjonalni instruktorzy, bezpieczna atmosfera i
              indywidualne podejście sprawiają, że każde zanurzenie to nie tylko
              lekcja, ale również przygoda. Dołącz do naszej pływackiej rodziny
              i doświadcz, jak rozwijamy umiejętności, budujemy pewność siebie i
              kształtujemy miłość do wody.
            </p>
          </div>
          <div>
            <Button>Poznaj Trenera</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full transform-gpu  justify-center lg:justify-end">
        <Image
          src={heroImgSrc}
          className="w-full h-full  max-h-[500px]  object-cover rounded-2xl"
          alt="dasd"
        />
      </div>
    </div>
  );
};
