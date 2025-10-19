import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import data from "./data/data.js";
import "./Page.css"

const GreetingPage = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name") || "bạn";
    const [isOpen, setIsOpen] = useState(false);

    const userData = data[name];
    const customGreeting = userData?.message || `Chúc ${name} luôn xinh đẹp, hạnh phúc và rực rỡ trong ngày 20/10 💐`;
    const userImage = userData?.image;

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
    <div className="greeting-body">
      <div className="petals" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="floral-frame" aria-hidden="true" />
      <div className={`wrapper${isOpen ? " open" : ""}`} onClick={toggleOpen}>
        <div className="front">
          <img src={userImage} alt="Beautiful flowers" />
        </div>
        <div className="back">
          <div className="back-content">
            <p>{customGreeting}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default GreetingPage