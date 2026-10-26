import AnimatedLetters from "./common/AnimatedLetters";

const Header = ({ t }) => {
  return (
    <div className="relative w-full z-0 overflow-hidden">
      <div className="hero-row relative w-full flex flex-col sm:flex-row">
        <picture className="hero-desktop-photo pointer-events-none absolute inset-0 -z-10 sm:rtl:-scale-x-100">
          <source media="(min-width: 640px)" srcSet="/img/front.webp" />
          <img
            src="/img/main.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover sm:object-contain sm:object-right"
          />
        </picture>
        <img src="/img/main.webp" alt="" className="hero-mobile-photo" />
        <div className="hero-spacer bg-[url('/img/Layer6.svg')] bg-contain bg-no-repeat px-12 py-12 sm:hidden -translate-y-16">
          .
        </div>
        <div className="w-full">
          <div className="hero-shift relative w-full h-full translate-y-56 sm:translate-y-0">
            <div
              aria-hidden
              className="hero-shape pointer-events-none absolute inset-0 bg-no-repeat bg-[url('/img/Layer5.svg')] bg-cover sm:bg-[url('/img/Layer14.svg')] sm:bg-contain sm:rtl:-scale-x-100"
            />
            <div className="hero-copy relative me-auto w-full min-w-0 sm:w-[400px] md:w-1/2 sm:bg-transparent">
              <div className="flex w-full min-w-0 flex-col text-white px-10 py-[44px] sm:py-[44px] md:py-[85px] lg:py-[130px] lg:ps-[70px] xl:ps-[180px] xl:py-[130px]">
                <AnimatedLetters
                  text={t.head.headh1}
                  elemClass={"font-bold text-xl"}
                />

                <p className="pt-3 text-sm">{t.head.headp}</p>
                <div className="mt-10">
                  <a
                    href="#production"
                    className="bg-gray-header rounded-md text-black text-sm font-bold py-2 px-5 hover:bg-green hover:text-white hover:border hover:border-white"
                  >
                    {t.head.headbutton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 lg:w-[250px] h-full flex flex-row pt-0 md:pt-20 xl:pt-32">
          <div className="w-full h-full bg-no-repeat bg-[url('/img/Layer15.svg')] bg-contain rtl:-scale-x-100">
            <div className="py-[100px] md:py-[150px] lg:py-[210px] xl:py-[220px]">
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
