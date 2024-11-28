import { useCartStore } from '../store/useCartStore';
import { Tour } from '../data/tours';
import { formatPrice } from '../lib/utils';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">{tour.name}</h3>
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {tour.duration}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{tour.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">
            {formatPrice(tour.price)}
          </span>
          <button
            onClick={() => addItem(tour)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}