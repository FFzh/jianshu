import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState =fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    //page表示当前页，totalPage表示总页数
    page: 1,
    totalPage: 1
});
export default (state=defaultState,action) => {

    // if (action.type === 'search_focus') {
    if(action.type===actionTypes.SEARCH_FOCUS){
        // return {
        //     focused:true
        // }
        //immutable对象的set方法，会结合之前immutable对象的值和设置的值
        //返回一个新的对象，并没有对之前的进行修改
        return state.set('focused', true);
    };
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    };
    if (action.type === actionTypes.CHANGE_LIST) {
        //将原来的数据的list改成我们现在请求的data
        return state.set('list',action.data).set('totalPage',action.totalPage)
    };
    if(action.type === actionTypes.MOUSE_ENTER){
        return state.set('mouseIn', true);
    };
    if(action.type === actionTypes.MOUSE_LEAVE){
        return state.set('mouseIn', false);
    };
    if (action.type === actionTypes.CHANGE_PAGE) {
        return state.set('page', action.page);
    }
    return state;
}