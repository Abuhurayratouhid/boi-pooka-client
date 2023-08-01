import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/bookApi";
import { IBook } from "../interfaces/bookInterface";
import { useAppSelector } from "../redux/hook";
import Loader from "./Loader";
import { toast } from "react-toastify";

const SingleBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { data, isLoading: dataLoading } = useGetSingleBookQuery(id as string);

  const book: IBook = data?.data;

  const { title, genre, author, publicationDate, reviews, _id, creatorEmail } =
    book || {};

  const [
    deleteBook,
    {
      isLoading: deleteLoading,
      isError: deleteError,
      isSuccess: deleteSuccess,
    },
  ] = useDeleteBookMutation();
  if (deleteSuccess) {
    toast.success("Book deleted");
  }
  if (deleteError) {
    toast.success("Opps, ERROR");
  }

  const [
    addReview,
    {
      isLoading: reviewLoading,
      isError: reviewError,
      isSuccess: reviewSuccess,
    },
  ] = useAddReviewMutation();

  if (reviewSuccess) {
    toast.success("Review added");
  }

  if (reviewError) {
    toast.error("Oppss, ERROR");
  }

  // if (reviewLoading) <Loader />;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handleDelete = () => {
    if (user.email !== creatorEmail) {
      return toast.warn("You are not allowed to delete this book");
    } else {
      const confirm = window.confirm("Are you sure??");
      if (confirm) {
        deleteBook(_id);
        toast.success("Book deleted");
        navigate("/");
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReview = (e: any) => {
    e.preventDefault();
    if (!user.email) {
      navigate("/login");
    }
    const comment = e.target.review.value;

    const newReview = {
      _id,
      comment,
    };

    addReview(newReview);

    // console.log("review added:", comment);
  };

  //   if (isError) return console.log(isError);
  if (dataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Book info</h1>

      <div className="top-parent border-b-2 mb-5 pb-5 lg:h-[250px] max-w-[800px] mx-auto lg:flex">
        <div className="left md:w-1/2 pl-5">
          <p className="my-3">
            <span className="font-bold">Book title: </span>
            {title}
          </p>
          <p className="my-3">
            <span className="font-bold">Book Author: </span>
            {author}
          </p>
          <p className="my-3">
            <span className="font-bold">Book genre: </span>
            {genre}
          </p>
          <p className="mb-3">
            <span className="font-bold">Publication date: </span>
            {publicationDate}
          </p>
          <Link to={`/editBook/${_id}`}>
            <button className="bg-primary text-white px-5 py-1 my-2 mr-3">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-primary text-white px-5 py-1 my-2"
          >
            Delete
          </button>
          <br />
          <button className="bg-secondary  px-7 py-1 mb-2 ">
            Add to wishList
          </button>
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
          <form onSubmit={handleReview} className="w-full h-[100%]">
            <textarea
              className="w-full h-full border p-2"
              placeholder="Add a review"
              name="review"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-5 py-1 mt-1"
            >
              Add Review
            </button>
          </form>
        </div>
        <div className="right md:w-1/2 max-h-[100%] overflow-y-auto overflow-x-hidden p-2">
          <p className="text-center text-xl font-bold">Previous Reviews:</p>
          <div>
            {reviews?.map((review) => (
              <p key={review?._id}>{review?.comment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
