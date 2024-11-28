import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Discover Your Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}Adventure
              </span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl">
              Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
            </p>
            <div className="mt-10">
              <Link
                to="/tours"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition-opacity"
              >
                View Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the difference with our premium travel services.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 left-4">
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md shadow-lg">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Expert Guides",
    description: "Our experienced guides ensure you get the most out of your journey.",
    icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  },
  {
    title: "Luxury Comfort",
    description: "Travel in style with our premium accommodation and transportation.",
    icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  },
  {
    title: "24/7 Support",
    description: "Our team is always available to assist you throughout your journey.",
    icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  }
];