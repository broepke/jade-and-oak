import { useState } from 'react';

// Mock data for blog posts
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Benefits of Mindfulness Meditation',
    date: 'March 15, 2025',
    author: 'Emma Wilson',
    category: 'meditation',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Discover how a regular mindfulness meditation practice can reduce stress, improve focus, and enhance overall well-being.',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: '5 Yoga Poses for Better Sleep',
    date: 'March 8, 2025',
    author: 'Michael Chen',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: "Try these gentle yoga poses before bed to relax your body and mind for a more restful night's sleep.",
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'The Power of Herbal Tea: Benefits and Recipes',
    date: 'March 1, 2025',
    author: 'Sophia Rodriguez',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Explore the healing properties of different herbal teas and learn how to create your own blends at home.',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 4,
    title: 'Creating a Sustainable Wellness Routine',
    date: 'February 22, 2025',
    author: 'James Taylor',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Tips for developing a wellness routine that is both effective and sustainable for long-term health and happiness.',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'The Science Behind Forest Bathing',
    date: 'February 15, 2025',
    author: 'Emma Wilson',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Learn about the Japanese practice of shinrin-yoku (forest bathing) and its proven health benefits.',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Mindful Eating: A Guide to Better Nutrition',
    date: 'February 8, 2025',
    author: 'Michael Chen',
    category: 'nutrition',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'How practicing mindfulness during meals can improve digestion, prevent overeating, and enhance your relationship with food.',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 7,
    title: 'Essential Oils for Stress Relief',
    date: 'February 1, 2025',
    author: 'Sophia Rodriguez',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'Discover which essential oils are most effective for reducing stress and anxiety, and how to use them safely.',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 8,
    title: 'The Connection Between Movement and Mental Health',
    date: 'January 25, 2025',
    author: 'James Taylor',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    excerpt: 'How regular physical activity impacts brain function, mood, and overall mental well-being.',
    readTime: '7 min read',
    featured: true,
  },
];

// Categories for filter
const CATEGORIES = [
  { id: 'all', name: 'All Posts' },
  { id: 'meditation', name: 'Meditation' },
  { id: 'yoga', name: 'Yoga' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'nature', name: 'Nature' },
  { id: 'nutrition', name: 'Nutrition' },
  { id: 'fitness', name: 'Fitness' },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter blog posts based on category and search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-earth-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and stories to inspire your wellness journey.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="card overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-jade-DEFAULT text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <a
                        href={`/blog/${post.id}`}
                        className="text-jade-DEFAULT hover:text-jade-dark font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`w-full text-left py-2 px-3 rounded-md ${
                          selectedCategory === category.id
                            ? 'bg-jade-light text-jade-dark font-medium'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest posts delivered straight to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-light"
                  />
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-light"
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

              {/* Posts */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No posts found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span className="capitalize">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <a
                            href={`/blog/${post.id}`}
                            className="text-jade-DEFAULT hover:text-jade-dark font-medium"
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-jade-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive content, wellness tips, and updates on new blog posts.
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

export default BlogPage;