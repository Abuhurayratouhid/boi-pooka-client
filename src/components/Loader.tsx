const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader ease-linear h-32 w-8">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
      </div>
    </div>
  );
};

export default Loader;
