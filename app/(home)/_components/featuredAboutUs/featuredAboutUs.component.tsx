import { Button } from "@/shared/components";

export const FeaturedAboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-32">
      <div className="flex w-full pb-4 md:pb-0">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">Nasza Historia</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Ekspercka nauka pływania z pasją - indywidualne podejście,
              bezpieczeństwo i radość w każdym zanurzeniu.
            </h2>
          </div>

          <div>
            <Button>Poznaj Całą Historie</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-lg text-sm lg:text-base">
            Witaj w naszej szkółce pływackiej, gdzie każdy zanurzony moment to
            unikalna lekcja. Jako jedyny trener stawiam na indywidualne
            podejście, bezpieczeństwo oraz rozwijanie umiejętności pływania z
            radością i pewnością siebie.
          </p>
        </div>

        <div>
          <p className="text-lg text-sm lg:text-base">
            Razem tworzymy atmosferę przyjazną, inspirującą do odkrywania uroku
            wody i zdobywania nowych umiejętności. Zaufaj nam, a twoja przygoda
            z pływaniem stanie się niezapomnianą podróżą pełną radości i
            osiągnięć.
          </p>
        </div>

        <div>
          <p className="text-lg text-sm lg:text-base">
            Zaufaj naszemu doświadczonemu instruktorowi, który nie tylko
            kształtuje umiejętności, ale również buduje pewność siebie i pasję
            do wody.
          </p>
        </div>
      </div>
    </div>
  );
};
