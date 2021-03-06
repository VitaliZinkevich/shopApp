export class Newobj {

  public main: Main;
  public address: Address;
  public priceType: string = '';
  public childrenRange: ChildrenRange[];
  public rooms: Rooms[];
  public description: Description[];
  public medDescription: Description[];

// extra options

}


export class ChildrenRange {

from: number = 0   ;
to: number = 0

}

export class Description {

feature: string = '';
description: string = '';

}

export class Main {
  public title: string = '';
  public type: string = '';


}

export class Address {

  country : string = '';
  regions : string= '';
  area : string= '';
  place : string='';

}



export class Price {
  groupPrice:number = 0 ;

}


export class Accommodation {
valid = '';
}


export class Rooms {
  roomname: string = '';
  adultPrice:number;
  childrenPrice:number;
  accommodation = [];
constructor( ){

}

}




export const adressOption = [ {country: 'Беларусь',
                              regions:[
                                {
                                region: 'Минская облать',
                                areas: [
                                  'Березинский',
                                  'Борисовский',
                                  'Вилейский',
                                  'Воложинский',
                                  'Дзержинский',
                                  'Клецкий',
                                  'Копыльский',
                                  'Крупский',
                                  'Логойский',
                                  'Любанский',
                                  'Минский',
                                  'Молодечненский',
                                  'Мядельский',
                                  'Несвижский',
                                  'Пуховичский',
                                  'Слуцкий',
                                  'Смолевичский',
                                  'Солигорский',
                                  'Стародорожский',
                                  'Столбцовский',
                                  'Узденский',
                                  'Червенский',
                                          ]
                                },
                                {
                                  region: 'Витебская область',
                                        areas: [
                                          'Бешенковичский',
                                            'Браславский',
                                            'Верхнедвинский',
                                            'Витебский',
                                            'Глубокский',
                                            'Городокский',
                                            'Докшицкий',
                                            'Дубровенский',
                                            'Лепельский',
                                            'Лиозненский',
                                            'Миорский',
                                            'Оршанский',
                                            'Полоцкий',
                                            'Поставский',
                                            'Россонский',
                                            'Сенненский',
                                            'Толочинский',
                                            'Ушачский',
                                            'Чашникский',
                                            'Шарковщинский',
                                            'Шумилинский',
                                        ]
                                      },
                                      {
                                   region: 'Гомельская область',
                                           areas: [
                                             'Брагинский',
                                              'Буда-Кошелевский',
                                              'Ветковский',
                                              'Гомельский',
                                              'Добрушский',
                                              'Ельский',
                                              'Житковичский',
                                              'Жлобинский',
                                              'Калинковичский',
                                              'Кормянский',
                                              'Лельчицкий',
                                              'Лоевский',
                                              'Мозырский',
                                              'Наровлянский',
                                              'Октябрьский',
                                              'Петриковский',
                                              'Речицкий',
                                              'Рогачевский',
                                              'Светлогорский',
                                              'Хойникский',
                                              'Чечерский',
                                              ]
                                            },
                                            {
                                          region: 'Гродненская область',
                                                    areas: [
                                                      'Берестовицкий',
                                                      'Волковысский',
                                                      'Вороновский',
                                                      'Гродненский',
                                                      'Дятловский',
                                                      'Зельвенский',
                                                      'Ивьевский',
                                                      'Кореличский',
                                                      'Лидский',
                                                      'Мостовский',
                                                      'Новогрудский',
                                                      'Островецкий',
                                                      'Ошмянский',
                                                      'Свислочский',
                                                      'Слонимский',
                                                      'Сморгонский',
                                                      'Щучинский',
                                                    ]
                                                  },
                                                  {
                                          region: 'Брестская область',
                                                          areas: [
                                                            'Барановичский',
                                                            'Берёзовский',
                                                            'Брестский',
                                                            'Ганцевичский',
                                                            'Дрогичинский',
                                                            'Жабинковский',
                                                            'Ивановский',
                                                            'Ивацевичский',
                                                            'Каменецкий',
                                                            'Кобринский',
                                                            'Лунинецкий',
                                                            'Ляховичский',
                                                            'Малоритский',
                                                            'Пинский',
                                                            'Пружанский',
                                                            'Столинский',
                                                          ]
                                                        },
                                                        {
                                          region: 'Могилевская область',
                                                        areas: [
                                                          'Белыничский',
                                                          'Бобруйский',
                                                          'Быховский',
                                                          'Глусский',
                                                          'Горецкий',
                                                          'Дрибинский',
                                                          'Кировский',
                                                          'Климовичский',
                                                          'Кличевский',
                                                          'Костюковичский',
                                                          'Краснопольский',
                                                          'Кричевский',
                                                          'Круглянский',
                                                          'Могилевский',
                                                          'Мстиславский',
                                                          'Осиповичский',
                                                          'Славгородский',
                                                          'Хотимский',
                                                          'Чаусский',
                                                          'Чериковский',
                                                          'Шкловский',
                                                                ]
                                                              }]}
                                ,
                                {
                                country: 'Литва',
                                regions:[
                                {
                                region: 'Литва облать 1',
                                areas: [
                                            'Литва 1',
                                            'Литва 2'
                                          ]
                                },
                                {
                                  region: 'Литва область 2',
                                        areas: [
                                          'Литва 3',
                                          'Литва 4',
                                        ]
                                      }]
                                }

]



export const accommodation = ['1','1+1','1+2','2','2+1','2+2','2+3','3']

export const TYPES = ['Санаторий', 'Оздаровительный центр', "ДРОЦ"];

export const objFeatures = ['Бассейн', 'Озеро', 'Баня','Прокат']
export const objMedFeatures = ['Кожные', 'Кордеолог', 'Костные','Еще другие']
