import { Link } from "react-router"
type EstateCardPropse = {
    image?: string;
    address?: string;
    price: string | number
    area?: string | number
    title?: string
}
const EstateCard = ({ image, address, price, area, title }: EstateCardPropse) => {

    return (
        <>
            <Link to="/estateDetails" className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
                <img
                    lang="lazy"
                    src={image || 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                    alt={title}
                    className="h-56 w-full rounded-md  object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-3 space-y-1">
                    <h3 className="font-semibold text-gray-800">{title}</h3>
                    <p className="font-medium text-gray-800 ml-0.5">{address || '123 Wallaby Avenue, Park Road'}</p>
                    <p className="text-gray-500 text-sm">{area}</p>
                    <p className="text-green-600 font-bold">{price || '240,000'}</p>
                </div>
            </Link>

        </>
    )
}
export default EstateCard