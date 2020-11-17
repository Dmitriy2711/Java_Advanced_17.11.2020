    window.addEventListener('load', ValidateForm);
        function ValidateForm(event){
            let getForm = document.querySelector('Form');
            let getInputs = getForm.querySelectorAll('input');
            let submit = document.getElementById('Go'); 
            console.log(getInputs);
            getInputs.forEach(function(elem, item){
                if(elem.name == 'login'){
                    elem.addEventListener('input', function(){
                        if(elem.value === "") {
                            console.log(elem.validity);
                            elem.setCustomValidity('Как тебя зовут дружище?!');
                        }
                    });
                    
                }
                else if(elem.name == 'your_email'){
                    elem.addEventListener("input", function(){
                        if(elem.validity.customError) {
                            elem.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
                        }
                    });
                }
                else if(elem.name == 'pass'){
                    elem.addEventListener("input", function(e){
                        if(elem.value == ''){
                            e.target.setCustomValidity("Я никому не скажу наш секрет");
                        }
                    });
                }
                else if(elem.name == 'appleCount'){
                    elem.addEventListener("input", function(e){
                        if(elem.value == 0){
                            e.target.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
                        }
                    });
                }
                else if(elem.name == 'thanks'){
                    elem.addEventListener("change", function(e){
                        if(elem.value !== 'спасибо'){
                            e.target.setCustomValidity("Фу, неблагодарный(-ая)!");
                        }
                    });
                }
                else if(elem.name == 'check'){
                    elem.addEventListener("change", function(e){
                        if(!elem.checked){
                            elem.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
                        }
                    });
                }
                else if(elem.type == 'submit'){
                    elem.addEventListener("click", function(e){
                    let getForm = document.querySelector('Form'); 
                        e.preventDefault();
                        if(getForm.checkValidity()){
                            getForm.submit();
                        }
                    });
                }
                else if(elem.id == 'validate'){
                    console.log(elem.type);
                    elem.addEventListener("click", function(e){
                        e.preventDefault();
                        getForm.checkValidity();
                        getForm.reportValidity();
                    });
                }

            })
        // getForm.addEventListener("submit", function(){
        //     if(getForm.)
        // });
        
        }

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */