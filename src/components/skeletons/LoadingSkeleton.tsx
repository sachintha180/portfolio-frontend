import { FiLoader } from "react-icons/fi";

type LoadingSkeletonProps = {
  message?: string;
  className?: string;
};

export default function LoadingSkeleton({
  message = "Loading",
  className = "",
}: LoadingSkeletonProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="text-muted">{message}</div>
      <FiLoader className="h-5 w-5 animate-spin" />
    </div>
  );
}
