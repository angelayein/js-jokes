import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const App = () => {
  const jokes = [
    { joke: "Why did the JavaScript developer quit his job? Because he didn't get arrays!", likes: 0 },
    { joke: "Why do JavaScript developers prefer promises over callbacks? Because they don't like to be kept waiting!", likes: 0 },
    { joke: "What's the object-oriented way to become wealthy in JavaScript? Inheritance!", likes: 0 },
    { joke: "Why did the JavaScript function go to therapy? It had too many anonymous functions calling it!", likes: 0 },
    { joke: "What's a programmer's favorite hangout place? Foo Bar!", likes: 0 },
    { joke: "Why did the JavaScript developer go broke? Because he lost his prototypes!", likes: 0 },
    { joke: "Why did the function and the array go to couples therapy? They had trouble understanding each other's scope!", likes: 0 },
    { joke: "Why do JavaScript programmers prefer the dark mode? Because they like to code with reduced light pollution!", likes: 0 },
    { joke: "What's a JavaScript developer's favorite dance move? The Callback!", likes: 0 },
    { joke: "Why did the JavaScript code go to rehab? Because it had too many dependencies!", likes: 0 },
  ];

  const [jokesList, setJokesList] = useState(jokes);
  const [curIndex, setCurIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * jokesList.length);
    setCurIndex(randomIndex);
    setLiked(false);
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setJokesList((prevJokes) =>
        prevJokes.map((joke, index) =>
          index === curIndex ? { ...joke, likes: joke.likes + 1 } : joke
        )
      );
    }
  };

  const mostLikes = jokesList.reduce((prev, current) =>
    prev.likes > current.likes ? prev : current
  );

  const curJoke = jokesList[curIndex];

  return (
    <div>
      <h2>JavaScript Jokes</h2>
      <p>{curJoke.joke}</p>

      <IconButton onClick={handleLike}>
        <FavoriteIcon style={{ color: liked ? "red" : "gray" }} />
      </IconButton>

      {curJoke.likes}

      <br /><br />
      <button onClick={handleClick}>Next Joke</button>

      <h2>Most Liked JS Joke</h2>
      <p>
        {mostLikes.joke} <b>with {mostLikes.likes} likes.</b>
      </p>
    </div>
  );
};

export default App;