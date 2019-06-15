import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
});
export const changePage=(page)=>({
    type: actionTypes.CHANGE_PAGE,
    page
    
})

//定义changeList,给getList使用，在getList派发changeList请求修改
const changeList = (data) =>( {
    type: actionTypes.CHANGE_LIST,
    //将data数据也改为immutable类型
    data: fromJS(data),
    //将获取到的数据10个分在一页，totalPage表示总页数
    totalPage:Math.ceil(data.length/10)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            //将获取到的res的data数据传递给现在定义的data，并输出data
            const data = res.data;
            //拿到需要修改的data数据下面的data派发给store
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}
