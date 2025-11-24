import { useSyllabus } from "@/contexts/SyllabusContext";
import { FiLoader } from "react-icons/fi";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUBJECT_CODES, SYLLABUS_LEVELS } from "@/lib/cs-class/constants";
import { convertDateToISOString } from "@/lib/cs-class/utils";
import { useState } from "react";

const SyllabusCreateFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  description: z.string().trim().min(1, "Description is required"),
  code: z.enum(SUBJECT_CODES),
  level: z.enum(Object.keys(SYLLABUS_LEVELS) as [string, ...string[]]),
  examination_date: z.date({
    message: "Please enter a valid date",
  }),
});
type SyllabusCreateFormValues = z.infer<typeof SyllabusCreateFormSchema>;

export default function SyllabusCreateModal() {
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);

  const form = useForm<SyllabusCreateFormValues>({
    resolver: zodResolver(SyllabusCreateFormSchema),
    defaultValues: {
      name: "",
      description: "",
      code: SUBJECT_CODES[0],
      level: Object.keys(SYLLABUS_LEVELS)[0] as keyof typeof SYLLABUS_LEVELS,
      examination_date: new Date(),
    },
  });

  const {
    createSyllabus,
    isLoading: isCreating,
    error: createError,
  } = useSyllabus();

  const onSubmit = async (data: SyllabusCreateFormValues) => {
    setCreateSuccess(null);
    const syllabus = await createSyllabus({
      name: data.name,
      description: data.description,
      code: data.code,
      level: data.level as keyof typeof SYLLABUS_LEVELS,
      examination_date: convertDateToISOString(data.examination_date),
    });
    if (syllabus) {
      form.reset();
      setCreateSuccess("Syllabus created successfully");
    }
  };

  return (
    <div className="mt-5 flex w-full flex-1 flex-col gap-5">
      {/* Header */}
      <h2 className="text-center text-2xl lg:text-left">create syllabus</h2>

      {/* Create Error */}
      {createError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {createError}
        </div>
      )}

      {/* Create Success */}
      {createSuccess && (
        <div className="bg-green-500 p-2 text-center text-white">
          {createSuccess}
        </div>
      )}

      {/* Form */}
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="text-secondary mb-1 block font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...form.register("name")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter syllabus name"
            disabled={isCreating}
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="text-secondary mb-1 block font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            {...form.register("description")}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter syllabus description"
            rows={4}
            disabled={isCreating}
          />
          {form.formState.errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        {/* Subject Code Select */}
        <div>
          <label
            htmlFor="code"
            className="text-secondary mb-1 block font-medium"
          >
            Subject Code
          </label>
          <select
            id="code"
            {...form.register("code")}
            className={`text-secondary focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.code ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isCreating}
          >
            {SUBJECT_CODES.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          {form.formState.errors.code && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.code.message}
            </p>
          )}
        </div>

        {/* Level Select */}
        <div>
          <label
            htmlFor="level"
            className="text-secondary mb-1 block font-medium"
          >
            Level
          </label>
          <select
            id="level"
            {...form.register("level")}
            className={`text-secondary focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.level ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isCreating}
          >
            {Object.keys(SYLLABUS_LEVELS).map((level) => (
              <option key={level} value={level}>
                {SYLLABUS_LEVELS[level as keyof typeof SYLLABUS_LEVELS]}
              </option>
            ))}
          </select>
          {form.formState.errors.level && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.level.message}
            </p>
          )}
        </div>

        {/* Examination Date Input */}
        <div>
          <label
            htmlFor="examination_date"
            className="text-secondary mb-1 block font-medium"
          >
            Examination Date
          </label>
          <input
            type="date"
            id="examination_date"
            {...form.register("examination_date", { valueAsDate: true })}
            className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
              form.formState.errors.examination_date
                ? "border-red-500"
                : "border-gray-300"
            }`}
            disabled={isCreating}
          />
          {form.formState.errors.examination_date && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.examination_date.message}
            </p>
          )}
        </div>

        {/* Create Button */}
        <button
          type="submit"
          disabled={isCreating}
          className="bg-link hover:bg-link/80 disabled:bg-link/50 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150 disabled:cursor-not-allowed"
        >
          {isCreating ? (
            <div className="flex items-center justify-center gap-2">
              <span>Creating syllabus</span>
              <FiLoader className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            "Create Syllabus"
          )}
        </button>
      </form>
    </div>
  );
}
