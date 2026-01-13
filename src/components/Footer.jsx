import logo from "../assets/photos/homepageImage/Asset 23.png";
import facebookIcon from "../assets/social_icons/Facebook F.png";
import instagramIcon from "../assets/social_icons/Instagram Circle.png";
import linkedinIcon from "../assets/social_icons/LinkedIn 2.png";
import whatsappIcon from "../assets/social_icons/WhatsApp.png";
import youtubeIcon from "../assets/social_icons/YouTube Logo.png";
import footerPattern from "../assets/photos/homepageImage/Object 28.png";
import { FaRedditAlien } from "react-icons/fa";

const renderSocialIcon = (item, className) => {
  if (typeof item.icon === "string") {
    return <img src={item.icon} alt={item.name} className={className} />;
  }

  const Icon = item.icon;
  return <Icon className={className} aria-hidden="true" focusable="false" />;
};

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
    {
      name: "Reddit",
      href: "https://www.reddit.com",
      icon: FaRedditAlien,
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
      <div className="relative z-10 mx-auto w-full max-w-screen-4xl px-4 sm:px-6 lg:px-10 xl:px-16 pt-12 pb-6 md:pt-20 md:pb-8">

  <div className="text-center">
    <h2 className="mx-auto max-w-2xl text-center font-['Playfair_Display'] text-[22px] font-bold leading-[1.15] sm:text-5xl">
      Connect with Medha Clinic
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-[1.6] text-white sm:mt-8 sm:text-[22px]">
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

  <div className="mt-6 h-0.5 bg-white md:mt-8" />

  <div className="mt-6 max-w-8xl text-[12px] md:mt-10 md:text-sm md:leading-[1.6] md:ml-40">
    <div className="flex flex-col gap-6 md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <div className="relative inline-flex items-center rounded-md bg-transparent py-1 md:py-2">
          <img src={logo} alt="Medha Clinic logo" className="h-12 w-auto md:h-20" />
        </div>

        <p className="mt-3 font-bold text-white leading-[1.4] md:mt-0 md:text-[22px] md:leading-relaxed">
          <span className="block text-[18px]">We listen first.</span>
          <span className="block text-[20px]">We explain clearly.</span>
          <span className="block text-[22px]">We never force decisions.</span>
        </p>
      </div>

      <div>
        <h3 className="text-[16px] font-semibold md:text-[20px]">Explore</h3>
        <div className="mt-3 flex flex-col gap-2 text-white md:text-[15px]">
          {exploreLinks.map((item) => (
            <a key={item} href="#" className="hover:opacity-80">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[16px] font-semibold md:text-[20px]">Legal</h3>
        <div className="mt-3 flex flex-col gap-2 text-white md:text-[15px]">
          {legalLinks.map((item) => (
            <a key={item} href="#" className="hover:opacity-80">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[16px] font-semibold md:text-[20px]">Stay connected</h3>

        <div className="mt-3 space-y-2 text-white/90 md:text-[15px]">
          <p>+91 98008 08595</p>
          <p>info@medhaclinic.com</p>
          <p>
            12 B.T. Road, Near Dunlop L-9 Bus Stop,
            Baranagar, Kol-56
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* <div className="mt-6 flex items-center justify-between text-[12px] font-semibold text-white/90 md:text-lg">
    <a href="#" className="hover:text-white">
      Privacy policy
    </a>

    <a href="#" className="hover:text-white">
      Terms of care
    </a>
  </div> */}

  <div className="mt-6 rounded-md bg-white px-4 py-2 text-center text-[10px] font-medium text-black md:text-sm">
    Copyright 2025 Medha Clinic. All rights reserved.
  </div>

</div>

    </footer>
  );
};

export default Footer;
