/* Foreigner Studio — cookie consent (GA4 Consent Mode v2, denied by default). Compact corner card. */
(function(){
  var ID='G-J0N2H2DSQK',KEY='fs_cookie_consent';
  var T={en:['We use cookies to understand how the site is used and improve it.','Decline','Accept'],
    es:['Usamos cookies para entender cómo se usa el sitio y mejorarlo.','Rechazar','Aceptar'],
    pt:['Usamos cookies para entender como o site é usado e melhorá-lo.','Recusar','Aceitar']};
  window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
  gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  function load(){if(document.getElementById('fs-gtag'))return;var s=document.createElement('script');s.id='fs-gtag';s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);gtag('js',new Date());gtag('config',ID,{anonymize_ip:true})}
  function grant(){gtag('consent','update',{analytics_storage:'granted'});load()}
  var v=null;try{v=localStorage.getItem(KEY)}catch(e){}
  if(v==='granted'){grant();return}
  if(v==='denied')return;
  function show(){
    var l=((document.documentElement.lang||'en')+'').slice(0,2).toLowerCase(),t=T[l]||T.en;
    var st=document.createElement('style');
    st.textContent='#fs-cc{position:fixed;left:16px;bottom:16px;z-index:2147483647;width:300px;max-width:calc(100vw - 32px);background:#fff;border:1px solid #ddd;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.12);padding:14px 16px;font:12px/1.45 Inter,system-ui,sans-serif;color:#1a1a1a;pointer-events:auto}#fs-cc p{margin:0 0 10px}#fs-cc div{display:flex;gap:8px;justify-content:flex-end}#fs-cc button{font:inherit;font-weight:600;padding:7px 14px;border-radius:8px;border:1px solid #1a1a1a;cursor:pointer;background:#fff;color:#1a1a1a}#fs-cc button.a{background:#1a1a1a;color:#fff}@media(max-width:600px){#fs-cc{left:10px;right:10px;bottom:10px;width:auto;max-width:none}}';
    document.head.appendChild(st);
    var b=document.createElement('div');b.id='fs-cc';b.setAttribute('role','dialog');b.setAttribute('aria-label','Cookies');
    b.innerHTML='<p>'+t[0]+'</p><div><button type="button" class="d">'+t[1]+'</button><button type="button" class="a">'+t[2]+'</button></div>';
    document.body.appendChild(b);
    function done(x){try{localStorage.setItem(KEY,x)}catch(e){}b.remove();if(x==='granted')grant()}
    b.querySelector('.d').onclick=function(){done('denied')};b.querySelector('.a').onclick=function(){done('granted')};
  }
  if(document.body)show();else document.addEventListener('DOMContentLoaded',show);
})();
