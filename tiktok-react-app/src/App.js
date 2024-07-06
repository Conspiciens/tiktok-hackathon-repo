import "./App.css";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import TikTokChatbot from "./TikTokChatbot";
import { Dialog } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

function App() {
  const [openChatbot, setOpenChatbot] = useState(false);

  function handleBotClick() {
    console.log("Bot button was clicked!");
    setOpenChatbot(true);
  }

  const handleClose = () => {
    setOpenChatbot(false);
  };

  return (
    <div className="relative h-screen">
      <img
        src="./tiktok-logo.png"
        width={220}
        alt=""
        className="inline-block m-10"
      ></img>
      <input
        type="search"
        className="rounded-full h-16 hover:border-gray-400 border-2 bg-slate-100 w-[35vw] text-2xl p-3 pl-5 text-black lg:inline-block hidden align-middle xl:ml-[15vw] ml-[2vw]"
        placeholder="Search"
      ></input>
      <div className="inline-block m-11 float-right space-x-5">
        <FavoriteBorderIcon className="cursor-pointer" sx={{fontSize: "3rem"}} onClick={(_) => console.log("Wishlist clicked")}></FavoriteBorderIcon>
        <SendIcon sx={{fontSize: "3rem"}}></SendIcon>
        <ModeCommentOutlinedIcon sx={{fontSize: "3rem"}}></ModeCommentOutlinedIcon>
        <img className="rounded-full inline-block border-black border-2" src="./user-profile-pic.jpg" width={60} alt="User's profile pic"></img>
      </div>
      <img
        src="./tiktok-bg.png"
        width="100%"
        className="m-auto mt-[4vh]"
        alt="TikTok's new chatbot introduction"
      ></img>
      <Fab
        aria-label="chatbot"
        sx={{ width: {sm: 100, md: 150}, height: {sm: 100, md: 150}, position: "fixed" }}
        onClick={handleBotClick}
        className="right-10 bottom-10"
      >
        <img
          className="rounded-full md:w-28"
          src="./bot-icon.jpg"
          width={80}
          height={80}
          alt="TikTok Chatbot that can aid you with searching"
        ></img>
      </Fab>
      {openChatbot && (
        <Dialog onClose={handleClose} open={openChatbot}>
          <TikTokChatbot></TikTokChatbot>
        </Dialog>
      )}
    </div>
  );
}

export default App;
