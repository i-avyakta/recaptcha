
function captcha(){

    for (r=1;r<=6;r++){
        var randomnum = Math.floor(Math.random()*100);
        var capletter = document.querySelector("#letter"+r);
        
        if (randomnum<=50){
            randomnum =randomnum +64;
        }
        if (randomnum>50&& randomnum<64){
            randomnum =randomnum +15;
        }
        else if (randomnum>90 && randomnum<97){
            
            randomnum =randomnum +9;
        }
        var ranletter=String.fromCharCode(randomnum);
        
        capletter.innerHTML=ranletter;
        }

}

captcha();
