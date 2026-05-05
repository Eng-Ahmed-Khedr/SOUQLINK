export default function FeedRow({ icon: Icon, title, desc, urgency }) {
    return (
        <>
            <div className="feedItem flex gap-5 items-center m-2 my-2">
                <Icon className={`text-xl ${urgency === "high" ? "text-red-500" : urgency === "medium" ? "text-yellow-500" : urgency === "low" ? "text-green-500" : "text-gray-500"}`} />
                <div className="description">
                    <h2 className="uppercase font-bold text-sm text-[#013220]">{title}</h2>
                    <p className="text-sm text-gray-400">{desc}</p>
                </div>
            </div>
        </>
    );
}