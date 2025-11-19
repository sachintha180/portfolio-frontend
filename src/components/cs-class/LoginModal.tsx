import Seperator from "@/components/ui/seperator";

export default function LoginModal() {
  return (
    <div className="max-w-md flex-1 mx-auto flex flex-col gap-5">
      {/* Header */}
      <h2 className="text-secondary text-2xl text-center lg:text-left">
        login to your account
      </h2>

      {/* Seperator */}
      <Seperator />

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-link font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
            required
            autoComplete="email"
            placeholder="Enter your email address"
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-link font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-link"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-link text-white rounded px-3 py-2 font-semibold hover:bg-link/80 cursor-pointer transition duration-150"
        >
          Login
        </button>
      </form>
    </div>
  );
}
