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
      navigate("/cs-class/dashboard");
    }
  };

  return (
    <div className="w-full sm:max-w-md flex-1 mx-auto flex flex-col gap-5">
      {/* Header */}
      <h2 className="text-secondary text-2xl text-center lg:text-left">
        login to your account
      </h2>

      {/* Seperator */}
      <Seperator />

      {/* Login Error */}
      {loginError && (
        <div className="bg-red-500 text-white p-2 text-center">
          {loginError}
        </div>
      )}

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-link text-white px-3 py-2 font-semibold hover:bg-link/80 cursor-pointer transition duration-150"
        >
          {isLoggingIn ? (
            <div className="flex gap-2 items-center justify-center">
              <span>Logging in</span>
              <FiLoader className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Register Link */}
      <div className="flex flex-row gap-1 items-center justify-center text-sm text-muted">
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
