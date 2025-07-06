import React, { useEffect, useRef, useState, useCallback } from "react";

const GameCanvas = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerX, setPlayerX] = useState(50);
  const [obstacles, setObstacles] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const gameWidth = 400;
  const gameHeight = 300;
  const playerSize = 20;
  const obstacleSize = 20;
  const speed = 2;

  const startGame = useCallback(() => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setPlayerX(50);
    setObstacles([]);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let lastTime = performance.now();
    let gameTime = 0;

    const handleKeyPress = (e) => {
      if (gameActive && !gameOver) {
        if (e.key === "ArrowLeft" && playerX > 0)
          setPlayerX((prev) => prev - 10);
        if (e.key === "ArrowRight" && playerX < gameWidth - playerSize)
          setPlayerX((prev) => prev + 10);
      }
    };

    const updateGame = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      gameTime += deltaTime;

      if (gameActive && !gameOver) {
        setScore(Math.floor(gameTime * 10));

        // Add new obstacle
        if (Math.random() < 0.02) {
          setObstacles((prev) => [
            ...prev,
            { x: Math.random() * (gameWidth - obstacleSize), y: -obstacleSize },
          ]);
        }

        // Update obstacles
        setObstacles((prev) =>
          prev
            .map((obs) => ({ ...obs, y: obs.y + speed }))
            .filter((obs) => obs.y < gameHeight)
        );

        // Collision detection
        const player = {
          x: playerX,
          y: gameHeight - playerSize - 10,
          width: playerSize,
          height: playerSize,
        };
        const collision = obstacles.some(
          (obs) =>
            player.x < obs.x + obstacleSize &&
            player.x + playerSize > obs.x &&
            player.y < obs.y + obstacleSize &&
            player.y + playerSize > obs.y
        );
        if (collision) {
          setGameOver(true);
          setGameActive(false);
        }

        // Win condition (30 seconds)
        if (gameTime >= 30) {
          setGameOver(true);
          setGameActive(false);
        }
      }

      // Render
      ctx.clearRect(0, 0, gameWidth, gameHeight);
      ctx.fillStyle = "#fce4ec"; // Light pink background
      ctx.fillRect(0, 0, gameWidth, gameHeight);

      ctx.fillStyle = "#4ecdc4"; // Green player
      ctx.fillRect(
        playerX,
        gameHeight - playerSize - 10,
        playerSize,
        playerSize
      );

      ctx.fillStyle = "#ff6b6b"; // Red obstacles
      obstacles.forEach((obs) =>
        ctx.fillRect(obs.x, obs.y, obstacleSize, obstacleSize)
      );

      ctx.fillStyle = "#333";
      ctx.font = "16px Arial";
      ctx.fillText(`Score: ${score}`, 10, 20);

      if (gameOver) {
        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.fillText(
          gameTime >= 30 ? "You Win!" : "Game Over",
          gameWidth / 2 - 50,
          gameHeight / 2
        );
      }

      if (gameActive && !gameOver)
        animationFrameId = requestAnimationFrame(updateGame);
    };

    window.addEventListener("keydown", handleKeyPress);
    if (gameActive && !gameOver)
      animationFrameId = requestAnimationFrame(updateGame);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameActive, gameOver, playerX, obstacles, score]);

  return (
    <div className="game-section" aria-label="Code Block Dash Game">
      <h2 className="text-2xl font-semibold text-blue-700 text-center mb-4">
        Play Code Block Dash!
      </h2>
      <p className="text-gray-600 text-center mb-2">
        Use arrow keys to dodge obstacles. Survive 30 seconds to win!
        <button
          onClick={() => setTooltipVisible(true)}
          className="ml-2 text-blue-500 underline"
        >
          (Why?)
        </button>
        {tooltipVisible && (
          <div className="tooltip text-sm text-gray-700 mt-1">
            This is like coding movement with inputs—try it!
            <button
              onClick={() => setTooltipVisible(false)}
              className="ml-2 text-red-500"
            >
              X
            </button>
          </div>
        )}
      </p>
      <canvas ref={canvasRef} width={gameWidth} height={gameHeight} />
      {!gameActive && !gameOver && (
        <button
          onClick={startGame}
          className="block mx-auto mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Play Game
        </button>
      )}
      {gameOver && (
        <button
          onClick={startGame}
          className="block mx-auto mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default GameCanvas;
