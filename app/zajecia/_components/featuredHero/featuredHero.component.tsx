import showreelSrc from "@/public/offer_showreel.mp4";

export const FeaturedHero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
        <div className="flex w-full">
          <div className="flex flex-col pb-2">
            <div className="flex gap-2 items-center">
              <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
              <h5 className="text-sm md:text-base">Zajęcia</h5>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-4xl font-semibold">
                Wspaniała Przygoda w Wodzie
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
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

      <div className="w-full  rounded-2xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-[1/1] lg:rounded-2xl lg:aspect-[16/9] pt-8">
        <video
          className="w-full h-full rounded-2xl object-cover"
          loop
          muted
          autoPlay
          playsInline
        >
          <source type="video/mp4" src={showreelSrc} />
        </video>
      </div>
    </div>
  );
};
