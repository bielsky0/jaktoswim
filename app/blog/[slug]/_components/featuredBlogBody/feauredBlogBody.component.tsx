import { ContentRenderer } from "@/shared/components";
import { BlogUI } from "@/shared/libs/strapiClient/strapiClient.types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export interface FeaturedBlogProps {
  blogUi: BlogUI;
}

export const FeaturedBlogBody = ({
  blogUi: { content },
}: FeaturedBlogProps) => {
  return (
    <div className="w-full py-0">
      <div className="px-2 | sm:px-6 | xl:px-12 | 2xl:px-20 | 3xl:px-40 | 4xl:px-60">
        <div className="w-full flex flex-col items-start | lg:flex-row lg:items-stretch">
          <div className="px-2 | lg:px-3 | xl:px-4 w-full mb-10 | lg:mb-0 lg:max-w-sm | 4xl:max-w-lg">
            5 minut czytania
          </div>

          <div className="px-2 | lg:px-3 | xl:px-4 w-full | lg:w-10/16 | 4xl:w-9/16 || js-content">
            <div className="flex w-full pb-3">
              <div className="flex font-light bg-gray-50 rounded-full py-1 px-4 ">
                Napisane 07 Marca 2024
              </div>
            </div>
            <div className="w-full flex flex-col ">
              <ContentRenderer content={content} />
            </div>
          </div>

          <div className="px-2 | lg:px-3 | xl:px-4 flex-shrink-0 w-auto hidden |  lg:inline-block">
            Udostępnij
          </div>
        </div>
      </div>
    </div>
  );
};
