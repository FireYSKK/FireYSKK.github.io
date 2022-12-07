document.addEventListener('DOMContentLoaded', function() {

    var popup = document.getElementById('event-pop-up-info');
    const popUpImgs = new Map();
    popUpImgs.set('f1', "src/calendar-pop-ups/f1.jpg");
    popUpImgs.set('nascar', "src/calendar-pop-ups/nascar.jpg");
    popUpImgs.set('endurance', "src/calendar-pop-ups/endurance.jpg");
    popUpImgs.set('rtcc', "src/calendar-pop-ups/rtcc.jpg");
    popUpImgs.set('supergt', "src/calendar-pop-ups/supergt.jpg");
    popUpImgs.set('dakar', "src/calendar-pop-ups/dakar.jpg");
    popUpImgs.set('wrc', "src/calendar-pop-ups/wrc.jpg");

    popup.addEventListener('click', e => {
        if (e.target.tagName != 'I') return;

        popup.innerHTML = '';
        popup.style.display = 'none';
    });

    function convertDate(event) {
        let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        let result = '';

        if (!event.end) {
            result += event.start.getDate();
            result += " ";
            result += months[event.start.getMonth()];
            result += " ";
            result += event.start.getFullYear();
        }
        else if (event.start) {
            result += event.start.getDate();
            result += "-";
            result += event.end.getDate();
            result += " ";
            result += months[event.start.getMonth()];
            result += " ";
            result += event.start.getFullYear();
        }
        else {
            result = "undefined";
        }
        return result;
    }

    var calendarEl = document.getElementById('calendar');
    let calendarView = 'dayGridMonth';

    if (window.innerWidth <= 849){
        calendarView = 'listWeek';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 849 && calendar.view.type === 'dayGridMonth'){
            calendar.changeView('listWeek')
        }
        else if (window.innerWidth > 849 && calendar.view.type === 'listWeek'){
            calendar.changeView('dayGridMonth')
        }
    })

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: calendarView,
        aspectRatio: 1.8,
        locale: 'ru',
        eventSources: [
            {
                events: [
                    {
                        title: "Гран-при Формулы-1 в Сан-Паоло",
                        start: "2022-11-13",
                        groupId: 'f1'
                    },
                    {
                        title: "Гран-при Формулы-1 в Абу-Даби",
                        start: "2022-11-20",
                        groupId: 'f1'
                    },
                    {
                        title: "Пробные заезды Формулы-1 в Бахрейне",
                        start: "2023-02-25",
                        groupId: 'f1'
                    },
                    {
                        title: "Гран-при Формулы-1 в Бахрейне",
                        start: "2023-03-05",
                        groupId: 'f1'
                    },
                    {
                        title: "Гран-при Формулы-1 в Саудовской Аравии",
                        start: "2023-03-19",
                        groupId: 'f1'
                    },
                ],
                color: 'red', 
                textColor: 'black' 
            },
        
            {
                events: [
                    {
                        title: "Чемпионат мира по Ралли. Монте-Карло",
                        start: "2023-01-19",
                        end: "2023-01-22",
                        groupId: 'wrc'
                    },
                    {
                        title: "Чемпионат мира по Ралли. Швеция",
                        start: "2023-02-09",
                        end: "2023-02-12",
                        groupId: 'wrc'
                    },
                    {
                        title: "Чемпионат мира по Ралли. Мексика",
                        start: "2023-03-16",
                        end: "2023-03-19",
                        groupId: 'wrc'
                    },
                ],
                color: 'yellow', 
                textColor: 'black' 
            },

            {
                events: [
                    {
                        title: "Кубок NASCAR. Второй этап в Финиксе",
                        start: "2022-11-06",
                        groupId: 'nascar'
                    },
                    {
                        title: "Кубок NASCAR. Второй этап в Мартинсвилле",
                        start: "2022-10-30",
                        groupId: 'nascar'
                    },
                    {
                        title: "Кубок NASCAR. Второй этап в Лас-Вегасе",
                        start: "2022-10-16",
                        groupId: 'nascar'
                    },
                ],
                color: 'green', 
                textColor: 'color' 
            },

            {
                events: [
                    {
                        title: "Чемпионат мира по автогонкам на выносливость. Этап в Бахрейне",
                        start: "2022-11-12",
                        groupId: 'endurance'
                    },
                    {
                        title: "Чемпионат мира по автогонкам на выносливость. Этап в Фудзи",
                        start: "2022-09-11",
                        groupId: 'endurance'
                    }
                ],
                color: 'orange', 
                textColor: 'black' 
            },

            {
                events: [
                    {
                        title: "Super GT. Этап в Мотеги",
                        start: "2022-11-06",
                        groupId: 'supergt'
                    },
                    {
                        title: "Super GT. Этап в Автополисе",
                        start: "2022-10-02",
                        groupId: 'supergt'
                    }
                ],
                color: 'lightblue', 
                textColor: 'black' 
            },

            {
                events: [
                    {
                        title: "Этап РСКГ на автодроме «Крепость Грозная»",
                        start: "2022-10-06",
                        end: "2022-10-09",
                        groupId: 'rtcc'
                    },
                    {
                        title: "Этап РСКГ на автодроме «Игора Драйв»",
                        start: "2022-09-09",
                        end: "2022-09-12",
                        groupId: 'rtcc'
                    }
                ],
                color: 'blue', 
                textColor: 'white' 

            },

            {
                events: [
                    {
                        title: "Ралли Дакар",
                        start: "2023-01-15",
                        groupId: 'dakar'
                    }
                ],
                color: 'purple', 
                textColor: 'white' 
            }
          ],
        eventClick: function(info) {
            let title = document.createElement('h2');
            title.innerText = info.event.title;
            let eventImg = document.createElement('img');
            eventImg.setAttribute('src', popUpImgs.get(info.event.groupId));
            let eventDate = document.createElement('p');
            eventDate.innerText = convertDate(info.event);
            let closeButton = document.createElement('button');
            closeButton.innerHTML = "<i class='fa fa-times' aria-hidden='true'></i>";

            popup.appendChild(eventImg);
            popup.appendChild(title);
            popup.appendChild(eventDate);
            popup.appendChild(closeButton);
            popup.style.display = 'block';
        }
    });

    calendar.render();

});
