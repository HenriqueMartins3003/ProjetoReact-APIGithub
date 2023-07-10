import TripItem from "@/components/TripItem";
import React from "react";
import { Trip } from "@prisma/client";

const RecommendedTrips = async () => {
  const data = await fetch("http://localhost:3000/hello").then((res) =>
    res.json()
  );

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter">
          <hr />
        </div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Destinos Recomendadas
        </h2>
        <div className="w-full h-[1px] bg-grayLighter">
          <hr />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
