import { useParams } from "react-router-dom";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/bookApi";
import { IBook } from "../interfaces/bookInterface";
import { useAppSelector } from "../redux/hook";

const EditBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(id as string);

  const [editBook] = useEditBookMutation();

  if (isLoading) return <p>Loading...</p>;
  const book: IBook = data?.data;

  const { title, genre, author, publicationDate, imageUrl, _id, creatorEmail } =
    book;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBookEdit = (event: any) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const publicationDate = form.publicationDate.value;

    const editedInfo = {
      _id,
      title,
      author,
      imageUrl,
      genre,
      creatorEmail: email,
      publicationDate,
    };

    if (user.email !== creatorEmail) {
      alert("Only Book owner can Edit his book");
    } else {
      console.log("Edited");
      editBook(editedInfo);
    }

    // console.log("Book Edited", editedInfo);
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
              name="title"
              id="title"
              defaultValue={title}
              required
            />
            <br />
            <label htmlFor="">Image-URL</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="imageUrl"
              id="img"
              defaultValue={imageUrl}
              required
            />
            <br />
            <label htmlFor="">Author</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="author"
              id="author"
              defaultValue={author}
              required
            />
            <br />
            <label htmlFor="">Genre</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="genre"
              id="genre"
              defaultValue={genre}
              required
            />
            <br />
            <label htmlFor="">Publication Date</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="publicationDate"
              id="date"
              defaultValue={publicationDate}
              required
            />
            <br />
            <label htmlFor="">Creator Email</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="email"
              name="email"
              id="email"
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
