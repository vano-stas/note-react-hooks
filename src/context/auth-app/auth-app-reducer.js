import { SIGN_UP_USER, DELETE_USER, SIGN_IN_USER, LOG_OUT_USER, GET_CURRENT_USER } from "../types";

const handlers = {
    [SIGN_UP_USER]: state => ({...state, user: payload }),
    [DELETE_USER]: (state, { payload }) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [SIGN_IN_USER]: (state, { payload }) => ({ ...state, notes: payload, loading: false }),
    [LOG_OUT_USER]: (state, { payload }) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    [GET_CURRENT_USER]: (state, { payload }) => ({

    }),
    DEFAULT: state => state
}

export const AuthAppReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
        return handle(state, action);
}