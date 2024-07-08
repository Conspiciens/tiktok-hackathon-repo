import { Link, Outlet } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

function TopBar() {
  return (
    <>
      <Link to="/">
        <img
          src="./tiktok-logo.png"
          width={220}
          alt=""
          className="inline-block m-10"
        ></img>
      </Link>

      <input
        type="search"
        className="rounded-full h-16 hover:border-gray-400 border-2 bg-slate-100 w-[35vw] text-2xl p-3 pl-5 text-black lg:inline-block hidden align-middle xl:ml-[15vw] ml-[4vw]"
        placeholder="Search"
      ></input>
      <div className="inline-block my-11 mx-[3vw] float-right space-x-5">
        <Link to="/wishlist">
          <FavoriteBorderIcon
            className="cursor-pointer"
            sx={{ fontSize: "3rem" }}
          ></FavoriteBorderIcon>
        </Link>
        <SendIcon sx={{ fontSize: "3rem" }}></SendIcon>
        <ModeCommentOutlinedIcon
          sx={{ fontSize: "3rem" }}
        ></ModeCommentOutlinedIcon>
        <img
          className="rounded-full inline-block border-black border-2"
          src="./user-profile-pic.jpg"
          width={60}
          alt="User's profile pic"
        ></img>
      </div>

      {/* Outlet renders the content inside the selected page */}
      <Outlet />
    </>
  );
}

export default TopBar;
