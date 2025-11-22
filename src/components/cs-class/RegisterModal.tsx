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
    <div className="w-full sm:max-w-md flex-1 mx-auto flex flex-col gap-5">
      {/* Header */}
      <h2 className="text-secondary text-2xl text-center lg:text-left">
        create your account
      </h2>

      {/* Seperator */}
      <Seperator />

      {/* Register Error */}
      {registerError && (
        <div className="bg-red-500 text-white p-2 text-center">
          {registerError}
        </div>
      )}

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* First Name Input */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-secondary font-medium mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
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
            className="block text-secondary font-medium mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
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
            className="block text-secondary font-medium mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
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
            className="block text-secondary font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
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
            className="block text-secondary font-medium mb-1"
          >
            Account Type
          </label>
          <select
            id="userType"
            name="userType"
            className="w-full border text-secondary border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
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
          className="mt-2 w-full bg-link text-white px-3 py-2 font-semibold hover:bg-link/80 cursor-pointer transition duration-150"
        >
          {isRegistering ? (
            <div className="flex gap-2 items-center justify-center">
              <span>Creating account</span>
              <FiLoader className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>

      {/* Login Link */}
      <div className="flex flex-row gap-1 items-center justify-center text-sm text-muted">
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
