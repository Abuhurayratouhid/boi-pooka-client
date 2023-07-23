import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/bookApi";
import { IBook } from "../interfaces/bookInterface";

const SingleBook = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading } = useGetSingleBookQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  const book: IBook = data?.data;

  const { title, genre, author, publicationDate, reviews } = book;

  console.log(data);
  console.log("book info", book);

  //   if (isError) return console.log(isError);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Single Book info</h1>

      <div className="top-parent border-b-2 mb-5 pb-5 lg:h-[250px] max-w-[800px] mx-auto lg:flex">
        <div className="left md:w-1/2 pl-5">
          <p className="my-5">{title}</p>
          <p className="my-5">{author}</p>
          <p className="my-5">{genre}</p>
          <p className="my-5">{publicationDate}</p>
        </div>
        <div className="right md:w-1/2">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="book-image"
          />
        </div>
      </div>

      {/* bottom */}

      <div className="top-parent  mb-5 pb-5 lg:h-[250px] max-w-[800px] mx-auto lg:flex">
        <div className="left md:w-1/2 p-5">
          <textarea
            className="w-full h-full border p-2"
            placeholder="Add a review"
          ></textarea>

          <button className="bg-primary text-white px-5 py-1 mt-1">
            Add Review
          </button>
        </div>
        <div className="right md:w-1/2 max-h-[100%] overflow-y-auto overflow-x-hidden">
          <p className="text-center text-xl font-bold">Previous Reviews:</p>
          <p>{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
