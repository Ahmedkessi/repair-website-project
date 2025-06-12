/////SIDE BAR/////////
const closeBar = document.querySelector('.close-bar');
const bar = document.querySelector('.bar');
const sideBar = document.querySelector('.side-bar');



closeBar.addEventListener('click', ()=> {
  sideBar.classList.add('close-side-bar');
  sideBar.classList.remove('open-side-bar');
});

bar.addEventListener('click', ()=> {
  sideBar.classList.add('open-side-bar');
  sideBar.classList.remove('close-side-bar');
})

/////////////////////////////////////////////////////////////////////



//////FAQ SECTION/////////
const que1 = document.querySelector('.que1');
const que2 = document.querySelector('.que2');
const que3 = document.querySelector('.que3');
const que4 = document.querySelector('.que4');
const que5 = document.querySelector('.que5');
const que6 = document.querySelector('.que6');
const que7 = document.querySelector('.que7');
const que8 = document.querySelector('.que8');

const ans1 = document.querySelector('.ans1');
const ans2 = document.querySelector('.ans2');
const ans3 = document.querySelector('.ans3');
const ans4 = document.querySelector('.ans4');
const ans5 = document.querySelector('.ans5');
const ans6 = document.querySelector('.ans6');
const ans7 = document.querySelector('.ans7');
const ans8 = document.querySelector('.ans8');

////
let ques1 = false;
que1.addEventListener('click', ()=> {
  if(ques1 === false) {
    ques1 = true;
    ques2 = false;
    ques3 = false;
    ques4 = false;
    ques5 = false;
    ques6 = false;
    ques7 = false;
    ques8 = false;
    ans1.classList.add('open-ans');
    ans1.classList.remove('close-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else {
    ques1 = false;
    ans1.classList.add('close-ans');
  }
})


let ques2 = false;

que2.addEventListener('click', ()=> {
  if(ques2 === false) {
    ques1 = false;
    ques2 = true;
    ques3 = false;
    ques4 = false;
    ques5 = false;
    ques6 = false;
    ques7 = false;
    ques8 = false;
    ans2.classList.add('open-ans');
    ans2.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques2 = false;
    ans2.classList.add('close-ans');
  }
})



let ques3 = false;

que3.addEventListener('click', ()=> {
  if(ques3 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = true;
    ques4 = false;
    ques5 = false;
    ques6 = false;
    ques7 = false;
    ques8 = false;
    ans3.classList.add('open-ans');
    ans3.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques3 = false;
    ans3.classList.add('close-ans');
  }
})



let ques4 = false;

que4.addEventListener('click', ()=> {
  if(ques4 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = false;
    ques4 = true;
    ques5 = false;
    ques6 = false;
    ques7 = false;
    ques8 = false;
    ans4.classList.add('open-ans');
    ans4.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques4 = false;
    ans4.classList.add('close-ans');
  }
})




let ques5 = false;

que5.addEventListener('click', ()=> {
  if(ques5 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = false;
    ques4 = false;
    ques5 = true;
    ques6 = false;
    ques7 = false;
    ques8 = false;
    ans5.classList.add('open-ans');
    ans5.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques5 = false;
    ans5.classList.add('close-ans');
  }
})




let ques6 = false;

que6.addEventListener('click', ()=> {
  if(ques6 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = false;
    ques4 = false;
    ques5 = false;
    ques6 = true;
    ques7 = false;
    ques8 = false;
    ans6.classList.add('open-ans');
    ans6.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques6 = false;
    ans6.classList.add('close-ans');
  }
});


let ques7 = false;

que7.addEventListener('click', ()=> {
  if(ques7 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = false;
    ques4 = false;
    ques5 = false;
    ques7 = true;
    ques6 = false;
    ques8 = false;
    ans7.classList.add('open-ans');
    ans7.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans8.classList.remove('open-ans');
    
  }else { 
    ques7 = false;
    ans7.classList.add('close-ans');
  }
})



let ques8 = false;

que8.addEventListener('click', ()=> {
  if(ques8 === false) {
    ques1 = false;
    ques2 = false;
    ques3 = false;
    ques4 = false;
    ques5 = false;
    ques8 = true;
    ques6 = false;
    ques7 = false;
    ans8.classList.add('open-ans');
    ans8.classList.remove('close-ans');
    ans1.classList.remove('open-ans');
    ans2.classList.remove('open-ans');
    ans3.classList.remove('open-ans');
    ans4.classList.remove('open-ans');
    ans5.classList.remove('open-ans');
    ans6.classList.remove('open-ans');
    ans7.classList.remove('open-ans');
    
  }else { 
    ques8 = false;
    ans8.classList.add('close-ans');
  }
})
///////////////////////////////////////////////////////////////////////


