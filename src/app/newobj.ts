export class Newobj {

  constructor(
  public name: string,
  public type: string,
  public address: Address,
  public rooms: Rooms[]
 ){}


}


export class Address {

  constructor (
  country : string,
  regions : string,
  area : string,
  place : string ){}

}

export class Rooms {


constructor(public title: string,
            public canLive: string,
            public price: number){

            }

}

export const regions = [
      {name: 'Минская облать',
          areas: [
              'Березинский',
              'Борисовский'
            ]
      },
      {name: 'Витебская область',
          areas: [
            'Бешенковичский',
            'Браславский',
          ]
    },

]

export const countries = ['Беларусь']

export const  lives = ['1', '1+1','1+2','2','2+1']
export const TYPES = ['Санаторий', 'Оздаровительный центр'];
