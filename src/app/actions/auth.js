"use server";

import { SigninFormSchema, SignupFormSchema } from "../../app/lib/definitions";
import Users from "../../models/User"; // Your Mongoose User model
import { createSession, deleteSession } from "../../app/lib/session"; // Assuming you have session logic
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { connectToDatabase } from "../lib/mongodb";
import Session from "../../models/Session";

export async function SignUp(state, formData) {
  // Validate form fields
  await connectToDatabase();

  const validatedFields = SignupFormSchema.safeParse({
    mobile: formData.get("mobile"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { mobile, name, email, password } = validatedFields.data;

  const existingUser = await Users.findOne({ email });

  if (existingUser) {
    return {
      error: {
        message: "EMAIL_EXIST",
        code: 400,
      },
    };
  }

  // Call the provider or db to create a user...

  // 2. Prepare data for insertion into database

  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Library API

  const user = await Users.create({
    mobile,
    name,
    email,
    password: hashedPassword,
  });

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  if (user) {
    // 4. Create user session

    await createSession(user._id);
    // 5. Redirect user

    redirect("/ru/basket");
  }
}

export async function SignIn(state, formData) {
  // Validate form fields
  await connectToDatabase();

  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;
  console.log;
  const existingUser = await Users.findOne({ email });
  console.log("existinuser", existingUser);
  if (!existingUser) {
    return {
      error: {
        message: "EMAIL_EXIST",
        code: 400,
      },
    };
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return {
      error: {
        message: "Invalid email or password.",
        code: 401,
      },
    };
  }

  const sessionFind = await Session.findOne({ userId: existingUser._id });
  console.log("sessionfind", sessionFind);
  if (sessionFind) {
    await sessionFind.deleteOne();
  }
  // If the user exists and the password is valid, create a session
  await createSession(existingUser._id);

  // Redirect the user to the desired page
  redirect("/ru/basket");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
