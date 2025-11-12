import type {
  ExperienceItem,
  GroupedExperienceDurations,
  GroupedExperienceItem,
} from "@/types/miscellaneous";

export function formatTimelineDate(startDate: Date, endDate: Date | number) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  const start = formatter.format(startDate);
  const end = endDate === -1 ? "Present" : formatter.format(endDate as Date);

  return `${start} - ${end}`;
}

export function convertMonthsToOptimisticYears(months: number) {
  return months % 12 === 0
    ? `${Math.floor(months / 12)} years`
    : `${Math.floor(months / 12)}+ years`;
}

export function groupExperienceItems(
  experienceItems: ExperienceItem[]
): GroupedExperienceItem[] {
  return experienceItems.reduce<GroupedExperienceItem[]>((acc, item) => {
    // Check if the group already exists
    const existingGroup = acc.find(
      (groupItem) => groupItem.group === item.group
    );

    // If the group already exists, add the item to the group
    if (existingGroup) {
      existingGroup.items.push(item);
      return acc;
    }

    // Otherwise, create a new group and add the item to it
    acc.push({
      group: item.group,
      items: [item],
    });

    return acc;
  }, []);
}

export function computeGroupedExperienceDurations(
  groupedExperienceItems: GroupedExperienceItem[]
): GroupedExperienceDurations {
  return groupedExperienceItems.reduce<GroupedExperienceDurations>(
    (acc, groupItem) => {
      const allStartDates: Date[] = [];
      const allEndDates: Date[] = [];

      // Find all start and end dates within this group
      groupItem.items.forEach((item) => {
        item.roles.forEach((role) => {
          allStartDates.push(role.startDate);
          if (role.endDate === -1) {
            allEndDates.push(new Date());
          } else {
            allEndDates.push(role.endDate as Date);
          }
        });
      });

      // If there are no start or end dates, return 0
      if (!allStartDates.length || !allEndDates.length) {
        acc[groupItem.group] = 0;
        return acc;
      }

      // Find the minimum and maximum start and end dates
      const minDate = allStartDates.reduce((min, date) =>
        date < min ? date : min
      );
      const maxDate = allEndDates.reduce((max, date) =>
        date > max ? date : max
      );

      // Calculate the difference in months
      const monthDiff =
        (maxDate.getFullYear() - minDate.getFullYear()) * 12 +
        (maxDate.getMonth() - minDate.getMonth()) +
        (maxDate.getDate() >= minDate.getDate() ? 0 : -1);

      acc[groupItem.group] = monthDiff;
      return acc;
    },
    {}
  );
}
