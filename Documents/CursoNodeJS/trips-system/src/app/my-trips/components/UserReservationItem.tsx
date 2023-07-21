"use client";
import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/Button";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { Prisma, TripReservation } from "@prisma/client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
}

const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
  const router = useRouter();

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao cancelar sua reserva");
    }

    toast.success("Reserva Cancelada com sucesso", {
      position: "bottom-center",
    });

    router.refresh();
  };
  return (
    <div className="container mx-auto p-5">
      {/**  Card */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border-b shadow-lg rounded-lg bg-gray-50">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={reservation.trip.coverImage}
              alt={reservation.trip.name}
              fill
              style={{ objectFit: "cover" }}
              className=" rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {reservation.trip.name}{" "}
            </h2>
            <div className="flex items-center gap-1 my-1">
              <ReactCountryFlag
                countryCode={reservation.trip.countryCode}
                svg
              />
              <p className="text-xs text-grayPrimary underline">
                {reservation.trip.location}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 ml-3">
          <h3 className="text-sm">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}{" "}
            </p>
            {"-"}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}{" "}
            </p>
          </div>
          {/** Hospedes */}
          <h3 className="text-sm mt-5">Hóspedes</h3>
          <p className="text-sm mb-1">{reservation.guests} hóspedes</p>
        </div>
        <div className="flex flex-col mt-5 ml-3 border-t border-solid border-grayLighter">
          <h3 className="text-sm mt-5 mb-1">Informações sobre o preço</h3>
          <div className="flex justify-between mt-1">
            <p className="text-primaryDarker text-sm"> Total: </p>
            <p className="text-sm">{`R$${reservation.totalPaid}`} </p>
          </div>
        </div>
        <Button className="mt-5" variant="danger" onClick={handleDeleteClick}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default UserReservationItem;
