/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../Lib/createReducer';
import * as types from '../../Store/actions/types';
import {ILoading} from '../../Models/reducers/loading';

const initialState: ILoading = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoading) {
    return {...state, isLoginLoading: true};
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoading) {
    return {...state, isLoginLoading: false};
  },
});
