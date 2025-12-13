
const SkeletonPage = () => {
    return (
        <div className="w-full min-h-screen animate-pulse">
            {/* Search Header Skeleton */}
            <div className="flex flex-col items-center justify-center mb-12 mt-8">
                {/* Title Skeleton */}
                <div className="h-12 w-3/4 md:w-1/2 bg-gray-700/50 rounded-lg mb-12"></div>

                {/* Search Box Skeleton */}
                <div className="max-w-xl mx-auto px-4 w-full">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 wrap mx-auto w-full">
                        {/* Input Skeleton */}
                        <div className="w-full h-12 bg-gray-700/50 rounded-lg"></div>
                        {/* Button Skeleton */}
                        <div className="w-full sm:w-32 h-12 bg-gray-700/50 rounded-lg mt-2 sm:mt-0"></div>
                    </div>
                </div>
            </div>

            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 lg:mt-16 px-4">
                {/* Weather Showcase / Main Card Skeleton */}
                <div className="col-span-2 h-[500px] bg-gray-800/50 rounded-lg p-6">
                    <div className="h-8 w-48 bg-gray-700/50 rounded mb-8"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-40 bg-gray-700/30 rounded-lg"></div>
                        <div className="h-40 bg-gray-700/30 rounded-lg"></div>
                    </div>
                </div>

                {/* Hourly Forecast Sidebar Skeleton */}
                <div className="col-span-2 md:col-span-1 xl:col-span-1 h-[500px] bg-gray-800/50 rounded-lg p-6">
                    <div className="h-8 w-32 bg-gray-700/50 rounded mb-6"></div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-16 bg-gray-700/30 rounded-lg"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonPage;
