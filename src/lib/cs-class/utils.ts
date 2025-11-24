export function convertDateToISOString(date: Date): string {
  const dateString = date.toISOString().split("T")[0];
  if (!dateString) {
    throw new Error("Invalid date");
  }
  return dateString;
}
