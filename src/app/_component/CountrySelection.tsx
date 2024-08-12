"use client";
import { Field, Fieldset, Label, Select } from "@headlessui/react";
import React from "react";
import { CountryCode } from "../../../src/data/CountryCode";

const CountrySelection = () => {
  return (
    <>
      <Fieldset>
        <Field>
          <Label className="block">Country</Label>
          <Select 
            className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
            name="country"
          >
            {CountryCode.map((country, i) => (
              <option key={i} value={country.name}>
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
