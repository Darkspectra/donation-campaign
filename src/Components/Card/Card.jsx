import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id, picture, title, category, color_button_bg, color_card_bg, color_text_button } = card
    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className={`card card-compact bg-base-100 shadow-xl bg-[${color_card_bg}]`}>
                    <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className={`p-2 bg-[${color_button_bg}] w-[30%] rounded text-[${color_text_button}]`}>{title}</p>
                        <h2 className={`card-title text-[${color_text_button}] font-semibold`}>{category}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;