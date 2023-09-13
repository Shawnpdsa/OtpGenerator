function otpGenerator(){
    let otpShow= document.getElementById("otp");
    let digit="0123456789";
    let otp="";
    for(let i=0;i<4;i++){
        otp += digit[Math.floor(Math.random()*10)];
    }
    otpShow.innerHTML="<span></span>"
    

    setTimeout(()=>{
        otpShow.innerHTML=otp;
    },1500);
   
}
button=document.querySelector("#btn");
button.addEventListener("click",otpGenerator)

