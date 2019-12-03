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
    //return () => generateRandomColor();
  }, [totalColor]);

  const bindCards = data => {
    return data.map((item, index) => {
      return (
        <Card key={index} cardClick={handleCardClick} backgroundColor={item} />
      );
    });
  };

  const handleCardClick = data => {
    console.log(data, rightAnswer, data === rightAnswer);
    if (!isStarted) {
      setStart(true);
    }
    if (data === rightAnswer) {
    } else {
      // const arr = colors;
      // arr.indexOf(data) = "rgb(35, 35, 35)";
      // setColors([
      //   ...colors,
      //   (colors[colors.indexOf(data)] = "rgb(35, 35, 35)")
      // ]);
    }
  };

  const handleResetClick = () => {
    console.log("reset");
  };
  const handleModeClick = data => {
    // console.log(data);
    if (data === "easy") {
      setTotalColor(3);
    } else {
      setTotalColor(6);
    }
    // setTotalColor()
  };

  const randomColor = () => {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  const generateRandomColor = () => {
    var arr = [];
    for (var i = 0; i < totalColor; i++) {
      arr.push(randomColor());
    }
    setColors(arr);
    pickColor(arr);
  };

  const pickColor = arr => {
    var random = Math.floor(Math.random() * arr.length);
    setAnswer(arr[random]);
  };
  console.log(colors);
  return (
    <>
      <Header colorName={rightAnswer} />
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
