import { IBook } from "../interfaces/bookInterface";
import { useGetWishListQuery } from "../redux/api/bookApi";
import { useAppSelector } from "../redux/hook";

import Loader from "./Loader";
import WishListCard from "./WishListCard";

const WishList = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useGetWishListQuery(`${user?.email}`);

  const allWishList = data?.data;
  console.log(allWishList);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-3xl my-5 font-bold text-center">Wish List</h1>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allWishList?.length > 0
          ? allWishList?.map((book: IBook) => (
              <WishListCard key={book._id} book={book}></WishListCard>
            ))
          : "Empty wishList"}
      </div>
    </div>
  );
};

export default WishList;
