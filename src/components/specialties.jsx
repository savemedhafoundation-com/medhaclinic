const specialties = [
  'Cancer',
  'Neurology',
  'Oncology',
  'Bones',
  'Otorhinolaryngology',
  'Cardiovascular',
  'Pulmonology',
  'Renal Medicine',
  'Gastroenterology',
  'Urology',
  'Dermatology',
  'Gynaecology',
]

const toSlug = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const Specialties = () => {
  return (
    <div className="mx-auto mt-8 max-w-5xl rounded-[24px] border border-[#cfe6ff] bg-white px-4 py-6 shadow-[0px_0px_30px_0px_rgba(31,143,230,0.22)] shadow-blue-400 md:mt-10 md:rounded-[44px] md:px-6 md:py-10 sm:px-12">
      <div className="rounded-[20px] bg-[#edf5ff] p-px md:rounded-[32px]">
        <div className="grid grid-cols-2 gap-px rounded-[18px] bg-[#ffffff] md:rounded-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item) => {
            const href = `/specialties/${toSlug(item)}`

            return (
              <div
                key={item}
                href={href}
                className="group flex h-full w-full flex-col items-center justify-center gap-2 bg-white cursor-pointer px-3 py-4 text-center text-[13px] font-medium text-slate-700 border border-sky-100 transition-all duration-200 ease-out hover:bg-[#1f2b6c] hover:text-white hover:border-[#1f2b6c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8fe6] sm:min-h-[140px] md:gap-3 md:px-4 md:py-6 md:text-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6ff] text-[#1f8fe6] transition-colors group-hover:bg-white/15 group-hover:text-white md:h-20 md:w-20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 md:h-10 md:w-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-7-4.5-7-10a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 11c0 5.5-8 10-8 10z" />
                    <path d="M12 10v4" />
                    <path d="M10 12h4" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Specialties
