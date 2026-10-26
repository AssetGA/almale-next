import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, pick, recipeUi, recipes, regions } from "../lib/recipes";

const CHANNEL = "https://www.youtube.com/@alma_le";

export function RecipeIndex({ lang }) {
  const ui = recipeUi[lang] || recipeUi.ru;

  return (
    <article className="pb-20">
      <header className="relative overflow-hidden bg-green text-white">
        <img
          src="/img/carousel/set-1.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative px-5 py-16 sm:px-10 lg:px-24">
          <h1
            className="max-w-3xl text-4xl font-bold leading-tight"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {ui.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6">{ui.lead}</p>
        </div>
      </header>

      <div className="px-5 pt-10 sm:px-10 lg:px-24">
        {regions.map((region) => {
          const list = recipes.filter((item) => item.region === region.id);
          return (
            <section key={region.id} className="mb-12">
              <h2
                className={`inline-block rounded-full px-5 py-2 text-lg font-bold ${region.tone}`}
              >
                {pick(region.name, lang)}
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {list.map((recipe) => (
                  <Link
                    key={recipe.slug}
                    href={`/${lang}/recipes/${recipe.slug}`}
                    className="overflow-hidden rounded-2xl bg-gray-header shadow-sm hover:bg-gray-light"
                  >
                    <img
                      src={recipe.image}
                      alt={pick(recipe.title, lang)}
                      className="h-52 w-full object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xs font-bold text-green-light">
                        {pick(recipe.vessel, lang)} · {recipe.minutes}′
                      </p>
                      <h3 className="mt-2 text-xl font-bold">
                        {pick(recipe.title, lang)}
                      </h3>
                      <p className="mt-2 text-sm leading-6">
                        {pick(recipe.lead, lang)}
                      </p>
                      <span className="mt-4 inline-block text-sm font-bold text-green underline">
                        {ui.open}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-green underline"
        >
          {ui.channel}
        </a>
      </div>
    </article>
  );
}

export function RecipeArticle({ lang, slug }) {
  const recipe = getRecipe(slug);
  if (!recipe) notFound();
  const ui = recipeUi[lang] || recipeUi.ru;
  const region = regions.find((item) => item.id === recipe.region);

  return (
    <article className="px-5 pb-20 pt-8 sm:px-10 lg:px-24">
      <Link href={`/${lang}/recipes`} className="text-sm font-bold text-green underline">
        {ui.back}
      </Link>
      <div className="mt-4 overflow-hidden rounded-3xl bg-green text-white">
        <img
          src={recipe.image}
          alt={pick(recipe.title, lang)}
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="px-6 py-8 sm:px-10">
          <p className={`inline-block rounded-full px-4 py-1 text-sm font-bold ${region.tone}`}>
            {pick(region.name, lang)}
          </p>
          <h1
            className="mt-4 text-4xl font-bold"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {pick(recipe.title, lang)}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6">{pick(recipe.lead, lang)}</p>
          <p className="mt-4 text-sm font-bold">
            {pick(recipe.vessel, lang)} · {recipe.minutes}′ · {ui.serves}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl bg-yellow p-6 text-black">
          <h2 className="text-xl font-bold">{ui.ingredients}</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {pick(recipe.ingredients, lang).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-gray-header p-6">
          <h2 className="text-xl font-bold">{ui.steps}</h2>
          <ol className="mt-4 space-y-3 text-sm leading-6">
            {pick(recipe.steps, lang).map((item, index) => (
              <li key={item}>
                <span className="me-2 font-bold text-green">{index + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={`/${lang}/product`}
          className="rounded-full bg-green px-5 py-3 text-sm font-bold text-white hover:bg-green-light"
        >
          {ui.catalog}
        </Link>
        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-orange px-5 py-3 text-sm font-bold text-black"
        >
          {ui.channel}
        </a>
      </div>
    </article>
  );
}
