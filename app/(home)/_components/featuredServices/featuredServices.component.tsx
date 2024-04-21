import { Button } from "@/shared/components";

import service1Src from "@/public/service1.jpg";
import service2Src from "@/public/service.jpg";
import service3Src from "@/public/service3.jpg";

import Image from "next/image";

export const FeaturedServices = () => {
  return (
    <div className="w-full flex  justify-center flex-col ">
      <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
        <div className="flex w-full">
          <div className="flex flex-col ">
            <div className="flex gap-2 items-center pb-2">
              <div className="h-[8px] w-[8px] bg-white rounded-full"></div>
              <h5 className="text-white text-sm md:text-base">Jak Pracujemy</h5>
            </div>

            <div className="max-w-4xl pb-3">
              <h2 className="ibmPlex text-2xl md:text-4xl font-semibold text-white">
                Jak wyniesiemy twoje umiejętności pływania na wyższy poziom
              </h2>
            </div>

            <div className="hidden lg:flex ">
              <Button>Zapisz Się na Zajęcia</Button>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
          <div>
            <p className="text-lg text-white text-sm lg:text-base">
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

        <div className="flex lg:hidden ">
          <Button>Zapisz Się na Zajęcia</Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-12 pt-16 ">
        <div className="w-full flex flex-col md:flex-row items-center  md:gap-16  lg:gap-32">
          <div className="w-full pb-2 md:pb-0">
            <div className="h-[150px] md:h-[300px]">
              <Image
                alt="dasd"
                src={service1Src}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:gap-8 ">
            <div className="pb-3 md:pb-0">
              <h5 className="ibmPlex text-white text-2xl lg:text-4xl font-bold">
                1. Skontaktuj się z nami
              </h5>
            </div>

            <div>
              <p className="text-white text-sm lg:text-base">
                Chcesz rozpocząć swoją przygodę z pływaniem? Skontaktuj się z
                nami już dziś, aby uzyskać więcej informacji o naszych
                zajęciach! Nasz przyjazny zespół odpowie na wszystkie Twoje
                pytania i pomoże Ci znaleźć idealny program nauki pływania
                dostosowany do Twoich potrzeb i umiejętności. Nie czekaj dłużej
                - zgłoś się do nas już teraz i rozpocznij swoją pływacką
                przygodę z profesjonalnym wsparciem!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center  md:gap-16  lg:gap-32">
          <div className="w-full pb-2 md:pb-0">
            <div className="h-[150px] md:h-[300px]">
              <Image
                alt="dasd"
                src={service2Src}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:gap-8">
            <div className="pb-3 md:pb-0">
              <h5 className="ibmPlex text-white text-2xl lg:text-4xl font-bold">
                2. Umów Spotkanie
              </h5>
            </div>

            <div>
              <p className="text-white text-sm lg:text-base">
                Gotowy na pierwszy krok w stronę doskonalenia swoich
                umiejętności pływackich? Umów spotkanie z naszym doświadczonym
                instruktorem, który dostosuje zajęcia do Twoich celów i poziomu
                zaawansowania. Bez względu na to, czy dopiero zaczynasz swoją
                przygodę z pływaniem, czy chcesz doskonalić swoje techniki, nasz
                zespół zapewni Ci spersonalizowane podejście i motywację do
                osiągnięcia sukcesu. Zarezerwuj swój czas już teraz i rozpocznij
                swoją pływacką podróż!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center  md:gap-16  lg:gap-32">
          <div className="w-full pb-2 md:pb-0">
            <div className="h-[150px] md:h-[300px]">
              <Image
                alt="dasd"
                src={service3Src}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:gap-8">
            <div className="pb-3 md:pb-0">
              <h5 className="ibmPlex text-white text-2xl lg:text-4xl font-bold">
                3. Widzimy się w wodzie
              </h5>
            </div>

            <div>
              <p className="text-white text-sm lg:text-base">
                Czy jesteś gotowy na emocjonującą podróż po wodzie? Dołącz do
                naszej pływackiej rodziny i zanurz się w świat nauki pływania
                pełnej przygód i osiągnięć. Niech nasza motywująca atmosfera i
                profesjonalne wsparcie naszych instruktorów będą Twoim
                przewodnikiem w zdobywaniu nowych umiejętności i budowaniu
                pewności siebie na wodzie. Spotkajmy się na basenie i
                rozpocznijmy razem tę niezapomnianą podróż!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
