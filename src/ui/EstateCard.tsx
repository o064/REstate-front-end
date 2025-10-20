
const EstateCard = () => {

    return (
        <>
            <a href="#" className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
                <img
                    loading="lazy"
                    alt=""
                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <div>
                        <div>
                            <p className="text-gray-500">Price : 
                            <span className="text-sm text-gray-800 ml-0.5">$240,000</span>
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Address :
                            <span className="font-medium text-gray-800 ml-0.5">123 Wallaby Avenue, Park Road</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>

        </>
    )
}
export default EstateCard