import Header from '../components/header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import talkBanner from '../assets/photos/Rectangle 463.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3'] text-slate-900">
      <Header />
      <main>
        <Hero />
        <section>
          <div className="relative">
            <div className="relative overflow-hidden bottom-20">
              <img
                src={talkBanner}
                alt="Clinician and patient handshake"
                className="h-full w-full object-cover sm:h-full"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md bg-[#1996e6] px-6 py-2.5 text-[30px] cursor-pointer hover:bg-[#17a5fd] font-semibold text-white shadow-md"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
