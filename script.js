'use strict';

const bnt = document.querySelector('button');

// создаем объект где будем хранить цитаты



bnt.addEventListener('click', () => {
    //создали обьект массива в поместили в него цитаты
    
    const quotes = {
        'Павел Дуров': "'Самое главное — уметь отличать самое главное от всего остального.'",
        'Билл Гейтс': "'В будущем на рынке останется два вида компаний: те, кто в Интернете и те, кто вышел из бизнеса'",
        'Натали': "'Высокомотивированные низкоквалифицированные люди'",
        'Олег Тиньков': "'Я еще не видел ни одного счастливого человека без денег, если он не буддист с третьим глазом.'",
        'Толстой Л.Н': "'Люди учатся, как говорить, а главная наука — как и когда молчать.'",
        'Иллон Маск': "'Мне нравится быть причастным к вещам, которые изменят Мир.'",
        'Уоррен Баффет': "'Лучше быть уверенным в хорошем результате, чем надеяться на отличный.'",
        'Китайская пословица': "'Лучшее время, чтобы посадить дерево, было 20 лет назад. Следующий подходящий момент - сегодня.'",
        'Альберт Эйнштейн': "'Никогда не делает ошибок только тот, кто не пробует ничего нового.'",
        'Стив Джобс': "'Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь.'"
    };
    
    // мы через object.keyssss получили доступ ко всем key в нашем объекте quotes
    const authors = Object.keys(quotes);
    
    // при помощи математической формулы мы сгенерировали случайного автора в нашем массиве authors и добавили в новую переменную переменную 
    const randomAutors = authors[Math.floor(Math.random() * authors.length)];
    
    // создали переменную и поместили в него значение из объекта quotes
    const quote = quotes[randomAutors];
    
    // получили элемент со страницы и поменяли(добавили , изменили) его значение на  randomAuthors
    const author = document.querySelector('h1');
    author.innerHTML = randomAutors;
    
    const quoteInHtml = document.querySelector('p');
    quoteInHtml.innerHTML = quote;
    
});