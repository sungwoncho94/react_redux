import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

// createAction함수를 사용하여 액션 생성함수 만든다
// 이는 FSA규칙을 따름
// 기존 액션생성함수
// export const changeINput = text => ({ type: CHANGE_INPUT, payload: text });
// export const create = text => ({ type: CREATE, payload: text });
// export const enter = id => ({ type: ENTER, payload: id });
// export const leave = id => ({ type: LEAVE, payload: id });
// createAtion 사용

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, text => text);
// export const create = createAction(CREATE, text => text);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

// 리듀서에 id값을 넘겨주는데, 리듀서는 순수함수여야한다.
// --> 데이터에 고유id를 주는 작업은 리듀서가 아니라, 액션이 스토어에 디스패치 되기 전에 이뤄져야함
export const create = createAction(CREATE, text => ({ text, id: id++ }));

// 초기상태 및 리듀서 정의
// 초기상태 정의
const initialState = {
    input: '',
    list: [
      {
        id: 0,
        name: '조뮁',
        entered: true,
      },
      {
        id: 1,
        name: '샤민',
        entered: false,
      },
      {
        id: 2,
        name: '78',
        entered: false,
      },
    ],
  };
  
  // **** handleActions 로 리듀서 함수 작성
  export default handleActions(
    {
      [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload,
      }),
      [CREATE]: (state, action) => ({
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          name: action.payload.text,
          entered: false,
        }),
      }),
      [ENTER]: (state, action) => ({
        ...state,
        list: state.list.map(
          item =>
            item.id === action.payload
              ? { ...item, entered: !item.entered }
              : item
        ),
      }),
      [LEAVE]: (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      }),
    },
    initialState
  );