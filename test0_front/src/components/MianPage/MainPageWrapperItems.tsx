import ContactBTN from "../ContactBTN"
import MainPageItem from "./MainPageItem"
const itemsData = new Array(6).fill(0)


function MainPageWrapperItems() {


    return (
        <div className="max-w-[1000px] mx-auto flex flex-col items-center max-xl:px-[20px]">
            <h1 className=" text-5xl font-bold text-gray-900 mb-[84px] max-md:text-3xl max-md:text-center">Also very important title </h1>
            <div className="w-full grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-[72px] mb-[48px]">
                {itemsData.map((_, index) => (<MainPageItem key={index} />))}
            </div>
            <ContactBTN/>
        </div>
    )
}

export default MainPageWrapperItems
