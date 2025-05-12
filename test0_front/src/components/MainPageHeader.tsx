import { useNavigate } from "react-router";
import ContactBTN from "./ContactBTN"




function MainPageHeader() {
    const navigate = useNavigate();

    return (
        <div className=" bg-white  py-[30px] sticky top-0 z-50 border-b-gray-200 border-b max-sm:py-[20px]">
            <header className="max-w-[1000px]  mx-auto flex justify-between   items-center  max-xl:px-[20px]">
                <h1 className="text-2xl max-sm:text-xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>Some Company</h1>
                <ContactBTN />
            </header>
        </div>
    )
}

export default MainPageHeader
