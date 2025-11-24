import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import UnderliningLink from "../ui/underlining-link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().trim().min(1, "Password is required"),
});
type LoginFormValues = z.infer<typeof LoginFormSchema>;

export default function LoginModal() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoading: isLoggingIn, error: loginError } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    const success = await login(data);
    if (success) {
      form.reset();
      navigate("/cs-class");
    }
  };

  return (
    <div className="mx-auto mt-3 flex w-full flex-1 flex-col gap-5 sm:max-w-md">
      {/* Header */}
      <h2 className="text-center text-2xl lg:text-left">
        login to your account
      </h2>

      {/* Login Error (API errors only) */}
      {loginError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {loginError}
        </div>
      )}

      {/* Form */}
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="text-secondary mb-1 block font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...form.register("email")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
            disabled={isLoggingIn}
            autoComplete="email"
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
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
            id="password"
            type="password"
            {...form.register("password")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your password"
            disabled={isLoggingIn}
            autoComplete="current-password"
          />
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoggingIn}
          className="bg-link hover:bg-link/80 disabled:bg-link/50 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150 disabled:cursor-not-allowed"
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
