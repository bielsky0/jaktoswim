import { Button } from "@/shared/components";

export const ContactForm = () => {
  return (
    <div className="mx-auto w-full max-w-[550px]">
      <form method="POST">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Imię
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Imię"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Adress Emaill
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="przykład@domena.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Wiadomość
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            placeholder="Napisz swoją wiadomość"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <Button>Wyślij</Button>
        </div>
      </form>
    </div>
  );
};
