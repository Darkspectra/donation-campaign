import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import { PieChart, Pie, Cell } from 'recharts';


const Statistics = () => {
    const storedDonation = getStoredDonation();
    const donations = useLoaderData();

    const data = [
        { name: 'Group A', value: storedDonation.length },
        { name: 'Group B', value: donations.length },
    ];
    const COLORS = ['#00C49F', '#FF444A'];
    return (
        <div className="mx-auto items-center">
            <PieChart width={700} height={700}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={250} fill="#8884d8" paddingAngle={2} label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;