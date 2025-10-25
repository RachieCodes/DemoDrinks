export default function MenuPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted beverages made with the finest ingredients
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bubble Tea</h3>
              <p className="text-gray-600 mb-4">Classic and innovative bubble tea flavors with fresh toppings</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Coffee</h3>
              <p className="text-gray-600 mb-4">Artisan coffee blends and specialty espresso drinks</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-teal-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Fresh Tea</h3>
              <p className="text-gray-600 mb-4">Premium loose-leaf teas and herbal infusions</p>
            </div>
          </div>
        </div>

        {/* Sample Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Classic Milk Tea", price: "$5.50", description: "Traditional black tea with creamy milk and tapioca pearls" },
            { name: "Taro Bubble Tea", price: "$6.00", description: "Creamy taro flavor with chewy boba pearls" },
            { name: "Matcha Latte", price: "$5.75", description: "Premium Japanese matcha with steamed milk" },
            { name: "Brown Sugar Milk Tea", price: "$6.25", description: "Rich brown sugar syrup with fresh milk and boba" },
            { name: "Passion Fruit Tea", price: "$5.25", description: "Refreshing green tea with tropical passion fruit" },
            { name: "Espresso Macchiato", price: "$4.50", description: "Bold espresso marked with steamed milk foam" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-lg font-bold text-purple-600">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}