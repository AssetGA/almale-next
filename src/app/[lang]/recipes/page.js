import { getDictionary } from "../dictionaries";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return <div>recipes</div>;
}
