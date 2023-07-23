import BookCard from "../../components/BookCard";
import { IBook } from "../../interfaces/bookInterface";
import { useGetAllBooksQuery } from "../../redux/api/bookApi";

const Books = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery();

  const allBooks: IBook[] = data?.data;

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return console.log(isError);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">All Books </h1>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allBooks.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
