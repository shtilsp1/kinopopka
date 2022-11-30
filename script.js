const films = [
    {
        "id" : 0,
        "name" : "Хороший, плохой, злой",
        "year" : 1966,
        "grade" : 8.4,
        "janre" : ["Western", "Adventures", "Action", "Military"],
        "image" : "https://ru-images.kinorium.com/movie/300/56474.jpg?1576689344",
        "age" : 16,
        "description" : "По воле судьбы трое мужчин вынуждены объединить свои усилия в поисках украденного золота. Но совместная работа — не самое подходящее занятие для таких отъявленных бандитов, как они. Компаньоны вскоре понимают, что в их дерзком и опасном путешествии по разоренной войной стране самое важное — никому не доверять и держать пистолет наготове, если хочешь остаться в живых.",
        "trailer" : "https://www.youtube.com/embed/ADvXVas33X0"
    },
    {
        "id" : 1,
        "name" : "Джанго освобожденный",
        "year" : 2012,
        "grade" : 8.4,
        "janre" : ["Western", "Drama", "Adventures", "Comedy"],
        "image" : "https://ru-images.kinorium.com/movie/300/573253.jpg?1587329704",
        "age" : 18,
        "description" : "Эксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго — прекрасная кандидатура. Правда, у нового помощника свои мотивы — кое с чем надо сперва разобраться.",
        "trailer" : "https://www.youtube.com/embed/yBKruuHIzC4"
    },
    {
        "id" : 2,
        "name" : "Криминальное чтиво",
        "year" : 1994,
        "grade" : 8.8,
        "janre" : ["Criminal", "Drama", "Triller"],
        "image" : "https://ru-images.kinorium.com/movie/300/100973.jpg?1655715328",
        "age" : 18,
        "description" : "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.",
        "trailer" : "https://www.youtube.com/embed/vBADUmfa9Q4"
    },
    {
        "id" : 3,
        "name" : "Карты, деньги, два ствола",
        "year" : 1998,
        "grade" : 8.6,
        "janre" : ["Action", "Comedy", "Criminal"],
        "image" : "https://ru-images.kinorium.com/movie/300/109308.jpg?1576482645",
        "age" : 16,
        "description" : "Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.",
        "trailer" : "https://www.youtube.com/embed/HwY1UqW3cgY"
    },
    {
        "id" : 4,
        "name" : "Дилер 2",
        "year" : 2004,
        "grade" : 7.3,
        "janre" : ["Action", "Criminal", "Drama"],
        "image" : "https://ru-images.kinorium.com/movie/300/305988.jpg?1571164512",
        "age" : 18,
        "description" : "Освободившись после очередной отсидки, Тонни узнает, что у него есть ребенок. Он отчаянно пытается поправить свое положение и имидж неудачника. Он хочет завоевать уважение отца — самого злобного гангстера Копенгагена, которому он должен крупную сумму. Но как бы Тонни ни старался, из-за его непроходимой тупости всё становится только хуже.",
        "trailer" : "https://www.youtube.com/embed/aCsL7T7CSXM"
    },
    {
        "id" : 5,
        "name" : "Дилер 3",
        "year" : 2005,
        "grade" : 7.2,
        "janre" : ["Action", "Triller", "Drama", "Comedy", "Criminal"],
        "image" : "https://ru-images.kinorium.com/movie/300/324363.jpg?1570566605",
        "age" : 18,
        "description" : "В этот раз Мило получил не то, что ожидал, и к тому же его кинули партнеры.",
        "trailer" : "https://www.youtube.com/embed/0z346HZyZOU"
    },
    {
        "id" : 6,
        "name" : "Омерзительная восьмерка",
        "year" : 2015,
        "grade" : 8.2,
        "janre" : ["Criminal", "Drama", "Detective", "Triller", "Western"],
        "image" : "https://ru-images.kinorium.com/movie/300/754477.jpg?1588838052",
        "age" : 18,
        "description" : "США после Гражданской войны. Легендарный охотник за головами Джон Рут по кличке Вешатель конвоирует заключенную. По пути к ним прибиваются еще несколько путешественников. Снежная буря вынуждает компанию искать укрытие в лавке на отшибе, где уже расположилось весьма пестрое общество: генерал конфедератов, мексиканец, ковбой… И один из них — не тот, за кого себя выдает.",
        "trailer" : "https://www.youtube.com/embed/lmB9VWm0okU"
    },
    {
        "id" : 7,
        "name" : "Жмурки",
        "year" : 2005,
        "grade" : 7.3,
        "janre" : ["Comedy", "Criminal", "Triller"],
        "image" : "https://ru-images.kinorium.com/movie/300/321588.jpg?1591909143",
        "age" : 16,
        "description" : "Жмурки — старинная русская игра: водящий, с завязанными глазами, ловит остальных играющих. К середине 1990-х правила игры изменились: выигрывает тот, кто останется в живых, сделав жмуриками остальных. <br> Нижний Новгород. Два мелких бандита Серега и Саймон работают на крупного бандюгана Сергея Михайловича. Только вот очередное его поручение парни провалили: он велел привезти химика, колдовавшего над созданием новой порции белого порошка, а Серега и Саймон устроили в лаборатории бойню.",
        "trailer" : "https://www.youtube.com/embed/wTnz0SE27hQ"
    },
    {
        "id" : 8,
        "name" : "Донбасс. Окраина",
        "year" : 2018,
        "grade" : 4.4,
        "janre" : ["Military"],
        "image" : "https://ru-images.kinorium.com/movie/300/1693884.jpg?1558094421",
        "age" : 16,
        "description" : "Август 2014 года. Окраина Донецка. Молодой солдат украинской армии Андрей Соколов, направленный в зону военных действий водителем, спасаясь от обстрела, попадает в подвал жилого дома, где вынужденно знакомится с несколькими совершенно разными людьми. Они пришли с разных сторон, у них разные судьбы и мировоззрение. Но все они объединены одной мечтой — чтобы эта война закончилась как можно скорее.",
        "trailer" : "https://www.youtube.com/embed/WLYI5BPsZF8"
    },
    {
        "id" : 9,
        "name" : "Грязь",
        "year" : 2013,
        "grade" : 7.6,
        "janre" : ["Action", "Comedy", "Criminal", "Drama"],
        "image" : "https://ru-images.kinorium.com/movie/300/488891.jpg?1628333355",
        "age" : 18,
        "description" : "Главный герой — Брюс Робертсон, детектив-сержант сыскной полиции города Эдинбурга, стремящийся получить вакантную должность детектива-инспектора. Начальник Брюса Боб Тоал поручает ему руководство расследованием убийства японского студента в подземном переходе. Кроме Брюса на должность инспектора претендуют также его коллеги по отделу сыскной полиции. Робертсон использует все возможные средства, чтобы устранить соперников, подставляя и унижая их…",
        "trailer" : "https://www.youtube.com/embed/k4p4hZ4QPc4"
    },
    {
        "id" : 10,
        "name" : "Борат",
        "year" : 2006,
        "grade" : 6.8,
        "janre" : ["Comedy"],
        "image" : "https://ru-images.kinorium.com/movie/300/336676.jpg?1577806843",
        "age" : 18,
        "description" : "Телеведущий из Казахстана Борат отправляется в США, чтобы сделать репортаж об этой «величайшей в мире стране». Однако по прибытии оказалось, что главная цель его визита — поиски Памелы Андерсон с целью жениться на ней, а вовсе не съемки документального фильма.",
        "trailer" : "https://www.youtube.com/embed/V0xbH91kvNE"
    },
    {
        "id" : 11,
        "name" : "Крестный отец",
        "year" : 1972,
        "grade" : 8.6,
        "janre" : ["Criminal", "Drama"],
        "image" : "https://ru-images.kinorium.com/movie/300/63924.jpg?1642149619",
        "age" : 18,
        "description" : "Глава семьи, Дон Вито Корлеоне, выдаёт замуж свою дочь. В это время со Второй мировой войны возвращается его любимый сын Майкл. Майкл, герой войны, гордость семьи, не выражает желания заняться жестоким семейным бизнесом. Дон Корлеоне ведёт дела по старым правилам, но наступают иные времена, и появляются люди, желающие изменить сложившиеся порядки. На Дона Корлеоне совершается покушение.",
        "trailer" : "https://www.youtube.com/embed/E3b9jVCUh7Q"
    },
];

const mainContainer = document.querySelector(".main-container");
const FilterGenre = document.querySelectorAll('.main-genre input');
const FilterYear = document.querySelectorAll('.main-year input');
const FilterCense = document.querySelectorAll('.main-cense input');
const cardField = document.querySelectorAll('.card-field');
const mainFilter = document.querySelector('.filter-content');




function Cards(films) {
    films.forEach(object => {
        mainContainer.classList.add('card-field');
        mainContainer.innerHTML += `<div class="card" id="${object.id}">
                                        <a href="#">
                                            <div class="card-image">
                                                <img src="${object.image}" alt="image">
                                                <h1>${object.name}</h1>
                                                <p class="year">${object.year}</p>
                                                <p class="age">${object.age}</p>
                                                <p class="grade">${object.grade}</p>
                                            </div>
                                        </a>
                                    </div>`;    
        AddEvent();
    });
}

filterFunction(films); 

function addFilm(id) {
    mainContainer.innerHTML = '';
    mainContainer.innerHTML =`<div class="card-view" id="${id}">
                                <div class="card-header">
                                    <div class="card-pre">
                                        <img src="${films[id].image}" alt="image">
                                        <div class="card-name">
                                            <h2>${films[id].name}</h2>
                                            <p class="card-grade">${films[id].grade}</p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-info">
                                            <p class="card-age">Возростной рейтинг: ${films[id].age}</p>
                                            <p class="year">Год выпуска ${films[id].year}</p>
                                            <p class="description">${films[id].description}</p>
                                            <p class="janre">${films[id].janre}</p>
                                        </div>
                                        <div class="trailer">
                                            <h2>Трейлер</h2>
                                            <iframe width="560" height="315" src="${films[id].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>`;  
};

function AddEvent(){
    const card = document.querySelectorAll('.card');
    card.forEach(item =>{
    item.addEventListener('click',function(){
        mainFilter.style.display = 'none';
        addFilm(item.id);
    });
    item.style.cursor = 'pointer';
})
};

function filterFunction() {
    mainContainer.innerHTML = '';
    films.sort((a,b)=> b.year - a.year);
    const filters = new Set(films);
    filters.forEach(item => {
        FilterGenre.forEach(object => {
            if(object.checked) {
                if (!(Object.values(item.janre).includes(object.id))) {
                    filters.delete(item);
                }
            }
        });
        FilterYear.forEach(object => {
            if(object.checked) {
                if(!(item.year === Number(object.id))) {
                    filters.delete(item);
                }
            }
        });
    });
    if (filters.size !== 0){
        Cards(filters);
    }
};



