import Seperator from "@/components/ui/seperator";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import type { UserType } from "@/types/api";
import UnderliningLink from "../ui/underlining-link";

export default function RegisterModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("student");

  const {
    register,
    isLoading: isRegistering,
    error: registerError,
  } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await register({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      type: userType,
    });
    if (success) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setUserType("student");
      navigate("/cs-class");
    }
  };

  return (
    <div className="mx-auto flex w-full flex-1 flex-col gap-5 sm:max-w-md">
      {/* Header */}
      <h2 className="text-secondary text-center text-2xl lg:text-left">
        create your account
      </h2>

      {/* Seperator */}
      <Seperator />

      {/* Register Error */}
      {registerError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {registerError}
        </div>
      )}

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* First Name Input */}
        <div>
          <label
            htmlFor="firstName"
            className="text-secondary mb-1 block font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="focus:ring-link w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
            required
            autoComplete="given-name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label
            htmlFor="lastName"
            className="text-secondary mb-1 block font-medium"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="focus:ring-link w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
            required
            autoComplete="family-name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="text-secondary mb-1 block font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="focus:ring-link w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="text-secondary mb-1 block font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="focus:ring-link w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
            required
            autoComplete="new-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* User Type Select */}
        <div>
          <label
            htmlFor="userType"
            className="text-secondary mb-1 block font-medium"
          >
            Account Type
          </label>
          <select
            id="userType"
            name="userType"
            className="text-secondary focus:ring-link w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
            required
            value={userType}
            onChange={(e) => setUserType(e.target.value as UserType)}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="bg-link hover:bg-link/80 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150"
        >
          {isRegistering ? (
            <div className="flex items-center justify-center gap-2">
              <span>Creating account</span>
              <FiLoader className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>

      {/* Login Link */}
      <div className="text-muted flex flex-row items-center justify-center gap-1 text-sm">
        <span>Already have an account? </span>
        <UnderliningLink
          href="/cs-class/login"
          variant="link"
          className="self-center"
        >
          <span>Login here</span>
        </UnderliningLink>
      </div>
    </div>
  );
}
