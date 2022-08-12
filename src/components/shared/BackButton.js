import React from "react";
import { useHistory } from "react-router-dom";

function BackButton({ routingData }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/portfolio${routingData}`);
  }

  return (
    <div className="back-btn" onClick={handleClick}>
      <svg
        width="59"
        height="60"
        viewBox="0 0 59 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5839 58.6769C51.2715 60.5635 55.7902 59.1036 57.6769 55.4161C59.5635 51.7285 58.1036 47.2098 54.4161 45.3231L47.5839 58.6769ZM8 30L4.58393 23.3231C2.07718 24.6057 0.5 27.1842 0.5 30C0.5 32.8158 2.07718 35.3943 4.58393 36.6769L8 30ZM54.4161 14.6769C58.1036 12.7902 59.5635 8.27146 57.6769 4.58393C55.7902 0.896403 51.2715 -0.563504 47.5839 1.32314L54.4161 14.6769ZM54.4161 45.3231L11.4161 23.3231L4.58393 36.6769L47.5839 58.6769L54.4161 45.3231ZM11.4161 36.6769L54.4161 14.6769L47.5839 1.32314L4.58393 23.3231L11.4161 36.6769Z"
          fill="#FB9C4C"
        />
      </svg>
    </div>
  );
}

export default BackButton;
