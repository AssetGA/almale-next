import { cache } from "react";

const dictionaries = {
  kz: () =>
    import("../../../public/dictionaries/kz.json").then(
      (module) => module.default
    ),
  en: () =>
    import("../../../public/dictionaries/en.json").then(
      (module) => module.default
    ),
  ru: () =>
    import("../../../public/dictionaries/ru.json").then(
      (module) => module.default
    ),
  de: () =>
    import("../../../public/dictionaries/de.json").then(
      (module) => module.default
    ),
  ar: () =>
    import("../../../public/dictionaries/ar.json").then(
      (module) => module.default
    ),
};

export const getDictionary = cache(async (locale) => {
  return dictionaries[locale]();
});
