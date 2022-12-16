import { useEffect, useState } from "react";
import styled from "styled-components";
var randomWords = require("random-words");

const Home = () => {
	const [answerText, setAnswerText] = useState("");
	const [typedText, setTypdText] = useState("");

	const keyDownHandler = (e: KeyboardEvent) => {
		if (e.key === "Backspace") {
			setTypdText((prevState) => prevState.slice(0, -1));
		} else if (e.key === "Enter") {
			setTypdText((prevState) => prevState + "");
		} else {
			setTypdText((prevState) => prevState + e.key);
		}
	};

	const generateRandomText = () => {
		setAnswerText(randomWords({ exactly: 30, join: " " }));
		setTypdText("");
	};

	useEffect(() => {
		generateRandomText();

		window.addEventListener("keydown", keyDownHandler, false);
		return () => window.removeEventListener("keydown", keyDownHandler, false);
	}, []);

	return (
		<$Home>
			<$TestText>
				<span>{answerText}</span>

				<$AnswerText>
					{typedText
						.split("")
						.map((letter, i) =>
							typedText[i] === answerText[i] ? (
								<span>{letter}</span>
							) : (
								<span style={{ color: "red" }}>{letter}</span>
							)
						)}
				</$AnswerText>
			</$TestText>
		</$Home>
	);
};

const $Home = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const $TestText = styled.div`
	position: relative;
	font-family: "Hanuman";
	font-style: normal;
	font-weight: 400;
	font-size: 39px;
	line-height: 57px;
	letter-spacing: 0.07em;
	width: 1000px;
	color: #7a7a7a;
`;

const $AnswerText = styled.div`
	position: absolute;
	top: 0;
	left: 0px;

	color: white;
`;

export default Home;
