import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO from "@/components/SEO";
import { useState, useCallback } from "react";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";
import Website_demolition from "@assets/Website demolition.jpg";

// -------------------- Types --------------------
interface FAQ {
  q: string;
  a: string;
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  location: string;
  service: string;
}

// -------------------- FAQ Component --------------------
const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100">
    <button
      className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-vibrant-orange transition-all duration-200"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm sm:text-base font-semibold text-charcoal pr-4 leading-tight">
          {faq.q}
        </h3>
        <span
          className="text-vibrant-orange text-lg flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>
    </button>
    {isOpen && (
      <div className="px-4 pb-4 animate-fadeIn">
        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
      </div>
    )}
  </div>
);

// -------------------- Reviews Component --------------------
const GMBReviewsSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-3">
            Real Customer Reviews from Monroe Louisiana
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4">
            See what Monroe, West Monroe, and Ruston customers say about our junk
            removal and demolition services
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <span className="text-deep-green font-semibold ml-2">
              5.0 Stars • 8 Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-vibrant-orange transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-deep-green text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <div className="flex text-yellow-400 text-sm mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{review.service}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
                "{review.text}"
              </p>
              <p className="text-xs text-vibrant-orange font-medium">
                📍 {review.location}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Kane+Pro+Junk+Removal+Monroe+LA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary hover:bg-vibrant-orange hover:text-white transition-all duration-300 text-sm px-4 py-3"
          >
            <i className="fab fa-google"></i>
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

// -------------------- Main Page --------------------
export default function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = useCallback(
    (index: number) => {
      setOpenFAQ(openFAQ === index ? null : index);
    },
    [openFAQ]
  );

  // Dummy faq + reviews imports from your original file
  const faqData: FAQ[] = [
    {
      q: "How much does junk removal cost in Monroe Louisiana?",
      a: "Monroe LA junk removal typically costs $150-$600 depending on volume and items.",
    },
    {
      q: "Do you provide same-day demolition service in Monroe LA?",
      a: "Yes! Same-day junk removal and small demolition available in Monroe, West Monroe, Ruston.",
    },
  ];

  const realGMBReviews: Review[] = [
    {
      name: "Debbie Wedgeworth",
      rating: 5,
      text: "I had Kaleb and his crew move my household belongings. So respectful and careful.",
      location: "Farmerville to West Monroe",
      service: "Junk Removal & Moving",
    },
    {
      name: "Robert Emory",
      rating: 5,
      text: "Awesome job. Prices are well below what it would cost you in time and gas.",
      location: "Monroe LA",
      service: "Junk Hauling",
    },
  ];

  return (
    <>
      <SEO
        title="Monroe LA Junk Removal & Demolition Services"
        description="Professional junk removal & demolition in Monroe, West Monroe, Ruston Louisiana."
        canonicalUrl="https://kaneprojunk.com/services"
        structuredData={{}}
        city="Monroe"
      />

      {/* FAQ Section */}
      <section className="py-6 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div
            className="space-y-3 sm:space-y-4"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqData.map((faq, index) => (
              <div key={index} itemScope itemType="https://schema.org/Question">
                <FAQItem
                  faq={faq}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
                <meta itemProp="name" content={faq.q} />
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <meta itemProp="text" content={faq.a} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GMBReviewsSection reviews={realGMBReviews} />
    </>
  );
}
