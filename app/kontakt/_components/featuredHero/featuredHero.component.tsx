export const FeaturedHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col pb-2">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">Kontakt</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
              Zadzwoń i Zanurz się!
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-sm lg:text-base">
            Zapraszamy do skorzystania z naszego konta kontaktowego, gdzie
            jednym telefonem możesz zainicjować fascynującą przygodę z
            pływaniem.
          </p>
        </div>
      </div>
    </div>
  );
};
