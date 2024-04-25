const pesquisaValor = document.getElementById("barraDePesquisa").value


export function pesquisa(){
    const padronizar = pesquisaValor.toLowerCase()
    const ferramentasDeTeste = ["selenium","ranorex studio","progress telerik","junit","cucumber","test complete"]
    const filtrar = ferramentasDeTeste.filter((a) => a == padronizar)
    const encontrar = filtrar.find((a) => a == padronizar)
    console.log(encontrar)
    return `http://127.0.0.1:5500/src/paginasHtml/${encontrar}.html`
    
}

export function paginaSelenium(){
    window.location.href = pesquisa()
}