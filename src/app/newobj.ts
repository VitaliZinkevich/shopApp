export class Newobj {

  constructor(
  public name: string,
  public type: string,
  public address: Address ){}


}



export class Address {

              //  country : string;
              //  reg : string ;
              //  area : string;
              //  place : string



  constructor (
  country : string,
  regions : string,
  area : string,
  place : string ){}

}

export class Rooms {


  
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
