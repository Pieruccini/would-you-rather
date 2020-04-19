import React, { useState } from "react";
import { connect } from "react-redux";
import { getQuestionData, calculateAnswerPercentage } from "../utils/utils";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { handleQuestionAnswer } from "../actions/questions";
import { MdFace } from "react-icons/md";

const Question = ({
  optionOne,
  optionTwo,
  avatarURL,
  name,
  userHasAnswered,
  dispatch,
  authUser,
  id,
}) => {
  const [answer, setAnswer] = useState(
    userHasAnswered ? authUser.answers[id] : null
  );

  const [answerPercentage, setAnswerPercentage] = useState(
    userHasAnswered
      ? calculateAnswerPercentage(
          optionOne.votes.length,
          optionTwo.votes.length
        )
      : {
          one: 0,
          two: 0,
        }
  );

  const handleAnswer = (answer) => {
    dispatch(handleQuestionAnswer({ qId: id, answer }));
    setAnswer(answer);

    handlePercentage({
      optionOne: optionOne.votes.length + (answer === "optionOne" ? 1 : 0),
      optionTwo: optionTwo.votes.length + (answer === "optionTwo" ? 1 : 0),
    });
  };

  const handlePercentage = ({ optionOne, optionTwo }) => {
    const percentage = calculateAnswerPercentage(optionOne, optionTwo);
    setAnswerPercentage(percentage);
  };

  return (
    <Container className="question-container">
      <Col>
        <Image
          style={{ alignSelf: "center" }}
          width={64}
          height={64}
          src={avatarURL}
          roundedCircle
        />
        <p>{name} asks:</p>
      </Col>
      <Col>
        <h5>Would you rather?</h5>
        <br />
      </Col>
      <Col>
        <Button
          block
          variant="info"
          size="lg"
          disabled={answer}
          onClick={() => handleAnswer("optionOne")}
        >
          {optionOne.text}
          {answer && (
            <OverlayTrigger
              defaultShow={answer}
              placement="right"
              trigger="click"
              overlay={popover(
                optionOne.votes.length,
                answer === "optionOne" ? avatarURL : null
              )}
            >
              <ProgressBar
                variant="warning"
                animated
                now={answerPercentage.one}
                label={`${answerPercentage.one}%`}
              />
            </OverlayTrigger>
          )}
        </Button>

        <br />
        <Button
          block
          variant="info"
          size="lg"
          disabled={answer}
          onClick={() =>
            handleAnswer("optionTwo", answer === "optionOne" ? avatarURL : null)
          }
        >
          {optionTwo.text}
          {answer && (
            <OverlayTrigger
              defaultShow={answer}
              placement="right"
              trigger="click"
              overlay={popover(optionTwo.votes.length)}
            >
              <ProgressBar
                variant="warning"
                animated
                now={answerPercentage.two}
                label={`${answerPercentage.two}%`}
              />
            </OverlayTrigger>
          )}
        </Button>
      </Col>
      <Col></Col>
    </Container>
  );
};

const stateMapToProps = ({ questions, users, authUser }, { match }) => {
  const { questions_id } = match.params;
  return {
    ...getQuestionData(questions[questions_id], users, authUser),
    authUser,
  };
};

export default connect(stateMapToProps)(Question);

const popover = (people, avatarURL) => {
  return (
    <Popover id="popover-basic">
      <Popover.Content>
        <div>
          <MdFace style={{ marginRight: "4px" }} />
          {people}
        </div>
        <div>
          {avatarURL && (
            <Image
              style={{ alignSelf: "center" }}
              width={32}
              height={32}
              src={avatarURL}
              roundedCircle
            />
          )}
        </div>
      </Popover.Content>
    </Popover>
  );
};
