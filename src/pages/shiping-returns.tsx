import { Truck, Package, RefreshCw, Clock, MapPin, Phone, Mail, Shield } from "lucide-react";

const shippingInfo = [
  {
    icon: Truck,
    title: "Standard Shipping",
    description: "3-5 business days across Canada",
    detail: ""
  },
  {
    icon: Package,
    title: "Express Shipping",
    description: "1-2 business days to major cities",
    detail: "$24.99 flat rate available at checkout"
  },
  {
    icon: MapPin,
    title: "Shipping Coverage",
    description: "We ship across all of Canada",
    detail: "Remote areas may require additional 1-2 days"
  },
  {
    icon: Clock,
    title: "Processing Time",
    description: "Orders processed within 24 hours",
    detail: "Cut-off time: 2 PM EST for same-day processing"
  }
];

const returnInfo = [
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description: "Changed your mind? No problem",
    detail: "Full refund on unused items within 30 days"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guaranteed",
    detail: "Defective products replaced or refunded immediately"
  },
  {
    icon: Package,
    title: "Easy Process",
    description: "Simple returns in 3 steps",
    detail: "Request return → Ship back → Get refunded"
  },
  {
    icon: Mail,
    title: "Return Shipping",
    description: "Customer covers return shipping",
    detail: "Free returns on defective or wrong items"
  }
];

export function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Shipping & Returns
            </h1>
            <p className="text-muted-foreground text-lg">
              We want you to love your purchase. Learn about our shipping options and hassle-free return policy.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Shipping Information
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fast and reliable delivery across Canada. Track your order every step of the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {shippingInfo.map((item, index) => (
              <div
                key={item.title}
                className="group bg-background rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {item.description}
                </p>
                <p className="text-sm text-foreground font-medium">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Shipping Policy */}
          <div className="bg-secondary rounded-xl p-8 lg:p-10 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">Shipping Policy Details</h3>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Order Processing</h4>
                <p>All orders are processed within 24 hours (excluding weekends and holidays). You will receive an email confirmation with tracking information once your order ships.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Shipping Carriers</h4>
                <p>We partner with Canada Post and Purolator to ensure reliable delivery. Carrier selection is based on your location and shipping method chosen at checkout.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tracking Your Order</h4>
                <p>Once shipped, you'll receive a tracking number via email. You can track your package in real-time through the carrier's website or our order tracking page.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Delays & Issues</h4>
                <p>While rare, shipping delays can occur due to weather, high volume periods, or carrier issues. If your order is delayed beyond the estimated delivery date, please contact us and we'll resolve it immediately.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">International Shipping</h4>
                <p>Currently, we only ship within Canada. International shipping may be available in the future. Sign up for our newsletter to be notified when we expand our shipping regions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Information */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Returns & Refunds
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your satisfaction is our priority. We offer a straightforward return process with no hassle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {returnInfo.map((item, index) => (
              <div
                key={item.title}
                className="group bg-background rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {item.description}
                </p>
                <p className="text-sm text-foreground font-medium">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Return Policy */}
          <div className="bg-background rounded-xl p-8 lg:p-10 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">Return Policy Details</h3>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Eligibility</h4>
                <p>Items must be unused, in original packaging, and in the same condition you received them. Products must be returned within 30 days of delivery. Opened or used products cannot be returned unless defective.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How to Initiate a Return</h4>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                  <li>Contact our customer service team via email or phone with your order number</li>
                  <li>Receive a Return Authorization (RA) number and return shipping instructions</li>
                  <li>Pack items securely in original packaging with RA number clearly marked</li>
                  <li>Ship the package to our returns address (provided with RA number)</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Refund Process</h4>
                <p>Once we receive and inspect your return, we'll process your refund within 5-7 business days. Refunds are issued to the original payment method. Please allow 5-10 business days for the refund to appear in your account.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Exchanges</h4>
                <p>We currently don't offer direct exchanges. If you need a different product, please return the original item for a refund and place a new order.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Damaged or Defective Items</h4>
                <p>If you receive a damaged or defective item, please contact us within 48 hours of delivery with photos. We'll arrange for a replacement or full refund at no cost to you, including return shipping.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Non-Returnable Items</h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Gift cards</li>
                  <li>Downloadable products or digital content</li>
                  <li>Items marked as final sale or clearance</li>
                  <li>Opened chemical products (unless defective)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="bg-primary/5 rounded-xl p-8 lg:p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our customer service team is here to help with any shipping or return inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@detailguardz.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
                support@detailguardz.com
              </a>
              <a
                href="tel:1-800-DETAIL"
                className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
              >
                <Phone className="h-5 w-5" />
                1-800-DETAIL
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Monday - Friday: 9 AM - 6 PM EST | Saturday: 10 AM - 4 PM EST
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}