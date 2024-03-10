let main = document.querySelector(".main");
    document.getElementById("add").addEventListener("click", function () {
        let text = document.getElementById("text").value;
        let row = document.createElement("div");
        row.classList.add("row");
        if (text == "") {
            alert("Empty list");
        }
        else {
            row.innerHTML = '<u>' + text + '</u><span class="delete"><i class="fa-solid fa-trash-can"></i></span><span class="done"><i class="fa-solid fa-check"></i></span>';
            document.getElementById("text").value = "";
            main.appendChild(row);
            update();
        }
    });

    let deleterow;
    let strikerow;
    function update() {
        deleterow = Array.from(document.getElementsByClassName("delete"));
        deleterow.forEach(function (e) {
            e.addEventListener("click", function (e) {
                e.target.parentElement.parentElement.remove();
            });
        });

        strikerow = Array.from(document.getElementsByClassName("done"));
        strikerow.forEach(function (e) {
            e.addEventListener("click", function (e) {
                const done = e.target.parentElement.parentElement.firstChild.innerHTML;
                e.target.parentElement.parentElement.firstChild.innerHTML = `<strike>${done}</strike>`;
                e.target.style.opacity = "0.3";
                e.target.style.cursor = "not-allowed";
            });
        });
    }