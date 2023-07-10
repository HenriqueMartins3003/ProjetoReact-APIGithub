import React from "react";
import Input from "@/components/Inpunt";
import DatePicker from "@/components/DatePicker";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-backgroud bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua proxima <span className="text-primary"> viagen!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de ida"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>
        <Button> Buscar </Button>
      </div>
    </div>
  );
};

export default TripSearch;
