
const DisplayDonation = ({ donate }) => {
    const { id, picture, title, category, color_button_bg, color_card_bg, color_text_button, price } = donate;
    return (
        <div className={`card card-side shadow-xl bg-[${color_card_bg}]`}>
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <p className={`p-2 bg-[${color_button_bg}] w-[30%] rounded text-[${color_text_button}]`}>{title}</p>
                <h2 className={`card-title text-[${color_text_button}] font-semibold`}>{category}</h2>
                <p className={`text-[${color_text_button}] font-semibold`}>{price}</p>
                <div className="card-actions">
                    <button className={` text-white bg-[${color_text_button}] p-3 rounded`}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayDonation;