$ = el=> document.querySelector(el)
$$ = el=> document.querySelectorAll(el)

window.addEventListener('scroll',function(){
	$('nav').classList.toggle('sticky',window.scrollY > 30)
})

for (i =0 ; i < window.innerWidth/20; i++){
	s = document.createElement('span')
	s.style.left = (Math.random() * window.innerWidth)*1.5 + 'px'
	s.style.animationDuration = (Math.random() * 7) + 7 + 's'
	s.style.animationDelay = '-' + Math.random() * 15 + 's'
	s.style.opacity = (Math.random() * 0.2)+0.1
	$('#home').appendChild(s)
}

$$('[href*="#"]').forEach(l=>{
	l.addEventListener('click',e=>{
		e.preventDefault()
		window.scrollTo(0,$('#'+l.href.split('#')[1]).offsetTop-60)
	})
})