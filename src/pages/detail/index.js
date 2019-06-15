import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators }  from'./store';
class Detail extends Component{
    render() {
        return(
        <DetailWrapper>
                <Header>{this.props.title} <img className='img' src={require('./image/3.jpg')}/></Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}></Content>
        </DetailWrapper>
        )
    }
    //异步数据的获取
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail);