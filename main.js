const buttonList = document.querySelector("#listar-aulas");
const buttonHash = document.querySelector("#listar-hash");
const input = document.querySelector("#input");
const divResult = document.querySelector("#resultado");

buttonList.addEventListener("click", async function () {
    const result = await fetch("http://localhost/ams/dados-aulas")
        .then((response) => {
            return response.json();
        });
    divResult.innerHTML = "";
    const show = result.map(x => {
        const div = document.createElement("div");
        div.innerHTML = x.nome;
        divResult.appendChild(div);
    })
})

buttonHash.addEventListener("click", async function (event) {
    const result = await fetch("http://localhost/ams/hash/" + input.value)
    .then((response) => {
        return response.json();
    });
    console.log(result);
    const div = document.createElement("div");
    divResult.innerHTML = "";
    div.innerHTML = result;
    divResult.appendChild(div);
    // const show = result.map(x => {
    //     div.innerHTML = x;
    //     divResult.appendChild(div);
    // })


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