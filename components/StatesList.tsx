import StateCard from "@/components/StatCard";
import {STATS} from "@/constants";


export default function StatsList() {
    return (
        <section className="bg-white py-16 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map((stat, index) => (
                        <StateCard {...stat} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
