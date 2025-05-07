export interface VoucherModel {
    id?: number
    code?: string
    discount?: number
    expirationDate?: string
    createdAt?: string
    updatedAt?: string
    userId?: number,
    companyName?: string,
    companyId?: number,
    companyLogo?: string,
    briefDescription?: string,
    availableDays?: string[]
    hasBeenUsed?: boolean,
}

function Voucher(voucher: VoucherModel) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center">
                <img src={voucher.companyLogo} alt={voucher.companyName} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-bold">{voucher.companyName}</h2>
                    <p className="text-gray-600">{voucher.briefDescription}</p>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Voucher Code: {voucher.code}</h3>
                <p>Discount: {voucher.discount}%</p>
                <p>Expiration Date: {voucher.expirationDate}</p>
                <p>Available Days: {voucher.availableDays?.join(', ')}</p>
            </div>
        </div>
    )
}

export default Voucher