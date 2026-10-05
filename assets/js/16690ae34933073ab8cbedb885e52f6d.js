($=>{$(()=>{$('.block-scrolljacking .words-slider').each((idx,el)=>{const marquee=$(el)
const widthToScroll=marquee.get(0).scrollWidth
const children=marquee.children()
children.clone(!0,!0).addClass('clone').appendTo(marquee)
children.clone(!0,!0).addClass('clone').prependTo(marquee)
let speed=4,x=-widthToScroll
const minSpeed=4,maxSpeed=16
const wrapX=gsap.utils.wrap(-2*widthToScroll,0);const ticker=gsap.to({},{duration:100000,ease:'none',repeat:-1,paused:!0,onUpdate:self=>{x=wrapX(x+speed)
gsap.set(marquee.get(0),{x})}})
const aosItem=marquee.closest('[data-aos]')
let translateY,start='top bottom',end='bottom top'
try{translateY=parseFloat(aosItem.css('transform').match(/^matrix\((.+)\)/)[1].split(',')[5])}catch(e){}
if(translateY&&!isNaN(translateY)){start=`top-=${translateY} bottom`
end=`bottom-=${translateY} top`}
ScrollTrigger.create({trigger:marquee.get(0),start,end,onEnter:()=>ticker.play(),onEnterBack:()=>ticker.play(),onLeave:()=>ticker.pause(),onLeaveBack:()=>ticker.pause(),onUpdate:self=>{speed=-self.direction*gsap.utils.clamp(minSpeed,maxSpeed,Math.abs(self.getVelocity()/35))}})
ScrollTrigger.addEventListener('scrollEnd',self=>{speed=(speed<0?-minSpeed:minSpeed)})})
const mm=gsap.matchMedia()
mm.add("(min-width: 621px)",()=>{$('.block-scrolljacking .scrolljack-item__polaroid .polaroid').each((idx,el)=>{const wrapper=$(el).closest('.scrolljack-item__polaroid')
const sibling=wrapper.next('.scrolljack-item__text-content')
let transform,start='-50% center',end='50% center'
switch(!0){case wrapper.hasClass('scrolljack-item__polaroid--type-1'):transform={x:-10,y:-15,rotate:6.22}
break
case wrapper.hasClass('scrolljack-item__polaroid--type-2'):transform={x:15,y:15,rotate:-5.64}
break
case wrapper.hasClass('scrolljack-item__polaroid--type-3'):transform={x:65,y:-23,rotate:-2.1}
break
default:break}
if('fade-up'==sibling.data('aos')&&!sibling.hasClass('aos-animate')){start='-50%-=100 center'
end='50%-=100 center'}
gsap.to(el,{scrollTrigger:{trigger:sibling.get(0),scrub:1,start,end},...transform,ease:CustomEase.create('custom-1','0.42, 0, 0, 1')})})})})})(jQuery)
;