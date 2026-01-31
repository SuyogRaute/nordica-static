import { useState } from "react";
import { ChevronDown, Package, CreditCard, Truck, RefreshCw, Shield, HelpCircle, MessageCircle, Mail } from "lucide-react";

const faqCategories = [
  {
    icon: Package,
    title: "Orders & Products",
    questions: [
      {
        question: "How do I place an order?",
        answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or checkout as a guest. Fill in your shipping information, select your payment method, and confirm your order. You'll receive an email confirmation immediately."
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer: "You can modify or cancel your order within 2 hours of placing it by contacting our customer service team immediately. After this window, orders are processed and shipped quickly, so modifications may not be possible. If your order has already shipped, you'll need to wait to receive it and then initiate a return."
      },
      {
        question: "Do you offer bulk or wholesale pricing?",
        answer: "Yes! We offer special pricing for bulk orders and professional detailers. Please contact our sales team at wholesale@detailguardz.com with details about your needs, and we'll provide you with a custom quote."
      },
      {
        question: "Are your products safe for all vehicle types?",
        answer: "Our products are designed to be safe for all vehicle types when used as directed. Each product page includes specific usage instructions and compatibility information. If you have a unique vehicle or specific concerns, please contact us for personalized recommendations."
      },
      {
        question: "How do I know which products are right for my car?",
        answer: "Each product page includes detailed descriptions, usage scenarios, and recommendations. We also have buying guides and how-to articles on our blog. If you're still unsure, our customer service team can help you choose the perfect products for your specific needs."
      }
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    questions: [
      {
        question: "What are your shipping rates and delivery times?",
        answer: "We offer FREE shipping on orders over $75. Standard shipping (3-5 business days) is $9.99, and Express shipping (1-2 business days) is $24.99. Orders are processed within 24 hours on business days. Remote areas may require additional 1-2 days for delivery."
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within Canada. We're working on expanding our shipping coverage to include the United States and other countries. Sign up for our newsletter to be notified when international shipping becomes available."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account and viewing your order history. If you don't receive tracking information within 48 hours, please contact us."
      },
      {
        question: "What if my package is lost or damaged during shipping?",
        answer: "If your package is lost or arrives damaged, please contact us immediately with your order number and photos (if damaged). We'll work with the carrier to resolve the issue and will send you a replacement or provide a full refund at no additional cost."
      },
      {
        question: "Can I change my shipping address after ordering?",
        answer: "If your order hasn't shipped yet, contact us immediately and we'll update the address. Once shipped, we cannot change the address, but you may be able to redirect the package through the carrier's website using your tracking number."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted connections."
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers. All transactions are processed through secure, PCI-compliant payment gateways."
      },
      {
        question: "Do you offer any discounts or promotions?",
        answer: "Yes! We regularly offer promotions, seasonal sales, and exclusive discounts to newsletter subscribers. Follow us on social media and sign up for our newsletter to stay informed about current deals and upcoming sales events."
      },
      {
        question: "Can I use multiple discount codes on one order?",
        answer: "Typically, only one discount code can be used per order unless specifically stated otherwise. The system will automatically apply the discount that gives you the best savings. Some promotions cannot be combined with other offers."
      },
      {
        question: "Why was I charged a different amount than expected?",
        answer: "The final amount includes product costs, shipping fees, and applicable taxes. Taxes are calculated based on your shipping address. If you notice an error, please contact us with your order number and we'll review the charges immediately."
      }
    ]
  },
  {
    icon: RefreshCw,
    title: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on unused items in original packaging. To initiate a return, contact our customer service team for a Return Authorization number. You're responsible for return shipping costs unless the item is defective or we made an error."
      },
      {
        question: "How long does it take to receive my refund?",
        answer: "Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be issued to your original payment method. Please allow an additional 5-10 business days for the refund to appear in your account, depending on your bank or card issuer."
      },
      {
        question: "Can I return opened or used products?",
        answer: "We cannot accept returns on opened or used products unless they are defective or damaged. This policy helps us maintain product quality and hygiene standards. If you're unsure about a product, please contact us before opening it."
      },
      {
        question: "What if I receive the wrong item or a defective product?",
        answer: "If you receive the wrong item or a defective product, please contact us within 48 hours of delivery with photos. We'll arrange for a replacement or full refund immediately, and we'll cover all return shipping costs. Your satisfaction is our priority."
      },
      {
        question: "Do you offer exchanges?",
        answer: "We currently don't offer direct exchanges. If you need a different product, please return the original item for a refund and place a new order for the item you want. This ensures you get exactly what you need as quickly as possible."
      }
    ]
  },
  {
    icon: Shield,
    title: "Account & Privacy",
    questions: [
      {
        question: "Do I need to create an account to place an order?",
        answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save shipping addresses, view order history, and receive exclusive offers. It makes future purchases faster and easier."
      },
      {
        question: "How do I reset my password?",
        answer: "Click on 'Sign In' and then select 'Forgot Password.' Enter your email address, and we'll send you a password reset link. If you don't receive the email within a few minutes, check your spam folder or contact us for assistance."
      },
      {
        question: "How is my personal information used?",
        answer: "We use your information solely to process orders, communicate about your purchases, and improve your shopping experience. We never sell your personal information to third parties. For complete details, please review our Privacy Policy."
      },
      {
        question: "How can I unsubscribe from marketing emails?",
        answer: "Every marketing email includes an 'Unsubscribe' link at the bottom. Click it to be removed from our mailing list immediately. You can also manage your email preferences in your account settings. Note that you'll still receive important order-related emails."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, you can request account deletion by contacting our customer service team. We'll permanently delete your account and personal information within 30 days, except for information we're required to retain for legal or regulatory purposes."
      }
    ]
  },
  {
    icon: HelpCircle,
    title: "Product Information",
    questions: [
      {
        question: "Are your products eco-friendly?",
        answer: "Many of our products are biodegradable and environmentally safe. We're committed to offering eco-friendly options that don't compromise on performance. Look for the 'Eco-Friendly' badge on product pages for verified green products."
      },
      {
        question: "Do you test your products?",
        answer: "Yes, every product is tested and approved by professional detailers before we add it to our catalog. We ensure that each product meets our high standards for quality, safety, and effectiveness."
      },
      {
        question: "How should I store car care products?",
        answer: "Store products in a cool, dry place away from direct sunlight and extreme temperatures. Keep them out of reach of children and pets. Always ensure lids are tightly closed. Check individual product labels for specific storage instructions."
      },
      {
        question: "What's the shelf life of your products?",
        answer: "Most of our products have a shelf life of 2-3 years when stored properly. Each product label includes a manufacturing date or expiration date. If you're unsure about a product's freshness, contact us with the batch number and we'll verify it for you."
      },
      {
        question: "Do you offer product tutorials or guides?",
        answer: "Yes! We have a comprehensive resource library with how-to videos, detailed guides, and tips from professional detailers on our blog and YouTube channel. Each product page also includes usage instructions and best practices."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-background transition-all duration-200 hover:shadow-soft">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="container-wide max-w-5xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground text-lg">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed answers to your questions. We typically respond within 24 hours.
                </p>
                <a
                  href="mailto:support@detailguardz.com"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                >
                  support@detailguardz.com
                  <span>→</span>
                </a>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Live Chat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Chat with us in real-time for immediate assistance during business hours.
                </p>
                <button className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                  Start a conversation
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Business Hours:</strong> Monday - Friday: 9 AM - 6 PM EST | Saturday: 10 AM - 4 PM EST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Helpful Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/shipping-returns"
                className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
              >
                Shipping & Returns
              </a>
              <a
                href="/terms"
                className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}