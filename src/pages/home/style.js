import styled from 'styled-components';
export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
  
`;
export const HomeLeft = styled.div`
 
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
  .banner-img{
      width:625px;
      height:270px;
      
  }
  border-bottom:1px solid #dcdcdc;
`;

export  const Homeright = styled.div`
  width:280px;
  float:right;
`;
export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
   .List-pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
 
`;
export const ListInfo = styled.div`
  width:500px;
  float:right;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;

  }
  .desc{
    line-height:18px;
    font-size:13px;
    color:#999;

  }
`;
export const RecommedWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;
export const RecommedItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`;

export const WriteWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`;
export const LoadMore = styled.div`
   width:100%;
   height:40px;
   line-height:40px;
   margin:30px 0;
   background:#a5a5a5;
   text-align:center;
   border-radius:20px;
   color:#fff;
   /*鼠标移入本区域箭头变成手势*/
   cursor: pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
`;