import React, { useState } from "react";
import MultipleChoiceQuestion from "./Components/MultipleChoiceQuestion";
import RadioButtonQuestion from "./Components/RadioButtonQuestion";
import TextAreaQuestion from "./Components/TextAreaQuestion";
import PageTab from "./Components/PageTab";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
    margin: "0 auto",
    marginTop: 40,
    marginLeft: 0,
    width: "70%",
    minWidth: 640,
    maxWidth: 1090,
    color: "#333",
  },
  h2: {
    textAlign: "left",
    fontSize: "21.0975px",
    fontWeight: "400",
    marginLeft: 6,
    marginBottom: -2,
  },
  description: {
    textAlign: "left",
    marginLeft: 6,
    fontSize: 15,
    maxWidth: 700,
    marginBottom: 13,
  },
  resultContainer: {
    textAlign: "left",
    fontWeight: "100",
    fontSize: 14.55,
    marginLeft: 4,
  },
  resultTitle: {
    fontWeight: "400",
    fontSize: 21,
    marginBottom: 8,
  },
  responseRate: {
    marginTop: 10,
  },
  sendButton: {
    fontSize: 13,
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    marginLeft: 6,
    marginBottom: 10,
    float: "left",
    borderColor: "#c0c0c0",
    border: "1px solid",
    borderBottomColor: "#9b9b9b",
    fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
    cursor: "pointer",
  },
  shown: {},
  hidden: {
    display: "none",
  },
});

const OldCourseEval = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const [showSurveryLink, setShowSurveyLink] = useState(false);
  let content = [];
  content.push(
    <div className={pageNumber === 0 ? classes.shown : classes.hidden}>
      <div className={classes.description}>
        Du kan fylla i och ändra dina svar i kursvärderingen t.o.m. 2021-05-11
        23:59. Det är de senast sparade svaren som ligger till grund för
        kursvärderingen.
        <br />
        <br />
        Your views are valuable, and both positive and
        constructive and factual criticism is welcome. Because the criticism should be
        factual and constructive, offensive formulations about individuals are strictly prohibited.
      </div>
      <RadioButtonQuestion
        number={1}
        question={"How satisfied are you with the course in general?"}
        alternatives={[
          "Very dissatisfied",
          "Somewhat dissatisfied",
          "Neither satisfied nor dissatisfied",
          "Somewhat satisfied",
          "Very satisfied",
        ]}
        arrows={true}
        comment={true}
      />
      <MultipleChoiceQuestion
        number={2}
        question={
          "Summarize your main impression of the course by marking the words that best describe the course for you."
        }
        words={[
          "stimulerande",
          "problemlösning",
          "analyserande",
          "ämnesfördjupning",
          "intellektuellt utmanande",
          "tråkig",
          "effektiv",
          "onödig",
          "aha-upplevelse",
          "utantill-kunskap",
          "engagerande",
          "för svår",
          "för lätt",
          "intressant",
          "spretig",
          "tung",
          "praktisk tillämpning",
          "ineffektiv",
          "nyttig",
        ]}
        comment={true}
      />
      <TextAreaQuestion
        number={3}
        question={"This was especially good with the course:"}
      />
      <TextAreaQuestion
        number={4}
        question={"The course can be improved in the following ways:"}
      />
      <RadioButtonQuestion
        number={5}
        question={
          "The administration during the course (schedule, exam registrations, etc.) has worked well."
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={6}
        question={
          "I have generally known what is expected of me in this course in relation to the course objectives."
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={7}
        question={
          "To what extent have you had difficulty following the course due to lack of prior knowledge?"
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={8}
        question={
          "I believe that the course's requirement for work effort corresponds to the number of course credits."
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={9}
        question={"This course have been intellectually challenging."}
        alternatives={[
          "Not at all",
          "Instämmer To a low degree",
          "Instämmer To some degree",
          "Instämmer To a high degree",
          "Instämmer helt",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={10}
        question={
          "The teacher(s) have been good at explaining course content that has been difficult to understand in the course."
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={11}
        question={"How satisfied are you with your own work effort in the course?"}
        alternatives={[
          "Very dissatisfied",
          "Somewhat dissatisfied",
          "Neither satisfied nor dissatisfied",
          "Somewhat satisfied",
          "Very satisfied",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={12}
        question={
          "To what extent has this course contributed to developing your ability to read and understand academic writing?"
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={13}
        question={
          "To what extent has this course contributed to developing your ability to work in groups / collaborate with others?"
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={14}
        question={
          "To what extent has the course built on what you have previously learned in the subject?"
        }
        alternatives={[
          "Not at all",
          "To a low degree",
          "To some degree",
          "To a high degree",
          "To a very high degree",
        ]}
        arrows={true}
        comment={true}
      />
      <button
        className={classes.sendButton}
        onClick={() => {
          alert(
            "Thanks! You are now done with the interaction. Now there is a link to the survey at the bottom of the page, click on it to proceed!"
          );
          setShowSurveyLink(true);
        }}
      >
        Spara svar
      </button>
      {showSurveryLink ? (
        <div>
          <a
            href={
              "https://esurvey.uid.com/survey/#42b15f72-0956-432e-b7fa-350e81f9a62c"
            }
          >
            Click here to get to the survey "Attrakdiff"!
          </a>{" "}
          <p>
          (Change language to English, at the top right of the page, when you
            comes to the survey)
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  content.push(
    <div
      className={pageNumber === 1 ? classes.resultContainer : classes.hidden}
    >
      <h3 className={classes.resultTitle}>Resultat</h3>
      <div>
        <i>Den här kursvärderingen har besvarats av 22% (12/54) studenterna.</i>
        <br />
        <p className={classes.responseRate}>
          Resultaten blir tillgängliga först efter att kursvärderingen avslutats
          och svaren gåtts igenom, summerats och publicerats.
        </p>
      </div>
    </div>
  );

  content.push(
    <div
      className={pageNumber === 2 ? classes.resultContainer : classes.hidden}
    >
      <h3 className={classes.resultTitle}>Kursrapport</h3>
      <p>Kursrapporten är inte färdigställd</p>
    </div>
  );

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>KURSVÄRDERING</h2>
      <PageTab pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {content[0]}
      {content[1]}
      {content[2]}
    </div>
  );
};

export default OldCourseEval;
