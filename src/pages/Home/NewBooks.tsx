import BookCard from "../../components/BookCard";
import Loader from "../../components/Loader";
import { IBook } from "../../interfaces/bookInterface";
import { useGetAllBooksQuery } from "../../redux/api/bookApi";
import { toast } from "react-toastify";

const NewBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery("books?limit=10");

  const allBooks: IBook[] = data?.data?.data;

  if (isError) toast.error("Error");
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">New Books</h1>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {allBooks?.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
