// About popup behaviour
window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('about-toggle');
  const popup = document.getElementById('about-popup');
  const closeBtn = document.getElementById('about-close');

  function show(){
    popup.setAttribute('aria-hidden','false');
  }
  function hide(){
    popup.setAttribute('aria-hidden','true');
  }

  if(toggle && popup) {
    toggle.addEventListener('click', ()=>{
      const isHidden = popup.getAttribute('aria-hidden') === 'true';
      if(isHidden) show(); else hide();
    });
  }
  if(closeBtn) closeBtn.addEventListener('click', hide);

  // close when clicking outside
  document.addEventListener('click', (e)=>{
    if(popup && toggle && !popup.contains(e.target) && !toggle.contains(e.target)){
      hide();
    }
  });

  // keyboard: Esc
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') hide();
  });

  // Wire interactive links in middle panel
  const emailEl = document.getElementById('card-email');
  const phoneEl = document.getElementById('card-phone');
  const addressEl = document.getElementById('card-address');
  const qrEl = document.getElementById('card-qr');

  if(emailEl){
    emailEl.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const to = 'lia.hovhannissyan@coaf.org';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
      window.open(gmailUrl, '_blank');
    });
  }
  if(phoneEl){
    // already has tel: href but ensure correct format
    phoneEl.setAttribute('href','tel:+37455770052');
  }
  if(addressEl){
    addressEl.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const q = encodeURIComponent('Melik-Adamyan St 2/2, Yerevan');
      const maps = `https://www.google.com/maps/search/?api=1&query=${q}`;
      window.open(maps,'_blank');
    });
  }
  if(qrEl){
    qrEl.addEventListener('click', ()=>{
      window.open('https://coaf.org','_blank');
    });
  }
});
