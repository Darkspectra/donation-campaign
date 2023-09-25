import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Utility/LocalStorage";

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card.id == id)
    console.log(card);

    const handleToast = () => {
        saveDonation(parseInt(id))
        toast("Donate Complete!")
    }
    return (
        <div>
            <img className="w-[60%] mx-auto" src={card.pic_details} />
            <div className="display: absolute left-[26%] bottom-[30%] bg-slate-700 pr-[43.5%] bg-opacity-40">
                <button style={{backgroundColor: card.color_text_button}} onClick={handleToast} className=" text-white p-3 rounded">Donate {card.price}</button>
            </div>
            <div className="mt-5 mx-auto">
                <h2 className="text-4xl font-bold">{card.title}</h2>
                <p className="mt-9">{card.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;