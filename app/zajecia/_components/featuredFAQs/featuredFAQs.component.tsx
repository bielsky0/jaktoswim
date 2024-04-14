import { Button } from "@/shared/components";

export const FeaturedFAQs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-16">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-black">
              Często zadawane pytania
            </h2>
          </div>

          <div className="">
            <Button>Bądźmy w Kontakcie</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-8 gap-4">
        <div className="flex items-center justify-between w-full  bg-[#F4F4F4] rounded-2xl px-4">
          <div className="py-4">
            <h5 className="font-medium">
              Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?
            </h5>
          </div>

          <div>
            <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full  bg-[#F4F4F4] rounded-2xl px-4">
          <div className="py-4">
            <h5 className="font-medium">
              Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?
            </h5>
          </div>

          <div>
            <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full  bg-[#F4F4F4] rounded-2xl px-4">
          <div className="py-4">
            <h5 className="font-medium">
              Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?
            </h5>
          </div>

          <div>
            <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full  bg-[#F4F4F4] rounded-2xl px-4">
          <div className="py-4">
            <h5 className="font-medium">
              Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?
            </h5>
          </div>

          <div>
            <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full  bg-[#F4F4F4] rounded-2xl px-4">
          <div className="py-4">
            <h5 className="font-medium">
              Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?
            </h5>
          </div>

          <div>
            <div className="rounded-full bg-[#229ED9] h-8 w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
