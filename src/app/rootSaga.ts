/* eslint-disable require-yield */
import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, retry, takeEvery } from 'redux-saga/effects';
import { increment } from '../features/counter/counterSlice';
import counterSaga from '../features/counter/counterSaga';


export function* log(action: PayloadAction) {
    console.log('action', action)
}

function* funcSage() {
    console.log("func Saga")

    const data =  call(() => {
        console.log()
    })

    yield takeEvery(increment().type, log);

    yield retry(2, 500, () => {

    })
}

export default  function * rootSaga() {
    console.log('rootSaga')

    yield all([funcSage(), counterSaga()])
};