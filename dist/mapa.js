function apontador() {
    var description = document.querySelector(".tooltip");
    if (description instanceof HTMLElement) {
        document.querySelectorAll('.regiao').forEach(function (el) {
            return el.addEventListener('mouseover', function (event) {
                if (event.target instanceof Element) {
                    //event.target.className = ("enabled");
                    //event.target.setAttribute("class", "enabled");//faz com que os estados visitados fiquem azul...
                    description.classList.add("active");
                    var conteudotxt = event.target.getAttribute("class") || "";
                    if (conteudotxt.length > 2) {
                        conteudotxt = conteudotxt[0].toUpperCase() + conteudotxt.slice(1);
                    }
                    description.innerHTML = conteudotxt;
                    //console.log("mouseover");
                }
            });
        });
        document.querySelectorAll('.regiao').forEach(function (el) {
            return el.addEventListener("mouseout", function () {
                description.classList.remove("active");
                //console.log("mouseout");
            });
        });
        document.querySelectorAll('.regiao').forEach(function (el) {
            return el.addEventListener("click", function (event) {
                //description.classList.remove("active");
                console.log("clickou");
                if (event.target instanceof Element) {
                    window.location.href = 'regiao?regiao=' + event.target.getAttribute("class");
                }
            });
        });
        document.onmousemove = function (e) {
            description.style.left = e.pageX + "px";
            description.style.top = (e.pageY - 70) + "px";
            //console.log("mouse move");
        };
    }
}
function main() {
    apontador();
}
main();
