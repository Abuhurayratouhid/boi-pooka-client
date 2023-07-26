import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/bookApi";
import { IBook } from "../interfaces/bookInterface";
import { useAppSelector } from "../redux/hook";

const EditBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  const book: IBook = data?.data;

  const { title, genre, author, publicationDate, imageUrl } = book;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBookEdit = (event: any) => {
    event.preventDefault();

    console.log("Book Edited");
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full m-2 p-5 lg:w-[450px]  bg-slate-300 lg:p-10 my-10">
          <h1 className="text-center text-2xl font-bold mb-4">Edit Book!</h1>
          <form onSubmit={handleBookEdit}>
            <label>Book Title</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={title}
              required
            />
            <br />
            <label htmlFor="">Image-URL</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={imageUrl}
              required
            />
            <br />
            <label htmlFor="">Author</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={author}
              required
            />
            <br />
            <label htmlFor="">Genre</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={genre}
              required
            />
            <br />
            <label htmlFor="">Publication Date</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={publicationDate}
              required
            />
            <br />
            <label htmlFor="">Creator Email</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="name"
              id="name"
              defaultValue={user?.email as string}
              readOnly
            />
            <br />
            <button type="submit" className="bg-primary text-white w-full py-2">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
