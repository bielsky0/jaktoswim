import { BlogPreview } from "../blogPreview";

export const FeaturedBlog = () => {
  return (
    <div className="flex gap-16 lg:gap-4 lg:flex-row flex-col">
      <div className="w-full max-w-2xl w-fit">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5>Nasz Blog</h5>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-5xl">
              Najświeższe informacje z naszego bloga
            </h2>
          </div>
        </div>
      </div>

      <div>
        <BlogPreview />
      </div>
    </div>
  );
};
