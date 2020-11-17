let elem = document.createElement('button');
let div = document.createElement('div');
let div1 = document.createElement('div');
elem.setAttribute('type', 'button');
elem.innerText = 'Кликни по мне!';
elem.style.background = 'green';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
div1.style.marginTop = '20%';
div1.style.fontSize = '40px';
div1.style.fontWidth = 'bolder';
//elem.style.margin = '200px auto 0 auto';
elem.setAttribute('onClick', "randBack(getRandomIntInclusive)");
//div1.style.margin = '400px auto 0 auto';
document.body.appendChild(div);
document.body.appendChild(elem);
document.body.appendChild(div1);
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let r = Math.floor(Math.random() * (max - min + 1)) + min;
      let g = Math.floor(Math.random() * (max - min + 1)) + min;
      let b = Math.floor(Math.random() * (max - min + 1)) + min;
      let str = '#' + r.toString(16) + '' + g.toString(16) + '' + b.toString(16) + '';
      if(str.length == 6) str = str + 1;
      console.log(str);
      return str;

    }
function randBack(CallBack){
  let min = 10;
  let max = 255;
  let result = getRandomIntInclusive(min, max);
  div1.innerText = result;
  document.body.style.background = result;
  return result;
}
console.log(document.body);

/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
