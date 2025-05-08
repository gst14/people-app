"use client";
import { useEffect, useState } from "react";
import Voucher, { VoucherModel } from "./Voucher";
import { Search } from "lucide-react";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";

// import { ColourOption } from '../data'; // Removed as the module "../data" is missing
import Select, { StylesConfig } from "react-select";

interface ColourOption {
  value: string;
  label: string;
  color: string;
}

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

interface VouchersProps {
  items: VoucherModel[];
}
const animatedComponents = makeAnimated();
const days = [
  { value: "monday", label: "Monday", color: "#1c1c24" },
  { value: "tuesday", label: "Tuesday", color: "#1c1c24" },
  { value: "wednesday", label: "Wednesday", color: "#1c1c24" },
  { value: "thursday", label: "Thursday", color: "#1c1c24" },
  { value: "friday", label: "Friday", color: "#1c1c24" },
  { value: "saturday", label: "Saturday", color: "#1c1c24" },
  { value: "sunday", label: "Sunday", color: "#1c1c24" },
];

function Vouchers({ items }: VouchersProps) {
  const [vouchers, setVouchers] = useState<VoucherModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredVouchers, setFilteredVouchers] = useState<VoucherModel[]>([]);

  useEffect(() => {
    setVouchers(items);
    setFilteredVouchers(items);
  }, [items]);

  const filterVouchers = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setSearchTerm((event.target as HTMLInputElement).value.toLowerCase());
    const _filteredVouchers = vouchers.filter(
      (voucher) =>
        voucher?.code?.toLowerCase().includes(searchTerm) ||
        voucher?.companyName?.toLowerCase().includes(searchTerm)
    );
    if (searchTerm === "") {
      setFilteredVouchers(vouchers);
      return;
    }
    setFilteredVouchers(_filteredVouchers);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Vouchers</h1>
      <div className="flex justify-center mt-4">
        <div className="flex items-center w-full max-w-xl rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2">
          <Search className="h-5 w-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
            onKeyUp={filterVouchers}
          />
        </div>
        {/* <input
          type="text"
          placeholder="Buscar..."
          onKeyUp={filterVouchers}
          className="border border-gray-300 rounded p-2 w-1/2"
        /> */}
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 p-4">
          {/* Left column content */}
          {/* <h2 className="text-xl font-bold">Left Column</h2>
          <p>Content for the left column goes here.</p> */}
          <span className="text-sm font-bold text-center mt-4">
            Filter by days
          </span>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={days}
            styles={colourStyles}
            blurInputOnSelect={false}
            onChange={(selectedOptions) => {
              const selectedValues = selectedOptions.map(
                (option) => option.value
              );
              const _filteredVouchers = vouchers.filter((voucher) =>
                voucher.availableDays.some((day) =>
                  selectedValues.includes(day)
                )
              );
              if (selectedValues.length === 0) {
                setFilteredVouchers(vouchers);
              } else {
                setFilteredVouchers(_filteredVouchers);
              }
            }}
          />
        </div>
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredVouchers?.map((voucher) => (
              <Voucher key={voucher.id} {...voucher} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vouchers;
