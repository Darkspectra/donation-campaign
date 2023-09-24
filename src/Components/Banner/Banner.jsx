
import './Banner.css';

const Banner = () => {
    return (
        <div className="Banner-container">
            <h2 className="display: absolute left-[33%] bottom-[84%] text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
            <div className="display: absolute left-[44%] top-[53%]">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className="display: absolute btn btn-error text-white left-[54%] top-[53%]">Search</button>
        </div>
    );
};

export default Banner;