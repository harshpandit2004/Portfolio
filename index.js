const texts = ['Developer'];
let index = 0;
let count = 0;
let currentText = "";
let letter = 0;

(function type(){
    if (count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".subtitle").textContent = letter;
    // if (letter.length === currentText.length){
    //     count++;
    //     index = 0;
    // }
    setTimeout(type, 150);
}) ();