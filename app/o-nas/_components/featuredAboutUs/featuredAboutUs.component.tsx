export const FeaturedAboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col pb-2">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">O Nas</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
              Pomożemy Ci wpłynąć na głębsze wody
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-sm lg:text-base">
            Jako jedyny trener stawiam na indywidualne podejście, bezpieczeństwo
            oraz rozwijanie umiejętności pływania z radością i pewnością siebie.
            Razem tworzymy atmosferę przyjazną, inspirującą do odkrywania uroku
            wody i zdobywania nowych umiejętności. Zaufaj nam, a twoja przygoda
            z pływaniem stanie się niezapomnianą podróżą pełną radości i
            osiągnięć.
          </p>
        </div>
      </div>
    </div>
  );
};
