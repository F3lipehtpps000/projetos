var num = ""

function mum() {
    num+="1"
}
function mdois() {
    num+="2"
}
function mtres() {
    num+="3"
}
function mquatro() {
    num+="4"
}
function mcinco() {
    num+="5"
}
function mseis() {
    num+="6"
}
function msete() {
    num+="7"
}
function moito() {
    num+="8"
}
function mnove() {
    num+="9"
}
function mzero() {
    num+="0"
}
function zerar() {
    num = ""
    var res = document.getElementById('res')
    res.innerHTML = ". . ."
}
function add() {
    var oper = "+"
    num+=oper
}
function sub() {
    num+="-"
}
function mult() {
    num+="*"
}
function div() {
    num+="/"
}
function pot() {
    num+="**"
}
function igual() {
    var res = document.getElementById('res')
    res.innerHTML = eval(num)
}