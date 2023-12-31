"use client";

import Select from "react-select";

import useCountries from "@/hooks/useCountries";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex flex-row gap-3 items-center"
          >
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="ml-1 text-neutral-500">{option.region}</span>
            </div>
          </div>
        )}
        isClearable
        onChange={(value) => onChange(value as CountrySelectValue)}
        options={getAll()}
        placeholder="Anywhere"
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
        value={value}
      />
    </div>
  );
};

export default CountrySelect;
