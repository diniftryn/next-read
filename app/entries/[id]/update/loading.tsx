import { LoadingSpinner } from "@/components/LoadingSpinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <p className="p-5">Loading...</p>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
