var button;
var popup1;
var popup2;
var popup3;
var popup4;
var popup5;
var popup6;
var popup7;
var popup8;
var popup9;
var popup10;
var i = 1;

document.addEventListener("DOMContentLoaded", function(){

  button = document.getElementById("button");
  popup1 = document.getElementById("popup1");
  popup2 = document.getElementById("popup2");
  popup3 = document.getElementById("popup3");
  popup4 = document.getElementById("popup4");
  popup5 = document.getElementById("popup5");
  popup6 = document.getElementById("popup6");
  popup7 = document.getElementById("popup7");
  popup8 = document.getElementById("popup8");
  popup9 = document.getElementById("popup9");
  popup10 = document.getElementById("popup10");

  popup1.style.visibility = "hidden";
  popup2.style.visibility = "hidden";
  popup3.style.visibility = "hidden";
  popup4.style.visibility = "hidden";
  popup5.style.visibility = "hidden";
  popup6.style.visibility = "hidden";
  popup7.style.visibility = "hidden";
  popup8.style.visibility = "hidden";
  popup9.style.visibility = "hidden";
  popup10.style.visibility = "hidden";


  button.addEventListener("click", function(){
    alert("click and close the popups to continue");
    popup1.style.visibility = "visible";
    /*document.getElementById("popup1").style.visibility = "visible";*/
  });

  popup1.addEventListener("click", function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%4==0){
      alert("Stay Alert");
    }
    popup1.style.visibility = "hidden";
    popup2.style.visibility = "visible";
    popup9.style.visibility = "visible";
    i++;

  });

  popup2.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup2.style.visibility = "hidden";
    popup4.style.visibility = "visible";
    popup7.style.visibility = "visible";
    popup9.style.visibility = "visible";
    i++;
  });

  popup3.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup3.style.visibility = "hidden";
    popup4.style.visibility = "visible";
    popup10.style.visibility = "visible";
    i++;
  });

  popup4.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup4.style.visibility = "hidden";
    popup5.style.visibility = "visible";
    popup2.style.visibility = "visible";
    popup8.style.visibility = "visible";
    i++;
  });

  popup5.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup5.style.visibility = "hidden";
    popup6.style.visibility = "visible";
    popup3.style.visibility = "visible";
    popup7.style.visibility = "visible";
    i++;
  });

  popup6.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup6.style.visibility = "hidden";
    popup7.style.visibility = "visible";
    popup4.style.visibility = "visible";
    i++;

  });

  popup7.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup7.style.visibility = "hidden";
    popup8.style.visibility = "visible";
    popup5.style.visibility = "visible";
    i++;

  });

  popup8.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup8.style.visibility = "hidden";
    popup9.style.visibility = "visible";
    popup2.style.visibility = "visible";
    i++;

  });

  popup9.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup9.style.visibility = "hidden";
    popup10.style.visibility = "visible";
    popup6.style.visibility = "visible";
    i++;

  });

  popup10.addEventListener("click",function(){
    if (i%5==0){
      alert("There Is No Escape");
    } else if (i%6==0){
      alert("This Is Our Digital Reality");
    } else if (i%7==0){
      alert("Stay Alert");
    }
    popup10.style.visibility = "hidden";
    popup1.style.visibility = "visible";
    popup3.style.visibility = "visible";

    i++;

  });


  });
