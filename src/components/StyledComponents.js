import styled from "styled-components";
import christmas from "../images/christmas.jpg";

// Background image for landingPage
export const StyledBackground = styled.div`
  background-image: url(${christmas});
  background-size: cover;
  background-position: center;
  min-height: 60em;
  padding-top: 3em;
`;

// Header for landingPage
export const StyledHeader = styled.h1`
  color: #f2e8cf;
  margin-top: 0;
  text-shadow: 0 0 3px black;
`;

// Container for countdown
export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

// Boxes for countdown days, hours, minutes and seconds
export const CountdownDiv = styled.div`
  background-color: ${(props) => (props.alt ? "#bc4749" : "#f2e8cf")};
  color: ${(props) => (props.alt ? "#f2e8cf" : "#bc4749")};

  border-radius: 50%;
  margin: 0.5em;
  padding: 1em;
  width: 7em;
  height: 7em;
`;

// Styles for the textarea
export const StyledMessage = styled.textarea`
  resize: none;
  background-color: #bc4749;
  color: #f2e8cf;
  border: 2px solid #f2e8cf;
  border-radius: 5px;
  margin-top: 5em;
  padding: 1em;
  font-family: "Mountains of Christmas", cursive;
`;

// Styles for the submit button
export const StyledButton = styled.button`
  background-color: #f2e8cf;
  color: #bc4749;
  border: none;
  border-radius: 5px;
  padding: 1em 2em;
  margin-top: 1em;
  margin-bottom: 5em;
  cursor: pointer;

  &:hover {
    filter: brightness(105%);
  }
`;

// Container for comment section
export const OuterCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Comment container
export const CommentDiv = styled.div`
  background-color: #bc4749;
  color: #f2e8cf;
  margin: 1em;
  width: 50%;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  border-radius: 10px;
`;

// Styles for Timestamp
export const Timestamp = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #f2e8cf;
  color: #bc4749;
  width: 2em;
  height: 2em;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;
