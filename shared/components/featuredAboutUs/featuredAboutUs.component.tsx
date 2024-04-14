import { Button } from "@/shared/components";

export const FeaturedAboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="">Nasza Historia</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Ekspercka nauka pływania z pasją - indywidualne podejście,
              bezpieczeństwo i radość w każdym zanurzeniu.
            </h2>
          </div>

          <div className="pt-8">
            <Button>Poznaj Całą Historie</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-lg">
            Witaj w naszej szkółce pływackiej, gdzie każdy zanurzony moment to
            unikalna lekcja. Jako jedyny trener stawiam na indywidualne
            podejście, bezpieczeństwo oraz rozwijanie umiejętności pływania z
            radością i pewnością siebie. Razem tworzymy atmosferę przyjazną,
            inspirującą do odkrywania uroku wody i zdobywania nowych
            umiejętności. Zaufaj nam, a twoja przygoda z pływaniem stanie się
            niezapomnianą podróżą pełną radości i osiągnięć.
          </p>
        </div>

        <div>
          <p className="text-lg">
            Zaufaj naszemu doświadczonemu instruktorowi, który nie tylko
            kształtuje umiejętności, ale również buduje pewność siebie i pasję
            do wody.
          </p>
        </div>
      </div>
    </div>
  );
};
