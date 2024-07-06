function ChatbotDescription() {
  return (
    <div className="m-10">
      <h1 className="xl:text-5xl text-3xl font-sans font-semibold flex justify-center">Why use <span className="text-[#72BEC5] ">&nbsp;TikTok On&nbsp;</span> <span className="text-[#ED1E50]">The Clock</span>?</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
        <div className="m-5 space-y-5">
          <h1 className="flex justify-center xl:text-3xl text-2xl">Optimized Searching</h1>
          <img src="./optimized-searching.jpg" alt=""></img>
        </div>
        <div className="m-5 space-y-5">
          <h1 className="flex justify-center xl:text-3xl text-2xl">Saves Time</h1>
          <img src="./save-time.jpg" alt=""></img>
        </div>
        <div className="m-5 space-y-5">
          <h1 className="flex justify-center xl:text-3xl text-2xl">Less Browsing</h1>
          <img src="./less-browsing.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default ChatbotDescription;
