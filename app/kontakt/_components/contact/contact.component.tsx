import { ContactForm } from "@/shared/components";

export const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Masz Pytania?
            </h2>
          </div>

          <div>
            <p>
              Nie zwlekaj, dołącz do nas i odkryj, jak pływanie może być nie
              tylko umiejętnością, lecz także źródłem radości i satysfakcji.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <h6 className="text-lg font-semibold">Zadzwoń</h6>
              </div>

              <div>
                <p>+48 724 652 213</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h6 className="text-lg font-semibold">Lub Napisz</h6>
              </div>

              <div className="flex flex-col gap-4">
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <ContactForm />
      </div>
    </div>
  );
};
