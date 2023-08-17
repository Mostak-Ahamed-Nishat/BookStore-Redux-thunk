import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import StarBookReview from "./StarBookReview";

export default function BookItem() {
  return (
    <div className="lws-bookContainer">
      <div className="book-card">
        <img
          className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
          src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
          alt="book"
        />
        <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="badge-success lws-Badge">featured</span>
            <div className="text-gray-500 space-x-2">
              <button className="lws-edit">
                <EditButton />
              </button>
              <button className="lws-delete">
                <DeleteButton />
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-4 h-full">
            <h4 className="lws-bookName">
              Life Hurts: A Doctor's Personal Journey Through Anorexia
            </h4>
            <p className="lws-author">Dr Elizabeth McNaught</p>
            <StarBookReview />
            <p className="lws-price">BDT 14</p>
          </div>
        </div>
      </div>
    </div>
  );
}
