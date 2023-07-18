"use client";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import ptBR from "date-fns/locale/pt-BR";

import { Trip } from "@prisma/client";

import Button from "@/components/Button";

const TripConfirmation = ({ params }: { params: { tripsId: string } }) => {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState();

  const { status } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`http://localhost:3000/api/trips/check`, {
        method: "POST",
        body: JSON.stringify({
          tripId: params.tripsId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const res = await response.json();

      if (res?.error) {
        return router.push("/");
      }

      const { trip, totalPrice } = res;

      setTrip(res.trip);
      setTotalPrice(res.totalPrice);
    };

    if (status === "unauthenticated") {
      router.push("/");
    }
    fetchTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-xl text-primaryDarker ml-3 mt-3">
        {" "}
        Sua Viagem{" "}
      </h1>
      {/**  Card */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border-b shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              alt={trip.name}
              fill
              style={{ objectFit: "cover" }}
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}{" "}
            </h2>
            <div className="flex items-center gap-1 my-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}{" "}
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-3 font-semibold text-lg text-primaryDarker">
          Informações sobre o preço{" "}
        </h3>

        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker"> Total: </p>
          <p className="font-medium">{`R$${totalPrice}`} </p>
        </div>
      </div>

      {/** Datas */}
      <div className="flex flex-col mt-5 ml-3">
        <h3 className="font-semibold">Data</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, "dd 'de' MMMM", { locale: ptBR })} </p>
          {"-"}
          <p>{format(endDate, "dd 'de' MMMM", { locale: ptBR })} </p>
        </div>
        {/** Hospedes */}
        <h3 className="font-semibold mt-5">Hóspedes</h3>
        <p>{guests} hóspedes</p>
        <Button className="mt-5"> Finalizar Compra </Button>
      </div>
    </div>
  );
};

export default TripConfirmation;
