
function Commit(name, text, avatarUrl){
    this.name = name;
    this.text = text;
    this.avatarUrl = avatarUrl;
    this.likes = 1;
}
let CustomImg = {
    avatarUrl : 'https://ru.123rf.com/%D0%A4%D0%BE%D1%82%D0%BE-%D1%81%D0%BE-%D1%81%D1%82%D0%BE%D0%BA%D0%B0/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0.html?sti=m9aszhc0bu7tokw5wt|&mediapopup=42584408',
    countsLike : function(){
    this.likes ++;
    console.log(this.likes);
    },
}
let persen_1 = new Commit('Дмитрий','Обслуживание очень качественное', CustomImg.avatarUrl);
Object.setPrototypeOf(persen_1,CustomImg);
persen_1.countsLike();
console.log(persen_1.avatarUrl);
let arr = [commit_1 = 'Комментарий 1', commit_2 = 'Комментарий 2', commit_3 = 'Комментарий 3', commit_4 = 'Комментарий 4'];
console.log(arr);
function SecondConst(array){
    this.commits = array;
    this.commitsList = function(){
    let block = document.getElementById('CommentsFeed');    
        this.commits.forEach(function(elem, item){
          let items = document.createElement('p');
              items.innerText = elem;
              block.appendChild(items);
            });
    }
}
let comitListToDoc = new SecondConst(arr);
console.log(comitListToDoc);
comitListToDoc.commitsList();
/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/