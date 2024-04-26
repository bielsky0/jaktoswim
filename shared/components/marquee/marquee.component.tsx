export const Marquee = () => {
  return (
    <div className="pb-16">
      <div className="overflow-hidden py-8 my-2 bg-white max-w-full ">
        <div className=" flex gap-8 flex-nowrap animate-slide w-max">
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>

          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
        </div>
      </div>

      <div className="overflow-hidden py-8 my-2 bg-white max-w-full ">
        <div className=" flex gap-8 flex-nowrap animate-slideReverse w-max">
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>

          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
          <span className="text-8xl">Popływajmy razem 🏊 🐳 🌊</span>
        </div>
      </div>
    </div>
  );
};
