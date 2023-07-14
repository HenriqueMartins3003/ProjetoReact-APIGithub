"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservarionForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservarionForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: { value: true, message: "Data Inicial é obrigatoria" },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              placeholderText="Data de Inicio"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: { value: true, message: "Data final é obrigatoria" },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              placeholderText="Data Final"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
            />
          )}
        />
      </div>
      <Input
        {...register("guests", {
          required: { value: true, message: "Número de hóspedes obrigatório" },
        })}
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-5"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$3000,00 </p>
      </div>

      <div className="pb-10 border-b border-grayLighter ">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-3 w-full"
        >
          {" "}
          Reservar Agora{" "}
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
