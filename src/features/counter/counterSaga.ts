import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { delay } from "q";
import { fetchCount } from "./counterAPI";


function* getProduct (action: PayloadAction<any>) {

    yield fetchCount(2);

    yield call(fetchCount, 2)
}

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('handle sage')

    yield delay(1000);

    console.log('waiting done');

    yield put(incrementSagaSuccess(action.payload))
}


export default function* counterSaga() {

    yield takeEvery(incrementSaga.toString(),handleIncrementSaga );

    yield takeEvery(incrementSaga.toString(), getProduct)
}