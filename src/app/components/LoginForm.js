"use client";

import { useActionState } from "react";
import { SignIn } from "../actions/auth";

export default function LoginForm({ t, lang }) {
  const [state, action, pending] = useActionState(SignIn, lang, undefined);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray">
          {t.signin.email}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={t.signin.email}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
        />
      </div>
      <div className="px-4 py-1 text-red">
        {state?.errors !== undefined ? state.errors.email : ""}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray"
        >
          {t.signin.password}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder={t.signin.password}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:ring-indigo-500 focus:border-green sm:text-sm"
        />
      </div>
      <div className="px-4 py-1 text-red">
        {state?.errors !== undefined ? state.errors.password : ""}
        {state?.error?.message}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-light text-white font-medium rounded-md hover:bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
      >
        {t.signin.head}
      </button>
    </form>
  );
}
