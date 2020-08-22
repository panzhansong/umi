/* 登录拦截
* 通过isLogon 判断token是否存在 是否重定向到登录页面
*/


import React from 'react';
import { Redirect, connect } from 'umi';

class SecurityLayout extends React.Component {

  render() {
    const { children } = this.props;
    // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
    const isLogin = true;


    if (!isLogin && window.location.pathname !== '/user/login') {
      return <Redirect to='/user/login' />;
    }

    return children;
  }
}

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);
