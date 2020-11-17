
/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white',
    text: 'I know how binding works in JS', 
  }
//1.1
   function myCall( color ){
      document.body.style.background = this.background;
      document.body.style.color = color;
  let text = document.createElement('h1');
  let div = document.createElement('div');
      div.appendChild(text);
      document.body.appendChild(div);
      text.innerText = this.text;
      }
//1.2
   function myCall_1( background, color ){
     document.body.style.background = background;
     document.body.style.color = color;
  let text = document.createElement('h1');
  let div = document.createElement('div');
      div.appendChild(text);
      document.body.appendChild(div);
      text.innerText = this.text;
   }
//1.3

   function myCall_2(background, color, a){
      document.body.style.background = background;
      document.body.style.color = color;
  let text = document.createElement('h1');
  let div = document.createElement('div');
      div.appendChild(text);
      document.body.appendChild(div);
      this.text = a;
      text.innerText = a;    
      }
//myCall.call( colors, 'red' );
//let call = myCall_1.bind(colors, 'green', 'yellow');
//call();
let x = ['red', 'white'];
let headText = "Текст для заголовка";
myCall_2.apply(colors, x, headText ); 

