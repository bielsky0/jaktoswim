"use client";
import { Button, BlogPreview, Slider } from "@/shared/components";

const items = [
  {
    id: "1",
    title:
      "Nauka Pływania a Rozwój Emocjonalny Dzieci – Jak Wpływa na Samopoczucie",
    content:
      "Nauka pływania dla dzieci to nie tylko zdobywanie umiejętności fizycznych, ale także kluczowy element rozwoju emocjonalnego. Woda stwarza niepowtarzalne środowisko, które wpływa na samopoczucie i rozwój psychiczny najmłodszych. W tym artykule przyjrzymy się, jakie korzyści emocjonalne niesie za sobą nauka pływania dla dzieci.",
  },
  {
    id: "2",
    title:
      "Nauka Pływania a Rozwój Emocjonalny Dzieci – Jak Wpływa na Samopoczucie",
    content:
      "Nauka pływania dla dzieci to nie tylko zdobywanie umiejętności fizycznych, ale także kluczowy element rozwoju emocjonalnego. Woda stwarza niepowtarzalne środowisko, które wpływa na samopoczucie i rozwój psychiczny najmłodszych. W tym artykule przyjrzymy się, jakie korzyści emocjonalne niesie za sobą nauka pływania dla dzieci.",
  },

  {
    id: "3",
    title:
      "Nauka Pływania a Rozwój Emocjonalny Dzieci – Jak Wpływa na Samopoczucie",
    content:
      "Nauka pływania dla dzieci to nie tylko zdobywanie umiejętności fizycznych, ale także kluczowy element rozwoju emocjonalnego. Woda stwarza niepowtarzalne środowisko, które wpływa na samopoczucie i rozwój psychiczny najmłodszych. W tym artykule przyjrzymy się, jakie korzyści emocjonalne niesie za sobą nauka pływania dla dzieci.",
  },

  {
    id: "4",
    title:
      "Nauka Pływania a Rozwój Emocjonalny Dzieci – Jak Wpływa na Samopoczucie",
    content:
      "Nauka pływania dla dzieci to nie tylko zdobywanie umiejętności fizycznych, ale także kluczowy element rozwoju emocjonalnego. Woda stwarza niepowtarzalne środowisko, które wpływa na samopoczucie i rozwój psychiczny najmłodszych. W tym artykule przyjrzymy się, jakie korzyści emocjonalne niesie za sobą nauka pływania dla dzieci.",
  },
];

export const FeaturedBlog = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
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

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={items}
          renderItem={() => <BlogPreview />}
          keyExtractor={({ id }) => id}
        />
      </div>
    </div>
  );
};
