import { createSlice } from "@reduxjs/toolkit";

// ActionCreator + Reducer = Slice

// 리듀서와 액션 생성자를 간단하게 작성
// 반환값 {reducer, actions, ...}
// reducer: 리듀서 함수. Redux 스토어에 전달해야 함
// actions: 각 리듀서에 해당하는 액션 생성자 객체
const counterSlice = createSlice({
    name: 'myCounter', //슬라이스 이름(action type의 접구사로 사용됨)
    initialState: { count: 5, date: new Date().toString() },
    reducers: {
        countUp: (state, action) => {
            // immer 라이브러리를 내부적으로 사용하기 때문에 state를 직접 수정해도 된다.
            state.count += action.payload.step;
        },
        countDown: (state, action) => {
            state.count -= action.payload.step;
        },
        countReset: (state) => {
            state.count = 0;
        }
    }

});

// 액션 생성자라서, 이를 호출하면 ???
// countUp(2) => {type: 'myCounter_countUp', payload: 2}
export const { countUp, countDown, countReset } = counterSlice.actions;

export default counterSlice;