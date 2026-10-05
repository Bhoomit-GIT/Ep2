($=>{$(()=>{const isDev=new URLSearchParams(location.search).has('dev')
if($(window).width()>620)
$('.block-hero-banner .scroll-indicator__label').arctext({radius:60})
else $('.block-hero-banner .scroll-indicator__label').arctext({radius:15})
$('.block-hero-banner .scroll-indicator__icon').each((idx,el)=>{gsap.timeline({repeat:-1,ease:'power2.out'}).to(el,{'--top':'30%',delay:0.8,duration:0.5,}).to(el,{'--top':'70%',delay:1,duration:1,}).to(el,{'--top':'50%',delay:1,duration:1,})})
const mm=gsap.matchMedia()
mm.add({isLandscape:"(orientation: landscape)",isPortrait:"(orientation: portrait)",},context=>{const{isLandscape,isPortrait}=context.conditions
$('.block-hero-banner').each((idx,el)=>{const tl=gsap.timeline({scrollTrigger:{trigger:el,scrub:1,start:'top top',end:'bottom+=100% top',pin:el}})
tl.addLabel('start')
tl.to(el.querySelector('.custom-logo'),{color:'#ffffff'},'start')
tl.to(el.querySelector('.bg-wrapper'),{'--bg-opacity':0.5},'start')
tl.to(el.querySelector('.bg-wrapper'),{scrollTrigger:{scrub:1,start:'top top',end:'top+=100 top'},scale:1},'start')
if(isPortrait&&isDev){tl.to(el.querySelector('.bg-gate--inner'),{height:'150vh',},'start')}else{tl.to(el.querySelector('.bg-gate--inner'),{width:(isLandscape?'110vw':'100vh'),},'start')}
tl.fromTo(el.querySelector('.text-content'),{scale:(isDev&&isPortrait?0.7:0.75),y:(isPortrait?(isDev?45:175):100)},{scale:1,y:0},'start')
if(isPortrait&&!isDev){tl.to(el.querySelector('.scroll-indicator'),{y:0},'start')}
if(isLandscape){tl.to(el.querySelector('.logo-wrapper'),{scrollTrigger:{trigger:$('#page').get(0),scrub:1,start:'top+=500 top',end:'top+=1000 top',},opacity:1},'start')}else{tl.to(el.querySelector('.logo-wrapper'),{opacity:1},'start')}
$(el).find('.text-content > *').each((idx,el)=>{tl.to(el,{opacity:1},'start')})})})})})(jQuery)
;