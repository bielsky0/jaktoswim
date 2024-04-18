import { Accordion, Button } from "@/shared/components";

export const FeaturedFAQs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-16">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-black">
              <span>Masz pytanie?</span>
              <br />
              <span>My mamy odpowiedź!</span>
            </h2>
          </div>

          <div className="">
            <Button>Bądźmy w Kontakcie</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-8 gap-4">
        <Accordion
          title="Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?"
          content="asdsada"
        />

        <Accordion
          title="Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?"
          content="asdsada"
        />

        <Accordion
          title="Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?"
          content="asdsada"
        />

        <Accordion
          title="Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?"
          content="asdsada"
        />

        <Accordion
          title="Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie Pytanie?"
          content="asdsada"
        />
      </div>
    </div>
  );
};
