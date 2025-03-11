const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Jade & Oak
              </h1>
              <p className="text-xl mb-6">
                A sanctuary for wellness, mindfulness, and sustainable living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/events"
                  className="btn btn-primary text-center"
                >
                  Explore Events
                </a>
                <a
                  href="/shop"
                  className="btn btn-outline text-center"
                >
                  Visit Shop
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Wellness retreat"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Yoga Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">April 15-17, 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Spring Yoga Retreat</h3>
                <p className="text-gray-600 mb-4">
                  Join us for a weekend of rejuvenation and mindfulness in the heart of nature.
                </p>
                <a href="/events/spring-yoga-retreat" className="btn btn-outline inline-block">
                  Learn More
                </a>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Meditation Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">May 5, 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Meditation Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Learn meditation techniques to reduce stress and improve mental clarity.
                </p>
                <a href="/events/meditation-workshop" className="btn btn-outline inline-block">
                  Learn More
                </a>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Cooking Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">May 20, 2025</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Plant-Based Cooking Class</h3>
                <p className="text-gray-600 mb-4">
                  Discover delicious and nutritious plant-based recipes for everyday meals.
                </p>
                <a href="/events/cooking-class" className="btn btn-outline inline-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/events" className="btn btn-primary">
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Meditation Cushion"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Meditation Cushion</h3>
                <p className="text-green-600 font-medium">$45.00</p>
                <button className="btn btn-outline w-full mt-4">Add to Cart</button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Essential Oil Set"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Essential Oil Set</h3>
                <p className="text-green-600 font-medium">$35.00</p>
                <button className="btn btn-outline w-full mt-4">Add to Cart</button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Herbal Tea Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Herbal Tea Collection</h3>
                <p className="text-green-600 font-medium">$28.00</p>
                <button className="btn btn-outline w-full mt-4">Add to Cart</button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Yoga Mat"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Eco-Friendly Yoga Mat</h3>
                <p className="text-green-600 font-medium">$65.00</p>
                <button className="btn btn-outline w-full mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/shop" className="btn btn-primary">
              Visit Shop
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-gray-600">Yoga Retreat Participant</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The yoga retreat at Jade & Oak was transformative. The instructors were knowledgeable and supportive, and the setting was absolutely beautiful."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-gray-600">Meditation Workshop Attendee</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've attended several meditation workshops, but the one at Jade & Oak was by far the most impactful. I left with practical techniques that I use daily."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-800 flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Lisa Rodriguez</h3>
                  <p className="text-gray-600">Regular Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The products from Jade & Oak are exceptional quality. I especially love the herbal tea collection - it's become a staple in my daily wellness routine."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive content, event announcements, and special offers.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="submit"
                className="btn btn-secondary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;