import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComponents = () => {
  return (
    <>
      <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <Skeleton className="rounded-t-lg w-[100%]" height={300} />
          <div className="my-1">
            <Skeleton
              count={4}
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonComponents;
