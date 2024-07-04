import "./App.css";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import TikTokChatbot from "./TikTokChatbot";
import { Dialog } from "@mui/material";

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
        className="rounded-full h-16 hover:border-gray-400 border-2 bg-slate-100 w-[35vw] text-2xl p-3 pl-5 text-black md:inline-block hidden align-middle ml-[18vw]"
        placeholder="Search"
      ></input>
      <img
        src="./tiktok-bg.png"
        width="100%"
        className="m-auto mt-[4vh]"
        alt="TikTok's new chatbot introduction"
      ></img>
      <Fab
        aria-label="chatbot"
        sx={{ width: "100px", height: "100px", position: "fixed" }}
        onClick={handleBotClick}
        className="right-10 bottom-10"
      >
        <img
          className="rounded-full"
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
