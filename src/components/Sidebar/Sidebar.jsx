import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onSent, prevPrompt, setRecentPrompt, newChat, them, setThem } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const handleThem = () => {
    setThem(!them);
  };

  const [showTooltip, setShowTooltip] = useState(false);

  const handleSettingClick = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <>
      <div
        className="sidebar border-r-2 border-red-100"
        style={{
          backgroundColor: them ? "#ffffff" : "#3c3c3c",
          color: them ? "black" : "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <div
          className="top "
          style={{
            color: them ? "black" : "white",
          }}
        >
          {/* <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt=""
          /> */}
          <i
            className="ri-menu-line menu"
            onClick={() => setExtended((prev) => !prev)}
          ></i>
          <div onClick={() => newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>

          {extended ? (
            <>
              <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item, idx) => {
                  return (
                    <div
                      onClick={() => loadPrompt(item)}
                      className="recent-entry"
                      key={idx}
                      style={{
                        color: them ? "black" : "white",
                      }}
                    >
                      <img
                        className={`${
                          them ? "outline-black" : "outline-[#ccc]"
                        }`}
                        src={assets.message_icon}
                        alt=""
                      />
                      <p>{item.slice(0, 18)}...</p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>

        <div className="bottom relative ">
          <div
            className="bottom-item recent-entry"
            style={{
              color: them ? "black" : "white",
            }}
          >
            <i className="ri-question-line"></i>
            {/* <img src={assets.question_icon} alt="" /> */}
            {extended ? <p>Help</p> : null}
          </div>

          <div
            className="bottom-item recent-entry"
            style={{
              color: them ? "black" : "white",
            }}
          >
            <i className="ri-history-line"></i>{" "}
            {extended ? <p>Activity</p> : null}
          </div>

          <div
            className="bottom-item recent-entry  "
            onClick={handleSettingClick}
            style={{
              color: them ? "black" : "white",
            }}
          >
            <i className="ri-settings-2-line"></i>
            {extended ? <p>Setting</p> : null}
          </div>

          {showTooltip && (
            <div className="tooltip them absolute top-24 ml-[5.5rem] z-50">
              <button onClick={handleThem} title="Set Them">
                {them ? "🌞" : "🌚"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
