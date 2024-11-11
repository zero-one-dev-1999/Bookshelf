import { APP_AUTH_LOGIN } from "./actionTypes";
import { actions } from "./reducer";
import { IProps } from "./saga";

const appAuthLoginAction = (credentials: IProps["payload"], setLoading: IProps['setLoading']) => ({
  setLoading,
  payload: credentials,
  type: APP_AUTH_LOGIN,
});

export { appAuthLoginAction, actions as appActions };
