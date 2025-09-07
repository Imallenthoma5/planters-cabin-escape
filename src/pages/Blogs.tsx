import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

const Blogs = () => {
  useEffect(() => {
    setSEO(
      "Planters Cabin Blogs | Kuttikkanam Travel Guide",
      "Explore detailed travel guides to Vagamon, Parunthumpara, Thekkady, Gavi, Sabarimala and more near Planters Cabin, Kuttikkanam.",
      "/blogs"
    );

    // Structured data (Blog)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Planters Cabin Travel Blog",
      url: window.location.href,
      description:
        "Long-form travel content on top attractions near Kuttikkanam: Vagamon, Parunthumpara, Thekkady, Gavi, Sabarimala, Panchalimedu, Elappara, and more.",
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  const sections: { id: string; title: string; subtitle: string; content: string[] }[] = [
    {
      id: "peerumedu",
      title: "Peerumedu (Peermade): Cool Misty Hills Near Kuttikkanam",
      subtitle: "Rolling plantations, waterfalls, and colonial-era charm just minutes away.",
      content: [
        "Peerumedu—also spelled Peermade—is the historic hill station adjoining Kuttikkanam, known for its cardamom, coffee, and tea estates.",
        "Drive along winding roads that open to sweeping valley views, stop by seasonal waterfalls, and catch ethereal mists that roll in by late afternoon.",
        "Top things to do: scenic drives, plantation visits, photo-stops at viewpoints, and slow, mindful walks amid spice-scented air.",
      ],
    },
    {
      id: "panchalimedu",
      title: "Panchalimedu: Myth, Meadows, and Wind-Kissed Vistas",
      subtitle: "A short hike leading to a vast grassland plateau tied to the Mahabharata legend.",
      content: [
        "Panchalimedu’s emerald meadows and wide-open skies are a photographer’s delight.",
        "It’s believed the Pandavas and Panchali once stayed here; the tranquil hillocks and a small temple add to the spiritual aura.",
        "Visit for sunrise or sunset—expect golden light, cool winds, and near-360-degree panoramas.",
      ],
    },
    {
      id: "parunthumpara",
      title: "Parunthumpara (Eagle Rock): A Cliffside Spectacle",
      subtitle: "Dramatic escarpments, deep valleys, and monsoon magic.",
      content: [
        "Parunthumpara offers bold cliff edges and yawning valley views that feel otherworldly on misty days.",
        "Well-marked viewpoints make it easy to find perfect angles; carry a light jacket as winds can be strong.",
        "Combine with Panchalimedu for a half-day of unforgettable vistas just a short drive from Planters Cabin.",
      ],
    },
    {
      id: "vagamon",
      title: "Vagamon: Kerala’s Serene Highlands",
      subtitle: "Pine forests, meadows, and adventure sports for all ages.",
      content: [
        "Vagamon’s iconic pine forest invites dreamy walks under towering conifers—a favorite for couples and families.",
        "Meadow slopes are ideal for picnics, and adventure-seekers can try paragliding when conditions permit.",
        "Stop by Vagamon Lake for boating and gentle strolls around the water’s edge.",
      ],
    },
    {
      id: "elappara",
      title: "Elappara: Estate Drives and Quiet Escapes",
      subtitle: "Unhurried roads through tea gardens and village life.",
      content: [
        "Elappara rewards explorers with tranquil estate routes—perfect for morning drives from Kuttikkanam.",
        "Expect carpets of tea bushes, estate bungalows, and friendly local tea stalls for authentic sips and snacks.",
      ],
    },
    {
      id: "thekkady",
      title: "Thekkady: Wildlife and Spice Country",
      subtitle: "Periyar Tiger Reserve safaris, spice plantations, and cultural performances.",
      content: [
        "Thekkady is a day-trip essential: enjoy boat safaris on Periyar Lake and keep an eye out for elephants and rare birds.",
        "Take a guided spice garden tour to learn about cardamom, pepper, and cinnamon cultivation.",
        "Don’t miss Kathakali and Kalaripayattu performances that showcase Kerala’s rich heritage.",
      ],
    },
    {
      id: "gavi",
      title: "Gavi: Evergreen Forests and Eco-Tourism Gem",
      subtitle: "A pristine wilderness within the Periyar landscape.",
      content: [
        "Gavi is famed for its deep green forests, trekking routes, and serene reservoirs.",
        "Book guided programs for jungle trekking, canoeing, and birdwatching, keeping conservation norms in mind.",
      ],
    },
    {
      id: "sabarimala",
      title: "Sabarimala: Pilgrimage Through the Hills",
      subtitle: "One of India’s most significant spiritual journeys.",
      content: [
        "Sabarimala lies across the forested ranges; the pilgrimage season transforms the region with devotional energy.",
        "If you plan to visit, check seasonal schedules and travel advisories, and be mindful of required customs.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="container mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Kuttikkanam Travel Blog – Nearby Places to Explore</h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Discover the finest hill trails, viewpoints, forests, and cultural hotspots around Planters Cabin in Kuttikkanam.
          Use this long-form guide to plan relaxed drives, day trips, and immersive nature experiences.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-8">
        <nav className="overflow-x-auto">
          <ul className="flex gap-3 text-sm text-muted-foreground">
            {sections.map((s) => (
              <li key={s.id}>
                <a className="hover:text-foreground underline-offset-4 hover:underline" href={`#${s.id}`}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="container mx-auto px-4 space-y-14 pb-16">
        {sections.map((s) => (
          <article key={s.id} id={s.id} className="scroll-mt-24">
            <header className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold">{s.title}</h2>
              <p className="text-muted-foreground mt-1">{s.subtitle}</p>
            </header>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {s.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Blogs;
