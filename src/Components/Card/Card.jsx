import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id, picture, title, category, color_button_bg, color_card_bg, color_text_button } = card
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div style={{backgroundColor: color_card_bg}} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p style={{backgroundColor: color_button_bg, color: color_text_button }} className="p-2 w-[30%] rounded">{title}</p>
                        <h2 style={{color: color_text_button }} className="card-title font-semibold">{category}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;