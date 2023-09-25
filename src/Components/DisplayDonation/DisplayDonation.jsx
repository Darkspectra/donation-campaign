
const DisplayDonation = ({ donate }) => {
    const { id, picture, title, category, color_button_bg, color_card_bg, color_text_button, price } = donate;
    return (
        <div style={{backgroundColor: color_card_bg}} className="card card-side shadow-xl">
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <p style={{backgroundColor: color_button_bg, color: color_text_button}} className="p-2 w-[30%] rounded">{title}</p>
                <h2 className="card-title font-semibold">{category}</h2>
                <p style={{color: color_text_button}} className="text-${color_text_button} font-semibold">{price}</p>
                <div className="card-actions">
                    <button style={{backgroundColor: color_text_button}} className=" text-white p-3 rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayDonation;