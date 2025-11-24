import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { USER_TYPES } from "@/lib/cs-class/constants";

const RegisterFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.email("Please enter a valid email address"),
  password: z.string().trim().min(1, "Password is required"),
  userType: z.enum(Object.keys(USER_TYPES) as [string, ...string[]]),
});
type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

export default function RegisterModal() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: Object.keys(USER_TYPES)[0] as keyof typeof USER_TYPES,
    },
  });

  const {
    register,
    isLoading: isRegistering,
    error: registerError,
  } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormValues) => {
    const success = await register({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      type: data.userType as keyof typeof USER_TYPES,
    });
    if (success) {
      form.reset();
      navigate("/cs-class");
    }
  };

  return (
    <div className="mx-auto mt-3 flex w-full flex-1 flex-col gap-5 sm:max-w-md">
      {/* Header */}
      <h2 className="text-center text-2xl lg:text-left">create your account</h2>

      {/* Register Error (API errors only) */}
      {registerError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {registerError}
        </div>
      )}

      {/* Form */}
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
            {...form.register("firstName")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.firstName
                ? "border-red-500"
                : "border-gray-300"
            }`}
            autoComplete="given-name"
            placeholder="Enter your first name"
            disabled={isRegistering}
          />
          {form.formState.errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.firstName.message}
            </p>
          )}
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
            {...form.register("lastName")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.lastName
                ? "border-red-500"
                : "border-gray-300"
            }`}
            autoComplete="family-name"
            placeholder="Enter your last name"
            disabled={isRegistering}
          />
          {form.formState.errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.lastName.message}
            </p>
          )}
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
            {...form.register("email")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.email ? "border-red-500" : "border-gray-300"
            }`}
            autoComplete="email"
            placeholder="Enter your email address"
            disabled={isRegistering}
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
            type="password"
            id="password"
            {...form.register("password")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
            autoComplete="new-password"
            placeholder="Enter your password"
            disabled={isRegistering}
          />
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
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
            {...form.register("userType")}
            className={`text-secondary focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.userType
                ? "border-red-500"
                : "border-gray-300"
            }`}
            disabled={isRegistering}
          >
            {Object.keys(USER_TYPES).map((type) => (
              <option key={type} value={type}>
                {USER_TYPES[type as keyof typeof USER_TYPES]}
              </option>
            ))}
          </select>
          {form.formState.errors.userType && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.userType.message}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={isRegistering}
          className="bg-link hover:bg-link/80 disabled:bg-link/50 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150 disabled:cursor-not-allowed"
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
