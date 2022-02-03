const hamberger=document.querySelector('.ham');
const navList=document.querySelector('.nav-list');

hamberger.addEventListener('click',function(e){
//  console.log(e.target);
  navList.classList.toggle('active');
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');

})
const links=document.querySelectorAll('.nav-list li a');
const line=document.createElement('div');
line.className="line-eff";
document.body.appendChild(line);
[...links].forEach(item=>item.addEventListener('mouseenter',handler));
function handler(e){
 
  line.style.display='block'
  const {left,top,width,height}=e.target.getBoundingClientRect();
  line.style.left=`${left}px`;
  line.style.width=`${width}px`;
  line.style.top=`${height-10}px`;


}
navList.addEventListener('mouseleave',function(e){
  line.style.display='none';
})

document.addEventListener('click',function(e){
  if(!e.target.matches('.ham') && !navList.contains(e.target)){
    navList.classList.remove('active');
    hamberger.classList.remove('fa-times');

    hamberger.classList.add('fa-bars');
  }
})