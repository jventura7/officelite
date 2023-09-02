export default function Plans() {
  return (
    <div className="w-full flex flex-col space-y-10 pb-20 max-w-3xl xl:max-w-7xl xl:flex-row xl:space-y-0 xl:space-x-10">
      <div className="text-dark-slate card bg-white text-center md:p-12 xl:w-96 md:grid md:grid-cols-2 md:text-left xl:text-center xl:flex xl:flex-col xl:space-y-20">
        <div className="pb-6 md:pb-0">
          <h1 className="font-bold text-xl pb-6">Basic</h1>
          <h1 className="font-bold text-6xl md:text-7xl mb-2">Free</h1>
          <h3 className="text-s">Up to 4 users for free</h3>
        </div>
        <div className="flex flex-col space-y-6 md:text-lg text-grey-slate">
          <h3>Basic documentation collaboration</h3>
          <h3>2 GB storage</h3>
          <h3>Great security and support</h3>
        </div>
        <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors md:w-56">
          Try for free
        </button>
      </div>
      <div className="text-white card bg-ocean-blue text-center md:p-12 xl:w-96 md:grid md:grid-cols-2 md:text-left xl:text-center xl:flex xl:flex-col xl:space-y-20">
        <div className="pb-6 md:pb-0">
          <h1 className="font-bold text-xl pb-6">Pro</h1>
          <h1 className="font-bold text-6xl md:text-7xl mb-2">$9.99</h1>
          <h3 className="text-s">Per user, billed monthly</h3>
        </div>
        <div className="flex flex-col space-y-6 md:text-lg text-white">
          <h3>Per user, billed monthly</h3>
          <h3>50 GB storage</h3>
          <h3>More control and insights</h3>
        </div>
        <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors md:w-56">
          Try for free
        </button>
      </div>
      <div className="text-dark-slate card bg-white text-center md:p-12 xl:w-96 md:grid md:grid-cols-2 md:text-left xl:text-center xl:flex xl:flex-col xl:space-y-20">
        <div className="pb-6 md:pb-0">
          <h1 className="font-bold text-xl pb-6">Ultimate</h1>
          <h1 className="font-bold text-6xl md:text-7xl mb-2">$19.99</h1>
          <h3 className="text-s">Per user, billed monthly</h3>
        </div>
        <div className="flex flex-col space-y-6 md:text-lg text-grey-slate">
          <h3>Robusrt work management</h3>
          <h3>100 GB storage</h3>
          <h3>VIP support</h3>
        </div>
        <button className="text-ocean-blue font-bold bg-blue-100 rounded-full p-6 py-4 hover:bg-ocean-blue hover:text-white duration-300 transition-colors md:w-56">
          Try for free
        </button>
      </div>
    </div>
  );
}
