const hamberger=document.querySelector('.ham');
const navList=document.querySelector('.nav-list');

hamberger.addEventListener('click',function(e){
//  console.log(e.target);
  navList.classList.toggle('active');
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');

})
document.addEventListener('click',function(e){
  if(!e.target.matches('.ham') && navList.contains(e.target)){
    navList.classList.remove('active');
    e.target.classList.remove('fa-times');

    e.target.classList.add('fa-bars');
  }
})