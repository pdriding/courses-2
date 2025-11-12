"use server";

import { redirect } from "next/navigation";
import { hashUserPassword } from "@/lib/hash.js";
import { createUser } from "@/lib/user.js";
import { createAuthSession } from "@/lib/auth";
import { verifyPassword } from "@/lib/hash.js";
import { getUserByEmail } from "@/lib/user.js";
import { destroyAuthSession } from "@/lib/auth.js";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (!password || password.trim().length < 7) {
    errors.password = "Password must be at least 7 characters long.";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.email = "A user with this email already exists.";
      return { errors };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    const errors = {};
    errors.email = "No user found with this email address.";
    return { errors };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    const errors = {};
    errors.password = "Incorrect password.";
    return { errors };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logout() {
  // Implementation for logging out the user
  // This could involve clearing cookies or session data
  await destroyAuthSession();
  redirect("/");
}
