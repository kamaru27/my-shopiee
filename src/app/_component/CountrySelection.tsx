"use client";
import { Field, Fieldset, Label, Select } from "@headlessui/react";
import React, { useState } from "react";
import { CountryCode } from "../../../src/data/CountryCode";

type SProps = {
  register?: any;
};

const CountrySelection = ({ register }: SProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <>
      <Fieldset>
        <Field>
          <Label className="block">Country</Label>
          <Select
          defaultValue={''}
            {...register}
            className={`border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3 appearance-none ${
              isOptionSelected ? "text-neutral-950" : ""
            }`}
          >
            <option disabled value=''>Select-country </option>
            {CountryCode.map((country, i) => (
              <option
                key={i}
                value={country.name}
              >
                {country.name}
              </option>
            ))}
          </Select>
        </Field>
      </Fieldset>
    </>
  );
};

export default CountrySelection;
