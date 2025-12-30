const Appointment = () => {
  return (
    <form className="overflow-hidden  rounded-[5px] bg-[#1f2b6c] text-white shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-name">
            Name
          </label>
          <input
            id="appointment-name"
            type="text"
            placeholder="Name"
            className="w-full bg-transparent text-xl text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-gender">
            Gender
          </label>
          <select
            id="appointment-gender"
            className="w-full cursor-pointer bg-transparent text-xl text-white focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="text-slate-900">
              Gender
            </option>
            <option value="female" className="text-slate-900">
              Female
            </option>
            <option value="male" className="text-slate-900">
              Male
            </option>
            <option value="other" className="text-slate-900">
              Other
            </option>
          </select>
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-email">
            Email
          </label>
          <input
            id="appointment-email"
            type="email"
            placeholder="Email"
            className="w-full bg-transparent text-xl text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-phone">
            Phone
          </label>
          <input
            id="appointment-phone"
            type="tel"
            placeholder="Phone"
            className="w-full bg-transparent text-xl text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-date">
            Date
          </label>
          <input
            id="appointment-date"
            type="date"
            className="w-full bg-transparent text-xl text-white focus:outline-none"
          />
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-time">
            Time
          </label>
          <input
            id="appointment-time"
            type="time"
            className="w-full bg-transparent text-xl text-white focus:outline-none"
          />
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-doctor">
            Doctor
          </label>
          <select
            id="appointment-doctor"
            className="w-full cursor-pointer bg-transparent text-xl text-white focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="text-slate-900">
              Doctor
            </option>
            <option value="doctor-1" className="text-slate-900">
              Doctor
            </option>
          </select>
        </div>
        <div className="bg-[#1f2b6c] px-4 py-3">
          <label className="sr-only" htmlFor="appointment-department">
            Department
          </label>
          <select
            id="appointment-department"
            className="w-full cursor-pointer bg-transparent text-xl text-white focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="text-slate-900">
              Department
            </option>
            <option value="department-1" className="text-slate-900">
              Department
            </option>
          </select>
        </div>
        <div className="col-span-2 bg-[#1f2b6c] px-4 py-4">
          <label className="sr-only" htmlFor="appointment-message">
            Message
          </label>
          <textarea
            id="appointment-message"
            placeholder="Message"
            rows="4"
            className="w-full resize-none bg-transparent text-lg text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#1f8fe6] py-3 text-sm font-semibold uppercase cursor-pointer tracking-[0.2em] hover:bg-[#17a5fd]"
      >
        Submit
      </button>
    </form>
  )
}

export default Appointment
