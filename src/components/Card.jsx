function Card({ src, alt, text }) {
    return (
        <div className="mt-20 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h1 className="text-lg font-bold mb-2">GHello</h1>
                <p className="text-gray-700 mb-1">{text}</p>
                <p className="text-gray-500 text-sm">{text}</p>
            </div>
        </div>
    );
}

export default Card;                    