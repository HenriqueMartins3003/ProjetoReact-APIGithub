import { prisma } from "@/lib/prisma";
import { isBefore } from "date-fns";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const trip = await prisma.trip.findUnique({
    where: {
      id: req.tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Trip_NOT_FOUND",
        },
      })
    );
  }

  if (isBefore(new Date(req.startDate), new Date(trip.startDate))) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Invalid_Start_Date",
        },
      }),
      {
        status: 400,
      }
    );
  }

  const reservation = await prisma.tripReservation.findMany({
    where: {
      tripId: req.tripId,
      //verifica se existe uma reserva entre as datas enviadas
      startDate: {
        lte: new Date(req.endDate),
      },
      endDate: {
        gte: new Date(req.startDate),
      },
    },
  });
  console.log(reservation);

  if (reservation.length > 0) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "Trip_Already_Reserved",
        },
      })
    );
  }

  return new NextResponse(
    JSON.stringify({
      success: true,
    })
  );
}
