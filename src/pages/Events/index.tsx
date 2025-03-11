import { useState } from 'react';

// Mock data for events
const EVENTS = [
  {
    id: 1,
    title: 'Spring Yoga Retreat',
    date: 'April 15-17, 2025',
    location: 'Mountain View Resort, Colorado',
    category: 'retreat',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Join us for a weekend of rejuvenation and mindfulness in the heart of nature.',
    price: '$450',
  },
  {
    id: 2,
    title: 'Meditation Workshop',
    date: 'May 5, 2025',
    location: 'Jade & Oak Center, San Francisco',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Learn meditation techniques to reduce stress and improve mental clarity.',
    price: '$85',
  },
  {
    id: 3,
    title: 'Plant-Based Cooking Class',
    date: 'May 20, 2025',
    location: 'Jade & Oak Center, San Francisco',
    category: 'class',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Discover delicious and nutritious plant-based recipes for everyday meals.',
    price: '$120',
  },
  {
    id: 4,
    title: 'Summer Solstice Celebration',
    date: 'June 21, 2025',
    location: 'Coastal Gardens, Malibu',
    category: 'retreat',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Celebrate the summer solstice with yoga, meditation, and community connection.',
    price: '$95',
  },
  {
    id: 5,
    title: 'Mindful Movement Series',
    date: 'July 8-29, 2025 (Wednesdays)',
    location: 'Jade & Oak Center, San Francisco',
    category: 'class',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A four-week series exploring the connection between movement and mindfulness.',
    price: '$200',
  },
  {
    id: 6,
    title: 'Autumn Wellness Weekend',
    date: 'September 25-27, 2025',
    location: 'Redwood Retreat Center, California',
    category: 'retreat',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A weekend dedicated to wellness practices, healthy eating, and forest bathing.',
    price: '$395',
  },
];

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter events based on category and search query
  const filteredEvents = EVENTS.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-earth-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Retreats</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our upcoming wellness events, retreats, workshops, and classes designed to nurture your mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'all'
                    ? 'bg-jade-DEFAULT text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Events
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'retreat'
                    ? 'bg-jade-DEFAULT text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('retreat')}
              >
                Retreats
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'workshop'
                    ? 'bg-jade-DEFAULT text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('workshop')}
              >
                Workshops
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'class'
                    ? 'bg-jade-DEFAULT text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('class')}
              >
                Classes
              </button>
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-light"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No events found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-jade-DEFAULT text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category === 'retreat'
                        ? 'Retreat'
                        : event.category === 'workshop'
                        ? 'Workshop'
                        : 'Class'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <span className="text-jade-DEFAULT font-medium">{event.price}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-1">
                        <svg
                          className="h-5 w-5 mr-2 text-jade-DEFAULT"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 mr-2 text-jade-DEFAULT"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex justify-between">
                      <a
                        href={`/events/${event.id}`}
                        className="text-jade-DEFAULT hover:text-jade-dark font-medium"
                      >
                        View Details
                      </a>
                      <button className="btn btn-outline">Register</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-jade-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're constantly adding new events. Sign up for our newsletter to be the first to know about upcoming retreats and workshops.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-jade-light"
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

export default EventsPage;