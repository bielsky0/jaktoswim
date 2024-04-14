import { Logo } from "@/shared/components";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-32">
      <div className="flex w-full justify-between">
        <div>
          <Logo variant="white" className="w-[200px]" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="mb-4">
            <h4 className="text-white text-lg font-bold">Eskploruj</h4>
          </div>

          <div>
            <h6 className="text-white">O Nas</h6>
          </div>

          <div>
            <h6 className="text-white">Blog</h6>
          </div>

          <div>
            <h6 className="text-white">Usługi</h6>
          </div>

          <div>
            <h6 className="text-white">FAQs</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-4">
            <h4 className="text-white text-lg font-bold">Bądźmy w Kontakcie</h4>
          </div>

          <div>
            <h6 className="text-white">Kontakt</h6>
          </div>

          <div>
            <h6 className="text-white">Wycena</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-4">
            <h4 className="text-white text-lg font-bold">Obseruj Nas</h4>
          </div>

          <div>
            <h6 className="text-white">Instagram</h6>
          </div>

          <div>
            <h6 className="text-white">Facebook</h6>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div>
          <h6 className="text-white">
            2024 Simply Amazing. All Rights reserved
          </h6>
        </div>

        <div className="flex gap-8">
          <div>
            <h6 className="text-white">Privacy Policy</h6>
          </div>
          <div>
            <h6 className="text-white">Terms of Service</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
