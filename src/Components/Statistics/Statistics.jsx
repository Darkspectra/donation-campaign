import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import { PieChart, Pie, Cell } from 'recharts';


const Statistics = () => {
    const storedDonation = getStoredDonation();
    const donations = useLoaderData();

    const data = [
        { name: 'Group A', value: storedDonation.length },
        { name: 'Group B', value: (donations.length - storedDonation.length) },
    ];
    const COLORS = ['#00C49F', '#FF444A'];
    return (
        <div>
            <PieChart className="mx-auto" width={700} height={700}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={250} fill="#8884d8" paddingAngle={2} label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                    ))}
                </Pie>
            </PieChart>
            <div className="text-center">
                <div>
                    <span>Your Donation: </span>
                    <span className="bg-[#00C49F] pl-24 ml-3 rounded"></span>
                    <span className="ml-10">Total Donation: </span>
                    <span className="bg-[#FF444A] pl-24 ml-3 rounded"></span>
                </div>
            </div>
        </div>
    );
};

export default Statistics;