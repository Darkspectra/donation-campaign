import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import DisplayDonation from "../DisplayDonation/DisplayDonation";

const Donation = () => {
    const donations = useLoaderData();
    const [donated, setDonated] = useState([])

    useEffect(() => {
        const storedDonation = getStoredDonation();
        if (donations.length > 0) {
            const donateArray = []
            for (const id of storedDonation) {
                const don = donations.find(don => don.id === id)
                if (don) {
                    donateArray.push(don)
                }
            }
            setDonated(donateArray)
        }
    }, [donations])

    const [showAll, setShowAll] = useState(false)
    const handleShowAll = bool => {
        setShowAll(bool)
        setDonated(donated)
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mt-8">
                {
                    donated.map((donate, idx) => <DisplayDonation key={idx} donate={donate}></DisplayDonation>)
                }
            </div>
            <div className={`${(donated.length > 4) && (showAll === true) ?  'hidden' : ''} text-center`}>
                <button onClick={()=> handleShowAll(true)} className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};

export default Donation;