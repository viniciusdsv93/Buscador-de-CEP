const inputCEP = document.querySelector('#inputCEP');
const inputLogradouro = document.querySelector('#inputLogradouro');
const inputBairro = document.querySelector('#inputBairro');
const inputCidade = document.querySelector('#inputCidade');
const inputEstado = document.querySelector('#inputEstado');

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (inputCEP.value.length > 7) {
        getCepData(inputCEP.value);
    }
    else {
        alert('Por favor, insira um CEP válido e tente novamente.');
    }
})

function getCepData(data) {

    fetch(`https://viacep.com.br/ws/${data}/json/`)
    .then(response => response.json())
    .then(dataInfo => {
        if (!dataInfo.erro) {
            inputLogradouro.value = dataInfo.logradouro;
            inputBairro.value = dataInfo.bairro;
            inputCidade.value = dataInfo.localidade;
            inputEstado.value = dataInfo.uf;
        }
        else {
            alert('CEP Inexistente. Por favor, insira um CEP válido.');
            inputCEP.value = '';
        }
    })
    .catch(erro => alert('Não foi possível estabelecer uma conexão.'));
}