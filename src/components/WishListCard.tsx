import { toast } from "react-toastify";
import { IBook } from "../interfaces/bookInterface";

interface IProps {
  book: IBook;
}

const WishListCard = ({ book }: IProps) => {
  const { title, author, genre, publicationDate } = book;

  const handleCompleted = () => {
    toast.success("Marked as Completed");
  };
  const handleReadSoon = () => {
    toast.success("Marked as Read Soon Plan");
  };
  const handleReading = () => {
    toast.success("Marked as Still Reading");
  };
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

        <div className="mb-2">
          <p>Publication date: {publicationDate}</p>
        </div>
        <p className="my-2 text-center font-bold">Mark your Status:</p>
        <div className="flex gap-3 justify-between text-white">
          <button onClick={handleReadSoon} className="bg-primary w-full">
            Read Soon
          </button>
          <button onClick={handleReading} className="bg-primary w-full">
            Still Reading
          </button>
        </div>
        <button
          onClick={handleCompleted}
          className="bg-primary w-full text-white mt-4"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
