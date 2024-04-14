import { ProjectPreview, SectionTitle } from "@/shared/components";

export const FeaturedWork = () => {
  return (
    <div>
      <div className="flex gap-0 flex-wrap">
        <div className="md:pr-8 w-full md:w-1/2">
          <div className="w-full mb-16">
            <SectionTitle
              subtitle="Nasze Pracę"
              title="Rzuć okiem na nasze projekty"
            />
          </div>
          <div className="w-full mb-16">
            <ProjectPreview />
          </div>

          <div className="w-full mb-16">
            <ProjectPreview />
          </div>
        </div>
        <div className="md:pl-8 w-full md:w-1/2">
          <div className="w-full mb-16">
            <ProjectPreview />
          </div>

          <div className="w-full mb-16">
            <ProjectPreview />
          </div>
        </div>
      </div>
    </div>
  );
};
