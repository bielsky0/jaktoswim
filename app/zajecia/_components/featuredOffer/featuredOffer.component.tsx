import Image from "next/image";

import { Button } from "@/shared/components";

import service1Src from "@/public/service1.jpg";
import service2Src from "@/public/service2.jpg";

export const FeaturedOffer = () => {
  return (
    <div className="w-full flex  justify-center flex-col ">
      <div className="flex flex-col lg:flex-row w-full lg:gap-16">
        <div className="flex w-full">
          <div className="flex flex-col ">
            <div className="flex gap-2 items-center pb-2">
              <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
              <h5 className="text-sm md:text-base">Co oferujemy</h5>
            </div>

            <div className="max-w-4xl pb-3">
              <h2 className="text-2xl md:text-4xl font-semibold">
                Rozwijaj Umiejętności z Nami - Zapisz na Lekcję Próbną
              </h2>
            </div>

            <div className="hidden lg:flex">
              <Button>Zapisz Się na Zajęcia</Button>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
          <div>
            <p className="text-sm lg:text-base">
              Nasza szkółka pływacka w Szczecinie oferuje indywidualne podejście
              i profesjonalne instruktaż. Dzięki skupieniu na technice,
              poprawiamy umiejętności każdego ucznia. Motywująca atmosfera
              sprzyja szybkiemu postępowi i budowaniu pewności siebie.
              Zapewniamy skuteczną naukę, prowadzącą do znaczącej poprawy
              umiejętności pływackich. Nasza szkółka to miejsce, gdzie każdy
              czuje się mile widziany i doceniony. Skontaktuj się z nami już
              dziś, aby dołączyć do naszej pływackiej rodziny!
            </p>
          </div>
        </div>

        <div className="flex lg:hidden pb-5">
          <Button>Zapisz Się na Zajęcia</Button>
        </div>
      </div>

      <div className="w-full flex flex-col py-12 gap-12">
        <div className="w-full flex flex-col md:flex-row items-center md:gap-16">
          <div className="w-full pb-2">
            <div className="h-[150px] md:h-[300px]">
              <Image
                alt="dasd"
                src={service1Src}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className=" pb-3">
              <h5 className="text-black text-2xl lg:text-4xl font-bold">
                Zajęcia dla najmłodszych
              </h5>
            </div>

            <div className="pb-4">
              <p className="text-black text-sm lg:text-base">
                Zapisz swoją pociechę na lekcję próbną! Lekcja próbna pozwoli
                nam ocenić obecny poziom twojego malucha, na podstawie którego
                ustalimy konkretny plan działania. Dostosujemy grupę dla jego
                potrzeb, aby skutecznie rozwiązać jego problem i osiągnąć cele.
              </p>
            </div>

            <div className="pb-5">
              <p className="text-black text-sm lg:text-base">
                Cena lekcji próbnej wynosi - 60 zł
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:gap-16">
          <div className="w-full pb-2">
            <div className="h-[150px] md:h-[300px]">
              <Image
                alt="dasd"
                src={service2Src}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <div className="pb-3">
              <h5 className="text-black text-2xl lg:text-4xl font-bold">
                Zajęcia dla dorosłych
              </h5>
            </div>

            <div className="pb-4">
              <p className="text-black text-sm lg:text-base">
                Zapisz się na lekcję próbną! Lekcja próbna pozwoli nam ocenić
                twój obecny poziom, na podstawie którego ustalimy konkretny plan
                działania. Dostosujemy grupę do twoich potrzeb, aby skutecznie
                rozwiązać twój problem i osiągnąć twój cel.
              </p>
            </div>

            <div className="pb-5">
              <p className="text-black text-sm lg:text-base">
                Cena lekcji próbnej wynosi - 60 zł
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
