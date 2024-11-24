import React, { useState, useEffect } from "react";
import "./Snake.css";

const Snake = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, -1]);
  const [isGameOver, setIsGameOver] = useState(false);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];
    newSnake.push(newHead);
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
    } else {
      newSnake.shift();
    }
    if (
      newHead[0] < 0 ||
      newHead[0] >= 20 ||
      newHead[1] < 0 ||
      newHead[1] >= 20 ||
      newSnake.slice(0, -1).some((part) => part[0] === newHead[0] && part[1] === newHead[1])
    ) {
      setIsGameOver(true);
      return;
    }
    setSnake(newSnake);
  };

  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setDirection([-1, 0]);
        break;
      case "ArrowDown":
        setDirection([1, 0]);
        break;
      case "ArrowLeft":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([0, 1]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(moveSnake, 200);
    document.addEventListener("keydown", changeDirection);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", changeDirection);
    };
  });

  return (
    <div className="snake-game">
      <h3>Snake Game</h3>
      {isGameOver ? (
        <div>Game Over!</div>
      ) : (
        <div className="grid">
          {Array(20)
            .fill(null)
            .map((_, i) =>
              Array(20)
                .fill(null)
                .map((_, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`cell ${
                      snake.some((part) => part[0] === i && part[1] === j)
                        ? "snake"
                        : food[0] === i && food[1] === j
                        ? "food"
                        : ""
                    }`}
                  ></div>
                ))
            )}
        </div>
      )}
    </div>
  );
};

export default Snake;
