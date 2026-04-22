export default function FeedItem({ icon: Icon, title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0">
                <Icon className="text-gray-400 text-xl" />
            </div>
            <div>
                <h4 className="text-sm font-bold text-[#013220] uppercase">{title}</h4>
                <p className="text-xs text-gray-400 leading-tight mt-1">{desc}</p>
            </div>
        </div>
    );
}