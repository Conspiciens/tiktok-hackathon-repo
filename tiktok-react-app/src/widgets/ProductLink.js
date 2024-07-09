import { Link } from "react-router-dom";

// Widget used by chatbot to display the links in a nice format

function ProductLink(obj) {
  return (
    <div className="w-1/3">
      {obj.linksToDisplay.map((eachLink) => (
        <Link to={eachLink.url} target="_blank" key={eachLink.product_name}>
          <div className="bg-slate-100 w-full h-18 hover:bg-slate-200 rounded-2xl space-x-5 m-3 p-2 ml-20">
            <img
              src={eachLink.product_img}
              className="w-20 h-20 xl:inline-block block m-auto object-cover rounded-2xl"
              alt=""
            ></img>
            <p className="text-lg xl:inline-block block m-auto overflow-hidden truncate xl:w-3/5 w-2/5 align-middle">{eachLink.product_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductLink;
