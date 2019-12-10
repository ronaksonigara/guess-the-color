import React, { useState, useEffect } from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import CardContainer from "./CardContainer";
import Card from "./Card";

function ColorGame() {
  const [totalColor, setTotalColor] = useState(6);
  const [colors, setColors] = useState([]);
  const [rightAnswer, setAnswer] = useState("");
  const [isWon, setStatus] = useState(false);
  const [isStarted, setStart] = useState(false);

  useEffect(() => {
    generateRandomColor();
  }, [totalColor]);

  const bindCards = data => {
    return data.map((item, index) => {
      return (
        <Card key={index} cardClick={handleCardClick} backgroundColor={item} />
      );
    });
  };

  const handleCardClick = data => {
    if (!isStarted) {
      setStart(true);
    }
    if (data === rightAnswer) {
      let arr = [];
      for (let i = 0; i < totalColor; i++) {
        arr.push(data);
      }
      setStatus(true);
      setColors(arr);
    } else {
      let newArr = [...colors];
      newArr[colors.indexOf(data)] = "rgb(35, 35, 35)";
      setColors(newArr);
    }
  };

  const handleResetClick = () => {
    generateRandomColor();
    setStart(false);
    setStatus(false);
  };
  const handleModeClick = data => {
    if (data === "easy") {
      setTotalColor(3);
    } else {
      setTotalColor(6);
    }
    setStart(false);
    setStatus(false);
  };

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);

    const g = Math.floor(Math.random() * 256);

    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  const generateRandomColor = () => {
    const arr = [];
    for (let i = 0; i < totalColor; i++) {
      arr.push(randomColor());
    }
    setColors(arr);
    pickColor(arr);
  };

  const pickColor = arr => {
    var random = Math.floor(Math.random() * arr.length);
    setAnswer(arr[random]);
  };
  return (
    <>
      <Header
        backgroundColor={isWon ? rightAnswer : "rgb(70,130,180)"}
        colorName={rightAnswer}
      />
      <MenuBar
        handleReset={handleResetClick}
        handleModeClick={handleModeClick}
        isHard={totalColor === 6 ? true : false}
        isWon={isWon}
        isStarted={isStarted}
      />
      <CardContainer>{bindCards(colors)}</CardContainer>
    </>
  );
}

export default ColorGame;
