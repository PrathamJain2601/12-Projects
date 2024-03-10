
    document.querySelector(".container").addEventListener("mouseover", ()=>{
        document.querySelector(".container").style.transform = "translateX(-10px)";
        document.querySelector(".container").style.transform = "translateY(-10px)";
    });
    document.querySelector(".container").addEventListener("mouseout", ()=>{
        document.querySelector(".container").style.transform = "translateX(0px)";
        document.querySelector(".container").style.transform = "translateY(0px)";
    });
    function calc(){
        const bar = document.querySelector(".bar");
        bar.style.width = "0%";
        let weight = parseInt(document.getElementById("weight").value);
        let height = parseInt(document.getElementById("height").value);
        if(isNaN(height)){
            alert("Enter your Height Correctly");
            return;
        }
        if(isNaN(weight)){
            alert("Enter your Weight Correctly");
            return;
        }
        height = height/100;
        let bmi = weight/(height*height);
        bmi = Math.round(bmi*10)/10;
        
        const report = document.querySelector(".report");
        if(bmi < 16){
            report.innerText = "Severe Thinness " + bmi;
        }
        else if(bmi < 17){
            report.innerText = "Moderate Thinness " + bmi;
        }
        else if(bmi < 18.5){
            report.innerText = "Mild Thinness " + bmi;
        }
        else if(bmi < 25){
            report.innerText = "Normal " + bmi;
        }
        else if(bmi < 30){
            report.innerText = "Overweight " + bmi;
        }
        else if(bmi < 35){
            report.innerText = "Obese Class I " + bmi;
        }
        else if(bmi < 40){
            report.innerText = "Obese Class II " + bmi;
        }
        else{
            report.innerText = "Obese Class III " + bmi;
        }
        let t = Math.min(100, (bmi/40)*100);
        let i = 0;
        let interval = setInterval(()=>{
            bar.style.width = i + "%";
            if(i >= t){
                clearInterval(interval);
            }
            i++;
        }, 10)
        

    }