// ===== NAVBAR BURGER =====
function toggleBurger() {
  var btn = document.getElementById('navBurger');
  var drawer = document.getElementById('navDrawer');
  btn.classList.toggle('open');
  drawer.classList.toggle('open');
}
function closeBurger() {
  var btn = document.getElementById('navBurger');
  var drawer = document.getElementById('navDrawer');
  if(btn) btn.classList.remove('open');
  if(drawer) drawer.classList.remove('open');
}
window.toggleBurger = toggleBurger;
window.closeBurger = closeBurger;

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item = this.parentElement;
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
      if(!wasOpen) item.classList.add('open');
    });
  });
});

// ===== PORTFOLIO GALLERY (used only on index.html) =====
var galleryTours = [
  {cat:"Restaurant",name:"Restaurant Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773561439704!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzQ5SWVnLXdF!2m2!1d22.47191135941974!2d70.05919104179245!3f120.22234155017922!4f-1.7372153121357599!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2l2 4h14l2-4"/><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="12" y1="6" x2="12" y2="20"/></svg>'},
  {cat:"Cafe",name:"Café Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773561541079!6m8!1m7!1sCAoSHENJQUJJaEJHS3RpaGtlbFlsbE9NTEt3U1pSZHM.!2m2!1d22.48382333793996!2d70.0577709195647!3f320.0840952783034!4f-1.8533851198201319!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>'},
  {cat:"Hotels",name:"Hotel Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773561615292!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2NtSUswdEFF!2m2!1d22.47060558746202!2d69.07301702772489!3f153.6153185542361!4f-0.6221014068417645!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'},
  {cat:"Showrooms",name:"Showroom Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773562060415!6m8!1m7!1sCAoSHENJQUJJaER1MWc2RWE3aXBnQ1IzMU52U0lVREI.!2m2!1d22.48114475199436!2d70.12142487022894!3f100.70302204278559!4f-2.6613687723726116!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'},
  {cat:"Corporate Offices",name:"Corporate Office Tour",url:"https://www.google.com/maps/embed?pb=!4v1773562106905!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2l0dnFCOUFF!2m2!1d23.07089526403176!2d72.51821772344807!3f121.66353301942952!4f-1.3646061736387907!5f0.4000000000000002",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>'},
  {cat:"Industries",name:"Industry Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773562236870!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2ZyN2Eya1FF!2m2!1d22.42114156188424!2d70.04210512394347!3f82.0918366342775!4f18.649490062444187!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},
  {cat:"Schools & Colleges",name:"School Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773563334360!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDQxdGJmd2dF!2m2!1d22.44517814215193!2d70.02550515759604!3f137.2467255494322!4f16.609819506001614!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'},
  {cat:"Saloons & Spa",name:"Salon & Spa Tour",url:"https://www.google.com/maps/embed?pb=!4v1773563481067!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzQ5SnZRZFE.!2m2!1d22.48105496172797!2d70.05714490181857!3f0.30821545096795333!4f-0.5030758128877864!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'},
  {cat:"Hospitals & Clinics",name:"Hospital Virtual Tour",url:"https://www.google.com/maps/embed?pb=!4v1773564068811!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzI2T0NsOFFF!2m2!1d22.46608537200248!2d70.05980733572382!3f326.81043002661846!4f2.6077119598731855!5f0.7820865974627469",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'},
  {cat:"Customized Tours",subcat:"Schools & Colleges",name:"IIT Gandhinagar",type:"cloudpano",cpId:"-GReSaR0O",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><circle cx="12" cy="10" r="2"/></svg>'},
  {cat:"Customized Tours",subcat:"Real Estate",name:"North Enclave by Pacifica",type:"cloudpano",cpId:"Ee32aO2l_",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><rect x="10" y="2" width="4" height="5" rx="0.5"/></svg>'},
  {cat:"Customized Tours",subcat:"Real Estate",name:"Amara by Pacifica",type:"cloudpano",cpId:"x5e8PxVc87",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><rect x="10" y="2" width="4" height="5" rx="0.5"/></svg>'},
  {cat:"Customized Tours",subcat:"Corporate Offices",name:"eSparkBiz",type:"cloudpano",cpId:"_ZNIYdF5RI",
   svg:'<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="14" r="2"/></svg>'}
];

var galleryCats = ["All","Restaurant","Cafe","Hotels","Showrooms","Corporate Offices","Industries","Schools & Colleges","Saloons & Spa","Hospitals & Clinics","Customized Tours"];
var galleryActive = "All";
var ALL_LIMIT = 12;

function galleryGetList(){
  if(galleryActive==="All") return galleryTours.slice(0,ALL_LIMIT);
  return galleryTours.filter(function(t){return t.cat===galleryActive;});
}
function galleryRenderFilters(){
  var bar = document.getElementById('galleryFilterBar');
  if(!bar) return;
  bar.innerHTML = galleryCats.map(function(c){
    var isPremium = c==="Customized Tours";
    var label = isPremium ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="#ffd54f" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> '+c : c;
    return '<button class="filter-btn'+(c===galleryActive?' active':'')+(isPremium?' filter-btn-premium':'')+'\" onclick=\"gallerySetFilter(\''+c+'\')">'+label+'</button>';
  }).join('');
}
function galleryRenderGrid(){
  var grid = document.getElementById('galleryGrid');
  if(!grid) return;
  var list = galleryGetList();
  grid.innerHTML = list.map(function(t){
    var idx = galleryTours.indexOf(t);
    var isPremium = t.type==="cloudpano";
    var thumbBg = isPremium ? 'background:linear-gradient(135deg,#0f2a1a,#1a4a30);' : '';
    var premiumBadge = isPremium ? '<div class="g-premium-badge"><svg width="9" height="9" viewBox="0 0 24 24" fill="#111" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Customized</div>' : '';
    return '<div class="g-card'+(isPremium?' g-card-premium':'')+'\" onclick=\"galleryOpenTour('+idx+')" role="button" tabindex="0" aria-label="View '+t.name+'">'
      +'<div class="g-thumb" style="'+thumbBg+'">'+premiumBadge+'<div class="g-thumb-icon">'+t.svg+'</div>'
      +'<div class="g-overlay"><div class="g-play-btn"><svg viewBox="0 0 24 24" fill="#111" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div>'
      +'<div class="g-info"><div class="g-cat">'+(t.subcat||t.cat)+'</div><div class="g-name">'+t.name+'</div></div></div>';
  }).join('');
  var hint = document.getElementById('galleryMoreHint');
  if(hint) hint.style.display = (galleryActive==="All" && galleryTours.length > ALL_LIMIT) ? 'block' : 'none';
  var count = document.getElementById('galleryTotalCount');
  if(count) count.textContent = galleryTours.length;
}
window.gallerySetFilter = function(cat){ galleryActive=cat; galleryRenderFilters(); galleryRenderGrid(); }
window.galleryOpenTour = function(idx){
  var t = galleryTours[idx];
  document.getElementById('tourModalTitle').textContent = t.name;
  if(t.type==="cloudpano"){
    document.getElementById('tourModalBody').innerHTML = '<iframe src="https://app.cloudpano.com/tours/'+t.cpId+'?disable=watermark&autoLoad=1" width="100%" height="100%" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" style="border:0;display:block;width:100%;height:100%;" title="'+t.name+'"></iframe>';
  } else {
    document.getElementById('tourModalBody').innerHTML = '<iframe src="'+t.url+'" allowfullscreen loading="lazy" title="'+t.name+'"></iframe>';
  }
  document.getElementById('tourModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', function(){
  var closeBtn = document.getElementById('tourModalClose');
  var overlay = document.getElementById('tourModalOverlay');
  if(closeBtn) closeBtn.onclick = function(){
    overlay.classList.remove('open');
    document.getElementById('tourModalBody').innerHTML = '';
    document.body.style.overflow = '';
  };
  if(overlay) overlay.onclick = function(e){
    if(e.target===this){ this.classList.remove('open'); document.getElementById('tourModalBody').innerHTML=''; document.body.style.overflow=''; }
  };
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && overlay){ overlay.classList.remove('open'); document.getElementById('tourModalBody').innerHTML=''; document.body.style.overflow=''; }
  });
  galleryRenderFilters();
  galleryRenderGrid();
});
