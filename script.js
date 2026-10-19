const t=document.getElementById('themeToggle');
t&&t.addEventListener('click',()=>{document.body.classList.toggle('light-mode');try{localStorage.theme=document.body.classList.contains('light-mode')?'light':'dark'}catch(e){}});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const i=document.getElementById('introScreen');
addEventListener('scroll',()=>{i.style.opacity=Math.max(0,1-scrollY/innerHeight*1.3)},{passive:true});
