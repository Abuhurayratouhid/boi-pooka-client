import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { title, author, genre, publicationDate, _id } = book;

  return (
    <div className="w-60 h-96 p-2 m-10 rounded-lg">
      <img
        className="w-full h-[40%] mb-2 rounded-lg"
        src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="info w-full h-[58%] bg-slate-100 rounded-xl p-2">
        <p>Name: {title}</p>
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>

        <div className="">
          <p>Publication date: {publicationDate}</p>
          <Link to={`/book/${_id}`}>
            <button className="bg-primary text-white px-5 py-1 mt-3">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
