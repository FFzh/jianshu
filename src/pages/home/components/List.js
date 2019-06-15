import React, { Component } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';
class List extends Component{
    render() {
        //这里的list就是我们拿到的articleList中的list
        const { list ,getMoreList,page} = this.props;
        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem >
                                <img alt='' className=" List-pic" src={require('../img/2.jpg')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => getMoreList(page) }> 更多文字</LoadMore >
            </div>
           )       
    }
}
//mapState是从store拿数据到list中
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    //从store数据中拿到当前是第几页的内容
    page:state.getIn(['home','articlePage'])
})
//使用mapDispatch派发数据
const mapDispatch = (dispatch) => ({
    //这里定义getMoreList方法用于发送请求
    //getMoreList接收到page页码，并传递给actionCreators
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List);