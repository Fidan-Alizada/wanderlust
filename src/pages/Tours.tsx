import { TourCard } from '../components/TourCard';
import { tours } from '../data/tours';

export function Tours() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Available Tours</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our selection of carefully curated travel experiences
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}