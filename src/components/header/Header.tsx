import { Home } from "lucide-react"
import Button from "../../ui/Button"

const Header = () => {

    return (
        <>
            <header className="flex justify-between bg-white shadow-sm border-b border-gray-200 sticky z-50 top-0 p-2">
                {/* left => logo */}
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="bg-blue-600 text-white rounded-lg p-2 mr-3">
                                <Home color="white" className="text-lg md:text-xl" />
                            </div>
                            <h1 className="text-sm md:text-xl font-bold text-gray-900">First Estate</h1>
                        </div>
                    </div>
                </div>


                {/* right => login & signup */}
                <div className="w-fit flex justify-center items-center gap-3 px-4 sm:px-6 lg:px-8">
                    <Button children={"Login"} to="/login" className="text-sm p-2 md:text-lg " />
                    <Button children={"SignUp"} to="/signup"  className="text-sm p-2 md:text-lg "/>

                </div>
            </header>
        </>
    )
}
export default Header