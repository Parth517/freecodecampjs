const textInput=document.getElementById('text-input');
const checkBtn=document.getElementById('check-btn');
const result=document.getElementById('result');
function isEmpty(){
  if(!textInput.value){
    alert("Please input a value")
  }
}



function checkPalin(){
  isEmpty();
  const sA=textInput.value.toLowerCase();
  const sAA=sA.replace(/[|&;$%@"<>()._+, ]/g,"");
  const sAAA=sAA.split("-").join("");
  console.log(sAAA);
  let isPlaindrome=true;
  let start=0;
  let end=sAAA.length-1;
  while(start<end){
    console.log(sAAA[start]);
        console.log(sAAA[end]);
    if(sAAA[start]!==sAAA[end]){
        isPlaindrome=false;
    break;
    }
    start++;
    end--;
  }
  if(isPlaindrome){
    result.textContent=`${textInput.value} is a palindrome`;
  }else{
    result.textContent=`${textInput.value} is not a palindrome`;
  }
  
}