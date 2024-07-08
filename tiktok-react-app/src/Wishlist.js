import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div className="m-10">
      <h1 className="flex justify-center text-4xl font-bold mb-3">
        My Wishlist
      </h1>
      <p className="flex justify-center text-xl">
        Products generated for you by our chatbot will appear here for your
        reference!
      </p>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-10 gap-5">
        {wishlist.map((eachItem) => (
          <Link
            to={eachItem.url}
            target="_blank"
            className="bg-slate-100 rounded-2xl p-7 hover:bg-slate-200"
          >
            <img
              src={eachItem.product_img}
              alt=""
              className="w-36 h-36 object-cover m-auto mb-10 rounded-2xl"
            ></img>
            <h1 className="text-xl text-center truncate overflow-hidden w-11/12 m-auto">
              {eachItem.product_name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;

export let wishlist = [
  {
    product_name: "Chanel Chance Perfume",
    product_img: "./sample-wishlist/chanel-chance-perfume.webp",
    url: "https://www.chanel.com/us/fragrance/p/126260/chance-eau-tendre-eau-de-parfum-spray/",
  },
];
