import React from 'react';

const Faq = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-1">
             {/* Section title */}
            <h2 className="text-3xl font-extrabold text-gray-900">Every day help for our customers</h2>
            {/* Section description */}
            <p className="mt-4 text-lg text-gray-500">
              Phasellus porta turpis a lectus dapibus aliquet. Maecenas arcu est, consectetur eget ipsum ut, vulputate laoreet purus. Proin facilisis sem non turpis vulputate semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* List of services */}
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 10-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">Management</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 10-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">Analytics</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 10-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">Consultation</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 10-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">Engineering</span>
              </li>
            </ul>
             {/* More help section */}
            <div className="mt-10">
              <h2 className="text-3xl font-extrabold text-gray-900">If you need more help</h2>
              <p className="mt-4 text-lg text-gray-500">
                Maecenas arcu est, consectetur eget ipsum ut, vulputate. Proin facilisis sem non turpis vulputate semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-yellow-700 hover:text-yellow-500 font-medium flex items-center"
                >
                  Read More
                  <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 10-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

           {/* Right column */}
          <div className="mt-10 lg:mt-0 lg:col-span-1">
            {/* FAQ container */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              {/* Space between FAQ items */}
              <div className="space-y-4">
                {/* FAQ item */}
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Is it possible to pay for an order with Visa and MasterCard payment cards?</summary>
                  <p className="mt-2 text-gray-600">
                    Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.
                  </p>
                </details>
                {/* Additional FAQ items */}
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Is it possible to pay by credit card?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">What payment methods exist in your company?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Can I return the product after purchase?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">How do I use a promotional code?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">What is the validity period of the gift certificate?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">What if the prepaid goods are not delivered?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Where and how can I exchange or refund?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Is it possible to pay for an order with Visa and MasterCard payment cards?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Is it possible to pay by credit card?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">What payment method exist in your company?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg">
                  <summary className="font-semibold">Can I return the product after purchase?</summary>
                  <p className="mt-2 text-gray-600">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
