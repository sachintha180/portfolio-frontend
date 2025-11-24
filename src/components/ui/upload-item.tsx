import {
  FiChevronRight,
  FiCode,
  FiFileText,
  FiVideo,
  FiArrowRight,
  FiList,
} from "react-icons/fi";
import type {
  UploadItem,
  UploadMapItem,
  UploadType,
} from "@/types/miscellaneous";

export const UPLOAD_TYPE_MAP: Record<UploadType, UploadMapItem> = {
  note: {
    icon: <FiFileText aria-hidden="true" className="h-5 w-5" />,
    colorClass: "bg-muted",
  },
  video: {
    icon: <FiVideo aria-hidden="true" className="h-5 w-5" />,
    colorClass: "bg-secondary",
  },
  code: {
    icon: <FiCode aria-hidden="true" className="h-5 w-5" />,
    colorClass: "bg-muted",
  },
  quiz: {
    icon: <FiList aria-hidden="true" className="h-5 w-5" />,
    colorClass: "bg-secondary",
  },
};

export default function UploadItem({
  type,
  url,
  title,
  itemCategoryLabel,
  relativeUploadTime,
}: UploadItem) {
  const colorClass = UPLOAD_TYPE_MAP[type].colorClass;
  const icon = UPLOAD_TYPE_MAP[type].icon;

  return (
    <div className="flex flex-row items-center gap-1">
      {/* Design Color Stripe */}
      <div
        className={`${colorClass} hidden w-2 shrink-0 self-stretch brightness-75 md:block`}
      ></div>

      {/* Upload Item */}
      <a
        className={`flex flex-1 flex-col items-start gap-1 px-4 py-3 md:flex-row md:items-center md:px-5 md:py-4 ${colorClass} text-surface group/upload-item`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {/* Icon */}
        <div className="mr-2 hidden shrink-0 items-start justify-center md:mr-3 md:flex">
          {icon}
        </div>

        {/* Title */}
        <span className="max-w-[150px] truncate font-semibold">{title}</span>

        {/* Chevron Right */}
        <FiChevronRight
          aria-hidden="true"
          className="hidden h-5 w-5 md:block"
        />

        {/* Item Category Label */}
        <span className="text-sm">{itemCategoryLabel}</span>

        {/* Relative Time and Upload Link Icon */}
        <div className="ml-auto flex flex-row items-center gap-2 transition-transform duration-300 group-hover/upload-item:translate-x-1">
          <span className="text-sm">{relativeUploadTime}</span>
          <FiArrowRight aria-hidden="true" className="text-surface h-5 w-5" />
        </div>
      </a>
    </div>
  );
}
