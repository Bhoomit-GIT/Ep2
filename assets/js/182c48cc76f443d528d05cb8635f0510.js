($=>{$(()=>{$('.block-highlight-section .highlight-item--polaroid .polaroid').each((idx,el)=>{const wrapper=el.closest('.highlight-items')
gsap.to(el,{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:-100,ease:'none',})})
$('.block-highlight-section .highlight-item--large-image img').each((idx,el)=>{const wrapper=el.closest('.highlight-items')
gsap.to(el,{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:-200,ease:'none',})})
$('.block-highlight-section .highlight-item--waves-and-small-image').each((idx,el)=>{const wrapper=el.closest('.highlight-items')
gsap.to(el,{scrollTrigger:{trigger:wrapper,scrub:1,start:'top bottom',end:'bottom top',},y:-25,ease:'none',})})})})(jQuery)
;