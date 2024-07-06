import Fab from "@mui/material/Fab";
import { useState } from "react";
import TikTokChatbot from "./components/TikTokChatbot";
import { Dialog } from "@mui/material";
import ChatbotDescription from "./components/ChatbotDescription";

function Home() {
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
        src="./tiktok-bg.png"
        width="100%"
        className="m-auto mt-[4vh]"
        alt="TikTok's new chatbot introduction"
      ></img>
      <ChatbotDescription></ChatbotDescription>
      <Fab
        aria-label="chatbot"
        sx={{
          width: { sm: 100, md: 150 },
          height: { sm: 100, md: 150 },
          position: "fixed",
        }}
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
        <Dialog onClose={handleClose} open={openChatbot} maxWidth="xl">
          <TikTokChatbot></TikTokChatbot>
        </Dialog>
      )}
    </div>
  );
}

export default Home;
