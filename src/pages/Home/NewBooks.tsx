import BookCard from "../../components/BookCard";
import { IBook } from "../../interfaces/bookInterface";
import { useGetAllBooksQuery } from "../../redux/api/bookApi";

const NewBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery();

  if (isLoading) return <p>Loading...</p>;

  const allBooks: IBook[] = data?.data;

  if (isError) return console.log(isError);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">New Books</h1>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {allBooks.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
