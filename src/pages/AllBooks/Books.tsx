import { useState } from "react";
import BookCard from "../../components/BookCard";
import Loader from "../../components/Loader";
import { IBook } from "../../interfaces/bookInterface";
import {
  useGetAllBooksBySearchQuery,
  useGetAllBooksQuery,
} from "../../redux/api/bookApi";

const Books = () => {
  const [searchValue, setSearchValue] = useState();
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const { data: searchData } = useGetAllBooksBySearchQuery(searchValue);

  const allSearchData = searchData?.data?.data;
  console.log("allSearchData", allSearchData);

  const { data, isLoading } = useGetAllBooksQuery("books");
  const allBooks: IBook[] = data?.data?.data;
  // console.log("all books", allBooks);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks

    setSearchValue(searchValue);
    console.log("search", data);
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-3">All Books </h1>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Value: {selectedValue}</p>
      <div className="text-center">
        <form onSubmit={handleSearch}>
          <input
            className="w-[70vw] border rounded-xl px-2 py-2"
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded-xl m-2"
          >
            search
          </button>
        </form>
      </div>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allSearchData?.length > 0
          ? allSearchData?.map((book: IBook) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))
          : allBooks?.map((book: IBook) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
      </div>
    </div>
  );
};

export default Books;
