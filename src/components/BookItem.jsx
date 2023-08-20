import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import StarBookReview from "./StarBookReview";

export default function BookItem({ bookInfo }) {
  const {id,name, thumbnail, author, price, rating, featured } = bookInfo;
 
  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
        src={thumbnail}
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {featured ? (
            <span className="badge-success lws-Badge">featured</span>
          ) : (
            <span></span>
          )}
          <div className="text-gray-500 space-x-2">
            <button className="lws-edit">
              <EditButton id={id} />
            </button>
            <button className="lws-delete">
              <DeleteButton id={id}/>
            </button>
          </div>
        </div>
        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">{name}</h4>
          <p className="lws-author">{author}</p>
          <StarBookReview />
          <p className="lws-price">{price}</p>
        </div>
      </div>
    </div>
  );
}
