"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          placeholderText="Data de Inicio"
          onChange={() => {}}
          className="w-full"
        />
        <DatePicker
          placeholderText="Data Final"
          onChange={() => {}}
          className="w-full"
        />
      </div>
      <Input
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-5"
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$3000,00 </p>
      </div>

      <div className="pb-10 border-b border-grayLighter ">
        <Button className="mt-3 w-full"> Reservar Agora </Button>
      </div>
    </div>
  );
};

export default TripReservation;
