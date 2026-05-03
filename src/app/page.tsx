"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { ShieldCheck, Zap, Home, ShieldAlert, Hammer, Search, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Inline Roofing LLC"
      button={{ text: "Free Quote", href: "#contact" }}
    />
  </div>

  <div id="hero-gallery" data-section="hero-gallery">
      <HeroBillboardGallery
        title="Luxury Roofing Gallery"
        description="A showcase of our premium industrial and residential roofing craftsmanship."
        background={{ variant: "sparkles-gradient" }}
        mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15456.jpg?_wi=1", imageAlt: "Roofing showcase 1" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-metal-building_1122-1322.jpg", imageAlt: "Roofing showcase 2" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg", imageAlt: "Roofing showcase 3" }
        ]}
      />
  </div>

  <div id="hero-logo" data-section="hero-logo">
      <HeroLogo
        logoText="INLINE ROOFING LLC"
        description="Unmatched professional care for all your roofing needs."
        buttons={[{ text: "Get Quote", href: "#contact" }]}
        imageSrc="http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15456.jpg?_wi=1"
      />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Built on Professional Integrity"
      tag="Our Credentials"
      metrics={[
        { id: "1", value: "4.6", description: "Google Rating (11+ Reviews)" },
        { id: "2", value: "Full", description: "Workers Compensation Insured" },
        { id: "3", value: "Expert", description: "Metal & General Roofing" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Inline Roofing"
      title="A Crew Led by Excellence"
      description="Michael and the team at Inline Roofing LLC bring professional, polite, and diligent craftsmanship to every site."
      subdescription="With competitive pricing and a commitment to safety, we are your local experts for high-end metal and traditional roofing."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-low-angle-view-engineer-architect-shaking-hands_23-2148233784.jpg?_wi=1"
      mediaAnimation="slide-up"
      icon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Metal Roofing", description: "Industrial-grade metal roofing.", buttonIcon: Zap },
        { title: "Roof Replacement", description: "Full-service replacement.", buttonIcon: Home },
        { title: "Storm Repair", description: "Rapid storm response.", buttonIcon: ShieldAlert },
        { title: "New Construction", description: "Expert installation.", buttonIcon: Hammer },
        { title: "Inspections", description: "Comprehensive diagnostics.", buttonIcon: Search },
        { title: "Maintenance", description: "Preventative care.", buttonIcon: Wrench },
      ]}
      title="Premium Roofing Services"
      description="Comprehensive solutions for your roofing needs."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "1. Consultation", content: "Schedule your free site assessment." },
        { id: "2", title: "2. Competitive Quote", content: "Transparent, no-hidden-fee pricing." },
        { id: "3", title: "3. Expert Craftsmanship", content: "Professional execution." },
        { id: "4", title: "4. Final Inspection", content: "Luxury standards check." },
      ]}
      sideTitle="How We Work"
      sideDescription="A frictionless, transparent roofing process."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/friends-high-fiving-each-other-beer-pong-game_23-2149431325.jpg?_wi=2" },
        { id: "2", name: "Mark D.", imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-354.jpg?_wi=2" },
      ]}
      cardTitle="Client Voices"
      cardTag="4.6 Stars"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Request Your Quote"
      description="Ready to elevate your home?"
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13101.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="INLINE ROOFING"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#about" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }] },
      ]}
      copyrightText="© 2024 Inline Roofing LLC."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}