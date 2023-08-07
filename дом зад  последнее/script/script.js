// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.

// let string = ["Paragraph 1", "Paragraph 2", "Paragraph 3"];
// let paragraph1 = document.createElement("p");
// let paragraph2 = document.createElement("p");
// let paragraph3 = document.createElement("p");
// document.body.append(paragraph1, paragraph2, paragraph3);
// paragraph1.innerText = string[0];
// paragraph2.innerText = string[1];
// paragraph3.innerText = string[2];
// paragraph1.addEventListener("click", function () {
//   paragraph1.innerText = "********";
// });
// paragraph2.addEventListener("click", function () {
//   paragraph2.innerText = "********";
// });
// paragraph3.addEventListener("click", function () {
//   paragraph3.innerText = "********";
// });


//Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
// let cards = document.getElementsByClassName('card');
// for(let i = 0; i<cards.length; i++) {
//     cards[i].addEventListener('click', function(){
//         this.classList.add('active');
//     });
// }

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
// let cards = document.getElementsByClassName('card');
// for(let i = 0; i<cards.length; i++) {
//     cards[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//     });
// }

//В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.

let link = ['https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg', 'https://bipbap.ru/wp-content/uploads/2017/04/4-2.jpg', 'https://bipbap.ru/wp-content/uploads/2017/04/1364841736_53-19.jpg'];

let miniBox = document.querySelector('.mini');
let showBig = document.getElementById('showBig');
link.forEach(function(big) {
    let minis = document.createElement('img');
    minis.src = big;
    minis.classList.add('minis');
    minis.addEventListener('click', function () {
        showBig.setAttribute('src', big)
    });
    miniBox.appendChild(minis);
})
