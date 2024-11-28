export function About() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Wanderlust</h1>
            <p className="mt-4 text-xl text-gray-600">
              Creating unforgettable travel experiences since 1970
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded with a passion for exploration and adventure, Wanderlust has been helping travelers discover the world's most beautiful destinations for over 50 years. Our commitment to excellence and personalized service has made us a leader in the travel industry.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We believe that travel has the power to transform lives, create lasting memories, and bridge cultural divides. Our experienced team works tirelessly to craft unique experiences that cater to every type of traveler.
              </p>
            </div>
          </div>
  
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const values = [
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and supporting local communities.",
      icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every detail of your journey.",
      icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    },
    {
      title: "Innovation",
      description: "We continuously evolve to provide cutting-edge travel experiences.",
      icon: <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    }
  ];