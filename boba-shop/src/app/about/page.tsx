export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Brew&Bloom
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a passion for exceptional beverages and community connection, 
            Brew&Bloom brings together the finest ingredients and artisanal craftsmanship.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, Brew&Bloom started as a dream to create the perfect meeting place 
                for tea and coffee lovers. Our founders traveled across Asia to learn traditional 
                brewing techniques and source the highest quality ingredients.
              </p>
              <p>
                What sets us apart is our commitment to authenticity combined with innovation. 
                We respect traditional methods while embracing creative flavors and sustainable practices.
              </p>
              <p>
                Every cup tells a story of dedication, quality, and the joy of sharing exceptional 
                beverages with our community.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg h-80 flex items-center justify-center">
            <span className="text-6xl">🏪</span>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We source ethically and use eco-friendly packaging to protect our planet for future generations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Every ingredient is carefully selected and every drink is crafted with precision and care.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We're more than a shop - we're a gathering place where friendships bloom over great drinks.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Founder & Head Barista", emoji: "👩‍🍳" },
              { name: "Marcus Johnson", role: "Tea Master", emoji: "🧑‍🎓" },
              { name: "Luna Rodriguez", role: "Creative Director", emoji: "🎨" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}