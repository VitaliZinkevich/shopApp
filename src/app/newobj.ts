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

from = ''
to = ''

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
  rangePrice = '';
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
                                            'Борисовский'
                                          ]
                                },
                                {
                                  region: 'Витебская область',
                                        areas: [
                                          'Бешенковичский',
                                          'Браславский',
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



export const accommodation = [['1'],['1+1'],['1+2'],['2'],['2+1'],['2+2'],['2+3'],['3']]

export const TYPES = ['Санаторий', 'Оздаровительный центр'];

export const objFeatures = ['Бассейн', 'Озеро', 'Баня','Прокат']
export const objMedFeatures = ['Кожные', 'Кордеолог', 'Костные','Еще другие']
