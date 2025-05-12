import ContactBTN from "../ContactBTN"

function MainPageLink() {
    return (
        <>
            <div className=" bg-gray-100 h-[400px] max-sm:min-h-[200px] w-full mt-[50px] border-y border-y-gray-300 flex items-center justify-center flex-col gap-[60px] max-xl:px-[20px] max-sm:gap-[20px]" >
                <div className="font-bold text-[64px] max-xl:text-[46px] max-sm:text-[24px]">Less important title</div>
                <ContactBTN/>
            </div>
        </>
    )
}
export default MainPageLink
