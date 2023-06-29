function BuscaCep() {
    const cep = document.querySelector('.cep').value
    BuscarDados(cep)
}

async function BuscarDados(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    DadosTela(dados)
    // console.log(dados)
}

function DadosTela(dados){
    document.querySelector("#logradouro").value = dados.logradouro
    document.querySelector("#bairro").value = dados.bairro
    document.querySelector("#cidade").value = dados.localidade
    document.querySelector("#estado").value = dados.uf
}