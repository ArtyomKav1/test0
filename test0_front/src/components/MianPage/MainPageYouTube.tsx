import YouTube from "./YouTube";


function MainPageYouTube() {
    return (
        <>
            <div className="w-full bg-gray-100   mb-[50px] border-y border-y-gray-300  ">
                <div className="max-w-[1000px] mx-auto  h-[400px] max-lg:h-[600px]  max-sm:h-[500px] flex  items-center justify-center gap-[40px] max-sm:gap-[20px] max-xl:px-[20px] max-lg:flex-col">
                    <div className="w-[460px] max-lg:w-[80%] max-lg:text-center max-lg:pt-[20px]   flex flex-col gap-[40px] max-sm:gap-[10px]">
                        <h1 className="font-bold text-[52px] leading-[60px] tracking-[0.2px] max-sm:text-[32px] max-sm:leading-[32px]">Most important title on the page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</p>
                    </div>
                    <div className="w-[460px] h-[240px] max-sm:w-[320px] max-sm:h-[168px] ">
                        <YouTube  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainPageYouTube
