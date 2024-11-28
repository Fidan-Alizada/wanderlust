export function Privacy() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Create an account</li>
                <li>Make a booking</li>
                <li>Contact our customer service</li>
                <li>Subscribe to our newsletter</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Process your bookings</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Service providers</li>
                <li>Travel partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@wanderlust.com<br />
                Phone: +994 (055) 123-45-67<br />
                Address: 123 Adventure Street, Wanderlust City, WL 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }