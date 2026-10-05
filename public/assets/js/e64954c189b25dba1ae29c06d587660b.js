($=>{$(()=>{const largeItems=$('.block-features .feature-item--large')
const mediumItems=$('.block-features .feature-item--medium')
const smallItems=$('.block-features .feature-item--small')
const mm=gsap.matchMedia()
mm.add({isMobile:"(max-width: 620px)",},context=>{const{isMobile}=context.conditions
largeItems.each((idx,el)=>{const wrapper=el.closest('.feature-row')
gsap.fromTo(el,{y:0},{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:(isMobile?-10:-50),ease:'none',})})
mediumItems.each((idx,el)=>{const wrapper=el.closest('.feature-row')
gsap.fromTo(el,{y:0},{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:(isMobile?-20:-100),ease:'none',})})
smallItems.each((idx,el)=>{const wrapper=el.closest('.feature-row')
gsap.fromTo(el,{y:0},{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:(isMobile?-30:-150),ease:'none',})})})})})(jQuery)
;