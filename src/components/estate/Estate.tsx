import { TrendingUp } from "lucide-react"
import Header from "../../ui/Header"
import EstateCard from "../../ui/EstateCard"

const Estate = () => {

  return (
    <section className="mt-96 lg:mt-40">
        {/* header */}
        <div className="flex justify-between p-5 items-center">
            <Header Hchildren="Featured Properties" Pchildren="Discover the latest listings in prime locations" Pcolor="gray-500"/>
            <p className="text-blue-500 flex justify-center items-center mb-20 md:mb-16 font-semibold w-28 gap-1">View All <TrendingUp /></p>
        </div>

        {/* Estate */}
        <div className="flex justify-center items-center flex-wrap">
            <EstateCard/>
            <EstateCard/>
            <EstateCard/>
            <EstateCard/>
            <EstateCard/>
            <EstateCard/>
        </div>
    </section>
  )
}
export default Estate