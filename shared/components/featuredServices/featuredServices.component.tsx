import { Button } from "@/shared/components";

export const FeaturedServices = () => {
  return (
    <div className="w-full flex  justify-center flex-col ">
      <div className="w-full max-w-4xl ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-white rounded-full"></div>
            <h5 className="text-white text-sm lg:text-md">Nasze Usługi</h5>
          </div>

          <div className="">
            <h2 className="text-3xl lg:text-6xl text-white">
              Cutting-edge Solutions for Modern Websites
            </h2>
          </div>
        </div>
      </div>

      <div className="text-left  py-8 max-w-4xl ">
        <p className=" text-sm lg:text-md text-white">
          At Simply Amazing, we utilize responsive design, SEO techniques, and
          advanced e-commerce features to create websites that are both visually
          stunning and highly functional. Our innovative technologies ensure
          that your website stands out from the competition and delivers an
          exceptional user experience.
        </p>
      </div>

      <div className="w-full flex justify-start">
        <Button>Learn More</Button>
      </div>

      <div className="w-full flex flex-col gap-12 pt-16 lg:py-8">
        <div className="w-full flex flex-row items-center gap-8 md:gap-16">
          <div className="w-20 h-16 md:w-[9rem] md:h-[7rem] lg:w-[21rem] lg:h-[10rem] bg-gray-300 rounded-2xl"></div>

          <div>
            <h5 className="text-white text-3xl md:text-5xl font-bold">
              Websites
            </h5>
          </div>
        </div>
        <div className="w-full flex flex-row items-center gap-8 md:gap-16">
          <div className="w-20 h-16 md:w-[9rem] md:h-[7rem] lg:w-[21rem] lg:h-[10rem] bg-gray-300 rounded-2xl"></div>

          <div>
            <h5 className="text-white text-3xl md:text-5xl font-bold">SEO</h5>
          </div>
        </div>

        <div className="w-full flex flex-row items-center gap-8 md:gap-16">
          <div className="w-20 h-16 md:w-[9rem] md:h-[7rem] lg:w-[21rem] lg:h-[10rem] bg-gray-300 rounded-2xl"></div>

          <div>
            <h5 className="text-white text-3xl md:text-5xl font-bold">
              eCommerce
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
