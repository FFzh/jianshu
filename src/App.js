import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home/index';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store/index';
class App extends Component{
  render() {
    return (
      //Provider把store里面的数据都提供给其内部的组件
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div>
            {/*这里将Home，detail以组件的形式传入，在根路径下显示Home的内容
              在detail路径下将detail组件引入
             */}
            <Route path ='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path ='/login' exact component={Login}></Route>
        </div>
        </BrowserRouter>
       
      </Provider>
    )
  }
}




export default App;
