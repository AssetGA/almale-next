// /app/login/page.tsx
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import LoginForm from "../../components/LoginForm";

export default async function Login({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {t.signin.head} {/* Локализованное название бренда */}
        </h1>
        <LoginForm t={t} />
        <p className="text-sm text-gray-600 mt-4 text-center">
          {t.signin.p}{" "}
          <Link href={`/${lang}/signup`} className="text-green hover:underline">
            {t.signin.link}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
