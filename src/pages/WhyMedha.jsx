import heroImage from "../assets/photos/whymedhaClinic/whymedha1.png";
import whyMedha2 from "../assets/photos/whymedhaClinic/whymedha2.jpg";
import whyMedha3 from "../assets/photos/whymedhaClinic/whymedha3.jpg";
import whyMedha4 from "../assets/photos/whymedhaClinic/whymedha4.jpg";
import whyMedha5 from "../assets/photos/whymedhaClinic/whymedha5.jpg";
import whyMedha6 from "../assets/photos/whymedhaClinic/whymedha6.png";
import whyMedha7 from "../assets/photos/whymedhaClinic/whymedha7.jpg";
import whyMedha8 from "../assets/photos/whymedhaClinic/whymedha8.jpg";
import whyMedha9 from "../assets/photos/whymedhaClinic/whymedha9.png";
import whyMedha10 from "../assets/photos/whymedhaClinic/whymedha10.png";
import whyMedha11 from "../assets/photos/whymedhaClinic/whymedha11.png";
import { TbMessages } from "react-icons/tb";
import { RiFocus3Fill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";


const WhyMedha = () => {
  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3'] text-slate-900">
      <main>
        <section className="relative -mt-25 sm:-mt-30">
          <div
            className="relative h-[520px] overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-10 sm:h-[860px] sm:px-10 sm:py-14"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,32,64,0.15)_0%,rgba(9,50,95,0.55)_45%,rgba(15,104,176,0.75)_80%)]"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center text-center text-white">
              <h1 className="font-poppins text-[30px] font-semibold leading-[1.6] drop-shadow-[0_6px_12px_rgba(15,23,42,0.35)] sm:text-5xl">
                <span className="block">Because Process Should Be</span>
                <span className="block">
                  <span className="text-[#79c2ff]">Gentle</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-[#79c2ff]">Honest</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-white">and</span>{" "}
                  <span className="text-[#79c2ff]">Holistic</span>
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-2xl">
                MedhaClinic supports the body&apos;s natural healing while
                standing beside patients and families.
              </p>
              <button
                className="relative top-10 overflow-hidden inline-flex items-center justify-center
         px-14 py-4
         text-white text-2xl font-semibold tracking-wide
         rounded-full
         bg-gradient-to-br from-[#0b4f73]/90 via-[#1f7aa8]/80 to-[#2fa4d6]/90
         backdrop-blur-md
         border border-white/20
         shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),
                 inset_0_-2px_6px_rgba(0,0,0,0.35),
                 0_18px_40px_rgba(0,0,0,0.35)]
         transition-all duration-300
         focus:outline-none"
              >
                {/* <!-- Glass highlight --> */}
                <span
                  className="absolute -top-1/2 left-0 w-full h-full
           bg-gradient-to-b from-white/40 to-transparent
           opacity-50 blur-xl"
                ></span>

                {/* <!-- Light sweep on hover --> */}
                {/* <span
    class="absolute top-0 left-[-120%] w-full h-full
           bg-gradient-to-r from-transparent via-white/40 to-transparent
           skew-x-12
           transition-all duration-00
           hover:left-[120%]"
  ></span> */}

                {/* <!-- Text --> */}
                <span class="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  Discover
                </span>
              </button>
            </div>
            <svg
              className="pointer-events-none absolute bottom-0 left-0 h-12 w-full sm:h-16 sm:hidden"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
            <svg
              className="pointer-events-none absolute bottom-0 left-0 hidden h-16 w-full sm:block"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 L1440,120 L0,130 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-[#159EEC] font-bold tracking-wide mb-5">DISCOVER US</p>
            <p className="font-yeseva text-[36px] font-normal text-[#1F2B6C] antialiased sm:text-3xl">
              Why Medha Clinic
            </p>
            <div className="mt-8 grid items-start gap-8">
              <div className="grid gap-5 mb-20 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-tl-[160px]  bg-white shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
                  {/* Image */}
                  <img
                    src={whyMedha2}
                    alt="Busy hospital environment"
                    className="h-full w-full object-cover"
                  />

                  {/* Bottom-left gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Label */}
                  <span className="absolute bottom-4 left-35 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#1f8fe6]" />
                    Over Hospital
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-br-[150px] bg-white shadow-[0_18px_30px_rgba(15,23,42,0.12)] sm:translate-y-15">
                  <img
                    src={whyMedha3}
                    alt="Medha Clinic consultation"
                    className="h-full w-full object-cover"
                  />

                  {/* Bottom-left gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <span className="absolute bottom-4 left-35 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#1f8fe6]" />
                    Over Medha Clinic
                  </span>
                </div>
              </div>
              <div className=" relative">
                <h2
                  className="absolute transform translate-x-1/150 -top-25 font-yeseva font-normal text-[36px] font-medium leading-[48px] text-[#1F2B6C]  max-w-full
             lg:max-w-[580px]
             xl:max-w-[580px]
             sm:text-3xl"
                >
                  Why Many People Feel <br />{" "}
                  <span
                    className="block
               max-w-full lg:max-w-[680px] xl:max-w-[820px]
               text-[36px] sm:text-[32px]
               tracking-wide"
                  >
                    Disconnected from Hospital Care
                  </span>
                </h2>
                <p
                  className="mt-4
             font-worksans font-medium
             text-2xl leading-[30px] tracking-normal
             text-[#000000]"
                >
                  Long waiting hours, rushed conversations, unfamiliar
                  environments, and a constant focus on disease can leave people
                  feeling anxious rather than supported.
                </p>

                <p
                  className="mt-4
             font-worksans font-normal
             text-2xl leading-[30px] tracking-normal
             text-[#000000]"
                >
                  Especially in long-term and chronic conditions, care can begin
                  to feel impersonal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* challenges in long-term and chronic care */}
        <section className="relative h-auto overflow-hidden bg-gradient-to-b from-[#ffffff] via-white to-[#089EF9] px-4 py-12 md:h-230 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
          <svg
            className="absolute bottom-0 left-0 h-15 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>

            {/* Heading */}
  <h1 className="mb-10 max-w-2xl font-yeseva text-[36px] leading-[48px] text-[#1f2b6c]">
    Challenges in Long-Term <br /> and Chronic Care
  </h1>
           
            {/* Image + Cards wrapper */}
  <div className="relative mx-auto max-w-6xl">

                 {/* Image */}
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
        src={whyMedha4}
        alt="Hospital waiting area"
        className="h-[420px] w-full object-cover"
      />
                  </div>

                 {/* card container */}
                    <div className="h-[150px] absolute -bottom-30 left-1/2 flex w-full max-w-6xl -translate-x-1/2 gap-16 px-4">

                   {/* Card */}
      {[
        { icon: <TbMessages />, text: "Limited time for meaningful conversations" },
        { icon: <RiFocus3Fill />, text: "Focus on symptoms over the whole person" },
        { icon: <FaUserDoctor />, text: "Little guidance on nutrition, lifestyle, or emotional well-being" },
        { icon: <GrLineChart />, text: "Patients moving between specialists without continuity" },
      ].map((item, i) => (
        <div
          key={i}
          className="relative flex flex-1 flex-col items-center rounded-xl bg-[#1f2b6c] px-4 pb-6 pt-10 text-center text-white shadow-lg"
        >
          {/* Icon bubble */}
          <div className="text-2xl absolute -top-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#089EF9] shadow-md">
            {item.icon}
          </div>

          <p className=" mt-2 text-sm  w-40 h-30 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
           </div>

             </div>
             </div>
        </section>


        {/* a different way to support healing */}
        <section className="relative bg-white px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[26px] border-4 border-[#2aa1f3] bg-white ">
              <img
                src={whyMedha5}
                alt="Doctor and patient consultation at Medha Clinic"
                className="h-[280px] w-full object-cover sm:h-[500px]"
              />
              {/* <div className="pointer-events-none absolute right-8 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-full bg-[#2aa1f3]/40 blur-2xl sm:block" /> */}
            </div>

            <div className="absolute pointer-events-none p-20 -right-[-320px] top-1/2 hidden h-24 w-24 -translate-y-1/3 rounded-full bg-white  sm:block">
                <div className="absolute p-15  inset-6 rounded-full bg-[#2aa1f3]/100 blur-md" />
              </div>

            <div className="mt-8 max-w-4xl">
              <h2 className="font-yeseva text-[28px] font-normal leading-[38px] text-[#1F2B6C] sm:text-[36px] sm:leading-[48px]">
                A Different Way of Supporting Healing
              </h2>
              <ul className="mt-4 space-y-7 text-[15px] leading-[1.9] text-slate-700 sm:text-[18px]">
                {[
                  "At MedhaClinic, we begin by listening.",
                  "We look beyond diagnoses and reports to understand the person—their lifestyle, emotions, fears, and hopes.",
                  "Our approach integrates natural therapies, nutritional guidance, lifestyle support, and emotional care to help people feel stronger, calmer, and more in control.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-3 w-3 pr-3 rounded-full bg-[#2aa1f3]"/>
                    <span className="sm:tracking-widest sm:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* custom button */}
            <div className="mt-8 flex flex-wrap gap-4 justify-between sm:justify-between">
              {[
                {
                  label: "Nature-aligned therapies",
                  icon: '🌿',
                },
                {
                  label: "Mind–body balance",
                  icon: '🧠',
                },
                {
                  label: "Time to listen",
                  icon: '🤝'
                },
                {
                  label: "Personal guidance, not protocols",
                  icon: '⌚'
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[14px] font-semibold text-slate-800 shadow-[0_6px_16px_rgba(15,23,42,0.08)] sm:text-[15px]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-none border-slate-300 bg-white text-[#1f8fe6]">
                    {/* <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    > */}
                      {item.icon}
                    {/* </svg> */}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* our Principles of care section+ */}
        <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-yeseva text-[28px] font-normal leading-[38px] text-[#1F2B6C] sm:text-[36px] sm:leading-[48px]">
              Our Principles of Care
            </h2>

            <div className="mt-8 rounded-[36px] border border-slate-300 bg-[#eef7ff] p-4 shadow-[0_18px_30px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={whyMedha6}
                    alt="Medha Clinic care team"
                    className="h-[260px] w-full object-cover sm:h-[560px]"
                  />
                </div>

                <div className="h-full">
                  <ul className="space-y-5 text-[16px] leading-[1.7] text-[#000000] sm:text-[18px] ">
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1f2b6c] shadow-[0_0_0_6px_rgba(31,143,230,0.15)]" />
                      <span>
                        Guiding every decision with honesty, responsibility,
                        and respect for medical science
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1f2b6c] shadow-[0_0_0_6px_rgba(31,143,230,0.15)]" />
                      <span>We believe care must always be honest and responsible.</span>
                    </li>
                  </ul>

                  <p className="mt-6 text-[16px] leading-[1.7] text-slate-900 sm:text-[18px]">
                    <span className="font-semibold text-slate-900">MedhaClinic</span>{" "}
                    offers supportive, natural care that complements medical
                    treatment. We do not replace doctors, promise cures, or
                    encourage patients to stop prescribed care. Every choice we
                    make is guided by safety, clarity, and respect for medical
                    science.
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center translate-x-6/5 gap-2 rounded-full bg-gradient-to-r from-[#52BBFB] to-[#007CC8] px-6 py-2.5 text-[15px] font-semibold text-white  hover:bg-[#1491e7]"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* What we avoid */}
        <section className="relative h-auto overflow-hidden bg-gradient-to-b from-[#ffffff] via-white to-[#089EF9] px-4 py-12 md:h-190 md:px-6 md:py-48 md:mb-8">
          <div className="mx-auto max-w-6xl">
             <svg
            className="absolute bottom-0 left-0 h-15 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
                 
            <h2 className="text-center font-yeseva text-[28px] font-normal leading-[38px] text-[#1F2B6C] sm:text-[36px] sm:leading-[48px]">
              What We Avoid
            </h2>

            <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { image: whyMedha7, label: "No Pressure", alt: "Quiet moment by the window" },
                { image: whyMedha8, label: "No Guarantees", alt: "Person stretching outdoors" },
                { image: whyMedha9, label: "No Exaggeration", alt: "Person reviewing documents at a desk" },
              ].map((item,index,arr) => {
                const isFirst = index === 0;
  const isLast = index === arr.length - 1;
                return (<div
                  key={item.label}
                  className={`z-10 overflow-hidden  bg-white shadow-[0_18px_30px_rgba(15,23,42,0.12)]   ${isFirst ? "rounded-tl-[38px]" : ""}
        ${isLast ? "rounded-tr-[38px]" : ""}`}
                >
                  <div className="relative h-[240px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="bg-[#1096e8] px-6 py-4 text-center text-[20px] font-semibold text-white">
                    {item.label}
                  </div>
                </div>)
})}

              <div className="h-[280px] w-[340px] absolute -translate-x-1/6 -top-8 rounded-[28px]   bg-gradient-to-br
    from-white/30
    via-sky-200/20
    to-blue-300/20

    backdrop-blur-2xl
    border border-white/40

    shadow-xl shadow-blue-500/10">
                
              </div>
                <div className="h-[240px] w-[340px] absolute -right-10 top-20  rounded-[28px]  bg-gradient-to-br
    from-white/30
    via-sky-200/20
    to-blue-300/20

    backdrop-blur-2xl
    border border-white/40

    shadow-xl shadow-blue-500/10">
          
              </div>
            </div>
          </div>
        </section>


        {/*  Why This Matters for Patients */}
        <section className="relative bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-15 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="font-yeseva text-[28px] font-normal leading-[38px] text-[#1F2B6C] sm:text-[36px] sm:leading-[48px]">
                Why This Matters for Patients
              </h2>
              <p className="mt-4 text-[24px] leading-[1.5] text-[#000000] sm:font-semibold">
                When someone is facing cancer or a long-term illness, they are
                often in a vulnerable place—emotionally, physically, and
                mentally. In these moments, clarity and honesty matter as much
                as care itself.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "It Protects Patients from False Hope",
                    body: "Unclear or exaggerated claims can create confusion or unrealistic expectations. By clearly defining what MedhaClinic offers—and what it does not—patients can make decisions based on truth, not pressure.",
                  },
                  {
                    title: "It Respects Patient Choice",
                    body: "When patients understand the role of supportive, natural care, they are empowered to choose what feels right for them. Ethical clarity allows patients to combine medical treatment with complementary care confidently, without fear or guilt.",
                  },
                  {
                    title: "It Builds Trust in Care",
                    body: "Trust grows when care providers are transparent. Knowing that MedhaClinic does not replace doctors or promise cures helps patients feel safe, respected, and supported rather than sold to.",
                  },
                  {
                    title: "It Encourages Safer Healing Journeys",
                    body: "Clear boundaries reduce risk. Patients are less likely to delay necessary medical care when they understand that natural support is meant to work alongside, not instead of, hospital treatment.",
                  },
                  {
                    title: "It Supports Emotional Well-Being",
                    body: "Feeling heard and guided—without manipulation—reduces anxiety. Patients can focus on their well-being, lifestyle, and emotional balance rather than worrying about making the “wrong” choice.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[18px] font-semibold text-[#1f8fe6] sm:text-[23px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.8] text-[#000000] sm:text-[18px] sm:font-medium">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-48">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                <img
                  src={whyMedha10}
                  alt="Doctor explaining care options to a patient"
                  className="h-[240px] w-full object-cover sm:h-[240px]"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                <img
                  src={whyMedha11}
                  alt="Medha Clinic care team"
                  className="h-[240px] w-full object-cover sm:h-[240px]"
                />
              </div>

              <div className="rounded-2xl  p-6">
                <ul className="space-y-3 text-[15px] font-semibold text-[#000000] sm:text-[16px]">
                  {[
                    "keeps patients safe",
                    "protects dignity",
                    "supports informed choice",
                    "builds real trust",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e5f3ff] text-[#1f8fe6]">
                        <span className="h-2 w-2 rounded-full bg-[#1f8fe6]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default WhyMedha;
