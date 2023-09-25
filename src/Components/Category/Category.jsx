import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Category = () => {
    const [fetchData, setFetchData] = useState([])
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setFetchData(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-4 gap-20 my-14">
                {
                    fetchData.map((card, idx) => <Card key={idx} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;