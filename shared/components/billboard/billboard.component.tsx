import { Button } from "@/shared/components";

export const Billboard = () => {
  return (
    <div>
      <div className="bg-gray-300 w-full h-[643px] rounded-2xl relative">
        <div className="absolute ">
          <div className="flex flex-col bg-white rounded-br-2xl  py-4 p-2 md:p-4 lg:p-8 max-w-xs md:max-w-md lg:max-w-lg items-center gap-4 relative w-fit">
            <div className="absolute   top-0 h-[25px] w-[50px] right-[-50px] rounded-tl-2xl shadow-[-1rem_0_0_0_rgba(255,255,255,1)] bg-transparent"></div>
            <div className="absolute  left-0 bottom-[-50px] bg-red-300 h-[50px] w-[25px] rounded-tl-2xl shadow-[0_-1rem_0_0_rgba(255,255,255,1)] bg-transparent"></div>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span>
                  A web design and
                  <br />
                </span>
                <span>
                  branding agency
                  <br />
                </span>
                <span>
                  in Manchester
                  <br />
                </span>
              </h1>
            </div>

            <div className="flex justify-start w-full items-center gap-4">
              <Button>View our work</Button>
              <h4 className="text-sm cursor-pointer">Zacznij Projekt</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
