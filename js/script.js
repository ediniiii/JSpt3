var v_button = document.getElementById("btn1");
var v_text = document.getElementById("txt1");
var v_hide = document.getElementById("hide");


//v_button.onclick = function () {
 //   v_text.style.color = "red";
//    v_text.style.backgroundColor = "lightgrey";
//    v_text.style.textAlign = "center";
//    v_text.style.padding = "20px";  
//    v_text.setAttribute("class", "test");
//}


v_text.onmouseover = function () {
v_text.style.cssText ="color: red; backgroundColor: lightgrey"
}

v_button.onclick = function () {
    v_text.setAttribute("class" , "test")
}

v_hide.onclick = function () {
    v_text.classList.add("hide");
}
