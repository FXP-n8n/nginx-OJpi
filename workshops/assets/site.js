(function(){
  var toggle=document.querySelector('.nav-toggle');
  var links=document.getElementById('nav-links');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
  }

  // First-party, cookieless pageview ping — see PRD §7 analytics requirement.
  // No visitor ID, no localStorage, nothing that would need a cookie banner.
  // fetch+keepalive over sendBeacon: more consistently delivered across browsers/extensions.
  try{
    fetch('https://www.n8n.4-eyes.eu/webhook/website_analytics',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      keepalive:true,
      body:JSON.stringify({path:location.pathname,referrer:document.referrer})
    }).catch(function(){});
  }catch(e){}
})();
