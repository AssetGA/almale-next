import SantaLetterButton from "./SantaLetterButton";
import WizardLetter from "./WizardLetter";

const Letters = ({ t }) => {
  return (
    <div id="contact" className="w-full">
      <div className="lg:px-40 md:px-20 px-5 sm:py-10 py-5 bg-white">
        <h2
          className="text-2xl font-bold mb-6 text-black sm:text-black text-center"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          Письмо
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <SantaLetterButton t={t} />
          <WizardLetter t={t} />
        </div>
      </div>
    </div>
  );
};

export default Letters;
