
        document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".mouse").forEach((shift) => {
                console.log(shift);
                const position = shift.getAttribute("value");
                const x = (window.innerWidth - event.pageX * position) / 45;
                const y = (window.innerHeight - event.pageY * position) / 45;
 
                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }