export const BlogPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="lg:w-[500px] bg-gray-300 rounded-2xl w-[300px] h-[150px] lg:h-[250px]"></div>
      <div>
        <h3 className="font-bold text-2xl">Blog Title</h3>
      </div>
      <div>Blog description</div>
    </div>
  );
};
