export const FeaturedHero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full lg:gap-16">
        <div className="flex w-full">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
              <h5 className="">Zajęcia</h5>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-4xl font-semibold ">
                Wspaniała Przygoda w Wodzie
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full py-8">
          <div>
            <p className="text-lg  text-sm lg:text-base">
              Oferujemy różnorodne zajęcia dostosowane do wszystkich grup
              wiekowych. Dla najmłodszych proponujemy dynamiczne lekcje, które
              nie tylko uczą umiejętności pływania, ale także rozwijają
              zdolności motoryczne i budują pewność siebie. Dla dorosłych
              przygotowaliśmy zajęcia dopasowane do różnych poziomów
              zaawansowania, stawiając na komfort i skuteczność nauki.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 w-full h-[643px] rounded-2xl relative"></div>
    </div>
  );
};
