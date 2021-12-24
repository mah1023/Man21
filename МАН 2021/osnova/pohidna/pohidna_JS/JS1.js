document.querySelector('.b-1').addEventListener('click', ()=>{
    let data=document.querySelector('.i-1').value;
        if (data == "-sinx" || data=="-sin(x)"){
        document.querySelector('.out-1').innerHTML="вірно";
}
else{
    document.querySelector('.out-1').innerHTML="не вірно"
}
})

document.querySelector('.b-2').addEventListener('click', ()=>{
    let data=document.querySelector('.i-2').value;
        if (data == "1/x" || data=="x^-1"){
        document.querySelector('.out-2').innerHTML="вірно";
}
else{
    document.querySelector('.out-2').innerHTML="не вірно"
}
})

document.querySelector('.b-3').addEventListener('click', ()=>{
    let data=document.querySelector('.i-3').value;
        if (data == "1/(1-x^2)^1/2" || data=="1/sqrt(1-x^2)"){
        document.querySelector('.out-3').innerHTML="вірно";
}
else{
    document.querySelector('.out-3').innerHTML="не вірно"
}
})

document.querySelector('.b-4').addEventListener('click', ()=>{
    let data=document.querySelector('.i-4').value;
        if (data == "2023*x^2022" || data=="2023*x^2022"){
        document.querySelector('.out-4').innerHTML="вірно";
}
else{
    document.querySelector('.out-4').innerHTML="не вірно"
}
})
document.querySelector('.b-5').addEventListener('click', ()=>{
    let data=document.querySelector('.i-5').value;
        if (data == "cos(x)-2*sin(x)" || data=="cosx-2*sinx" || data=="cosx-2sinx" || data=="cos(x)-2sin(x)"){
        document.querySelector('.out-5').innerHTML="вірно";
}
else{
    document.querySelector('.out-5').innerHTML="не вірно"
}
})
document.querySelector('.b-6').addEventListener('click', ()=>{
    let data=document.querySelector('.i-6').value;
        if (data == "cos(x)*x^4+4*x^3*sin(x)" || data=="cosx*x^4+4*x^3*sinx" ){
        document.querySelector('.out-6').innerHTML="вірно";
}
else{
    document.querySelector('.out-6').innerHTML="не вірно"
}
})
document.querySelector('.b-7').addEventListener('click', ()=>{
    let data=document.querySelector('.i-7').value;
        if (data == "-2*x^-4"){
        document.querySelector('.out-7').innerHTML="вірно";
}
else{
    document.querySelector('.out-7').innerHTML="не вірно"
}
})
document.querySelector('.b-8').addEventListener('click', ()=>{
    let data=document.querySelector('.i-8').value;
        if (data == "(x^2-24*x+35)/(x-7)^2" ){
        document.querySelector('.out-8').innerHTML="вірно";
}
else{
    document.querySelector('.out-8').innerHTML="не вірно"
}
})
document.querySelector('.b-9').addEventListener('click', ()=>{
    let data=document.querySelector('.i-9').value;
        if (data == "3/2*(6*x+20)^5/4" || data=="3/2*(6*x+20)*(6*x+20)^1/4" ){
        document.querySelector('.out-9').innerHTML="вірно";
}
else{
    document.querySelector('.out-9').innerHTML="не вірно"
}
})

