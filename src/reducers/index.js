import { combineReducers } from 'redux';
import lang from './LangReducer';
import auth from './AuthReducer';
import profile from './ProfileReducer';
import about from './AboutReducer';
import policy from './PolicyReducer';
import wallet from './WalletReducer';
import appInfo from './AppInfoReducer';
import questions from './QuestionsReducer';

export default combineReducers({
    lang,
    auth,
    profile,
    about,
    policy,
    wallet,
    appInfo,
    questions,
});
