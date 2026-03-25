import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTA_URL = "https://calendly.com/apdigital-core/30min";

/* ─── Animation helpers ─── */
function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CTAButton({ text = "BOOK YOUR FREE STRATEGY CALL →" }: { text?: string }) {
  return (
    <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="cta-button block">
      {text}
    </a>
  );
}

/* ═══════════════════════════════════════════
   LEAD CAPTURE FORM
   ═══════════════════════════════════════════ */
function LeadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nTrade: ${data.get("trade")}\nCity: ${data.get("city")}\nPhone: ${data.get("phone")}`;
    window.location.href = `mailto:apdigital.core@gmail.com?subject=Strategy Call Request - ${data.get("trade")} in ${data.get("city")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="section-white section-padding">
      <div className="container-narrow max-w-2xl">
        <FadeUp>
          <h2 className="headline-large text-secondary text-center">Get a Free Contractor Marketing Strategy Call</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-center text-muted-foreground mt-3 mb-8 text-base md:text-lg">
            No pressure. 20 minutes. We'll show you exactly how many leads are available in your area.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-lg border border-secondary/20 bg-background px-4 py-3 text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <select
              name="trade"
              required
              className="w-full rounded-lg border border-secondary/20 bg-background px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            >
              <option value="" disabled selected>Trade Type</option>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>HVAC</option>
              <option>Roofer</option>
              <option>General Contractor</option>
              <option>Landscaper</option>
              <option>Other</option>
            </select>
            <input
              name="city"
              type="text"
              placeholder="City in BC"
              required
              className="w-full rounded-lg border border-secondary/20 bg-background px-4 py-3 text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full rounded-lg border border-secondary/20 bg-background px-4 py-3 text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 text-base md:text-lg tracking-wide transition-colors duration-200"
            >
              Get My Free Strategy Call
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════ */
function Hero() {
  const stats = [
    { value: "47", label: "LEADS GENERATED", desc: "First 30 days — General contractor, Langley BC" },
    { value: "3.2x", label: "RETURN ON AD SPEND", desc: "Meta Ads — Renovation company, Surrey BC" },
    { value: "$14", label: "COST PER LEAD", desc: "Meta Lead Ads — Landscaper, Coquitlam BC" },
    { value: "5,100", label: "INSTAGRAM REACH/WEEK", desc: "Organic Reels — Contractor, Metro Vancouver" },
  ];

  return (
    <section className="section-dark section-padding">
      <div className="container-narrow text-center">
        <FadeUp>
          <span className="pill-badge mb-8 inline-flex">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            CONTRACTOR MARKETING BC CANADA
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="headline-mega text-primary-foreground mx-auto max-w-5xl">
            BC Contractor Marketing — Get More Leads with Meta & Google Ads
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            AP Digital runs your Instagram, Reels, and Meta Ads so contractors in BC get a steady flow of inbound leads — done personally by founder Arjun Sharma
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-8 md:mt-10 max-w-md mx-auto">
            <CTAButton />
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-16 md:mt-20">
            <span className="pill-badge mb-6 inline-flex">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              REAL CLIENT RESULTS — BC CANADA
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 rounded-2xl border border-primary/20 bg-navy-deep p-6 md:p-8">
              {stats.map((s, i) => (
                <FadeUp key={i} delay={0.5 + i * 0.08}>
                  <div className="text-center">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label text-primary-foreground">{s.label}</div>
                    <div className="stat-desc">{s.desc}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. SOCIAL PROOF BAR
   ═══════════════════════════════════════════ */
function SocialProof() {
  const items = [
    { value: "12", label: "BC CITIES SERVED", desc: "Metro Vancouver to Kelowna" },
    { value: "100%", label: "FOUNDER DIRECT", desc: "No account managers. Ever." },
    { value: "30", label: "DAYS TO FIRST LEAD", desc: "Average for contractor clients" },
    { value: "$0", label: "LOCK-IN CONTRACTS", desc: "Month-to-month always" },
  ];
  return (
    <section className="section-white section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-black text-secondary">{s.value}</div>
                <div className="stat-label text-secondary">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. THE PROBLEM
   ═══════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    "You're working with a generic agency that runs the same campaigns for dentists, restaurants, and contractors — no niche expertise",
    "You have no Instagram presence so homeowners go to a competitor who posts job site content and looks more credible online",
    "You've tried Google or Facebook Ads yourself and burned through budget with no system and nobody to optimize it",
  ];
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow">
        <FadeUp><p className="eyebrow">WHY CONTRACTORS WASTE MONEY ON MARKETING</p></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-large text-primary-foreground max-w-3xl">
            The real reason your marketing isn't bringing in jobs
          </h2>
        </FadeUp>
        <div className="mt-10 md:mt-14 space-y-4 md:space-y-6">
          {problems.map((p, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.08}>
              <div className="border-l-4 border-primary bg-navy-deep rounded-r-lg p-5 md:p-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                {p}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. SERVICES
   ═══════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    { icon: "📸", title: "Instagram & Reels Management", desc: "3–5 posts/week showing your work, team, and expertise. Before/after content homeowners love and share." },
    { icon: "📣", title: "Meta Ads (Facebook + Instagram)", desc: "Targeted ads to homeowners in your service area. We set up, run, and optimize every campaign." },
    { icon: "🎨", title: "Content & Carousel Design", desc: "Professional carousels that build trust and position you as the contractor of choice before they call." },
    { icon: "🔍", title: "Google Ads Management", desc: "Emergency and renovation keywords that put you in front of homeowners actively searching for contractors in your city." },
    { icon: "🏠", title: "Landing Page Design", desc: "A dedicated page built to convert ad traffic into booked estimates." },
    { icon: "📊", title: "Monthly Performance Reports", desc: "Leads, cost per lead, ROAS — clear reports every month." },
  ];
  return (
    <section className="section-white section-padding">
      <div className="container-narrow">
        <FadeUp><p className="eyebrow text-muted-foreground">WHAT AP DIGITAL DOES FOR CONTRACTORS</p></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-large text-secondary max-w-3xl">
            The complete marketing engine for BC contractors
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-4 text-muted-foreground max-w-xl text-base md:text-lg">
            We handle everything digital so you can focus on the job site.
          </p>
        </FadeUp>
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.06}>
              <div className="rounded-xl border border-secondary/10 bg-secondary/[0.03] p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. LOCATIONS
   ═══════════════════════════════════════════ */
function LocationsSection() {
  const locations = [
    "Metro Vancouver", "Surrey", "Burnaby", "Langley",
    "Abbotsford", "Coquitlam", "Maple Ridge", "Pitt Meadows",
    "Richmond", "North Vancouver", "Chilliwack", "Kelowna",
  ];
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow text-center">
        <FadeUp><p className="eyebrow">WHERE WE WORK</p></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-large text-primary-foreground">We serve contractors across BC</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {locations.map((l) => (
              <span key={l} className="rounded-full border border-primary/40 px-5 py-2 text-sm font-semibold text-primary-foreground">
                {l}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. OFFER STACK
   ═══════════════════════════════════════════ */
function OfferStack() {
  const items = [
    { num: 1, title: "Instagram & Reels Management", desc: "3–5 posts/week of professional job site content targeted to BC homeowners" },
    { num: 2, title: "Meta Lead Ads", desc: "Geo-targeted ads to homeowners in your service area. Managed and optimized weekly." },
    { num: 3, title: "Content Creation & Carousels", desc: "Professional graphics that show your work quality and build credibility" },
    { num: 4, title: "Monthly Strategy Calls with Arjun", desc: "Direct calls with the founder. Review results, plan next month." },
    { num: 5, title: "Contractor Landing Page", desc: "High-converting page to turn ad traffic into booked estimate calls" },
    { num: 6, title: "Monthly Performance Reports", desc: "No jargon. Just your numbers and what we're doing next to improve them." },
  ];
  const valueLines = [
    { name: "Instagram Management", price: "$1,200/mo" },
    { name: "Meta Ads Management", price: "$800/mo" },
    { name: "Content Creation", price: "$600/mo" },
    { name: "Strategy Calls", price: "$400/mo" },
    { name: "Landing Page", price: "$1,500 one-time" },
  ];
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow">
        <FadeUp><p className="eyebrow">EVERYTHING YOU GET</p></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-large text-primary-foreground max-w-3xl">
            One agency. One system. Everything your contracting business needs online.
          </h2>
        </FadeUp>

        <div className="mt-10 md:mt-14 space-y-4">
          {items.map((it, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.06}>
              <div className="flex gap-4 md:gap-6 items-start bg-navy-deep rounded-xl p-5 md:p-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-black text-primary-foreground text-sm">
                  {it.num}
                </span>
                <div>
                  <h3 className="font-bold text-primary-foreground text-base md:text-lg">{it.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{it.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-12 md:mt-16 rounded-2xl border border-primary/20 bg-navy-deep p-6 md:p-10 max-w-xl mx-auto">
            <div className="space-y-3 mb-6">
              {valueLines.map((v) => (
                <div key={v.name} className="flex justify-between text-sm text-muted-foreground">
                  <span>{v.name}</span>
                  <span className="line-through">{v.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-primary/20 pt-4 mb-2">
              <div className="flex justify-between text-sm text-muted-foreground mb-1">
                <span>TOTAL VALUE:</span>
                <span className="line-through">$4,500/mo</span>
              </div>
              <div className="flex justify-between text-lg md:text-xl font-black text-primary-foreground">
                <span>YOUR INVESTMENT:</span>
                <span className="text-primary">Starting at $997/mo</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-8 max-w-md mx-auto">
            <CTAButton text="GET STARTED — BOOK A FREE CALL →" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. WHO THIS IS FOR
   ═══════════════════════════════════════════ */
function WhoThisIsFor() {
  const yes = [
    "You're a contractor or construction company in BC",
    "You want inbound leads beyond just word of mouth",
    "You're ready to invest in marketing for real ROI",
    "You want one person handling everything personally",
    "You want to see leads within the first 30 days",
  ];
  const no = [
    "You want the cheapest option regardless of results",
    "You want to approve every single post before it goes up",
    "You have zero budget for paid ads",
    "You're not serious about growing this year",
    "You expect overnight results with no time investment",
  ];
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="headline-large text-primary-foreground text-center mb-10 md:mb-14">This is for you if...</h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <FadeUp delay={0.1}>
            <div className="bg-navy-deep rounded-2xl p-6 md:p-8 space-y-4">
              {yes.map((t) => (
                <div key={t} className="flex gap-3 items-start text-sm md:text-base text-primary-foreground">
                  <span className="text-green flex-shrink-0 mt-0.5">✅</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="bg-navy-deep rounded-2xl p-6 md:p-8 space-y-4">
              {no.map((t) => (
                <div key={t} className="flex gap-3 items-start text-sm md:text-base text-muted-foreground">
                  <span className="flex-shrink-0 mt-0.5">❌</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. TESTIMONIALS
   ═══════════════════════════════════════════ */
function Testimonials() {
  const cards = [
    {
      text: "We were struggling to get consistent work in the slower months. Within 3 weeks of running ads with AP Digital, we had 9 new leads for kitchen renos. Best decision we made.",
      name: "Mike T.",
      role: "General Contractor — Surrey, BC",
    },
    {
      text: "Arjun actually picks up the phone and explains what's working. We've been month-to-month for 8 months now because the leads keep coming.",
      name: "Raj P.",
      role: "Plumber — Langley, BC",
    },
    {
      text: "I was skeptical about paying for ads. AP Digital started us at $500/month and we made it back in the first job. Now we're at $1,200/month and fully booked.",
      name: "David C.",
      role: "Electrician — Burnaby, BC",
    },
  ];
  return (
    <section className="section-white section-padding">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="headline-large text-secondary text-center mb-10 md:mb-14">What BC Contractors Are Saying</h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="rounded-2xl border border-secondary/10 bg-background p-6 md:p-8 border-t-4 border-t-primary shadow-sm">
                <div className="text-primary text-lg mb-4">★★★★★</div>
                <p className="text-secondary/80 text-sm md:text-base leading-relaxed mb-6">"{c.text}"</p>
                <p className="font-bold text-secondary text-sm">— {c.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{c.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   9. FAQ ACCORDION
   ═══════════════════════════════════════════ */
import { useState } from "react";

function FAQSection() {
  const faqs = [
    { q: "How fast will I see leads?", a: "Most contractor clients see first leads within 2 weeks of launching Meta Ads. Organic Instagram builds over 60-90 days. We track everything weekly." },
    { q: "Do I have to sign a long-term contract?", a: "No lock-in. Month-to-month. Cancel with 30 days notice. Results keep you here — not a contract." },
    { q: "Will Arjun personally manage my account?", a: "Yes. No account managers, no junior staff, no outsourcing. Arjun handles every client personally. You text him directly." },
    { q: "What's the minimum ad budget I need?", a: "We recommend minimum $500/month in ad spend. Most contractor clients start at $500-$1,500/month and scale up as ROI is proven." },
    { q: "What types of contractors do you work with in BC?", a: "General contractors, renovation companies, landscapers, home builders across Metro Vancouver, Surrey, Langley, Burnaby, Coquitlam, Abbotsford, Maple Ridge, Pitt Meadows and all of BC." },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-dark section-padding">
      <div className="container-narrow max-w-3xl">
        <FadeUp>
          <h2 className="headline-large text-primary-foreground text-center mb-10 md:mb-14">
            Straight answers. No sales fluff.
          </h2>
        </FadeUp>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.06}>
              <div className="rounded-xl bg-navy-deep overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left text-primary-foreground font-bold text-sm md:text-base hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
                >
                  <span>{f.q}</span>
                  <span className="text-primary text-xl ml-4 flex-shrink-0 transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: open === i ? "300px" : "0" }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   10. GUARANTEE
   ═══════════════════════════════════════════ */
function Guarantee() {
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow text-center max-w-2xl">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full bg-green/10 border border-green/30 px-5 py-2 text-green font-bold text-sm mb-6">
            🛡️ 30-DAY RESULTS GUARANTEE
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-large text-primary-foreground">No results in 30 days? Month 2 is on us.</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            If we don't generate measurable results — leads, booked estimates, or real Instagram growth — in your first 30 days, your second month is completely free.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   11. FINAL CTA + CALENDLY
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="section-dark section-padding">
      <div className="container-narrow text-center">
        <FadeUp>
          <p className="text-amber font-bold text-sm md:text-base mb-6">
            ⚡ Only 3 new contractor spots open this month in BC
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="headline-mega text-primary-foreground max-w-4xl mx-auto">
            STOP WATCHING COMPETITORS BOOK YOUR JOBS.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Book a free 20-minute strategy call. We'll audit your online presence, show you what competitors are doing, and give you a custom game plan — whether you work with us or not.
          </p>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mt-3 text-muted-foreground text-xs md:text-sm">
            No commitment. No pressure. Arjun personally reviews your business before the call.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 md:mt-14 calendly-container">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/apdigital-core/30min?background_color=080d1a&text_color=ffffff&primary_color=6c47ff"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CITIES WE SERVE
   ═══════════════════════════════════════════ */
function CitiesWeServe() {
  return (
    <section className="section-white section-padding">
      <div className="container-narrow text-center max-w-3xl">
        <FadeUp>
          <h2 className="headline-large text-secondary">Contractor Marketing Across Metro Vancouver &amp; BC</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            AP Digital works with contractors in Surrey, Langley, Burnaby, Coquitlam, Abbotsford, Pitt Meadows, Maple Ridge, Port Coquitlam, New Westminster, and across BC.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-navy-deep py-8 text-center text-muted-foreground text-xs md:text-sm space-y-2">
      <p>© 2026 AP Digital — Pitt Meadows, BC Canada</p>
      <p>apdigital.core@gmail.com</p>
      <p>
        <a href="https://ap-digital.ca" className="underline hover:text-primary-foreground transition-colors duration-200">
          ← Back to AP Digital | Full-Service Digital Marketing
        </a>
      </p>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MOBILE STICKY BAR
   ═══════════════════════════════════════════ */
function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-primary text-primary-foreground font-extrabold text-center py-4 px-4 text-sm"
      >
        📞 Book Your Free Strategy Call →
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div className="pb-14 md:pb-0">
      <Hero />
      <LeadForm />
      <SocialProof />
      <ProblemSection />
      <ServicesSection />
      <Testimonials />
      <LocationsSection />
      <OfferStack />
      <WhoThisIsFor />
      <FAQSection />
      <Guarantee />
      <FinalCTA />
      <CitiesWeServe />
      <LeadForm />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
