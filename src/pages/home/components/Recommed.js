import React, { Component } from 'react';
import { RecommedWrapper, RecommedItem } from '../style';
import { connect } from 'react-redux';
class Recommed extends Component{
    render() {
        const { list } = this.props;
        return (
            <div>
            <RecommedWrapper>
                {list.map((item) => {
                    return <RecommedItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                })}
         </RecommedWrapper>
            </div>
        )
    }
}

const mapState = (state) =>({
    list:state.getIn(['home','recommedList'])
})

export default connect(mapState,null)(Recommed);