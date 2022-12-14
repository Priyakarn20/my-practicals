import React from 'react';

import './login.css';

function Login() {
  return (
    <div className="container">
      <div className="box-a">
      <div className="heading"></div>
      <form className="login-form">
        <div className="field">
          <input id="username" type="name" placeholder="Phone number, username, or email" />
        </div>
        <div className="field">
          <input id="password" type="password" placeholder="Password" />
        </div>
        <button class="login-button" title="login">Log In</button>
        <div className="separator">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <div className="other">
          <button className="fb-login-btn" type="button">
            <i className="fa-brands fa-facebook"></i>
            <span className=""> Log in with Facebook </span>
          </button>
          <a className="forgot-password" href="#">Forgot password?</a>
        </div>
      </form>
      </div>
      <div className="box">
        <p>Don't have an account? <a className="signup" href="#">sign Up</a></p>
      </div>
      
       <div className="box3">
       <p>Get the app.</p>
       <a href="https://apps.apple.com/in/app/instagram/id389801252"><img
         src="https://i.postimg.cc/Vkm7D9Xd/appstore.png"
         alt="appstore"
       /></a>
       <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US"><img
         src="https://i.postimg.cc/R00gzMsm/playstore.png"
         alt="playstore"
       /></a>
       
     </div>
     <div className="box4">
    <div className="links">
    <a href="/">Meta</a>
      <a href="/">About</a>
      <a href="/">Blog</a>
      <a href="/">Job</a>
      <a href="/">Help</a>
      <a href="/">API</a>
      <a href="/">Privacy</a>
      <a href="/">Terms</a>
      <a href="/">Top Accounts</a>
      <a href="/">Hashtags</a>
      <a href="/">Locations</a>
      <a href="/">Instagram Lite</a>
      <a href="/">Contact Uploading & Non-Users</a>
        <div className="box5" >    
        <span>English</span>   
            
          </div>                                             
      <select aria-label="Switch Display Language" className="hztqj"><option value="af">Afrikaans</option><option value="cs">??e??tina</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">????????????????</option>
      <option value="en">English</option><option value="en-gb">English (UK)</option><option value="es">Espa??ol (Espa??a)</option><option value="es-la">Espa??ol</option><option value="fi">Suomi</option><option value="fr">Fran??ais</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">?????????</option><option value="ko">?????????</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Portugu??s (Brasil)</option><option value="pt">Portugu??s (Portugal)</option><option value="ru">??????????????</option><option value="sv">Svenska</option><option value="th">?????????????????????</option><option value="tl">Filipino</option><option value="tr">T??rk??e</option><option value="zh-cn">??????(??????)</option><option value="zh-tw">??????(??????)</option><option value="bn">???????????????</option><option value="gu">?????????????????????</option><option value="hi">??????????????????</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">???????????????</option><option value="ml">??????????????????</option><option value="mr">???????????????</option><option value="ne">??????????????????</option><option value="pa">??????????????????</option><option value="si">???????????????</option><option value="sk">Sloven??ina</option><option value="ta">???????????????</option><option value="te">??????????????????</option><option value="vi">Ti???ng Vi???t</option><option value="zh-hk">??????(??????)</option><option value="bg">??????????????????</option><option value="fr-ca">Fran??ais (Canada)</option><option value="ro">Rom??n??</option><option value="sr">????????????</option><option value="uk">????????????????????</option></select>
      <div className="copyright">
        <p>&copy; 2022 Instagram From Meta</p>
      
      </div>
      </div>
  </div>
    </div>
  );
}

export default Login;