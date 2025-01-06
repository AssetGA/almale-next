"use client";

import { useActionState } from "react";
import { SignUp } from "../actions/auth";

export default function SignupForm({ t, lang }) {
  const [state, action, pending] = useActionState(SignUp, lang, undefined);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray">
          {t.signup.name}
        </label>
        <div className="text-red">
          {state?.errors?.name && <p>{state.errors.name}</p>}
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={t.signup.name}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          autoComplete="new-password"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray">
          {t.signup.phone}
        </label>
        {state?.errors?.phone && <p>{state.errors.phone}</p>}
        <input
          type="text"
          name="mobile"
          id="mobile"
          placeholder={t.signup.phone}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:ring-indigo-500 focus:border-green sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray">
          {t.signup.email}
        </label>
        <div className="text-red">
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={t.signup.email}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:ring-indigo-500 focus:border-green sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray"
        >
          {t.signup.password}
        </label>
        <div className="text-red">
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder={t.signup.password}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:ring-green focus:border-green sm:text-sm"
        />
      </div>
      <div className="text-red">
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-red">{state?.error?.message}</div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-light text-white font-medium rounded-md hover:bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
      >
        {t.signup.head}
      </button>
    </form>
  );
}
