import React from "react";
import Basket from "../../components/Basket";
import { getDictionary } from "../dictionaries";
import { verifySession } from "../../lib/dai";
import { redirect } from "next/navigation";

const Page = async ({ params }) => {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const session = await verifySession();
  const userRole = session.role; // Assuming 'role' is part of the session object

  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user" && session.userId) {
    return <Basket lang={lang} t={t} />;
  } else {
    redirect("/login");
  }
};

export default Page;
