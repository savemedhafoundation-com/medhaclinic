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
    <div className="mx-auto mt-10 max-w-5xl rounded-[44px] border border-[#cfe6ff] bg-white px-6 py-10 shadow-[0px_0px_30px_0px_rgba(31,143,230,0.22)] shadow-blue-400 sm:px-12">
      <div className="rounded-[32px] bg-[#edf5ff]   p-px">
        <div className="grid gap-px rounded-[30px] bg-[#ffffff]  sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item) => {
            const href = `/specialties/${toSlug(item)}`

            return (
              <div
                key={item}
                href={href}
                className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-white cursor-pointer px-4 py-6 text-center text-lg font-medium text-slate-700 border border-sky-100 transition-all duration-200 ease-out hover:bg-[#1f2b6c] hover:text-white hover:border-[#1f2b6c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f8fe6] sm:min-h-[140px]"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eef6ff] text-[#1f8fe6] transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10"
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
