import React from 'react'

const AboutUs = () => {
  return (
    <div className="h-fit w-full bg-[#1F1E24] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#6556CD]">About Us</h1>
          <p className="text-lg text-gray-300">
            Welcome to MovieApp, your ultimate destination for movie enthusiasts. We bring you the latest and greatest in entertainment, curated just for you!
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8">
            MovieApp started with a simple idea: to make finding and watching your favorite movies easier than ever. Whether you're into action, drama, or romance, we've got you covered. Our team of passionate movie lovers works tirelessly to deliver the best content, ensuring you never miss a beat in the world of cinema.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Vast Movie Library</h3>
            <p className="text-gray-400">
              Explore a wide variety of genres, from blockbusters to indie films. Our ever-expanding library ensures there's always something new to discover.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">User-Friendly Interface</h3>
            <p className="text-gray-400">
              With our intuitive interface, browsing and watching movies has never been easier. Find exactly what you want, with just a few clicks.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Latest Releases</h3>
            <p className="text-gray-400">
              Stay up-to-date with the newest releases. We keep our content fresh and exciting so you never run out of movies to watch.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Emily Johnson</h3>
              <p className="text-gray-400">Marketing Head</p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At MovieApp, we believe in the power of movies to inspire, entertain, and bring people together. Whether you're here to explore, learn, or just kick back with a good film, we're glad to have you with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
