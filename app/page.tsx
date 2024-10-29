import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section
          className="h-screen w-full bg-orange-500 flex flex-col items-center justify-around bg-cover relative"
          style={{
            backgroundImage:
              'url("https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative text-lg tracking-wider font-bold uppercase">
            Wedding Annoucement
          </div>
          <div className="relative flex flex-col items-center">
            <div className="text-4xl font-old-standard uppercase tracking-tighter">
              Tiffany & Jared
            </div>
            <div className="font-newsreader text-3xl font-light italic">
              #TImetoshaRE
            </div>
          </div>
          <button className="relative font-newsreader text-lg px-12 py-1 bg-white text-gray-700">
            Open
          </button>
        </section>

        <section className="h-screen w-full bg-orange-500 flex flex-col items-center justify-around bg-cover relative">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642"
            />
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative text-lg tracking-wider font-bold uppercase">
            Wedding Annoucement
          </div>
          <div className="relative flex flex-col items-center">
            <div className="text-4xl font-old-standard uppercase tracking-tighter">
              Tiffany & Jared
            </div>
            <div className="font-newsreader text-3xl font-light italic">
              #TImetoshaRE
            </div>
          </div>
          <button className="relative uppercase font-bold text-sm w-full px-12 py-1 flex justify-end items-center gap-2">
            <span>Scroll to Begin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </section>

        <section className="px-4 py-12 w-full bg-white text-gray-800 flex flex-col items-center gap-8 justify-around bg-cover relative">
          <div className="uppercase text-center font-bold text-sm tracking-wider">
            Dear Mr-Mrs-Ms, <br /> Family & Friends
          </div>
          <div className="text-center font-bold text-3xl tracking-wider font-old-standard">
            Welcome to
            <br />
            Tiffany & Jared's
            <br />
            Wedding Website
          </div>
          <div className="text-center font-newsreader italic">
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </div>
          <div className="flex gap-6">
            <div className="h-80 w-60 bg-orange-900">
              <img
                className="w-full h-full object-cover"
                src="https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg"
              />
            </div>
            <div className="h-80 w-60 scale-110 bg-orange-900">
              <img
                className="w-full h-full object-cover"
                src="https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg"
              />
            </div>
            <div className="h-80 w-60 bg-orange-900">
              <img
                className="w-full h-full object-cover"
                src="https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white px-12 py-1 border border-gray-800">
              ←
            </button>
            <button className="bg-white px-12 py-1 border border-gray-800">
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
