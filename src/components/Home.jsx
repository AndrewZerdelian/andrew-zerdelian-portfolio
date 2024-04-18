const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello there, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Andrew Zerdelian
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          a Front-End Developer Intersted in Web and Mobile.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Motivated Front-End React developer with a solid understanding
          of <br />
          <span className="font-bold">
            HTML, CSS, JavaScript React.js, Next.js, React Native, and Expo,
          </span>
          I am seeking an opportunity to grow as a front-end developer, to learn
          from experienced professionals, and further enhance my abilities.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
