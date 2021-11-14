import React, { useState, useEffect, useRef } from "react";
import db, { auth } from "../firebase";
import SendMsg from "./SendMsg";
import "../css/Chat.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100,
  },
};

const ChatRoom = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <br />
        <h3 className="text-center m-2">Chat Area 🗣️</h3>
        <h3
          className="text-center"
          style={{ fontSize: "15px", marginBottom: "15px" }}
        >
          (Just scroll down to bottom)
        </h3>
        <div className="chat-area">
          <Container>
            <div className="msgs">
              {messages.map(({ id, text, photoURL, uid, displayName }) => (
                <div>
                  <div
                    key={id}
                    className={`msg ${
                      uid === auth.currentUser.uid ? "sent" : "received"
                    }`}
                  >
                    <img src={photoURL} alt="" />
                    <p>
                      {text}{" "}
                      <span style={{ fontSize: "10px" }}>
                        <br />
                        {displayName}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <SendMsg scroll={scroll} className="send-msg-box" />
            <div ref={scroll}></div>
          </Container>
        </div>
      </motion.div>
      ;
    </>
  );
};

export default ChatRoom;
