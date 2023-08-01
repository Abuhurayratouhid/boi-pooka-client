export interface IBook {
  _id: string;
  creatorEmail: string;
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

export interface IComment {
  _id: string;
  comment: string;
}
