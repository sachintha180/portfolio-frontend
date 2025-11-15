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
    icon: <FiFileText aria-hidden="true" className="w-5 h-5" />,
    colorClass: "bg-muted",
  },
  video: {
    icon: <FiVideo aria-hidden="true" className="w-5 h-5" />,
    colorClass: "bg-secondary",
  },
  code: {
    icon: <FiCode aria-hidden="true" className="w-5 h-5" />,
    colorClass: "bg-muted",
  },
  quiz: {
    icon: <FiList aria-hidden="true" className="w-5 h-5" />,
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
        className={`${colorClass} brightness-75 w-2 shrink-0 self-stretch hidden md:block`}
      ></div>

      {/* Upload Item */}
      <a
        className={`flex-1 flex md:flex-row flex-col items-start md:items-center gap-1 px-4 py-3 md:px-5 md:py-4 ${colorClass} text-surface group/upload-item`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {/* Icon */}
        <div className="shrink-0 mr-2 md:mr-3 items-start justify-center hidden md:flex">
          {icon}
        </div>

        {/* Title */}
        <span className="font-semibold truncate max-w-[150px]">{title}</span>

        {/* Chevron Right */}
        <FiChevronRight aria-hidden="true" className="w-5 h-5 hidden md:block" />

        {/* Item Category Label */}
        <span className="text-sm">{itemCategoryLabel}</span>

        {/* Relative Time and Upload Link Icon */}
        <div className="flex flex-row items-center gap-2 ml-auto transition-transform duration-300 group-hover/upload-item:translate-x-1">
          <span className="text-sm">{relativeUploadTime}</span>
          <FiArrowRight aria-hidden="true" className="h-5 w-5 text-surface" />
        </div>
      </a>
    </div>
  );
}
