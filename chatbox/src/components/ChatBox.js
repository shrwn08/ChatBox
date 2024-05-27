import React, { useState, useRef, useEffect } from "react";
import { Box, Button,IconButton } from "@mui/material";
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SideBar from "./SideBar";

function ChatBox() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messageEndRef = useRef(null);

  const change = (event) => {
    setValue(event.target.value);
  };

  const getRandomUserName = () => {
    const userNames = ["Alan", "Bob", "Carol", "Dean", "Elin"];
    return userNames[Math.floor(Math.random() * userNames.length)];
  };

  const getRandomColor = () => {
    const colors = [
      "#ed9595",
      "#f0f24e",
      "#84f760",
      "#50f2ca",
      "#406ac9",
      "#6231b0",
      "#6231b0",
      "#c72055",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const handleClick = () => {
    if (value.trim()) {
      const newMessage = {
        text: value,
        user: getRandomUserName(),
        time: new Date().toLocaleTimeString(),
        color: getRandomColor(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setValue("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "enter") {
      handleClick();
    }
  };
  const handleEmojiClick = (event, emojiObject) => {
    setValue((prevValue) => prevValue + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      boxSizing="borderBox"
    >
      <Box display="flex">
        <Box>
          <SideBar />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box>Instructions</Box>
              <Box color="#c9c1c6">This is the coolest group</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box>3/100</Box>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-people-1767899-1502152.png?f=webp&w=512"
                alt="peopleIcon"
                height="50px"
                width="50px"
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            {/**Message box */}
            <Box
              sx={{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"flex-end",
                height: "30rem",
                backgroundColor: "#f0f1f2",
                wordBreak: "break-word",
                overflowY: "scroll",
                overflowX: "hidden",
                padding: "10px",
                width: "50rem",
              }}
            >
              <Box>
                {messages.map((msg, index) => (
                  <Box
                    sx={{
                      borderRadius: "5px",
                      marginBottom: "10px",
                      padding: "10px",
                      width: "auto",
                      height: "auto",
                    }}
                    key={index}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="10px"
                      backgroundColor="#f0f1f2"
                    >
                      <Box
                        sx={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: msg.color,
                          fontWeight: 700,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        {msg.user.trim().charAt(0)}
                      </Box>
                      <Box display="flex" alignItems="center" gap="10px">
                        <Box sx={{ fontWeight: "bold" }}>{msg.user}</Box>
                        <Box sx={{ fontSize: "0.8em", color: "#1a1b1c" }}>
                          {msg.time}
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "white",
                        display:"inline-block",
                        minHeight: "30px",
                        minWidth: "5%",
                        marginLeft: "40px",
                        borderTopRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        wordWrap: "break-word",
                        padding:"0 10px"
                      }}
                    >
                      {msg.text}
                    </Box>
                  </Box>
                ))}
                {showEmojiPicker && (
              <Box sx={{
                display: "flex",
                justifyContent:"flex-end",
                alignItems:"flex-end",
              }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </Box>
            )}
                <div ref={messageEndRef} />
              </Box>
            </Box>

            {/* {textfeild and button} */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#f0f1f2",
                width: "50rem",
                boxSizing: "border-box",
                borderColor: "#f0f1f2",
              }}
            >
              <input
                style={{
                  height: "40px",
                  width: "50rem",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
                value={value}
                onChange={change}
                placeholder="Type your message..."
              />
                <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <EmojiEmotionsIcon />
              </IconButton>
              <Button onClick={handleClick} onKeyDown={handleKeyPress}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/send-58-131212.png?f=webp&w=512"
                  alt="sendIcon"
                  height="50px"
                  width="50px"
                />
              </Button>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatBox;
