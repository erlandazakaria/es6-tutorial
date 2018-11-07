import { multiply, multiplyWithx } from './lib';
document.getElementById('button1').addEventListener ("click", function(){
  document.getElementById("psatu").innerHTML=multiply(5,5);  
});
document.getElementById('button2').addEventListener ("click", function(){
    document.getElementById("pdua").innerHTML=multiplyWithx(5);  
});

