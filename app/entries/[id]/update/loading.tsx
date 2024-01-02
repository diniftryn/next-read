import { LoadingSpinner } from "@/components/LoadingSpinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      Loading...
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
