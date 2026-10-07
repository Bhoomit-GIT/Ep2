($=>{let lenis
if(typeof Lenis!=='undefined'){
  lenis=new Lenis({
    autoRaf:false,
    lerp:0.09,
    duration:1.2,
    smoothWheel:true,
    prevent:node=>(node.classList.contains('modal')||(node.classList.contains('block-listing-villas')&&node.classList.contains('map-view'))||node.classList.contains('cookieadmin_details_wrapper')||node.classList.contains('iti__country-list'))
  });
  window.lenis=lenis;
}
if(typeof gsap!=='undefined'){
  if(typeof ScrollTrigger!=='undefined')gsap.registerPlugin(ScrollTrigger);
  if(typeof CustomEase!=='undefined')gsap.registerPlugin(CustomEase);
}
if(typeof Lenis!=='undefined'&&lenis){
  if(typeof ScrollTrigger!=='undefined'){
    lenis.on('scroll',ScrollTrigger.update);
  }
  if(typeof gsap!=='undefined'){
    gsap.ticker.add(time=>{lenis.raf(time*1000)});
    gsap.ticker.lagSmoothing(0);
  }else{
    function raf(time){lenis.raf(time);requestAnimationFrame(raf);}
    requestAnimationFrame(raf);
  }
}
let scrollY
window.GBWP={google:{maps:[],markers:[],},debounce:(func,wait,immediate)=>{let timeout
return function(){const context=this
const args=arguments
const later=function(){timeout=null
if(!immediate)func.apply(context,args)}
const callNow=immediate&&!timeout
clearTimeout(timeout)
timeout=setTimeout(later,wait)
if(callNow)func.apply(context,args)}},refreshHeaderHeight:()=>{$('html').css('--header-height',`${$( '.site-header' ).height()}px`)},refreshDocumentWidth:()=>{$('html').css('--document-width',`${document.documentElement.clientWidth}px`)},refreshSubmenuMaxHeights:()=>{$('.site-navigation .hamburger-container .main-menu .sub-menu').each((idx,el)=>{$(el).css('--max-height',`${el.scrollHeight}px`)})},disableScroll:(target)=>{scrollY=window.scrollY||window.pageYOffset
document.documentElement.classList.add('scroll-lock')
document.body.classList.add('scroll-lock')
document.body.style.top=`-${scrollY}px`
if(bodyScrollLock&&bodyScrollLock.disableBodyScroll)
bodyScrollLock.disableBodyScroll(target,{reserveScrollBarGap:!0})},enableScroll:(target)=>{document.documentElement.classList.add('no-smooth')
document.body.classList.add('no-smooth')
document.documentElement.classList.remove('scroll-lock')
document.body.classList.remove('scroll-lock')
document.body.style.top=``
window.scrollTo({top:scrollY,left:0,behavior:'auto'})
requestAnimationFrame(()=>{document.documentElement.classList.remove('no-smooth')
document.body.classList.remove('no-smooth')})
if(bodyScrollLock&&bodyScrollLock.enableBodyScroll)
bodyScrollLock.enableBodyScroll(target)}}
$(window).on('load',()=>{$('body').addClass('window-loaded')})
$(()=>{$('body').addClass('dom-ready')
$('body').toggleClass('scrolled',$(window).scrollTop()>0)
GBWP.refreshDocumentWidth()
GBWP.refreshSubmenuMaxHeights()
$(document).on('click','[data-href]',ev=>{const trigger=$(ev.currentTarget)
const href=trigger.data('href')
const linkElement=$(ev.target).closest('a',trigger)
if(href&&!linkElement.length){let target=trigger.data('href-target')
if(!target)target='_self'
window.open(href,target)}})
$(document).on('click','[data-scroll-to]',ev=>{ev.preventDefault()
const target=$($(ev.currentTarget).data('scroll-to'))
if(target.length){try{target.get(0).scrollIntoView({behavior:'smooth'})}catch(ex){target.get(0)?.scrollIntoView(!0)}}})
$(document).on('click','.ac-trigger',ev=>{const trigger=$(ev.currentTarget)
const accordion=trigger.closest('.accordion')
if(accordion.find('.ac-state').is(':checked')&&accordion.find('.ac-content').is(':visible')){ev.preventDefault()
accordion.find('.ac-state').prop('checked',!1).trigger('change')}})
$(window).on('scroll',ev=>{$('body').toggleClass('scrolled',$(window).scrollTop()>0)})
$(window).on('resize',GBWP.debounce(ev=>{GBWP.refreshDocumentWidth()
GBWP.refreshSubmenuMaxHeights()},100))
$(document).on('click','.modal',ev=>{if(ev.target==ev.currentTarget){$(ev.currentTarget).trigger('modal:close')}})
$(document).on('click','.modal-close',ev=>{ev.preventDefault()
$(ev.currentTarget).closest('.modal').trigger('modal:close')})
$(document).on('click','[data-open-modal]',ev=>{ev.preventDefault()
$(`#${$( ev.currentTarget ).data( 'open-modal' )}`).trigger('modal:open')
$(ev.currentTarget).trigger('blur')})
$(document).on('modal:open','.modal',ev=>{const modal=$(ev.currentTarget)
modal.addClass('active')
GBWP.disableScroll(modal.find('.modal-inner').get(0))})
$(document).on('modal:close','.modal',ev=>{const modal=$(ev.currentTarget)
modal.removeClass('active')
GBWP.enableScroll(modal.find('.modal-inner').get(0))})
$(document).on('modal:open','.gallery-lightbox',ev=>{const modal=$(ev.currentTarget)
const slider=new Splide(modal.find('.splide').get(0),{type:'fade',lazyLoad:'nearby',rewind:'true',pagination:!1})
slider.on('active',slide=>{$(slider.root).find('.splide__progress').text(`${String(slide.index+1).padStart(2, '0')} / ${String(slider.Components.Slides.getLength()).padStart(2, '0')}`)})
slider.mount()})
$(document).on('click','[data-clipboard]',ev=>{ev.preventDefault()
const trigger=$(ev.currentTarget)
const data=trigger.data('clipboard')
if(data){navigator.clipboard.writeText(data)
alert('Copied to clipboard')}})
$(document).on('click','.site-header .site-header-main .hamburger-menu-toggle',ev=>{$(".site-header .site-header-main .hamburger-menu-toggle").hide()
$(".site-header .site-header-main .menu-btn--top-right").hide()
$("#hamburger-overlay").addClass('active')
GBWP.refreshSubmenuMaxHeights()})
$(document).on('click','.site-navigation .nav .close-btn, .site-navigation .hover',ev=>{$("#hamburger-overlay").removeClass('active')
$(".site-header .site-header-main .hamburger-menu-toggle").show()
$(".site-header .site-header-main .menu-btn--top-right").show()})
$(document).on('click','#hamburger-overlay .menu-item-has-children > a',ev=>{ev.preventDefault()
const trigger=$(ev.currentTarget)
const menuItem=trigger.closest('.menu-item')
menuItem.siblings().removeClass('active')
menuItem.toggleClass('active')})
$('.rolling-number').each(function(){new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){$(entry.target).addClass('animate')
observer.unobserve(entry.target)}})},{rootMargin:"-25% 0px -25% 0px"}).observe(this)})
$('.hscroll-container').each((idx,el)=>{const hscroll=$(el)
const inner=hscroll.find('.hscroll-inner')
const _=()=>{let leftShadow=!0,rightShadow=!0
const treshold=24
const scrollLeft=inner.scrollLeft()
if(scrollLeft<treshold)leftShadow=!1
if(scrollLeft+inner.outerWidth()+treshold>=inner.get(0).scrollWidth)rightShadow=!1
hscroll.toggleClass('no-left-shadow',!leftShadow)
hscroll.toggleClass('no-right-shadow',!rightShadow)}
_()
inner.on('scroll',_)
$(window).on('resize',_)})
window.gbwp_easepick_instances=[]
const initEasepickDate=(mobile,first=!0)=>{$('.easepick--date').each((idx,el)=>{const args={element:el,css:['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',GBWPMeta.theme.url+'/css/easepick.css'],grid:mobile?1:2,calendars:mobile?1:2,inline:!0,}
if($(el).hasClass('easepick--rooms'))
args.css.push(GBWPMeta.theme.url+'/css/easepick-rooms.css')
if($(el).hasClass('easepick--lock')){args.plugins=['LockPlugin']
args.LockPlugin={minDate:new Date()}}
$(el).data('easepick-index',window.gbwp_easepick_instances.push(new easepick.create(args))-1)})
if(!first)
$('.easepick--date').trigger('easepick:reinit')}
const initEasepickPeriod=(mobile,first=!0)=>{$('.easepick--period').each((idx,el)=>{const args={element:el,css:['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',GBWPMeta.theme.url+'/css/easepick.css'],plugins:["RangePlugin","LockPlugin"],grid:mobile?1:2,calendars:mobile?1:2,inline:!$(el).hasClass('easepick--dropdown'),LockPlugin:{minDate:new Date(),},}
if($(el).hasClass('easepick--rooms'))
args.css.push(GBWPMeta.theme.url+'/css/easepick-rooms.css')
$(el).data('easepick-index',window.gbwp_easepick_instances.push(new easepick.create(args))-1)})
if(!first)
$('.easepick--period').trigger('easepick:reinit')}
const breakpoints={MOBILE:'mobile',DESKTOP:'desktop'}
let prevState=(window.innerWidth>780?breakpoints.DESKTOP:breakpoints.MOBILE)
initEasepickDate(prevState===breakpoints.MOBILE)
initEasepickPeriod(prevState===breakpoints.MOBILE)
$(window).on('resize',GBWP.debounce(()=>{const currentState=(window.innerWidth>780?breakpoints.DESKTOP:breakpoints.MOBILE)
if(prevState!==currentState){window.gbwp_easepick_instances.forEach(picker=>{picker.destroy()})
window.gbwp_easepick_instances=[]
initEasepickDate(currentState===breakpoints.MOBILE,!1)
initEasepickPeriod(currentState===breakpoints.MOBILE,!1)
prevState=currentState}},100))
$(document).on('click','.number-decrement',ev=>{const input=$(ev.currentTarget).siblings('input[type=number]')
let value=parseInt(input.val())
input.val(--value).trigger('change')})
$(document).on('click','.number-increment',ev=>{const input=$(ev.currentTarget).siblings('input[type=number]')
let value=parseInt(input.val())
input.val(++value).trigger('change')})
$(document).on('change','.number-decrement ~ input',ev=>{const input=$(ev.currentTarget)
const min=parseInt(input.prop('min'))
const max=parseInt(input.prop('max'))
let value=parseInt(input.val())
if(isNaN(value))value=1
if(!isNaN(max))
value=Math.min(max,value)
if(!isNaN(min))
value=Math.max(min,value)
input.val(value)
input.siblings('.number-decrement').attr('disabled',value===min)
input.siblings('.number-increment').attr('disabled',value===max)})
const lazyVideoObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){observer.unobserve(entry.target);const video=entry.target
const videoSrc=video.getAttribute('data-src')
let sourceSet=!1
video.querySelectorAll('source[data-src]').forEach(source=>{if(!source.getAttribute('src')){source.setAttribute('src',source.getAttribute('data-src'))
source.removeAttribute('data-src')
sourceSet=!0}})
if(!sourceSet&&videoSrc&&!video.getAttribute('src')){video.setAttribute('src',videoSrc)
video.removeAttribute('data-src')}
if(sourceSet)
video.removeAttribute('src')
video.load()
$(video).removeClass('wp-video-shortcode--lazy').addClass('wp-video-shortcode').mediaelementplayer($.extend(!0,{},_wpmejsSettings))
if(video.autoplay||video.getAttribute('autoplay'))
video.play().catch(()=>{})}})},{rootMargin:'500px 500px',threshold:0.01,})
$('video.wp-video-shortcode--lazy').each((idx,el)=>lazyVideoObserver.observe(el))
$('video.background').removeAttr('controls')
setTimeout(()=>{$('.mejs-video.background').attr('tabindex','-1')},100)
const backgroundVideoObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.target.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA){if(entry.isIntersecting)
entry.target.play().catch(()=>{})
else entry.target.pause()}})})
$('video.background').each((idx,el)=>backgroundVideoObserver.observe(el))
$('.site-navigation .hamburger-container .main-menu').on('click',ev=>{if(ev.target===ev.currentTarget){$(ev.currentTarget).find('.menu-item.active').removeClass('active')}})
$('[data-aos]').on('transitionend',ev=>{ev.currentTarget.style.transform='none'})})})(jQuery)
;