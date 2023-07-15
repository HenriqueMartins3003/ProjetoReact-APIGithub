import { prisma } from "@/lib/prisma";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighLights from "./components/TripHighLights";
import TripLocation from "./components/TripLocation";

const getTripDetails = async (tripsID: string) => {
  const trip = prisma.trip.findUnique({
    where: {
      id: tripsID,
    },
  });
  return trip;
};

const TripDetails = async ({ params }: { params: { tripsId: string } }) => {
  const trip = await getTripDetails(params.tripsId);

  if (!trip) return null;

  return (
    <div className=" container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation
        pricePerDay={trip.pricePerDay as any}
        tripEndDate={trip.endDate}
        tripStartDate={trip.startDate}
        maxGuests={trip.maxGuests}
      />
      <TripDescription description={trip.description} />
      <TripHighLights highlights={trip.highlights} />
      <TripLocation
        location={trip.location}
        locationDescription={trip.locationDescription}
      />
    </div>
  );
};

export default TripDetails;
