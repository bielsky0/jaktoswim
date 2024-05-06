import { Accordion, Button, TransitionLink } from "@/shared/components";
import { FAQsSection } from "@/shared/libs/sanity/types";
import { ROUTES } from "@/shared/utils";

export interface FeaturedFAQSProps {
  faqs: FAQsSection;
}

export const FeaturedFAQs = ({ faqs }: FeaturedFAQSProps) => {
  const { button_cta, faqs: faq } = faqs;

  return (
    <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="ibmPlex text-4xl font-semibold text-black">
              <span>Masz pytanie?</span>
              <br />
              <span>My mamy odpowiedź!</span>
            </h2>
          </div>

          <TransitionLink href={ROUTES.contact}>
            <Button>{button_cta}</Button>
          </TransitionLink>
        </div>
      </div>

      <div className="flex flex-col w-full py-8 gap-4">
        {faq.map(({ _key, question, answer }) => (
          <Accordion key={_key} title={question} content={answer} />
        ))}
      </div>
    </div>
  );
};
