const log = document.getElementById("log");
    const sign = document.getElementById("sign");
    const topi = document.getElementById("top");
    const bottom = document.getElementById("bottom");


    sign.addEventListener("click", ()=>{
        let left = -50;
        let right = -100;
        let interval = setInterval(()=>{
            topi.style.left = left+"%";
            bottom.style.right = right+"%";
            left--;
            right++;
            if(left == -101){
                clearInterval(interval);
            }
            if(right == -49){
                clearInterval(interval);
            }
        }, 5);
    });

    log.addEventListener("click", ()=>{
        let left = -100;
        let right = -50;
        let interval2 = setInterval(()=>{
            topi.style.left = left+"%";
            bottom.style.right = right+"%";
            left++;
            right--;
            if(right == -101){
                clearInterval(interval2);
            }
            if(left == -49){
                clearInterval(interval2);
            }
        }, 5);
    });