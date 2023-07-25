"use client";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `http://localhost:3000/api/search?text=${
          searchParams.get("text") ?? ""
        }&startDate=${searchParams.get("startDate")}&budget=${searchParams.get(
          "budget"
        )}`
      );
      const data = await response.json();
      setTrips(data);
    };
    fetchTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center p-5">
      <h1 className="text-primaryDarker font-semibold text-xl">
        Hospedagens encontradas
      </h1>
      <h2 className="text-grayPrimary font-medium mb-5">
        {trips.length > 0
          ? "Listamos as melhores viagens pra você!"
          : "Não encontramos nada com seus parâmetros =("}
      </h2>
      {trips?.map((trip) => (
        <TripItem key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default Trips;
