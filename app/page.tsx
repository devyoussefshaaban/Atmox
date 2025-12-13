import SkeletonPage from "@/components/SkeletonPage";
import WeatherContent from "@/components/WeatherContent";
import { Suspense } from "react";

const Home = async ({ searchParams }: { searchParams: { city?: string } }) => {
  const city = (await searchParams).city || "Cairo";

  return (
    <Suspense key={city} fallback={<SkeletonPage />}>
      <WeatherContent city={city} />
    </Suspense>
  );
};

export default Home;
