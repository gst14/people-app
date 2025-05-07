import React from 'react'
import Navbar from './components/Navbar'
import Voucher, { VoucherModel } from './components/Voucher'

export const vouchers: VoucherModel[] = [
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
    companyLogo: "https://www.svgrepo.com/show/493874/magic-hat.svg",
    briefDescription: "10% de descuento todos los días - Contado efectivo",
    availableDays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
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
    companyLogo: "https://www.svgrepo.com/show/509984/burger-fast-food.svg",
    briefDescription: "15% en combos grandes - Solo lunes y miércoles",
    availableDays: ["Lunes", "Miércoles"],
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
    companyLogo: "https://www.svgrepo.com/show/509966/pizza-slice.svg",
    briefDescription: "20% en pizzas grandes - Todos los martes",
    availableDays: ["Martes"],
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
    companyLogo: "https://www.svgrepo.com/show/512879/dumbbell.svg",
    briefDescription: "5% de descuento en membresía mensual",
    availableDays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
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
    companyLogo: "https://www.svgrepo.com/show/446864/book.svg",
    briefDescription: "10% en libros seleccionados - Solo sábados",
    availableDays: ["Sábado"],
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
    companyLogo: "https://www.svgrepo.com/show/509951/coffee-cup.svg",
    briefDescription: "2x1 en cafés especiales - Viernes a domingo",
    availableDays: ["Viernes", "Sábado", "Domingo"],
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
    companyLogo: "https://www.svgrepo.com/show/446440/cosmetics.svg",
    briefDescription: "25% en tratamientos faciales",
    availableDays: ["Martes", "Jueves", "Sábado"],
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
    companyLogo: "https://www.svgrepo.com/show/509832/laptop-electronics.svg",
    briefDescription: "5% en productos seleccionados - Contado efectivo",
    availableDays: ["Lunes", "Miércoles", "Viernes"],
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
    companyLogo: "https://www.svgrepo.com/show/511095/vegetables.svg",
    briefDescription: "12% en productos orgánicos",
    availableDays: ["Todos"],
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
    companyLogo: "https://www.svgrepo.com/show/511337/ice-cream.svg",
    briefDescription: "30% en helados artesanales - Martes y jueves",
    availableDays: ["Martes", "Jueves"],
    hasBeenUsed: false
  }
];


function page() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Vouchers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {vouchers.map((voucher) => (
          <Voucher key={voucher.id} {...voucher} />
        ))}
      </div>
    </div>
    </>
  )
}

export default page