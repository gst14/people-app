import React from 'react'
import Navbar from './components/Navbar'
import { VoucherModel } from './components/Voucher'
import Vouchers from './components/Vouchers';

const vouchersSample: VoucherModel[] = [
  {
    id: 1,
    code: "JUDY10",
    discount: 10,
    expirationDate: "2025-12-31",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-01",
    userId: 101,
    companyName: "Judy Luly's",
    companyId: 201,
    companyLogo: "/img/shop.png",
    briefDescription: "10% de descuento todos los días - Contado efectivo",
    availableDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    hasBeenUsed: false
  },
  {
    id: 2,
    code: "BURGER15",
    discount: 15,
    expirationDate: "2025-11-30",
    createdAt: "2025-05-02",
    updatedAt: "2025-05-02",
    userId: 102,
    companyName: "Big Bite Burgers",
    companyId: 202,
    companyLogo: "/img/shop.png",
    briefDescription: "15% en combos grandes - Solo lunes y miércoles",
    availableDays: ["monday", "wednesday"],
    hasBeenUsed: false
  },
  {
    id: 3,
    code: "PIZZA20",
    discount: 20,
    expirationDate: "2025-08-15",
    createdAt: "2025-05-03",
    updatedAt: "2025-05-03",
    userId: 103,
    companyName: "La Rústica Pizza",
    companyId: 203,
    companyLogo: "/img/shop.png",
    briefDescription: "20% en pizzas grandes - Todos los martes",
    availableDays: ["tuesday"],
    hasBeenUsed: false
  },
  {
    id: 4,
    code: "GYM5",
    discount: 5,
    expirationDate: "2025-07-01",
    createdAt: "2025-05-04",
    updatedAt: "2025-05-04",
    userId: 104,
    companyName: "PowerFit Gym",
    companyId: 204,
    companyLogo: "/img/shop.png",
    briefDescription: "5% de descuento en membresía mensual",
    availableDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    hasBeenUsed: false
  },
  {
    id: 5,
    code: "BOOK10",
    discount: 10,
    expirationDate: "2025-09-30",
    createdAt: "2025-05-05",
    updatedAt: "2025-05-05",
    userId: 105,
    companyName: "Librería Central",
    companyId: 205,
    companyLogo: "/img/shop.png",
    briefDescription: "10% en libros seleccionados - Solo sábados",
    availableDays: ["saturday"],
    hasBeenUsed: false
  },
  {
    id: 6,
    code: "CAFE2X1",
    discount: 50,
    expirationDate: "2025-06-30",
    createdAt: "2025-05-06",
    updatedAt: "2025-05-06",
    userId: 106,
    companyName: "Café Aroma",
    companyId: 206,
    companyLogo: "/img/shop.png",
    briefDescription: "2x1 en cafés especiales - Viernes a domingo",
    availableDays: ["friday", "saturday", "sunday"],
    hasBeenUsed: false
  },
  {
    id: 7,
    code: "BEAUTY25",
    discount: 25,
    expirationDate: "2025-10-10",
    createdAt: "2025-05-07",
    updatedAt: "2025-05-07",
    userId: 107,
    companyName: "Beauty Express",
    companyId: 207,
    companyLogo: "/img/shop.png",
    briefDescription: "25% en tratamientos faciales",
    availableDays: ["tuesday", "thursday", "saturday"],
    hasBeenUsed: false
  },
  {
    id: 8,
    code: "ELECTRO5",
    discount: 5,
    expirationDate: "2025-08-31",
    createdAt: "2025-05-08",
    updatedAt: "2025-05-08",
    userId: 108,
    companyName: "Tecno Hogar",
    companyId: 208,
    companyLogo: "/img/shop.png",
    briefDescription: "5% en productos seleccionados - Contado efectivo",
    availableDays: ["monday", "wednesday", "friday"],
    hasBeenUsed: false
  },
  {
    id: 9,
    code: "VEGGIE12",
    discount: 12,
    expirationDate: "2025-09-01",
    createdAt: "2025-05-09",
    updatedAt: "2025-05-09",
    userId: 109,
    companyName: "Verde Vivo",
    companyId: 209,
    companyLogo: "/img/shop.png",
    briefDescription: "12% en productos orgánicos",
    // availableDays: ["Todos"],
    availableDays: ["Whole Week"],
    hasBeenUsed: false
  },
  {
    id: 10,
    code: "ICE30",
    discount: 30,
    expirationDate: "2025-12-25",
    createdAt: "2025-05-10",
    updatedAt: "2025-05-10",
    userId: 110,
    companyName: "Ice Dream",
    companyId: 210,
    companyLogo: "/img/shop.png",
    briefDescription: "30% en helados artesanales - Martes y jueves",
    availableDays: ["tuesday", "thursday"],
    hasBeenUsed: false
  }
];


function page() {

  


  return (
    <>
    <Navbar/>
    {/* TODO: Divide screen in two columns with tailwind. One column 30% of screen and the second one 70% remain */}
    <Vouchers items={vouchersSample} />
    </>
  )
}

export default page