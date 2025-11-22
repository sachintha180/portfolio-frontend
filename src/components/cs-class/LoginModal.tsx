import Seperator from "@/components/ui/seperator";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import UnderliningLink from "../ui/underlining-link";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading: isLoggingIn, error: loginError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      setEmail("");
      setPassword("");
      navigate("/cs-class");
    }
  };

  return (
    <div className="mx-auto flex w-full flex-1 flex-col gap-5 sm:max-w-md">
      {/* Header */}
      <h2 className="text-secondary text-center text-2xl lg:text-left">
        login to your account
      </h2>

      {/* Seperator */}
      <Seperator />

      {/* Login Error */}
      {loginError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {loginError}
        </div>
      )}

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-link hover:bg-link/80 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150"
        >
          {isLoggingIn ? (
            <div className="flex items-center justify-center gap-2">
              <span>Logging in</span>
              <FiLoader className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Register Link */}
      <div className="text-muted flex flex-row items-center justify-center gap-1 text-sm">
        <span>Don't have an account? </span>
        <UnderliningLink
          href="/cs-class/register"
          variant="link"
          className="self-center"
        >
          <span>Register here</span>
        </UnderliningLink>
      </div>
    </div>
  );
}
