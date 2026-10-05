($=>{$(()=>{$('.block-image-enhanced-content .logo-carousel').each((idx,el)=>{const marquee=$(el)
const block=marquee.closest('.custom-block')
const widthToScroll=marquee.get(0).scrollWidth
marquee.children().clone(!0,!0).addClass('clone').appendTo(marquee)
const anim=gsap.to(marquee.get(0),{x:`-=${widthToScroll}`,duration:widthToScroll/150,ease:'none',repeat:-1,modifiers:{x:gsap.utils.unitize(x=>parseFloat(x)%widthToScroll)},paused:!0,})
ScrollTrigger.create({trigger:block.get(0),start:'top bottom',end:'bottom top',onEnter:()=>anim.play(),onEnterBack:()=>anim.play(),onLeave:()=>anim.pause(),onLeaveBack:()=>anim.pause(),})})})})(jQuery)
;