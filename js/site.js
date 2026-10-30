// Small touches shared by every page: reveal sections as they scroll in, and open gallery images full size.
(function(){
	const items=document.querySelectorAll('.reveal');
	if('IntersectionObserver' in window){
		const io=new IntersectionObserver(entries=>{
			entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
		},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
		items.forEach(el=>io.observe(el));
	} else items.forEach(el=>el.classList.add('in'));

	// gallery lightbox
	const shots=document.querySelectorAll('.gallery img');
	if(shots.length){
		const box=document.createElement('div'); box.className='lightbox'; box.innerHTML='<img alt="">';
		document.body.appendChild(box);
		const big=box.querySelector('img');
		shots.forEach(img=>img.addEventListener('click',()=>{ big.src=img.src; big.alt=img.alt; box.classList.add('on'); }));
		box.addEventListener('click',()=>box.classList.remove('on'));
		document.addEventListener('keydown',e=>{ if(e.key==='Escape') box.classList.remove('on'); });
	}

	// close the phone menu after picking a link
	document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
		const t=document.getElementById('nav-toggle'); if(t) t.checked=false;
	}));
})();
