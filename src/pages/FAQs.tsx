import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const setSEO = (title: string, description: string, canonicalPath: string) => {
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", description);
  else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", window.location.origin + canonicalPath);
  else {
    const l = document.createElement("link");
    l.rel = "canonical";
    l.href = window.location.origin + canonicalPath;
    document.head.appendChild(l);
  }
};

const FAQs = () => {
  useEffect(() => {
    setSEO(
      "Planters Cabin FAQs | Kuttikkanam Resort Help",
      "Find answers about rooms, bookings, activities, dining, directions and more at Planters Cabin, Kuttikkanam.",
      "/faqs"
    );

    // Structured data (FAQPage)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Planters Cabin located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planters Cabin is in Kuttikkanam, Idukki, Kerala—close to Vagamon, Parunthumpara, and Thekkady.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book or contact you?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tap the WhatsApp button to chat instantly or call +91 62384 86792. You can also use the contact form.",
          },
        },
        {
          "@type": "Question",
          name: "What activities are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trekking, plantation walks, campfires, bird watching, jeep rides, and day trips to nearby hills and forests.",
          },
        },
        {
          "@type": "Question",
          name: "Do you serve Kerala cuisine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer homely Kerala dishes with fresh local ingredients. Vegetarian options are available.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wi‑Fi available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, complimentary Wi‑Fi is available. Speeds may vary with weather in the hills.",
          },
        },
        {
          "@type": "Question",
          name: "Best time to visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleasant year-round. Misty monsoons (Jun–Sep) are magical; winters (Nov–Feb) are cool and clear.",
          },
        },
        {
          "@type": "Question",
          name: "Do rooms have views and balconies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many cabins feature hill or plantation views, with balconies in select categories. Check room details when booking.",
          },
        },
        {
          "@type": "Question",
          name: "Are campfires allowed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, weather-permitting and following safety guidelines. Our team will arrange the setup for you.",
          },
        },
      ],
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="container mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Quick answers about Planters Cabin in Kuttikkanam—rooms, dining, activities, getting here, and more.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="q1">
            <AccordionTrigger>Where is Planters Cabin located?</AccordionTrigger>
            <AccordionContent>
              Planters Cabin is in Kuttikkanam, Idukki, Kerala—close to Vagamon, Parunthumpara, and Thekkady.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How do I book or contact you?</AccordionTrigger>
            <AccordionContent>
              Tap the WhatsApp button to chat instantly or call +91 62384 86792. You can also use the contact form.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>What activities are available?</AccordionTrigger>
            <AccordionContent>
              Trekking, plantation walks, campfires, bird watching, jeep rides, and day trips to nearby hills and forests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Do you serve Kerala cuisine?</AccordionTrigger>
            <AccordionContent>
              Yes. We offer homely Kerala dishes with fresh local ingredients. Vegetarian options are available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>Is Wi‑Fi available?</AccordionTrigger>
            <AccordionContent>
              Yes, complimentary Wi‑Fi is available. Speeds may vary with weather in the hills.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>Best time to visit?</AccordionTrigger>
            <AccordionContent>
              Pleasant year-round. Misty monsoons (Jun–Sep) are magical; winters (Nov–Feb) are cool and clear.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q7">
            <AccordionTrigger>Do rooms have views and balconies?</AccordionTrigger>
            <AccordionContent>
              Many cabins feature hill or plantation views, with balconies in select categories. Check room details when booking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q8">
            <AccordionTrigger>Are campfires allowed?</AccordionTrigger>
            <AccordionContent>
              Yes, weather-permitting and following safety guidelines. Our team will arrange the setup for you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default FAQs;
