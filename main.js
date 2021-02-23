let myHeading = document.querySelector("h1");//获取h1标签元素
myHeading.textContent = 'hello world';

myHeading.onclick = function () {
   console.log("hahaha");
}

 myname = "11212";

//  window.alert("efaefawfaf"); //带一个确定按钮
// window.confirm("wewewewe");  
// window.prompt("prompt");

function multiply(num1,num2) {
    let result = num1 * num2;
    
    return result;
}


console.log(multiply(11,12));


let myButton = document.querySelector('button');

  

  function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      //setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }

localStorage.removeItem("name");



