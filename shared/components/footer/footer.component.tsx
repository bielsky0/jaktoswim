import { Logo } from "@/shared/components";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-32">
      <div className="flex flex-col md:flex-row w-full items-center gap-16 justify-between">
        <div>
          <Logo variant="white" className="w-[200px]" />
        </div>

        <div className="flex w-full justify-center ">
          <div className="flex flex-col px-4  sm:flex-row w-full justify-center gap-8 md:justify-between max-w-4xl">
            <div className="flex flex-col gap-2">
              <div className="mb-4">
                <h4 className="text-white text-lg font-bold">Eskploruj</h4>
              </div>

              <div>
                <Link className="text-white" href="/o-nas">
                  O Nas
                </Link>
              </div>

              <div>
                <Link className="text-white" href="/blog">
                  Blog
                </Link>
              </div>

              <div>
                <Link className="text-white" href="/zajecia">
                  Zajęcia
                </Link>
              </div>

              <div>
                <Link className="text-white" href="/galeria">
                  Galeria
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="mb-4">
                <h4 className="text-white text-lg font-bold">
                  Bądźmy w Kontakcie
                </h4>
              </div>

              <div>
                <h6 className="text-white">+48 724 652 213</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="mb-4">
                <h4 className="text-white text-lg font-bold">Zaobserwuj Nas</h4>
              </div>

              <div>
                <Link
                  className="text-white"
                  href="https://instagram.com/jaktoswim"
                >
                  <div className="flex gap-2 items-center">
                    <FaInstagram /> <span>Instagram</span>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  className="text-white"
                  href="https://facebook.com/jaktoswim"
                >
                  <div className="flex gap-2 items-center">
                    <FaFacebook /> <span>Facebook</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
        <div>
          <h6 className="text-white text-sm">
            {new Date().getFullYear()} JakToSwim. Wszystkie Prawa Zastrzeżone
          </h6>
        </div>

        <div className="flex gap-8">
          <div>
            <h6 className="text-white  text-sm">Polityka Prywatności</h6>
          </div>
          <div>
            <h6 className="text-white  text-sm">Zasady Użycia</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
