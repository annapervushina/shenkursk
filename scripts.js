ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [62.10565, 42.885612],
    zoom: 14,
    controls: []
  }, {
    yandexMapDisablePoiInteractivity: true,
    restrictMapArea: true,
    suppressMapOpenBlock: true,
  });

  // Шенкурский районный краеведческий музей
  var museum1 = new ymaps.Placemark([62.103139, 42.900937], {
    balloonContentHeader: `
      <div>Шенкурский районный краеведческий музей</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/shenkursk_museum.jpg" width="300">
      <br/>
      <label class="label">Телефоны:</label>
      <p><a href="tel:+78185140324">+7 (81851) 4-03-24</a></p>
      <label class="label">Группа Вконтакте:</label>
      <p><a href="https://vk.com/shenkmuseum">https://vk.com/shenkmuseum</a></p>
      <div class="description">
        Один из старейших музеев Архангельской области. Сегодня в музейных фондах хранится около 18,2 тыс. экспонатов, которые разбиты по коллекциям. Среди них уникальные коллекции: «Декоративно – прикладного искусства», «Этнографическая», «Графика», «Живопись», «Оружие», «Фото» и другие. Все экспонаты воссоздают яркую картину истории края.
        <br />
        Здание музея является городской усадьбой купца Логунова и занесено в реестр памятников истории и культуры регионального значения.
      </div>
    `,
    hintContent: 'Шенкурский районный Краеведческий музей'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/museum.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(museum1);

  // Терапевтическое отделение Шенкурской ЦРБ (бывшие воинские казармы)
  var building1 = new ymaps.Placemark([62.109349, 42.900644], {
    balloonContentHeader: `
      <div>Терапевтическое отделение Шенкурской ЦРБ (бывшие воинские казармы)</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/krasnye_kazarmy.jpg" width="300">
      <br/>
      <div class="description">
        Бывшие воинские казармы для полицейских стражников.
        <br />
        Во время восстания крестьян, протестовавших против решения губернского военкомата о мобилизации в Красную армию, в здании военкомата держали оборону члены уездного исполкома, служащие военкомата, красноармейцы. Им противостояло около тысячи бывших солдат и офицеров под руководством М.Н. Ракитина. После 4-дневной осады осажденные были арестованы. 30 июля 1918 г. восставшие отошли от города. С этого времени здание стали называть «Красные казармы»
      </div>
    `,
    hintContent: 'Терапевтическое отделение Шенкурской ЦРБ (бывшие воинские казармы)'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/building.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(building1);

  // Памятник солдатской матери Каллисте Павловне Соболевой
  var monument1 = new ymaps.Placemark([62.106095, 42.899705], {
    balloonContentHeader: `
      <div>Памятник солдатской матери Каллисте Павловне Соболевой</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/kallista_monument.jpg" width="300">
      <br/>
      <div class="description">
        Семеро сыновей деревенской женщины Каллисты Павловны Соболевой погибли на полях сражений в годы Великой Отечественной войны. К сожалению, нет сведений о месте их гибели и захоронении, известны лишь их имена и даты рождения.
        <br />  
        Единственной наградой, которой была награждена Каллиста Павловна – это медаль «За доблестный труд в Великой Отечественной войне 1941 – 1945 гг.». Попытки увековечить ее имя воплотились лишь к 60-летию со дня Победы. В знак высоты материнского подвига «всем миром» собирали средства на памятник и работы по его созданию. 22 июня 2005 года – в день памяти и скорби в Шенкурске в сквере площади Победы был открыт памятник солдатской матери – К. П. Соболевой.
      </div>
    `,
    // balloonContentFooter: `
    //   Информация предоставлена:
    //   <br/>
    //   OOO "Рога и копыта"
    // `,
    hintContent: 'Памятник солдатской матери Каллисте Павловне Соболевой'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument1);

  // Церковь Зосимы, Савватия и Германа бывшего Свято-Троицкого монастыря
  var church2 = new ymaps.Placemark([62.103452, 42.905281], {
    balloonContentHeader: `
      <div>Церковь Зосимы, Савватия и Германа бывшего Свято-Троицкого монастыря</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/tcerkov_zosimy.jpg" width="300">
      <br/>
      <div class="description">
        Кирпичная церковь, с восточной стороны примыкающая к двухэтажному келейному корпусу, сооружённая в 1880-1884. Четверик с апсидой увенчан небольшим восьмериком под шатром. Закрыта не позже 1930-х, венчания сломаны. Возвращена верующим в 1990, восстановлено венчание.
      </div>
    `,
    // balloonContentFooter: `
    //   Информация предоставлена:
    //   <br/>
    //   OOO "Рога и копыта"
    // `,
    hintContent: 'Церковь Зосимы и Савватия Соловецких'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/church.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(church2);

  // Троицкий собор бывшего Свято-Троицкого монастыря
  var church1 = new ymaps.Placemark([62.103930, 42.904100], {
    balloonContentHeader: `
      <div>Троицкий собор бывшего Свято-Троицкого монастыря</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/zhensky_monastyr.jpg" width="300">
      <br/>
      <div class="description">
        Главным историческим памятником города Шенкурска являются остатки разрушенного Свято-Троицкого монастыря. Основан он был в 1637 году, потом в 1764 году упразднён и через 14 лет снова возрождён, а в итоге закрыт уже при советской власти. Собор был фактически заброшен, и постепенно разрушался, дойдя в руинах до наших дней. В монастыре насельницы занимались всевозможными ремеслами, особенно золотошвейным, традиции которого сохранялись и совершенствовались столетиями. Конечно, Шенкурская обитель была богата, но дел благотворительности в ней не забывали - в монастырской трапезной бесплатно кормили до 400 паломников и бедняков. В 1917 г. в числе насельниц его состояли 64 монахини и 54 послушницы.
      </div>
    `,
    // balloonContentFooter: `
    //   Информация предоставлена:
    //   <br/>
    //   OOO "Рога и копыта"
    // `,
    hintContent: 'Троицкий собор бывшего Свято-Троицкого монастыря'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/church.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(church1);

  // Дом командира Красной армии И.И. Раудметса
  var building2 = new ymaps.Placemark([62.108479, 42.897450], {
    balloonContentHeader: `
      <div>Архив (бывший дом воинского начальника)</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/dom_raudmetsa.jpg" width="300">
      <br/>
      <div class="description">
        В годы гражданской войны – общежитие членов уездисполкома. Одним из командиров был Иван Раудметс. 
        Иван Раудметс родился 1 января 1892 года. По национальности эстонец. Был призван на службу в царскую армию. В 1915 году окончил военное училище. Принимал участие в Первой мировой войне, имел звание капитана. В марте 1918 года Раудметс добровольно пошёл на службу в Рабоче-крестьянскую Красную Армию. Командовал батальоном 4-й Петроградской стрелковой дивизии, позднее также командовал 156-м, 157-м стрелковыми полками, затем руководил Шенкурским районом. 11 июня 1937 года комдив Раудметс был арестован органами НКВД СССР. 
        <br />
        9 сентября 1937 года Военная коллегия Верховного Суда СССР признала его виновным и приговорила к высшей мере наказания — смертной казни. Приговор был приведён в исполнение в тот же день. Решением Военной коллегии Верховного Суда СССР от 4 августа 1966 года Иван Иванович Раудметс был посмертно реабилитирован.
      </div>
    `,
    hintContent: 'Архив (бывший дом воинского начальника)'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/building.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(building2);

  // Бывшее городское самоуправление
  // var building3 = new ymaps.Placemark([62.103930, 42.904100], {
  //   balloonContentHeader: `
  //     <div>Дом командира Красной армии И.И. Раудметса</div>
  //   `,
  //   balloonContentBody: `
  //     <img src="images/pictures/dom_raudmetsa.jpg" width="300">
  //     <br/>
  //     <div class="description">
  //       Иван Раудметс родился 1 января 1892 года. По национальности эстонец. Был призван на службу в царскую армию. В 1915 году окончил военное училище. Принимал участие в Первой мировой войне, имел звание капитана. В марте 1918 года Раудметс добровольно пошёл на службу в Рабоче-крестьянскую Красную Армию. Командовал батальоном 4-й Петроградской стрелковой дивизии, позднее также командовал 156-м, 157-м стрелковыми полками, затем руководил Шенкурским районом. 11 июня 1937 года комдив Раудметс был арестован органами НКВД СССР. 
  //       <br />
  //       9 сентября 1937 года Военная коллегия Верховного Суда СССР признала его виновным и приговорила к высшей мере наказания — смертной казни. Приговор был приведён в исполнение в тот же день. Решением Военной коллегии Верховного Суда СССР от 4 августа 1966 года Иван Иванович Раудметс был посмертно реабилитирован.
  //     </div>
  //   `,
  //   hintContent: 'Дом командира Красной армии И.И. Раудметса'
  // }, {
  //   iconLayout: "default#image",
  //   iconImageHref: "images/icons/building.png",
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [-15, -15]
  // });
  // map.geoObjects.add(building3);

  // Тюремная Церковь Петра и Павла
  var building3 = new ymaps.Placemark([62.108613, 42.903434], {
    balloonContentHeader: `
      <div>Тюремная Церковь Петра и Павла</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/petra_i_pavla.jpg" width="300">
      <br/>
      <div class="description">
        Церковь построена в первой половине XIX века как временная в Шенкурском женском монастыре, а в 1856 году перевезена в Шенкурский тюремный замок. К ней пристроен тюремный корпус, вероятно лазарет и служебные помещения, причем вход в церковь имеется только из корпуса.
        <br />
        В 1930 годы тюрьма была упраздненена, с ней закрылась и церковь. В тюремных зданиях и церкви до 1990 годов размещалась больница, а после ее закрытия храм и корпус пришли в запустение. Здание церкви имеет статус памятника архитектуры регионального значения, в городской администрации и местной церковной общине рассматривают возможность реставрации здания храма
      </div>
    `,
    hintContent: 'Тюремная Церковь Петра и Павла'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/church.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(building3);

  // Памятник погибшим в годы Гражданской войны
  var monument2 = new ymaps.Placemark([62.106446, 42.899704], {
    balloonContentHeader: `
      <div>Памятник погибшим в годы Гражданской войны</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/grazhdanskaya_voyna.jpg" width="300">
      <br/>
      <div class="description">
        Установлен на месте захоронения 17 бойцов Революции, погибших в борьбе с интервентами и белогвардейцами в 1918-1922 гг.
      </div>
    `,
    hintContent: 'Памятник погибшим в годы Гражданской войны'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument2);

  // Мемориал в память о Великой Отечественной Войне
  var monument3 = new ymaps.Placemark([62.106912, 42.900174], {
    balloonContentHeader: `
      <div>Мемориал в память о Великой Отечественной Войне</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/velikaya_otechestvennaya.jpg" width="300">
      <br/>
      <div class="description">
        Мемориал открыт в память о жителях Шенкурского района, которые погибли в годы Великой Отечественной войны.
      </div>
    `,
    hintContent: 'Мемориал в память о Великой Отечественной Войне'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument3);

  // Мемориал воинам, погибшим в локальных войнах и военных конфликтах в конце 20-го — начале 21 века
  var monument4 = new ymaps.Placemark([62.107106, 42.897935], {
    balloonContentHeader: `
      <div>Мемориал воинам, погибшим в локальных войнах и военных конфликтах в конце 20-го — начале 21 века</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/goryachie_tochki.jpg" width="300">
      <br/>
      <div class="description">
      Памятник погибшим в постсоветских «горячих точках».
      Возведенный за год монумент считается поистине народным: денежные средства на его строительство собирали всем районом, помогли благотворители и местная администрация.   Открытие памятника — историческое и важное событие для всего района. Это один из первых шагов с тем, чтобы увековечить память о  земляках, погибших в боях.      
      </div>
    `,
    hintContent: 'Мемориал воинам, погибшим в локальных войнах и военных конфликтах в конце 20-го — начале 21 века'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument4);

  // Памятник балтийским матросам
  var monument5 = new ymaps.Placemark([62.101229, 42.898421], {
    balloonContentHeader: `
      <div>Памятник Балтийским матросам</div>
    `,
    hintContent: 'Памятник Балтийским матросам'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument5);

  // Памятник пограничникам
  var monument6 = new ymaps.Placemark([62.101229, 42.898421], {
    balloonContentHeader: `
      <div>Памятник пограничникам</div>
    `,
    hintContent: 'Памятник пограничникам'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/monument.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(monument6);

  // Межпоселенческая библиотека им. Е. Овсянкина
  var building4 = new ymaps.Placemark([62.102809, 42.901674], {
    balloonContentHeader: `
      <div>Межпоселенческая библиотека им. Е. Овсянкина</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/narodny_dom.jpg" width="300">
      <label class="label">Телефоны:</label>
      <p><a href="tel:+78185141728">+7 (81851) 4-17-28</a></p>
      <label class="label">Группа Вконтакте:</label>
      <p><a href="https://vk.com/public64490258">https://vk.com/public64490258</a></p>
    `,
    hintContent: 'Межпоселенческая библиотека им. Е. Овсянкина'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/building.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(building4);

  // Дворец культуры и спорта
  var building5 = new ymaps.Placemark([62.105765, 42.900984], {
    balloonContentHeader: `
      <div>Дворец культуры и спорта</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/dvorec_kultury.jpg" width="300">
      <br />
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141170">+7 (81851) 4-11-70</a></p>
        <label class="label">Группа Вконтакте:</label>
        <p><a href="https://vk.com/dkis_shykursk">https://vk.com/dkis_shykursk</a></p>
      </div>
      <br />
      <div>
        Муниципальное бюджетное учреждение культуры "Дворец культуры и спорта
        <br />
        Учреждение осуществляет следующие основные виды деятельности согласно перечню услуг и работ:
        <ul>
          <li>Организация деятельности кружков, творческих коллективов, студий любительского художественного, декоративно-прикладного, изобразительного и технического творчества, культуры, музыкального искусства (вокального творчества, игры на музыкальных инструментах и др.), театрального творчества (в т.ч. актерского мастерства и др.) хореографического творчества, изобразительного искусства (декоративно-прикладного, изобразительного творчества и др.)
          <li>Организация работы любительских объединений, групп, клубов по интересам, художественных</li>
        </ul>
        Имеется детская комната
      </div>
    `,
    hintContent: 'Дворец культуры и спорта'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/building.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(building5);

  // кафе Визит
  var coffee1 = new ymaps.Placemark([62.103655, 42.903251], {
    balloonContentHeader: `
      <div>Кафе "Визит"</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+7818514111">+7 (81851) 4-11-1</a></p>
      </div>
    `,
    hintContent: 'Кафе "Визит"'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/coffee.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(coffee1);

  // кафе Шенкурский посад
  var coffee2 = new ymaps.Placemark([62.109687, 42.899633], {
    balloonContentHeader: `
      <div>Кафе "Шенкурский посад"</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+7818514140">+7 (81851) 4-14-0</a></p>
      </div>
    `,
    hintContent: 'Кафе "Шенкурский посад"'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/coffee.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(coffee2);

  // гостевой дом Вага
  var hotel1 = new ymaps.Placemark([62.107424, 42.904432], { // 62.107406, 42.904391], {
    balloonContentHeader: `
      <div>Гостевой дом "Вага"</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+7818514005">+7 (81851) 4-00-5</a></p>
      </div>
    `,
    hintContent: 'Гостевой дом "Вага"'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/hotel.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(hotel1);

  // Шенкурская центральная районная больница
  var hospital1 = new ymaps.Placemark([62.109065, 42.904764], {
    balloonContentHeader: `
      <div>ГБУЗ Архангельской области Шенкурская центральная районная больница им. Н. Н. Приорова</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141470">+7 (81851) 4-14-70</a></p>
        <p><a href="tel:+78185140162">+7 (81851) 4-01-62</a></p>
      </div>
    `,
    hintContent: 'ГБУЗ Архангельской области Шенкурская центральная районная больница им. Н. Н. Приорова'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/hospital.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(hospital1);

  // Детское отделение
  var hospital3 = new ymaps.Placemark([62.110324, 42.904020], {
    balloonContentHeader: `
      <div>Детское отделение</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141378">+7 (81851) 4-13-78</a></p>
      </div>
    `,
    hintContent: 'Детское отделение'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/hospital.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(hospital3);

  // Добрая аптека
  var pharmacy1 = new ymaps.Placemark([62.103169, 42.902470], {
    balloonContentHeader: `
      <div>Аптека</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185140065">+7 (81851) 4-00-65</a></p>
      </div>
    `,
    hintContent: 'Аптека'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/pharmacy.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(pharmacy1);

  // Фармомед
  var pharmacy2 = new ymaps.Placemark([62.108983, 42.904576], {
    balloonContentHeader: `
      <div>Аптека</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141591">+7 (81851) 4-15-91</a></p>
      </div>
    `,
    hintContent: 'Аптека'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/pharmacy.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(pharmacy2);

  // Фармомед
  var pharmacy3 = new ymaps.Placemark([62.102666, 42.900247], {
    balloonContentHeader: `
      <div>Аптека</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141591">+7 (81851) 4-15-91</a></p>
      </div>
    `,
    hintContent: 'Аптека'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/pharmacy.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(pharmacy3);

  // Фармация
  var pharmacy4 = new ymaps.Placemark([62.107073, 42.902755], {
    balloonContentHeader: `
      <div>Аптека</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141139">+7 (81851) 4-11-39</a></p>
        <p><a href="tel:+78185141307">+7 (81851) 4-13-07</a></p>
      </div>
    `,
    hintContent: 'Аптека'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/pharmacy.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(pharmacy4);

  // Аюта
  var pharmacy5 = new ymaps.Placemark([62.105069, 42.902163], {
    balloonContentHeader: `
      <div>Аптека</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Аптека'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/pharmacy.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(pharmacy5);

  // Почта
  var postoffice1 = new ymaps.Placemark([62.106376, 42.901585], {
    balloonContentHeader: `
      <div>Почта</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141139">+7 (81851) 4-14-00</a></p>
        <p><a href="tel:+78001000000">+7 (800) 100-00-00</a></p>
        <p><a href="tel:+78002005888">+7 (800) 200-58-88</a></p>
      </div>
    `,
    hintContent: 'Почта'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/postoffice.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(postoffice1);

  // Полиция
  var policeoffice1 = new ymaps.Placemark([62.101902, 42.899362], {
    balloonContentHeader: `
      <div>ГУВМ МВД</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141139">+7 (81851) 4-15-40</a></p>
      </div>
    `,
    hintContent: 'ГУВМ МВД'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/police.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(policeoffice1);

  // Полиция
  var bank1 = new ymaps.Placemark([62.104596, 42.902917], {
    balloonContentHeader: `
      <div>Банкомат Сбербанк</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Банкомат Сбербанк'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/bank.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(bank1);

  // Магазин продуктов
  var market1 = new ymaps.Placemark([62.105759, 42.903807], {
    balloonContentHeader: `
      <div>Продуктовый магазин</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Продуктовый магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market1);

  // Русалка
  var market2 = new ymaps.Placemark([62.103736, 42.903114], {
    balloonContentHeader: `
      <div>Промтоварный магазин</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Промтоварный магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market2);

  // Магнит
  var market3 = new ymaps.Placemark([62.105117, 42.902176], {
    balloonContentHeader: `
      <div>Продуктовый магазин</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78002009002">+7 (800) 200-90-02</a></p>
      </div>
    `,
    hintContent: 'Продуктовый магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market3);

  // Продуктовый рынок
  var market4 = new ymaps.Placemark([62.103320, 42.903792], {
    balloonContentHeader: `
      <div>Продуктовый рынок</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Продуктовый рынок'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market4);

  // На Сретенской
  var market5 = new ymaps.Placemark([62.107765, 42.892408], {
    balloonContentHeader: `
      <div>Продуктовый магазин</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Продуктовый магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market5);

  var market6 = new ymaps.Placemark([62.102767, 42.902025], {
    balloonContentHeader: `
      <div>Продуктовый магазин</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Продуктовый магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market6);

  var market7 = new ymaps.Placemark([62.109153, 42.895517], {
    balloonContentHeader: `
      <div>Торговый центр</div>
    `,
    balloonContentBody: `
      <ul>
        <li>Продуктовый магазин (1 этаж)</li>
        <li>Промтоварный магазин (2 этаж)</li>
      </ul>
    `,
    hintContent: 'Торговый центр'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market7);

  var market8 = new ymaps.Placemark([62.102629, 42.901978], {
    balloonContentHeader: `
      <div>Промтоварный магазин</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Промтоварный магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market8);

  var market9 = new ymaps.Placemark([62.103458, 42.906800], {
    balloonContentHeader: `
      <div>Промтоварный магазин</div>
    `,
    balloonContentBody: `

    `,
    hintContent: 'Промтоварный магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market9);

  var market10 = new ymaps.Placemark([62.103476, 42.907026], {
    balloonContentHeader: `
      <div>Продуктовый магазин</div>
    `,
    balloonContentBody: `

    `,
    hintContent: 'Продуктовый магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market10);

  var market11 = new ymaps.Placemark([62.103507, 42.913241], {
    balloonContentHeader: `
      <div>Продуктовый и промтоварный магазин</div>
    `,
    balloonContentBody: `

    `,
    hintContent: 'Продуктовый и промтоварный магазин'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market11);

  // Пляж
  var beach1 = new ymaps.Placemark([62.111298, 42.872378], {
    balloonContentHeader: `
      <div>Пляж</div>
    `,
    hintContent: 'Пляж'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/beach.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(beach1);

  // Автобусная остановка 1
  var bus1 = new ymaps.Placemark([62.107221, 42.897902], {
    balloonContentHeader: `
      <div>Автобусная остановка</div>
    `,
    hintContent: 'Автобусная остановка'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/bus.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(bus1);

  // Автобусная остановка 2
  var bus2 = new ymaps.Placemark([62.100717, 42.885724], {
    balloonContentHeader: `
      <div>Автобусная остановка</div>
    `,
    hintContent: 'Автобусная остановка'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/bus.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(bus2);

  // Сувенирная лавка 1
  var gift1 = new ymaps.Placemark([62.107275, 42.904187], {
    balloonContentHeader: `
      <div>Отдел с сувенирами в гостевом доме «Вага»</div>
    `,
    // balloonContentBody: `
    //   <div>
    //     <label class="label">Вебсайт:</label>
    //     <p><a href="https://vk.com/lavkashenkurskaya">https://vk.com/lavkashenkurskaya</a></p>
    //   </div>
    // `,
    hintContent: 'Отдел с сувенирами в гостевом доме «Вага»'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/gift.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(gift1);

  // Сувениры в музее
  var gift2 = new ymaps.Placemark([62.103002, 42.900750], {
    balloonContentHeader: `
      <div>Отдел с сувенирами в краеведческом музее</div>
    `,
    balloonContentBody: `
      <div>
        Продукцию можно приобрести на 1 этаже (при входе)
      </div>
    `,
    hintContent: 'Отдел с сувенирами в краеведческом музее'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/gift.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(gift2);

  // Сквер
  var label1 = new ymaps.Placemark([62.106696, 42.899165], {
    iconContent: '',
    iconCaption: 'Сквер'
  }, {
  });
  map.geoObjects.add(label1);

  // Переправа
  var label2 = new ymaps.Placemark([62.111836, 42.877595], {
    iconCaption: 'Переправа (понтонный мост)'
  }, {
  });
  map.geoObjects.add(label2);

  // Переправа
  var label3 = new ymaps.Placemark([62.102006, 42.891152], {
    iconCaption: 'Межсезонная переправа'
  }, {
  });
  map.geoObjects.add(label3);

  // Городской парк
  var label4 = new ymaps.Placemark([62.106561, 42.892973], {
    iconContent: '',
    iconCaption: 'Городской парк'
  }, {
  });
  map.geoObjects.add(label4);

  // Детская площадка
  var label5 = new ymaps.Placemark([62.110880, 42.891116], {
    iconContent: '',
    iconCaption: 'Детская площадка'
  }, {
  });
  map.geoObjects.add(label5);

  // Детская площадка
  var label6 = new ymaps.Placemark([62.106137, 42.900976], {
    iconContent: '',
    iconCaption: 'Детская площадка'
  }, {
  });
  map.geoObjects.add(label6);

  // Детская площадка
  var label7 = new ymaps.Placemark([62.101637, 42.898151], {
    iconContent: '',
    iconCaption: 'Детская площадка'
  }, {
  });
  map.geoObjects.add(label7);

  // Детская площадка
  var label8 = new ymaps.Placemark([62.106585, 42.891904], {
    iconContent: '',
    iconCaption: 'Детская площадка'
  }, {
  });
  map.geoObjects.add(label8);

  // Футбольное поле
  var label9 = new ymaps.Placemark([62.111991, 42.890028], {
    iconContent: '',
    iconCaption: 'Футбольное поле'
  }, {
  });
  map.geoObjects.add(label9);

  // Хоккейный корт
  var label10 = new ymaps.Placemark([62.111462, 42.890804], {
    iconContent: '',
    iconCaption: 'Хоккейный корт'
  }, {
  });
  map.geoObjects.add(label10);

  // Мини-футбольное поле
  var label11 = new ymaps.Placemark([62.111799, 42.891877], {
    iconContent: '',
    iconCaption: 'Мини-футбольное поле'
  }, {
  });
  map.geoObjects.add(label11);
}
