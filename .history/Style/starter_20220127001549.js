const hamberger=document.querySelector('.ham');
hamberger.addEventListener('click',function(e){
//  console.log(e.target);
  const navList=document.querySelector('.nav-list');
  navList.classList.toggle('active');
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');

})
document.addEventListener('click',function(e){
  if()
})