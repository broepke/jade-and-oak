import { useState } from 'react';

// Mock data for products
const PRODUCTS = [
  {
    id: 1,
    name: 'Meditation Cushion',
    price: 45.00,
    category: 'meditation',
    image: 'https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A comfortable cushion for your meditation practice.',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 2,
    name: 'Essential Oil Set',
    price: 35.00,
    category: 'aromatherapy',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A set of 6 essential oils for aromatherapy.',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Herbal Tea Collection',
    price: 28.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A collection of organic herbal teas for relaxation and wellness.',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 4,
    name: 'Eco-Friendly Yoga Mat',
    price: 65.00,
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A sustainable yoga mat made from natural rubber.',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 5,
    name: 'Mindfulness Journal',
    price: 22.00,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A guided journal for daily mindfulness practice.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 6,
    name: 'Bamboo Water Bottle',
    price: 32.00,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'An eco-friendly bamboo water bottle with infuser.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 7,
    name: 'Organic Face Mask',
    price: 18.00,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A rejuvenating organic face mask made with natural ingredients.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 8,
    name: 'Meditation Candle Set',
    price: 40.00,
    category: 'meditation',
    image: 'https://images.unsplash.com/photo-1608181831718-c9ffd8dff23f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A set of 3 soy candles with calming scents for meditation.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 9,
    name: 'Wellness Tea Infuser',
    price: 15.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A stainless steel tea infuser for loose leaf teas.',
    isFeatured: false,
    inStock: false,
  },
  {
    id: 10,
    name: 'Chakra Bracelet',
    price: 25.00,
    category: 'jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A handcrafted bracelet with seven chakra gemstones.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 11,
    name: 'Organic Bath Salts',
    price: 20.00,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Relaxing organic bath salts with lavender and eucalyptus.',
    isFeatured: false,
    inStock: true,
  },
  {
    id: 12,
    name: 'Wellness Book Collection',
    price: 55.00,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'A collection of three books on mindfulness, meditation, and holistic living.',
    isFeatured: false,
    inStock: true,
  },
];

// Categories for filter
const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'meditation', name: 'Meditation' },
  { id: 'yoga', name: 'Yoga' },
  { id: 'tea', name: 'Tea & Beverages' },
  { id: 'aromatherapy', name: 'Aromatherapy' },
  { id: 'skincare', name: 'Skincare' },
  { id: 'books', name: 'Books & Journals' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'jewelry', name: 'Jewelry' },
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);

  // Filter products based on category, search query, and in-stock status
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = showInStockOnly ? product.inStock : true;
    
    return matchesCategory && matchesSearch && matchesStock;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
    } else if (sortBy === 'priceAsc') {
      return a.price - b.price;
    } else if (sortBy === 'priceDesc') {
      return b.price - a.price;
    } else if (sortBy === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-earth-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our curated collection of wellness products to support your mindful lifestyle.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
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
                <h3 className="text-xl font-bold mb-4">Filter</h3>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-jade-DEFAULT"
                      checked={showInStockOnly}
                      onChange={() => setShowInStockOnly(!showInStockOnly)}
                    />
                    <span className="ml-2">In Stock Only</span>
                  </label>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sort By</h4>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="nameAsc">Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
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

              {/* Products */}
              {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No products found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id} className="card overflow-hidden">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {product.isFeatured && (
                          <div className="absolute top-2 left-2 bg-jade-DEFAULT text-white px-2 py-1 text-xs font-medium rounded">
                            Featured
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-jade-DEFAULT font-medium">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 text-sm mt-2 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <a
                            href={`/shop/${product.id}`}
                            className="text-jade-DEFAULT hover:text-jade-dark font-medium"
                          >
                            View Details
                          </a>
                          <button
                            className={`btn btn-outline ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
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

      {/* Featured Collections */}
      <section className="py-16 bg-stone-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Collection 1 */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Meditation Essentials"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">Meditation Essentials</h3>
                <a href="/shop?category=meditation" className="text-white hover:text-jade-light font-medium">
                  Shop Collection →
                </a>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Herbal Teas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">Herbal Teas</h3>
                <a href="/shop?category=tea" className="text-white hover:text-jade-light font-medium">
                  Shop Collection →
                </a>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Self-Care"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">Self-Care</h3>
                <a href="/shop?category=skincare" className="text-white hover:text-jade-light font-medium">
                  Shop Collection →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;