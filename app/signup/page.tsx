import Coming from '@/components/Coming';

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col items-center space-y-6 text-center md:text-start md:items-start md:max-w-lg mb-10">
        <h1 className="text-dark-slate font-bold text-5xl md:text-6xl xl:text-7xl">
          Work smarter. Save time.
        </h1>
        <p className="text-grey-slate text-xl leading-8">
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </p>
      </div>
      <Coming />
      <form className="flex flex-col space-y-10 bg-white w-full max-w-lg mt-10 p-10 rounded-xl shadow-lg">
        <input
          className="border-b-2 p-2 focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="border-b-2 p-2 focus:outline-none"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border-b-2 p-2 focus:outline-none"
          type="tel"
          placeholder="Phone Number"
        />
        <input
          className="border-b-2 p-2 focus:outline-none"
          type="text"
          placeholder="Company"
        />
        <input
          type="submit"
          value="Get on the list"
          className="text-white mt-10 font-bold bg-ocean-blue w-full p-4 rounded-full hover:bg-blue-100 hover:text-ocean-blue transition-colors duration-300"
        />
      </form>
    </>
  );
}
