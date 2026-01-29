import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Detailing Accessories",
    description: "Wash mitts, brushes, applicators & tools",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop",
    href: "/products?category=Detailing-Accessories",
    productCount: 45,
    featured: true,
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg">
              Find everything you need for the perfect detail
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className={`group relative overflow-hidden rounded-2xl hover-lift ${category.featured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                {category.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    New
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-background mb-1">
                    {category.name}
                  </h3>
                  <p className="text-background/70 text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-background/60 text-sm">
                      {category.productCount} products
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
