import Image from "next/image";
import heroImgSrc from "@/public/featuredHero.png";
import { Button } from "@/shared/components";

export const FeaturedCoach = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <div className="flex w-full justify-start">
        <Image
          src={heroImgSrc}
          className="w-full max-w-96 max-h-[456px]"
          alt="dasd"
        />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold">
              Odkryj Pełne Spektrum Umiejętności z Profesjonalnym Trenerem!
            </h2>
          </div>

          <div>
            <p className="text-lg">
              Spotkaj naszego instruktora pływania, eksperta w dziedzinie, który
              zanurza się w świecie wody od najwcześniejszych lat. Jego pasja
              rozkwitła, trenując wyczynowo w renomowanym klubie pływackim i
              rywalizując na mistrzostwach kraju. Jego doświadczenie przekłada
              się na indywidualne podejście, zarówno do dzieci, jak i dorosłych,
              wzbudzając w nich nie tylko umiejętności pływania, ale również
              poczucie pewności siebie i radość z każdego zanurzenia. Zaufaj
              ekspertowi, który nie tylko przekazuje umiejętności, ale także
              buduje trwałą miłość do wody i kształtuje wartości takie jak
              determinacja, zaufanie i radość z osiąganych sukcesów. Z naszym
              instruktorem, każdy basen staje się areną pełną nauki, pasji i
              wzrastającej pewności siebie.
            </p>
          </div>
          <div className="pt-8">
            <Button>Zapisz Się</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
