const About = () => {
  return (
    <div className="w-full  bg-[#feecde] my-20 pb-10">
      <div className="top-parent lg:flex justify-between items-center lg:px-20 h-40">
        <div className="top-left">
          <p className="text-3xl font-bold">
            About <br /> the BoiPooka library
          </p>
        </div>
        <div className="top-right xs:mb-5">
          <p>
            Unlock the Power of Words, One Chapter at a Time, <br />
            Writing the Next Chapter of Your Reading Journey <br />
            Where Stories Unfold
          </p>
        </div>
      </div>
      <div className="bottom-section-parent  h-80 lg:px-20">
        <div className="box w-full h-[100%] bg-[#fff] rounded-lg gap-5 flex p-7">
          <div className="left w-[30%] h-[100%] flex justify-start items-center">
            <img
              className="w-full h-44"
              src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="books"
            />
          </div>
          <div className="right w-[70%] bg-[#f2eeb2] h-[100%] rounded-lg flex justify-center items-center">
            <p className="text-2xl">
              Immerse Yourself <br /> in a World of Words
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
