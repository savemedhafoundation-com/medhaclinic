import logo from "../assets/photos/Asset 36.png";
import facebookIcon from "../assets/social_icons/Facebook F.png";
import instagramIcon from "../assets/social_icons/Instagram Circle.png";
import linkedinIcon from "../assets/social_icons/LinkedIn 2.png";
import whatsappIcon from "../assets/social_icons/WhatsApp.png";
import youtubeIcon from "../assets/social_icons/YouTube Logo.png";
import footerPattern from "../assets/photos/Object 28.png";

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
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-8 ">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-semibold sm:text-3xl">
            Connect with Medha Clinic
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Better health begins with a simple hello. Our team is ready to
            collaborate with you to reach your wellness goals by phone, email,
            or visit us in person. We look forward to seeing you.
          </p>
          <button
            type="button"
            className="mt-6 rounded-md cursor-pointer bg-white px-6 py-2.5 text-sm font-semibold hover:bg-[#e2f0f8] text-slate-900 shadow-sm"
          >
            Talk to Our Team
          </button>
        </div>

        <div className="mt-8 h-0.5 bg-white/100" />

        <div className="mt-8 grid gap-8 text-sm md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="relative inline-flex items-center rounded-md bg-[linear-gradient(to_right,#ffffff_0px,#f2faff_120px,transparent_180px)] px-3 py-2">
              <img src={logo} alt="Medha Clinic logo" className="h-12 w-auto " />
            </div>
            <p className="mt-4 text-base font-semibold leading-relaxed text-white">
              <span className="block">We listen first.</span>
              <span className="block">We explain clearly.</span>
              <span className="block">We never force decisions.</span>
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Explore</h3>
            <div className="mt-3 flex flex-col gap-2 text-white">
              {exploreLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-80">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Legal</h3>
            <div className="mt-3 flex flex-col gap-2 text-white">
              {legalLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-80">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Stay connected</h3>
            <div className="mt-3 space-y-2 text-white/90">
              <p>+91 98008 08595</p>
              <p>info@medhaclinic.com</p>
              <p>12 B.T. Road, Near Dunlop L-9 Bus Stop, Baranagar, Kol-56</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="font-semibold hover:text-white">
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
                <img src={item.icon} alt={item.name} className="h-8 w-7" />
              </a>
            ))}
          </div>
          <a href="#" className="font-semibold hover:text-white">
            Terms of care
          </a>
        </div>

        <div className="mt-6 rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-slate-700">
          Copyright 2025 Medha Clinic. All rights reserved. Powered by Medha
          Clinic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
