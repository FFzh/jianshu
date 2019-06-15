import React, { Component } from 'react';
import iconfont from "../../statics/iconfont/iconfont.css";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import { Link } from 'react-router-dom';
import {
    HeadrerWrapper, Logo, Nav, NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoItem,
    SearchInfoSwitch,
    NavSearch,
    Addition,
    Button,
  
} from './style'

 
class Header extends Component{
    getListArea() {
        const { focused, list, page ,mouseIn,totalPage} = this.props;
        //将list转化为js普通数组
        const newList = list.toJS();
        const pageList = [];
        //当列表中有内容时，才会执行
        if (newList.length) {
            for (let i = ((page-1) * 10); i < (page * 10); i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]} >{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused ||mouseIn ){
            return (
                <SearchInfo
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}>
             
                <SearchInfoTitle>
                 热门搜索
                <SearchInfoSwitch
                 onClick={() => { this.props.handleChangePage(page, totalPage,this.spinIcon) }} >
                            
                <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin" >&#xe851;</i>
                            换一换</SearchInfoSwitch>{/*这里的ref可以获取i标签的真实的dom节点 */}
                </SearchInfoTitle>
                <SearchInfoList>
                      {pageList}
                </SearchInfoList>
            </SearchInfo>)
        } else {
            
        }
    }
    render() {
        //这里的list是指获取到的列表中的数据
        const { focused,handleInputFocus,handleInputBlur,list,login } = this.props;
        return (
            <HeadrerWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ?
                            <NavItem className='right'>退出</NavItem>
                            :<Link to='/login'><NavItem className='right'>登录</NavItem></Link> 
                    }
                  
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch 
                            className={focused ? 'focused' : ''}
                            //把list传进handleInputFocus
                            onFocus={()=>handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                        {/*调用getListArea方法，如果聚焦显示*/}
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                    <i className="iconfont">&#xe601;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeadrerWrapper>
        )
    }
}
//mapStateToProps：组件和store做连接的时候，store数据映射如何到props上
const mapStateToProps = (state)=>{
    return {
        //将store中的focused映射到组件里面
        //focused: state.get('header').get('focused')
        //还可以通过getIn方法获取到focused
        focused: state.getIn(['header', 'focused']),
        
        //我们将获取到的list的数据取出来到原来的list中
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        //login数据，从我们的login里面去取
        login:state.getIn(['login','login'])
       
    }
}
//组件想要改变store的内容需要调用的方法
const mapDispathToProps = (dispatch)=>{
    return{
        handleInputFocus(list){
           (list.size === 0)&&dispatch(actionCreators.getList())
            dispatch( actionCreators.searchFocus());
        },
        handleInputBlur() {
            // const action ={
            //     type:'search_blur'
            // }
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            //如果spin中的transform中的数字不是0-9中的数字，就将其替换为空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                //将字符串转换成一个数字
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
            
        }
        
    
        
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);