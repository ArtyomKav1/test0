import { useNavigate } from "react-router";



function ContactBTN() {
    const navigate = useNavigate();

    return (
        <>
            <button className="bg-black text-white px-[60px] py-[7px] rounded-md hover:bg-black/80 font-medium cursor-pointer max-sm:py-[5px] max-sm:px-[40px]" onClick={() => navigate('/contact')}>
                Contact us
            </button>
        </>
    )
}
export default ContactBTN







