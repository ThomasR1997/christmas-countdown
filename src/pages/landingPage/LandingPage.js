import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  CommentDiv,
  CountContainer,
  CountdownDiv,
  DeleteButton,
  OuterCommentDiv,
  StyledBackground,
  StyledButton,
  StyledHeader,
  StyledMessage,
  Timestamp,
} from "../../components/StyledComponents";

export const LandingPage = () => {
  // default state for time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Get localstorage for comments
  const storedMessage = JSON.parse(localStorage.getItem("test")) || [];

  // Default state for message
  const [message, setMessage] = useState();

  // State for localstorage
  const [storage, setStorage] = useState(storedMessage);

  // Countdown to this date
  const christmas = "December, 24, 2022";

  const getTime = () => {
    // Time in milliseconds from now until christmas
    const time = Date.parse(christmas) - Date.now();

    // Turns milliseconds into days, hours. minutes and seconds
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  // Refreshes the page each second
  useEffect(() => {
    const interval = setInterval(() => getTime(christmas), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(storage));
  }, [storage]);

  // Gets the value from textarea input
  const submit = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    // Gets current date
    const timestamp = new Date().toDateString();

    // Saves id, message and date to storage
    // uuidv4 gives a random id to each comment
    setStorage([...storage, { id: uuidv4(), text: message, time: timestamp }]);
  };

  // Removes selected comment
  const removeItem = (id) => {
    const newStorage = storage.filter((item) => item.id !== id);

    setStorage(newStorage);
  };

  return (
    <StyledBackground>
      <StyledHeader>Countdown to christmas</StyledHeader>
      <CountContainer>
        <CountdownDiv alt>
          <h2>Days</h2>
          <h2>{days}</h2>
        </CountdownDiv>

        <CountdownDiv>
          <h2>Hours</h2>
          <h2>{hours}</h2>
        </CountdownDiv>

        <CountdownDiv alt>
          <h2>Minutes</h2>
          <h2>{minutes}</h2>
        </CountdownDiv>

        <CountdownDiv>
          <h2>Seconds</h2>
          <h2>{seconds}</h2>
        </CountdownDiv>
      </CountContainer>

      <OuterCommentDiv>
        {storage.map((item, index) => {
          return (
            <CommentDiv key={index} id={item.id}>
              <p>{item.text}</p>

              <Timestamp>{item.time}</Timestamp>
              <DeleteButton onClick={() => removeItem(item.id)}>X</DeleteButton>
            </CommentDiv>
          );
        })}
      </OuterCommentDiv>

      <form>
        <StyledMessage
          rows="4"
          cols="50"
          maxLength="250"
          placeholder="Write a christmas greeting"
          value={message}
          onInput={(e) => submit(e)}
          required
        />

        <div>
          <StyledButton onClick={() => handleClick()}>Submit</StyledButton>
        </div>
      </form>
    </StyledBackground>
  );
};
