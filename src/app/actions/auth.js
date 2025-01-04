"use server";

import { SigninFormSchema, SignupFormSchema } from "../../app/lib/definitions";
import Users from "../../models/User"; // Your Mongoose User model
import { createSession, deleteSession } from "../../app/lib/session"; // Assuming you have session logic
import bcrypt from "bcryptjs";
import { connectToDatabase } from "../lib/mongodb";
import { redirect } from "next/navigation";

export async function SignUp(state, formData) {
  await connectToDatabase();
  let success = false;
  try {
    // Validate form fields

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
    console.log("exist", existingUser);
    if (existingUser) {
      return {
        error: {
          message: "EMAIL_EXIST",
          code: 400,
        },
      };
    }

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
    // Создание сессии
    await createSession(user._id);
    success = true;
    // Redirect the user to the desired page
  } catch (error) {
    console.error("Error during sign-up:", error);
    return {
      error: {
        message: "Internal Server Error",
        code: 500,
      },
    };
  } finally {
    if (success) {
      const url = `/basket`;
      console.log("url", url);
      redirect(url);
    }
  }
}

export async function SignIn(state, formData) {
  await connectToDatabase();
  let success = false;
  try {
    // Validate form fields

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

    const existingUser = await Users.findOne({ email });

    if (!existingUser) {
      return {
        error: {
          message: "EMAIL_EXIST",
          code: 400,
        },
      };
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return {
        error: {
          message: "Invalid password.",
          code: 401,
        },
      };
    }
    // If the user exists and the password is valid, create a session
    await createSession(existingUser._id);
    success = true;
    // Redirect the user to the desired page
  } catch (error) {
    console.error("Error during sign-up:", error);
    return {
      error: {
        message: "Internal Server Error",
        code: 500,
      },
    };
  } finally {
    if (success) {
      const url = `/basket`;
      redirect(url);
    }
  }
}

export async function logout() {
  deleteSession();
  redirect(`/`);
}
