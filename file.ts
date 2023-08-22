function find(arr:number[], callbackFn:(value:number)=>boolean) {
  for (let i = 0; i < arr.length; i++) {
      const result = callbackFn(arr[i]);
      if(result==true){
        return arr[i];
      }else{
        return null;
      }
  }
}

const arr = [1,2,3,4,5,6,7];



find(arr,(value:number)=>value>5)


function TimeOutFN(callbackFn:()=>void,time:number){
  console.log(`sleeping for ${time} sec.` )
  setTimeout(()=>{},time)
  console.log(`calling your function` )
  callbackFn()
}


function myFn(){

  console.log("Quiz time out!!!")
}





TimeOutFN(myFn,5000)
console.log("hello")

function TestTimeout(name:string, callback:(name:string)=>void){
  TimeOutFN(function myFn(){

    callback(name)
  },5000)

}