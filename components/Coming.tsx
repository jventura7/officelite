import Link from 'next/link';

export default function Coming() {
  return (
    <div className="flex flex-col space-y-8 items-center">
      <h1 className="font-semibold text-2xl tracking-[.2em]">
        COMING <span className="text-ocean-blue">4 NOV 2023</span>
      </h1>
      <div className="flex space-x-4">
        <div className="bg-grey-slate text-white rounded-lg text-center p-4">
          <h1 className="font-bold text-3xl">47</h1>
          <h2 className="text-sm">days</h2>
        </div>
        <div className="bg-grey-slate text-white rounded-lg text-center p-4">
          <h1 className="font-bold text-3xl">07</h1>
          <h2 className="text-sm">hours</h2>
        </div>
        <div className="bg-grey-slate text-white rounded-lg text-center p-4">
          <h1 className="font-bold text-3xl">56</h1>
          <h2 className="text-sm">min</h2>
        </div>
        <div className="bg-grey-slate text-white rounded-lg text-center p-4">
          <h1 className="font-bold text-3xl">14</h1>
          <h2 className="text-sm">sec</h2>
        </div>
      </div>
    </div>
  );
}
