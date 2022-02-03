const hamberger=document.querySelector('.ham');
hamberger.addEventListener('click',function(e){
  // console.log(e.target);
  const navList=document.querySelector('.nav-list');
  navList.classList.toggle('active');
})
document.addEventListener('click',function(e){
  // if()
})