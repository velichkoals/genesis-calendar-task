import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { eventsReducer } from './events/reducer';

export const rootReducer = combineReducers({
	events: eventsReducer,
});
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
