export const FeaturedHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="">Nasz Blog</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Najnowsze wiadomości z bloga
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-lg">
            Witaj na naszym blogu, miejscu, gdzie zanurzysz się w fascynującym
            świecie nauki pływania dla dzieci i dorosłych. Nasze artykuły
            dostarczą Ci inspiracji, praktycznych porad oraz ciekawostek z
            zakresu pływania. Dowiesz się, jak rozwijać umiejętności w wodzie,
            bezpiecznie pływać oraz czerpać radość z aktywności w basenie. Nasz
            blog nie tylko dzieli się wiedzą, ale także buduje społeczność
            miłośników wody, promując zdrowy tryb życia i rozwijając pasję do
            pływania. Dołącz do naszej społeczności, gdzie każdy post to kropla
            wiedzy i inspiracji, sprawiająca, że nauka pływania staje się nie
            tylko lekcją, ale fascynującą podróżą.
          </p>
        </div>
      </div>
    </div>
  );
};
