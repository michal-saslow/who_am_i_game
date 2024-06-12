// JavaScript source code
let s;
let j = 0;
let i;
let goodCard = 0;
let badCard = 0;
let intreval;
let countTime=0;
let img_Id;
let index_Step = 0;
let audioplay = "false";
let img_Src;
let points = 0;
let flag = true;
let imgs_Instructions = ["דפי הוראות/2.jpg", "דפי הוראות/3.jpg", "דפי הוראות/4.jpg", "דפי הוראות/5.jpg", "דפי הוראות/6.jpg", "דפי הוראות/7.jpg", "דפי הוראות/8.jpg", "דפי הוראות/9.jpg", "דפי הוראות/10.jpg", "דפי הוראות/11.jpg", "דפי הוראות/12.jpg", "דפי הוראות/13.jpg", "דפי הוראות/14.jpg", "דפי הוראות/15.jpg", "דפי הוראות/16.jpg"];
let card = ["כרטיסים/1.jpg", "כרטיסים/2.jpg", "כרטיסים/3.jpg", "כרטיסים/4.jpg", "כרטיסים/5.jpg", "כרטיסים/6.jpg", "כרטיסים/7.jpg", "כרטיסים/8.jpg", "כרטיסים/9.jpg", "כרטיסים/10.jpg", "כרטיסים/11.jpg", "כרטיסים/12.jpg", "כרטיסים/13.jpg", "כרטיסים/14.jpg", "כרטיסים/15.jpg"];
let cardAnswer = ["פתרונות/a1.jpg", "פתרונות/a2.jpg", "פתרונות/a3.jpg", "פתרונות/a4.jpg", "פתרונות/a5.jpg", "פתרונות/a6.jpg", "פתרונות/a7.jpg", "פתרונות/a8.jpg", "פתרונות/a9.jpg", "פתרונות/a10.jpg", "פתרונות/a11.jpg", "פתרונות/a12.jpg", "פתרונות/a13.jpg", "פתרונות/a14.jpg", "פתרונות/a15.jpg"];
let answer = ["null", "null", "null", "null", "null", "null"];
let all_answers = [
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png"],
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 3.png"],
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png"],
["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 2.png"],
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 2.png"],
["תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 2.png"],
["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 3.png"],
["תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png"],
["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 3.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png"],
    ["תמונות דמויות/ילד 3.png", "תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 3.png"]];
if (localStorage.getItem('level') == undefined)
    localStorage.setItem('level', "level1");
if (localStorage.getItem('point') == undefined)
    localStorage.setItem('point', 0);
if (localStorage.getItem('indexStep') == undefined)
    localStorage.setItem('indexStep', 0);
function StartLevels() {
    document.getElementById("imgAudio").addEventListener("click", Audio);
    document.getElementById("level1").addEventListener("click", EnterLevel);
    document.getElementById("level2").addEventListener("click", EnterLevel);
    document.getElementById("level3").addEventListener("click", EnterLevel);
}
function EnterLevel() {
    window.location.href = "game.html";
    localStorage.setItem('level', event.target.id);
}
function closeGame() {
    window.close();
}
function start() {
    document.getElementById("imgAudio").addEventListener("click", Audio);
    let checkLevel = localStorage.getItem('level');
    let changeLevel = document.getElementById("level");
    if (localStorage.getItem('game') == "old") {
        index_Step = localStorage.getItem('indexStep');
        points = localStorage.getItem('point');
        changeLevel.innerText = localStorage.getItem('level');
        document.getElementById("points").innerText = points;
        document.getElementById("card_img").setAttribute("src", card[index_Step]);
    }
    else {
        localStorage.setItem('point', 0);
        localStorage.setItem('indexStep', 0);
        points = 0;
        if (checkLevel == "level1") {
            index_Step = 0;
            changeLevel.innerText = "level1";
        }
        if (checkLevel == "level2") {
            index_Step = 5
            changeLevel.innerText = "level2";
        }
        if (checkLevel == "level3") {
            index_Step = 10
            changeLevel.innerText = "level3";
        }
    }
    document.getElementById("card_img").setAttribute("src", card[index_Step]);
    for (i = 1; i <= 6; i++) {
        document.getElementById(i).addEventListener("dragstart", drag);
        document.getElementById("m" + i).addEventListener("drop", drop);
        document.getElementById("m" + i).addEventListener("dragover", allowDrop);
    }
    document.getElementById("end").addEventListener("click", check_Answer);
    setTimeout(Timer(), 3000);
    document.getElementById("points").innerText = points;
    document.getElementById("buttonCloseDivNone2").addEventListener("click", CloseDivNone2);

}
function CloseDivNone2() {
    document.getElementById("divNone2").style.display = "none";
    document.getElementById("end").addEventListener("click", check_Answer);
    changeCard();
    newGame();
}
function allowDrop() {
    event.preventDefault();
}
function drag() {
    img_Id = event.target.id;
    img_Src = event.target.src;
    event.dataTransfer.setData("imageId", event.target.id)
}
function drop() {
    if (event.target.src == undefined) {
        event.preventDefault();
        let data = event.dataTransfer.getData("imageId");
        event.target.appendChild(document.getElementById(data));
    }
    else {
        document.getElementById(img_Id).setAttribute("src", event.target.src);
        document.getElementById(event.target.id).setAttribute("src", img_Src);
    }
}
function check_Answer() {
    clearInterval(intreval);
    let StorageArr = document.querySelectorAll(".storage");
    let hasChildren = false;
    flag = true;
    for (let i = 0; i < StorageArr.length; i++) {
        if (StorageArr[i].children.length > 0) {
            hasChildren = true;
            break;
        }
    }
    if (!hasChildren || localStorage.getItem('countTime')==100) {
        for (i = 1; i <= 6; i++) {
            if (document.getElementById("m" + i).children.length == 0)
                answer[i - 1] = "null";
            else {
                answer[i - 1] = document.getElementById("m" + i).children[0].getAttribute("src");
            }
        }
        console.log(answer);
        for (i = 1; i <= 6; i++) {
            if (answer[i - 1] == " " || all_answers[index_Step][i - 1] != answer[i - 1]) {
                document.getElementById("m" + i).style.borderColor = "red";
                flag = false;
            }
            else
                document.getElementById("m" + i).style.borderColor = "green";
        }
        document.getElementById("card_img").setAttribute("src", cardAnswer[index_Step]);
        index_Step++;
        if (flag) {
            let x = document.getElementById("audioYes");
            x.play();
            goodCard++;
            points += index_Step * 10;  
            document.getElementById("imgEmoji").setAttribute("src", "תמונות דמויות/כל הכבוד.gif");
        } else {
            badCard++;
            let x = document.getElementById("audioNo");
            x.play();
            document.getElementById("imgEmoji").setAttribute("src", "תמונות דמויות/אופס.gif");
        }
        document.getElementById("divNone2").style.display = "block";
        document.getElementById("divNone2").style.position = "absolute";
        document.getElementById("end").removeEventListener("click", check_Answer);
    } else {
        alert("לא מיקמת את כל הכרטיסים במקומם")
    }
}
function Timer() {
    intreval = setInterval(TimerChange, 1000);
}
function TimerChange() {
    if (countTime == 100) {
        clearInterval(intreval);
        localStorage.setItem('countTime', countTime);
        check_Answer();
    }
    countTime++;
    document.getElementById("timer").style.height = countTime + "%";
    if (countTime == 1) {
        document.getElementById("timer").style.backgroundColor = "green";
        document.getElementById("timer").style.boxShadow = "none";
    }
    if (countTime == 40) {
        document.getElementById("timer").style.backgroundColor = "#efc702";
    }
    if (countTime > 70) {
        document.getElementById("timer").style.backgroundColor = "red";
        if (countTime % 2 == 0) {
            document.getElementById("timer").style.boxShadow = " 20px 20px 20px 20px red"
        } else {
            document.getElementById("timer").style.backgroundColor = "#d91212e0";
            document.getElementById("timer").style.boxShadow = "5px 5px 5px 5px #d91212e0"
        }
    }
}
function changeCard() {
    document.getElementById("card_img").setAttribute("src", card[index_Step]);
}
function newGame() {
    
    let StorageArr = document.querySelectorAll(".storage");
    let imagesArr = ["תמונות דמויות/ילד 1.png", "תמונות דמויות/ילד 2.png", "תמונות דמויות/ילד 3.png", "תמונות דמויות/חיה 1.png", "תמונות דמויות/חיה 2.png", "תמונות דמויות/חיה 3.png"];
    document.getElementById("points").innerText = points;
    for (i = 1; i <= 6; i++) {
        let m = document.getElementById("m" + i);
        if (m.children.length > 0) { 
            m.removeChild(document.getElementById("m" + i).children[0]);
        }
        if (StorageArr[i - 1].children.length == 0) { 
        let img = document.createElement("img");
        img.src = imagesArr[i - 1];
        img.id = i;
        img.classList.add("imgCharater");
        img.draggable = true;
            StorageArr[i - 1].appendChild(img);
        }
        m.style.borderColor = "black";

    }
    countTime = 0;
    setTimeout(Timer(), 3000);
    for (i = 1; i <= 6; i++) {
        document.getElementById(i).addEventListener("dragstart", drag);
        document.getElementById("m" + i).addEventListener("drop", drop);
        document.getElementById("m" + i).addEventListener("dragover", allowDrop);
    }
    document.getElementById("points").innerText = points;
    document.getElementById("buttonCloseDivNone2").addEventListener("click", CloseDivNone2);
}
function end() {
    localStorage.setItem('level', document.getElementById("level").innerText);
    localStorage.setItem('point', points);
    localStorage.setItem('indexStep', index_Step);
    localStorage.setItem('goodCard', goodCard);
    localStorage.setItem('badCard', badCard);
}
function start_Instructions() {
    document.getElementById("imgAudio").addEventListener("click", Audio);
    setTimeout(add_Instructions(), 2000);
    document.getElementById("InstructionsLevel").addEventListener("click", function () {
        localStorage.setItem('game', "new");
        window.location.href = "levels.html";
    });
    document.getElementById("InstructionsGame").addEventListener("click", function () {
        localStorage.setItem('game', "old");
        window.location.href = "game.html";
    });
}
function add_Instructions() {
    s = setInterval(adding_Instructions, 2000);
}
function adding_Instructions() {
    if (j == imgs_Instructions.length)
        clearInterval(s);
    else
        document.getElementById("img_Instructions").setAttribute("src", imgs_Instructions[j++]);
}
function firstPage() {
    setTimeout(openLogin(), 10000000000000);
}
function openLogin() {
    location.replace("log_in.html");
}
function endPage() {
    document.getElementById("point").innerText = localStorage.getItem('point');
    document.getElementById("goodCard").innerText = localStorage.getItem('goodCard');
    document.getElementById("badCard").innerText = localStorage.getItem('badCard');
}
function logInPage() {
    document.getElementById("imgAudio").addEventListener("click", Audio);
}
function Audio() {
    let x = document.getElementById("audio");
    if (audioplay=="true") {
        x.pause();
        audioplay = "false";
        document.getElementById("imgAudio").setAttribute("src", "תמונות דמויות/ללא שמע.png");
    }
    else {
        x.play();
        audioplay = "true";
        document.getElementById("imgAudio").setAttribute("src", "תמונות דמויות/עם שמע.png");
    }
}


