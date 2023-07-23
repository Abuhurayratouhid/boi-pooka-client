export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  imageUrl: string;
  wishList: boolean;
  isReading: boolean;
  readSoon: boolean;
  isCompleted: boolean;
  reviews: string[];
}
