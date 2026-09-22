

function HeroVideoOne() {
  return (
     <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/public/videos/vedioone.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl">
            Experience Luxury
          </h1>

          <p className="mt-5 text-lg md:text-xl">
            Where every stay becomes an unforgettable experience.
          </p>

          <button className="px-8 py-3 mt-8 font-semibold text-black transition bg-white rounded-full hover:scale-105">
            Explore Hotel
          </button>
        </div>
      </div>

    </section>
  )
}

export default HeroVideoOne

