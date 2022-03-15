let input = document.getElementsByTagName('input')[0]
let participantes  = document.getElementById('divParticipantes')
let btn = document.getElementById('btn')
let add = document.getElementsByTagName('button')[0]
let pessoas = []
let result = document.getElementById('divGanhador')
let div = document.getElementById('divSorteio')
valor = -1
numero = 0

add.addEventListener('click',()=>{
    if(input.value === ""){
        document.getElementById('erro').innerHTML = "<p>Insira um nome</p>"
    }else{
    document.getElementById('erro').innerHTML = ""
    pessoas.push(`${input.value}`)
    valor++
    numero++
    participantes.innerHTML += `<p>${numero} - ${pessoas[valor]}</p>`
    input.value = ""
}
})
btn.addEventListener('click',()=>{
    result.style.display = "flex"
    result.style.animationName = "result"
    div.style.display = "none"

    result.innerHTML
})


