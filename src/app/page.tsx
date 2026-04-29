"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
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
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Inline Roofing LLC"
      button={{
        text: "Free Quote",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="INLINE ROOFING LLC"
      description="Crafting industrial-grade roofing solutions with a commitment to luxury craftsmanship, durability, and unmatched professional care."
      buttons={[
        {
          text: "Get Your Free Quote",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15456.jpg",          imageAlt: "Luxury Metal Roofing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-beautiful-wooden-house-with-decorations-windows-near-sea_181624-17764.jpg",          imageAlt: "Architectural Roofing Excellence"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-metal-building_1122-1322.jpg",          imageAlt: "Durable Industrial Metal Roofing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-wooden-texture-background_24837-663.jpg",          imageAlt: "Precision Roof Construction"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg",          imageAlt: "Premium Residential Roofing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248310.jpg",          imageAlt: "Inline Roofing Project Finish"},
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Built on Professional Integrity"
      tag="Our Credentials"
      metrics={[
        {
          id: "1",          value: "4.6",          description: "Google Rating (11+ Reviews)"},
        {
          id: "2",          value: "Full",          description: "Workers Compensation Insured"},
        {
          id: "3",          value: "Expert",          description: "Metal & General Roofing"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Inline Roofing"
      title="A Crew Led by Excellence"
      description="Michael and the team at Inline Roofing LLC bring professional, polite, and diligent craftsmanship to every site. We focus on hard work and honest communication, ensuring your roof is built to last while looking exceptional."
      subdescription="With competitive pricing and a commitment to safety, we are your local experts for high-end metal and traditional roofing."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-low-angle-view-engineer-architect-shaking-hands_23-2148233784.jpg"
      mediaAnimation="slide-up"
      icon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Metal Roofing",          description: "Industrial-grade metal roofing for maximum longevity and energy efficiency.",          buttonIcon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-modern-architectural-design_181624-14972.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
        {
          title: "Roof Replacement",          description: "Full-service replacement for aging roofs with precision and care.",          buttonIcon: Home,
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15456.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
        {
          title: "Storm Repair",          description: "Rapid response to storm-damaged roofs to secure your investment.",          buttonIcon: ShieldAlert,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-low-angle-view-engineer-architect-shaking-hands_23-2148233784.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
        {
          title: "New Construction",          description: "Expert roof installation for new build homes and properties.",          buttonIcon: Hammer,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-high-fiving-each-other-beer-pong-game_23-2149431325.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
        {
          title: "Inspections",          description: "Comprehensive diagnostic checks to identify potential issues early.",          buttonIcon: Search,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-354.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
        {
          title: "Maintenance",          description: "Preventative maintenance to ensure years of peak performance.",          buttonIcon: Wrench,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-woman_23-2148352570.jpg",          imageAlt: "Low angle shot of a modern architectural design"},
      ]}
      title="Premium Roofing Services"
      description="Our comprehensive range of roofing solutions, designed to withstand the elements while maintaining a sophisticated aesthetic."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "1. Consultation",          content: "Schedule your free site assessment with Michael."},
        {
          id: "2",          title: "2. Competitive Quote",          content: "Receive a transparent, no-hidden-fee pricing plan."},
        {
          id: "3",          title: "3. Expert Craftsmanship",          content: "Our crew executes your project safely and professionally."},
        {
          id: "4",          title: "4. Final Inspection",          content: "A final check ensures everything meets our luxury standards."},
      ]}
      sideTitle="How We Work"
      sideDescription="Experience a frictionless, transparent roofing process from initial consultation to the final site clean-up."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-high-fiving-each-other-beer-pong-game_23-2149431325.jpg"},
        {
          id: "2",          name: "Mark D.",          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-354.jpg"},
        {
          id: "3",          name: "Elena R.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-woman_23-2148352570.jpg"},
        {
          id: "4",          name: "Kevin M.",          imageSrc: "http://img.b2bpic.net/free-photo/couple-home-enjoying-life_23-2149167740.jpg"},
        {
          id: "5",          name: "Jessica L.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-inside-their-new-home-holding-house-plans_23-2148895457.jpg"},
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
      description="Ready to elevate your home with Inline Roofing? Reach out today for a consultation."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name"},
        {
          name: "email",          type: "email",          placeholder: "Your Email"},
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number"},
      ]}
      textarea={{
        name: "message",        placeholder: "Describe your roofing project...",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13101.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="INLINE ROOFING"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#services"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get Quote",              href: "#contact"},
            {
              label: "Email",              href: "mailto:hello@inlineroofing.com"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Inline Roofing LLC. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
