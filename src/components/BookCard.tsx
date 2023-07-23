const BookCard = ({ book }) => {
  const { title, author, genre, publicationDate } = book;

  return (
    <div className="w-60 h-96  bg-primary p-2 m-10 rounded-lg">
      <img
        className="w-full h-[40%] mb-2 rounded-lg"
        src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="info w-full h-[58%] bg-slate-100 rounded-xl p-2">
        <p>{title}</p>
        <p>{author}</p>
        <p>{genre}</p>

        <div className="">
          <p>Publication date: {publicationDate}</p>
          <p>Price: $ 7</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
