import img from "../../assets/books-banner-ok-transformed.png";
const Banner = () => {
  return (
    <div className="w-full h-[100%] lg:h-[80vh] bg-primary rounded-b-[5rem]">
      <h1 className="uppercase lg:text-[70px] text-center">
        Expand your <span className="text-[#fff165]">mind</span>
      </h1>
      <h1 className="uppercase lg:text-[70px] text-center">reading a book</h1>
      <img className="w-72 h-80 m-auto" src={img} alt="books" />
    </div>
  );
};

export default Banner;
