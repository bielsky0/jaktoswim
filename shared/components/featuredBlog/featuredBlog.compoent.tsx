import { Button, BlogPreview } from "@/shared/components";

export const FeaturedBlog = () => {
  return (
    <div className="flex gap-16  lg:gap-32 lg:flex-row flex-col">
      <div className="w-full max-w-2xl w-fit">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">Nasz Blog</h5>
          </div>

          <div className="max-w-xl pb-3">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Najświeższe informacje, prosto z wody
            </h2>
          </div>

          <div>
            <Button>Zobacz Wszystkie Nowości</Button>
          </div>
        </div>
      </div>

      <div>
        <BlogPreview />
      </div>
    </div>
  );
};
