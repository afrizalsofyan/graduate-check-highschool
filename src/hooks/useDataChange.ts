import { useReducer } from "react";

interface IChangeDataAction {
  type: string;
  payload: number;
}

interface IChangeDataState {
  numberTestStudent: number;
  result: any;
}

const initialValue = {
  numberTestStudent: 0,
  result: {},
};

const useDataChange = () => {
  const [state, dispatch] = useReducer(changeDataReducers, initialValue);

  const setNumberTestStudent = (value: any) => {
    dispatch({ type: "CHANGE_NUMBER_TEST_STUDENT", payload: value });
  };

  const setStudentResultData = (value: any) => {
    dispatch({ type: "CHANGE_STUDENT_RESULT_DATA", payload: value });
  };

  return {
    ...state,
    setNumberTestStudent,
    setStudentResultData,
  };
};

const changeDataReducers = (
  state: IChangeDataState,
  action: IChangeDataAction
) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_NUMBER_TEST_STUDENT":
      return { ...state, numberTestStudent: payload };
    case "CHANGE_STUDENT_RESULT_DATA":
      return { ...state, result: payload };
    default:
      return state;
  }
};

export { useDataChange };
