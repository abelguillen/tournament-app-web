import { CHANGE_THEME } from '../configuration/actions';
import { ThemeName } from './types';

export const State = ThemeName;
// const Action =
//     | ReturnType<typeof changeTheme>
//     | { type: 'OTHER_ACTION'; payload?: any };

const themeReducer = (
    previousState = 'light',
    action
) => {
    if (action.type === CHANGE_THEME) {
        return action.payload;
    }
    return previousState;
};

export default themeReducer;