export const FeaturedHero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="">Kontakt</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Zadzwoń i Zanurz się!
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-lg">
            Zapraszamy do skorzystania z naszego konta kontaktowego, gdzie
            jednym telefonem możesz zainicjować fascynującą przygodę z
            pływaniem.
          </p>
        </div>
      </div>
    </div>
  );
};
