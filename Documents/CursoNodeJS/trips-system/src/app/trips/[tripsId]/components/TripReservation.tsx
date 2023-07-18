"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
  tripId: string;
}

interface TripReservarionForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({
  tripId,
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
    setError,
    control,
  } = useForm<TripReservarionForm>();

  const validDateReservation = (errorCode: string) => {
    let valid;

    if (!errorCode) {
      valid = true;
      return valid;
    }

    if (errorCode === "Trip_Already_Reserved") {
      setError("startDate", {
        type: "manual",
        message: "Essa data já está reservada.",
      });

      return setError("endDate", {
        type: "manual",
        message: "Essa data já está reservada.",
      });
    }

    if (errorCode === "Invalid_Start_Date") {
      return setError("startDate", {
        type: "manual",
        message: "Data Inválida",
      });
    }
  };

  const router = useRouter();

  const onSubmit = async (data: TripReservarionForm) => {
    const response = await fetch("http://localhost:3000//api/trips/check", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        })
      ),
    });
    const res = await response.json();
    const valid = validDateReservation(res?.error?.code);
    if (valid) {
      router.push(
        `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
          data.guests
        }`
      );
    }
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
          max: {
            value: maxGuests,
            message: `Número máximo de hóspedes é ${maxGuests}`,
          },
        })}
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        className="mt-5"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        type="number"
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
