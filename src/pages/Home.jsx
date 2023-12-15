const Home = () => {
  return (
    <>
      <div className="container mx-auto border rounded-xl Landing p-6 px-10 pb-0">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-semibold">
              NFT Marketplace Explore, Collect or Sell
            </h1>
            <p className="py-3">
              NFT artists are cracking the male-dominated decentralized space to
              voice major changes in the virtual world. Distinctively foster B2B
              networks whereas state of the art opportunities continually
              facilitate vertical mindshare
            </p>
            <button
              type="button"
              class="bg-gradient-to-r from-blue-700 to-pink-600 px-7 py-3 md:py-4 rounded-md mt-4 font-semibold text-md md:text-lg"
            >
              Explore Items
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://cryptoshop.netlify.app/static/media/hero-art.03c7f0942117eb935046.png"
              alt=""
              className="w-96 ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
