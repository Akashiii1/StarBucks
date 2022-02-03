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
 
  line.style.display='block';
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

// Tab
const tabList=document.querySelectorAll('.tab-item');
const tabContent=document.querySelectorAll('.tab-content');

[...tabList].forEach(item=>item.addEventListener('click',function(e){
  [...tabList].forEach(item=>item.classList.remove('active'));
  e.target.classList.add('active');
  const tabIndex=e.target.dataset.item;
  [...tabContent].forEach(function(i){
   
    if(i.getAttribute('data-tab')==tabIndex){
      [...tabContent].forEach(item=>item.classList.remove('active'));
      i.classList.add('active');
    }
  })
}))


const learnMoreList=document.querySelectorAll('.sub-end-item a');
[...learnMoreList].forEach(item=>item.addEventListener('click',function(e){
  e.preventDefault();
 
  const template=` <div class="modal">
  <div class="modal-content">
    <button class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-img">
      <img src="./Img/1A.jpg" alt="">
    </div>
    <div class="modal-text">
      <h3>Free food, drinks & more</h3>
    <p>Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.</p>
    </div>
  </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend",template);

}))
document.addEventListener('click',function(e){
  const modal=e.target.querySelector('.modal');
  if(e.target.matches('.modal')){
    e.target.parentNode.removeChild(e.target);
  }
  else if(e.target.matches('.close')){
    const modal=document.querySelector('.modal');
    modal.parentNode.removeChild(modal);
  }
})
const form=document.querySelector('.form-field');
const btn=document.querySelector('.formbtn');
btn.addEventListener('click',function(e){
  e.preventDefault();
  const formInp=document.querySelector('.form-input');
  const text=formInp.value;
  if(text.length == 0 || text.includes("@")==false){
    formInp.classList.add('false');
  }
  else{
    formInp.classList.remove('false');
    text.textContent="";
  }
  
})
form.addEventListener('submit',function(e){
  console.log(e.target);
  const btn=e.target.querySelector('.formbtn');
  console.log(btn);
})