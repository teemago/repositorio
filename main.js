const buttonList = document.querySelector("#listar-aulas");
const divResult = document.querySelector("#resultado");

buttonList.addEventListener("click", async function () {
    const result = await fetch("http://localhost/ams/")
        .then((response) => {
            return response.json();
        });
    montarHTMLaulas(result);

})

montarHTMLaulas = (aulas) => {
    const divResult2 = document.createElement("div"); 
    aulas.forEach((aula) => {
        const button = document.createElement("button");
        button.innerHTML = aula;
        button.addEventListener("click", async () => {
            divResult2.innerHTML = "";
            const result = await fetch("http://localhost/ams/aula/" + aula)
                .then((response) => {
                    return response.json();
                });
            result.forEach((thing) => {
                const p = document.createElement("p");
                p.innerHTML = thing;
                divResult2.appendChild(p);
            })
            divResult.appendChild(divResult2);

        });
        divResult.appendChild(button);
    });
}