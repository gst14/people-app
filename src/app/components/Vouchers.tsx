'use client'
import { useEffect, useState } from "react";
import Voucher, { VoucherModel } from "./Voucher";

interface VouchersProps {
  items: VoucherModel[];
}

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
        <input
          type="text"
          placeholder="Buscar..."
          onKeyUp={filterVouchers}
          className="border border-gray-300 rounded p-2 w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredVouchers?.map((voucher) => (
          <Voucher key={voucher.id} {...voucher} />
        ))}
      </div>
    </div>
  );
}
export default Vouchers;
