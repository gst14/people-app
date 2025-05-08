import { TicketPercent } from "lucide-react";
import * as motion from "motion/react-client";
// import Image from "next/image";
export interface VoucherModel {
  id: number;
  code: string;
  discount: number;
  expirationDate: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  companyName: string;
  companyId: number;
  companyLogo: string;
  briefDescription: string;
  availableDays: string[];
  hasBeenUsed: boolean;
}

function Voucher(voucher: VoucherModel) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex w-full max-w-2xl overflow-hidden rounded-lg border border-neutral-300 bg-beige shadow-md text-black"
    >
      {/* Lado izquierdo */}
      <div className="w-2/3 bg-neutral-100 px-6 py-8 relative">
        {/* Logo + nombre empresa */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative w-10 h-10">
          <TicketPercent />
            {/* <Image
              src={voucher.companyLogo}
              alt={voucher.companyName}
              fill
              className="object-contain"
            /> */}
          </div>
          <p className="text-sm text-neutral-500 font-semibold">
            {voucher.companyName}
          </p>
        </div>

        {/* Título principal */}
        <h2 className="text-3xl font-semibold text-blue-900 mb-2">
          A gift card
        </h2>
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">for you</h3>

        {/* Descripción */}
        <p className="font-medium mb-3 text-neutral-700">What you get:</p>
        <p className="text-sm text-neutral-600 mb-4">
          {voucher.briefDescription}
        </p>

        {/* Días disponibles */}
        <p className="font-medium mb-2 text-neutral-700">Valid on:</p>
        <ul className="list-disc ml-5 text-sm text-neutral-600 space-y-1">
          {voucher.availableDays.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>

      {/* Lado derecho */}
      <div className="w-1/3 bg-beige border-l border-neutral-300 px-4 py-6 flex flex-col items-center justify-between">
        <div className="text-sm text-blue-700 italic mb-2">
          Valid until {new Date(voucher.expirationDate).toLocaleDateString()}
        </div>

        <div className="border border-white-400 px-4 py-6 text-center mt-4 text-white">
          <p className="text-sm text-neutral-600 mb-1">Value</p>
          <p className="text-3xl font-bold">{voucher.discount}$</p>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-neutral-500">Voucher code</p>
          <p className="text-blue-800 font-mono font-semibold tracking-wider">
            {voucher.code}
          </p>

          {/* Código de barras (opcional imagen si querés renderizarlo como <svg>) */}
          {/* <div className="mt-3 w-24 h-6 bg-neutral-700" /> */}
        </div>
      </div>
      {/* <div className="flex items-center">
          <Image
            src={voucher.companyLogo}
            alt={voucher.companyName}
            className="w-16 h-16 rounded-full mr-4"
            width={64}
            height={64}
          />
          <div>
            <h2 className="text-xl text-black font-bold">
              {voucher.companyName}
            </h2>
            <p className="text-gray-600">{voucher.briefDescription}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Voucher Code: {voucher.code}
          </h3>
          <p>Discount: {voucher.discount}%</p>
          <p>Expiration Date: {voucher.expirationDate}</p>
          <p>Available Days: {voucher.availableDays?.join(", ")}</p>
        </div> */}
    </motion.div>
  );
}

export default Voucher;
