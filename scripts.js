ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [62.10565, 42.885612],
    zoom: 15,
    controls: []
  }, {
    yandexMapDisablePoiInteractivity: true,
    suppressMapOpenBlock: true,
  });

  // Шенкурский районный Краеведческий музей
  var museum1 = new ymaps.Placemark([62.103139, 42.900937], {
    balloonContentHeader: `
      <div>Шенкурский районный Краеведческий музей</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/shenkursk_museum.jpg" width="300">
      <br/>
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

  // Красные казармы
  var building1 = new ymaps.Placemark([62.109349, 42.900644], {
    balloonContentHeader: `
      <div>Красные казармы</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/krasnye_kazarmy.jpg" width="300">
      <br/>
      <div class="description">
        Воинские казармы для полицейских стражников.
        <br />
        Во время восстания крестьян, протестовавших против решения губернского военкомата о мобилизации в Красную армию, в здании военкомата держали оборону члены уездного исполкома, служащие военкомата, красноармейцы. Им противостояло около тысячи бывших солдат и офицеров под руководством М.Н. Ракитина. После 4-дневной осады осажденные были арестованы. 30 июля 1918 г. восставшие отошли от города. С этого времени здание стали называть «Красные казармы»
      </div>
    `,
    // balloonContentFooter: `
    //   Информация предоставлена:
    //   <br/>
    //   OOO "Рога и копыта"
    // `,
    hintContent: 'Красные казармы'
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

  // Церковь Зосимы и Савватия Соловецких 
  var church2 = new ymaps.Placemark([62.103452, 42.905281], {
    balloonContentHeader: `
      <div>Церковь Зосимы и Савватия Соловецких</div>
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

  // Свято-Троицкий женский монастырь
  var church1 = new ymaps.Placemark([62.103930, 42.904100], {
    balloonContentHeader: `
      <div>Свято-Троицкий женский монастырь</div>
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
    hintContent: 'Свято-Троицкий женский монастырь'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/church.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(church1);

  // Дом командира Красной армии И.И. Раудметса
  // var building2 = new ymaps.Placemark([62.103930, 42.904100], {
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
  // map.geoObjects.add(building2);

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

  // Тюремный корпус с церквью Петра и Павла
  var building3 = new ymaps.Placemark([62.108613, 42.903434], {
    balloonContentHeader: `
      <div>Тюремный корпус с церквью Петра и Павла</div>
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
    hintContent: 'Тюремный корпус с церквью Петра и Павла'
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

  // МБУК «Шенкурская централизованная библиотечная система» (Бывший Народный дом)
  var building4 = new ymaps.Placemark([62.102809, 42.901674], {
    balloonContentHeader: `
      <div>МБУК «Шенкурская централизованная библиотечная система» (Бывший Народный дом)</div>
    `,
    balloonContentBody: `
      <img src="images/pictures/narodny_dom.jpg" width="300">
    `,
    hintContent: 'МБУК «Шенкурская централизованная библиотечная система» (Бывший Народный дом)'
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
        <p><a href="tel:+78002009002">+7 (800) 200-90-02</a></p>
      </div>
      <br />
      <div>
        Муниципальное бюджетное учреждение культуры "Дворец культуры и спорта
        <br />
        Учреждение осуществляет следующие основные виды деятельности согласно перечню услуг и работ:
        <ul>
          <li>Организация деятельности кружков, творческих коллективов, студий любительского художественного, декоративно-прикладного, изобразительного и технического творчества, культуры, музыкального искусства (вокального творчества, игры на музыкальных инструментах и др.), театрального творчества (в т.ч. актерского мастерства и др.) хореографического творчества, изобразительного искусства (декоративно-прикладного, изобразительного творчества и др.), эстетического развития здоровья и спорта культуры быта начинающей молодой семьи молодой семьи
          <li>Организация работы любительских объединений, групп, клубов по интересам, художественных</li>
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

  // гостиница Вага
  var hotel1 = new ymaps.Placemark([62.107406, 42.904391], {
    balloonContentHeader: `
      <div>Гостиница "Вага"</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+7818514005">+7 (81851) 4-00-5</a></p>
      </div>
    `,
    hintContent: 'Гостиница "Вага"'
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

  // Терапевтическое отделение
  var hospital2 = new ymaps.Placemark([62.109653, 42.903634], {
    balloonContentHeader: `
      <div>Терапевтическое отделение</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141402">+7 (81851) 4-14-02</a></p>
      </div>
    `,
    hintContent: 'Терапевтическое отделение'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/hospital.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(hospital2);

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
      <div>Добрая аптека</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185140065">+7 (81851) 4-00-65</a></p>
      </div>
    `,
    hintContent: 'Добрая аптека'
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
      <div>Фармомед</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141591">+7 (81851) 4-15-91</a></p>
      </div>
    `,
    hintContent: 'Фармомед'
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
      <div>Фармомед</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141591">+7 (81851) 4-15-91</a></p>
      </div>
    `,
    hintContent: 'Фармомед'
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
      <div>Фармация</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78185141139">+7 (81851) 4-11-39</a></p>
        <p><a href="tel:+78185141307">+7 (81851) 4-13-07</a></p>
      </div>
    `,
    hintContent: 'Фармация'
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
      <div>Аюта</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Аюта'
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
  var policeoffice1 = new ymaps.Placemark([62.107768, 42.899272], {
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
      <div>Магазин продуктов</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Магазин продуктов'
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
      <div>Русалка</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'Русалка'
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
      <div>Магнит</div>
    `,
    balloonContentBody: `
      <div>
        <label class="label">Телефоны:</label>
        <p><a href="tel:+78002009002">+7 (800) 200-90-02</a></p>
      </div>
    `,
    hintContent: 'Магнит'
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
      <div>На Сретенской</div>
    `,
    balloonContentBody: `
    `,
    hintContent: 'На Сретенской'
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/market.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });
  map.geoObjects.add(market5);

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
}
