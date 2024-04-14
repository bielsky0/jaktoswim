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
            <h2 className="text-4xl">
              A web design agency in Manchester that cares about you and your
              brand, no matter the size or what industry your business is in.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-lg">
            Born in 2010, MadeByShape is an Award-Winning Web Design Agency
            based in Manchester specialising in Web Design, Branding, eCommerce,
            Digital Marketing and Organic SEO.
          </p>
        </div>

        <div>
          <p className="text-lg">
            Born in 2010, MadeByShape is an Award-Winning Web Design Agency
            based in Manchester specialising in Web Design, Branding, eCommerce,
            Digital Marketing and Organic SEO.
          </p>
        </div>

        <div>
          <p className="text-lg">
            Born in 2010, MadeByShape is an Award-Winning Web Design Agency
            based in Manchester specialising in Web Design, Branding, eCommerce,
            Digital Marketing and Organic SEO.
          </p>
        </div>

        <div className="pt-8">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};
