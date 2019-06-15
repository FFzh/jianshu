import axios from 'axios';
import * as actionTypes from './actionTypes';
const changeDeatil = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?='+id).then((res) => {
            const result = res.data.data;
            dispatch(changeDeatil(result.title, result.content));
        })
    }
}
