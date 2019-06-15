import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    articleList: [],
    recommedList: [],
    articlePage: 1,
    showScroll:false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.articleList),
                recommedList: fromJS(action.recommedList),
            });
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            });
        case actionTypes.TOGGLE_SCROLL__TOP :
            return state.set('showScroll',action.show)
        
        default:
        return state;
    }
    
}