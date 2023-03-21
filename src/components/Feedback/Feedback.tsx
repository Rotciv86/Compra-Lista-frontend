import { useEffect } from "react";
import { closeFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

interface FeedbackProps {
  isOpen: boolean;
  messageFeedback: string;
  isError: boolean;
}

const Feedback = ({ isError, isOpen, messageFeedback }: FeedbackProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(closeFeedbackActionCreator());
      }, 3000);
    }
  }, [dispatch, isOpen]);

  return <span className="feedback-text">{messageFeedback}</span>;
};

export default Feedback;
