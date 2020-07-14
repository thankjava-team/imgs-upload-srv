import React, {Component} from "react";
import './login.scss';
import titleImg from '../img/title.png';
// import disCheck from '../img/disCheck.png';
import check from '../img/check.png';

class Login extends Component{
 render() {
   return (
     <div className='loginBg'>
       <h1 className='titleName'>
         <img src={titleImg} alt='图床' />
       </h1>
       <div className='formWrap'>
         <p>
           <input placeholder='请输入用户名或者邮箱'/>
         </p>
         <p>
           <input placeholder='请输入密码'/>
         </p>
         <div className='stateFunc'>
           <span className='readMe'>
             <img src={check} alt='记住密码'/>
             <span>记住我</span>
           </span>
           <span className='findFunc'>
             <strong>忘记密码?</strong>
             <strong> | </strong>
             <strong>点我注册</strong>
           </span>
         </div>
       </div>
     </div>
   )
 }
}

export default Login;
