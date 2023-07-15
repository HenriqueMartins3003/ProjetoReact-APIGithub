"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { differenceInDays } from "date-fns";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}

interface TripReservarionForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({
  pricePerDay,
  maxGuests,
  tripStartDate,
  tripEndDate,
}: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<TripReservarionForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

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
              minDate={tripStartDate}
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
              minDate={startDate ?? tripStartDate}
              maxDate={tripEndDate}
            />
          )}
        />
      </div>
      <Input
        {...register("guests", {
          required: { value: true, message: "Número de hóspedes obrigatório" },
        })}
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        className="mt-5"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}`
            : "R$0"}
        </p>
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
