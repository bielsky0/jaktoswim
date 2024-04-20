import Image from "next/image";
import aboutUs1 from "@/public/about_us-1.jpg";

export const BlogPreview = () => {
  return (
    <div className="flex flex-col w-full  mb-5">
      <div className="pb-2 w-full aspect-[16/9] relative after:content group relative block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs1}
          placeholder="blur"
          className="transform  aspect-[16/9] rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 object-cover"
          width={720}
          height={480}
        />
      </div>
      <div className="pb-3 max-w-full">
        <h3 className="font-bold text-2xl truncate">
          Nauka Pływania a Rozwój Emocjonalny Dzieci - Jak Wpływa na
          Samopoczucie
        </h3>
      </div>
      <div className="max-w-full truncate">
        <p className="text-base">
          Nauka pływania dla dzieci to nie tylko zdobywanie umiejętności
          fizycznych, ale także kluczowy element rozwoju emocjonalnego. Woda
          stwarza niepowtarzalne środowisko, które wpływa na samopoczucie i
          rozwój psychiczny najmłodszych. W tym artykule przyjrzymy się, jakie
          korzyści emocjonalne niesie za sobą nauka pływania dla dzieci.
        </p>
      </div>
    </div>
  );
};
