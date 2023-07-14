import RecommendedTrips from "./components/RecommendedTrips";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
