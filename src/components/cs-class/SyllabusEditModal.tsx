import { useSyllabus } from "@/contexts/SyllabusContext";
import { FiLoader } from "react-icons/fi";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SUBJECT_CODES, SYLLABUS_LEVELS } from "@/lib/cs-class/constants";
import { convertDateToISOString } from "@/lib/cs-class/utils";
import { useState, useEffect } from "react";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";
import NotFound from "@/components/layouts/NotFound";

const SyllabusUpdateFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  description: z.string().trim().min(1, "Description is required"),
  code: z.enum(SUBJECT_CODES),
  level: z.enum(Object.keys(SYLLABUS_LEVELS) as [string, ...string[]]),
  examination_date: z.date({
    message: "Please enter a valid date",
  }),
});
type SyllabusUpdateFormValues = z.infer<typeof SyllabusUpdateFormSchema>;

type SyllabusEditModalProps = {
  syllabusId: string;
};

export default function SyllabusEditModal({
  syllabusId,
}: SyllabusEditModalProps) {
  const [updateSuccess, setUpdateSuccess] = useState<string | null>(null);

  const {
    getSyllabus,
    syllabuses,
    updateSyllabus,
    isLoading,
    error: updateError,
  } = useSyllabus();

  // Fetch syllabus if not already in context
  useEffect(() => {
    if (!syllabuses[syllabusId]) {
      getSyllabus(syllabusId);
    }
  }, [syllabusId, syllabuses, getSyllabus]);

  // Get current syllabus
  const syllabus = syllabuses[syllabusId];

  // Show loading if fetching syllabus
  if (isLoading && !syllabus) {
    return <LoadingSkeleton className="flex-1 justify-center" />;
  }

  // Show not found if syllabus doesn't exist
  if (!syllabus) {
    return (
      <NotFound
        description="Sorry, this syllabus does not exist."
        linkHref="/cs-class"
      />
    );
  }

  const form = useForm<SyllabusUpdateFormValues>({
    resolver: zodResolver(SyllabusUpdateFormSchema),
    defaultValues: {
      name: syllabus.name,
      description: syllabus.description,
      code: syllabus.code,
      level: syllabus.level,
      examination_date: new Date(syllabus.examination_date),
    },
  });

  // Update form when syllabus ID changes (switching to different syllabus)
  // or when syllabus is first loaded
  useEffect(() => {
    if (syllabus) {
      form.reset({
        name: syllabus.name,
        description: syllabus.description,
        code: syllabus.code,
        level: syllabus.level,
        examination_date: new Date(syllabus.examination_date),
      });
    }
  }, [syllabusId, syllabus?.id, form]); // Reset when ID changes or syllabus first loads

  const onSubmit = async (data: SyllabusUpdateFormValues) => {
    setUpdateSuccess(null);
    const updatedSyllabus = await updateSyllabus(syllabusId, {
      name: data.name,
      description: data.description,
      code: data.code,
      level: data.level as keyof typeof SYLLABUS_LEVELS,
      examination_date: convertDateToISOString(data.examination_date),
    });
    if (updatedSyllabus) {
      setUpdateSuccess("Syllabus updated successfully");
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col gap-5">
      {/* Header */}
      <h2 className="text-center text-2xl lg:text-left">edit syllabus</h2>

      {/* Update Error */}
      {updateError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {updateError}
        </div>
      )}

      {/* Update Success */}
      {updateSuccess && (
        <div className="bg-green-500 p-2 text-center text-white">
          {updateSuccess}
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
            disabled={isLoading}
            autoComplete="off"
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
            disabled={isLoading}
            autoComplete="off"
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
            disabled={isLoading}
            autoComplete="off"
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
            disabled={isLoading}
            autoComplete="off"
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
        {/* NOTE: Using Controller to handle date input because the date input in HTML is not properly formatted */}
        {/* https://github.com/orgs/react-hook-form/discussions/9318 */}
        <div>
          <label
            htmlFor="examination_date"
            className="text-secondary mb-1 block font-medium"
          >
            Examination Date
          </label>
          <Controller
            control={form.control}
            name="examination_date"
            render={({ field: { onChange, value, ref } }) => (
              <input
                type="date"
                id="examination_date"
                ref={ref}
                value={value ? convertDateToISOString(value) : ""}
                onChange={(e) => {
                  const dateValue = e.target.value
                    ? new Date(e.target.value)
                    : undefined;
                  onChange(dateValue);
                }}
                className={`focus:ring-link w-full border px-3 py-2 focus:ring-2 focus:outline-none ${
                  form.formState.errors.examination_date
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                disabled={isLoading}
                autoComplete="off"
              />
            )}
          />
          {form.formState.errors.examination_date && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.examination_date.message}
            </p>
          )}
        </div>

        {/* Update Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-link hover:bg-link/80 disabled:bg-link/50 mt-2 w-full cursor-pointer px-3 py-2 font-semibold text-white transition duration-150 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <span>Updating syllabus</span>
              <FiLoader className="h-5 w-5 animate-spin" />
            </div>
          ) : (
            "Update Syllabus"
          )}
        </button>
      </form>
    </div>
  );
}
