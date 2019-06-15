import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HomeWrapper, HomeLeft, Homeright,BackTop } from './style';
import List from './components/List';
import Recommed from './components/Recommed';
import Write from './components/Write';
import { actionCreators } from './store/index';
class Home extends Component{
    handleScrollTop() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={require('./img/1.jpg')} />
                    <List />
                </HomeLeft>
                <Homeright>
                    <Recommed />
                    <Write />
                </Homeright>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        ); 
    }
    //通过 componentDidMount接收数据
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    //当组件销毁之后，对应的事件解绑
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
    //定义一个方法 changeHomeData来派发action，将上面传递进来的action派发给store
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapState, mapDispatch)(Home);