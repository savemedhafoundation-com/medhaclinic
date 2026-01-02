import logo from "../assets/photos/homepageImage/Asset 23.png";
import facebookIcon from "../assets/social_icons/Facebook F.png";
import instagramIcon from "../assets/social_icons/Instagram Circle.png";
import linkedinIcon from "../assets/social_icons/LinkedIn 2.png";
import whatsappIcon from "../assets/social_icons/WhatsApp.png";
import youtubeIcon from "../assets/social_icons/YouTube Logo.png";
import footerPattern from "../assets/photos/homepageImage/Object 28.png";

const Footer = () => {
  const exploreLinks = [
    "Home",
    "Why Medha Clinic",
    "Treatment Process",
    "Consultation",
    "About Us",
    "Contact",
  ];

  const legalLinks = [
    "Medical disclaimer",
    "Patient consent",
    "Privacy policy",
    "Terms of care",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/savemedhafoundation",
      icon: facebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/savemedhafoundation/",
      icon: instagramIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/save-medha-foundation/",
      icon: linkedinIcon,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919800808595",
      icon: whatsappIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@savemedhafoundation7959",
      icon: youtubeIcon,
    },
  ];

  return (
    <footer
      className="relative h-auto overflow-hidden bg-gradient-to-b from-[#1f8fe6] via-[#1b5fb8] to-[#1f2b6c] text-white"
    >
      <img
        src={footerPattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom translate-y-[80px] scale-100  mix-blend-screen"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-6 md:px-6 md:pt-20 md:pb-8">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-[22px] font-bold leading-[1.15] sm:text-6xl">
            Connect with Medha Clinic
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[12px] leading-[1.6] text-white sm:mt-8 sm:text-[22px]">
            Better health begins with a simple hello. Our team is ready to
            collaborate with you to reach your wellness goals by phone, email,
            or visit us in person. We look forward to seeing you.
          </p>
          <button
            type="button"
            className="mt-6 rounded-md cursor-pointer bg-white px-5 py-3 text-[14px] font-semibold text-slate-900 shadow-sm hover:bg-[#e2f0f8] sm:px-8 sm:py-5 sm:text-[25px]"
          >
            Talk to Our Team
          </button>
        </div>

        <div className="mt-6 h-0.5 bg-white/100 md:mt-8" />

        <div className="mt-6 grid gap-6 text-[12px] md:mt-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8 md:text-sm md:px-13">
          <div>
            <div className="relative inline-flex items-center rounded-md bg-transparent py-1 translate-y-0 md:py-2 md:-translate-y-7">
              <img src={logo} alt="Medha Clinic logo" className="h-12 w-auto md:h-20" />
            </div>
            <p className="translate-x-0 text-[14px] font-bold leading-[1.4] text-white md:translate-x-4 md:text-[22px] md:leading-relaxed">
              <span className="block">We listen first.</span>
              <span className="block">We explain clearly.</span>
              <span className="block">We never force decisions.</span>
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold md:text-[20px]">Explore</h3>
            <div className="mt-3 flex flex-col gap-2 text-[12px] text-white md:text-[15px]">
              {exploreLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-80">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold md:text-[20px]">Legal</h3>
            <div className="mt-3 flex flex-col gap-2 text-[12px] text-white md:text-[15px]">
              {legalLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-80">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold md:text-[20px]">Stay connected</h3>
            <div className="mt-3 space-y-2 text-[12px] text-white/90 md:text-[15px]">
              <p>+91 98008 08595</p>
              <p>info@medhaclinic.com</p>
              <p>12 B.T. Road, Near Dunlop L-9 Bus Stop, Baranagar, Kol-56</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col font-italic gap-3 text-[12px] text-white/90 sm:flex-row sm:items-center sm:justify-between md:mt-8 md:gap-4 md:text-lg">
          <a href="#" className="font-semibold hover:text-white px-2 ">
            Privacy policy
          </a>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full fo transition hover:opacity-50 px-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.icon} alt={item.name} className="h-6 w-6 md:h-8 md:w-7" />
              </a>
            ))}
          </div>
          <a href="#" className="font-semibold hover:text-white px-2">
            Terms of care
          </a>
        </div>

        <div className="mt-6 rounded-md bg-white px-4 py-2 text-center text-[10px] font-medium text-black md:text-sm">
          Copyright 2025 Medha Clinic. All rights reserved. Powered by Medha
          Clinic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
