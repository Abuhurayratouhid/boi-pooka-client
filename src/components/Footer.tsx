const Footer = () => {
  return (
    <footer className="bg-primary rounded-t-[3rem] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a href="/" className="text-xl font-bold">
            BoiPooka
          </a>
        </div>
        <div className="flex mb-4">
          <a href="/" className="mr-4 hover:text-gray-500">
            Home
          </a>
          <a href="/" className="mr-4 hover:text-gray-500">
            Books
          </a>
          <a href="/" className="hover:text-gray-500">
            Contact
          </a>
        </div>
        <div className="flex">
          <a
            href="https://twitter.com/modernbookstore"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hover:text-gray-500"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/modernbookstore"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hover:text-gray-500"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/modernbookstore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            Instagram
          </a>
        </div>
        <p className="mt-8">
          &copy; {new Date().getFullYear()} Modern Bookstore. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
