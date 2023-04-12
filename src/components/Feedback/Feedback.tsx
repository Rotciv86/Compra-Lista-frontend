import { useEffect } from "react";
import { closeFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import FeedbackStyled from "./FeedbackStyled";

interface FeedbackProps {
  isOpen: boolean;
  messageFeedback: string;
  isError: boolean;
}

const Feedback = ({ isError, isOpen, messageFeedback }: FeedbackProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeFeedbackActionCreator());
    }, 3000);
  }, [dispatch]);

  return (
    <FeedbackStyled className={isError ? "feedback-error" : "feedback-success"}>
      <span className="feedback-text">{messageFeedback}</span>
    </FeedbackStyled>
  );
};

export default Feedback;
