import UtensilsSet from "../../components/UtensilsSet";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Alma Le - Набор профессиональной посуды премиум класса",
  description:
    "Откройте для себя набор посуды Alma Le. Кастрюли и сковородки с внутренним покрытием из нержавеющей стали и внешним из алюминия и меди.",
  keywords:
    "AlmaLe, посуда, набор посуды, кастрюли, сковородки, сотейники, нержавеющая сталь, алюминий, медь, кухня",
  // robots: "index, follow",
};

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <UtensilsSet lang={lang} t={t} />;
}
