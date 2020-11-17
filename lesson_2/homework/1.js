let getButtons = document.querySelectorAll('#buttonContainer button');
let count = 0;
console.log(getButtons);
getButtons.forEach(function(elem, item){
    elem.onclick = function(){
      let dataset = elem.dataset.tab;
      console.log(dataset);
      let tabs = document.querySelectorAll('.tab');
        if(count < getButtons.length){
          tabs[dataset - 1].classList.add('active');
          console.log(tabs);
          count++;
        }
        else if(count >= getButtons.length) {
          for(let i = 0; i < getButtons.length; i ++){
            tabs[i].classList.remove('active');
          }
        count = 0; 
        }
      }
});
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
