const li = document.querySelectorAll("li");
    li.forEach(element => {
        element.addEventListener("mouseover", ()=>{
            element.style.backgroundColor = "#FDBF60";
        })
        element.addEventListener("mouseout", ()=>{
            element.style.backgroundColor = "#FF8911";
        })
    });

    window.onscroll = function() {
        scroll();
    };
  
    function scroll() {
        if (document.documentElement.scrollTop > 240) {
            document.getElementById("nav").style.animation = "animate 0.5s 0s 1 ease-in-out";
            document.getElementById("nav").style.top = "0px";
        }
        else {
            document.getElementById("nav").style.animation = "reverseAnimate 0.5s 0s 1 ease-in-out";
            document.getElementById("nav").style.top = "-60px";
        }
    }