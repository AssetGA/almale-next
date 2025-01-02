// /app/signup/page.tsx
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import SignupForm from "../../components/SignupForm";

export default async function Signup({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {t.signup.head} {/* Локализованное название бренда */}
        </h1>
        <SignupForm t={t} lang={lang} />
        <p className="text-sm text-gray-600 mt-4 text-center">
          {t.signup.p + " "}
          <Link
            href={`/${lang}/login`}
            className="text-indigo-600 hover:underline"
          >
            {t.signup.link}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
