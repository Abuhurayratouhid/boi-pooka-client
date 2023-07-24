import { useAppSelector } from "../redux/hook";

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddBook = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const publicationDate = form.publicationDate.value;

    console.log(title, author, imageUrl, genre, email, publicationDate);
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full m-2 p-5 lg:w-[450px]  bg-slate-300 lg:p-10 my-10">
          <h1 className="text-center text-2xl font-bold mb-4">Add Book!</h1>
          <form onSubmit={handleAddBook}>
            <label htmlFor="">Book Title</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="title"
              id="name"
              // defaultValue={title}
              required
            />
            <br />
            <label htmlFor="">Image-URL</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="imageUrl"
              id="name"
              // defaultValue={imageUrl}
              required
            />
            <br />
            <label htmlFor="">Author</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="author"
              id="name"
              // defaultValue={author}
              required
            />
            <br />
            <label htmlFor="">Genre</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="genre"
              id="name"
              // defaultValue={genre}
              required
            />
            <br />
            <label htmlFor="">Publication Date</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="text"
              name="publicationDate"
              id="name"
              // defaultValue={publicationDate}
              required
            />
            <br />
            <label htmlFor="">Creator Email</label>
            <input
              className="w-full border px-2 py-1 rounded-xl mb-5"
              type="email"
              name="email"
              id="name"
              defaultValue={user.email as string}
              //   placeholder="User Email"
              readOnly
            />
            <br />
            <button type="submit" className="bg-primary text-white w-full py-2">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
