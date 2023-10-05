import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { HomeComponent } from './home/home.component';
@Injectable({
  providedIn: 'root'
})

export class HousingServiceService {
  
    //readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png'
   
     protected HousinglocationList : Housinglocation[] =
     [
       {
       id: 1,
       name: 'Mieszkanie 1',
       city: 'Gdańsk',
       state: 'PL',
       photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
       availableUntil:50,
       wifi: true,
       laundry: false
       },
       {
         id: 2,
         name: 'Mieszkanie 2',
         city: ' Wrocław',
         state: 'PL',
         photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
         availableUntil:50,
         wifi: true,
         laundry: false
         },
         {
           id: 3,
           name: 'Mieszkanie 3',
           city: 'Katowice',
           state: 'PL',
           photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
           availableUntil:50,
           wifi: true,
           laundry: false
         },
         {
           id: 4,
           name: 'Mieszkanie 4',
           city: 'Gdańsk',
           state: 'PL',
           photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
           availableUntil:50,
           wifi: true,
           laundry: false
            //readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
           },
           {
             id: 5,
             name: 'Mieszkanie 5',
             city: 'Gdańsk',
             state: 'PL',
             photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
             availableUntil:50,
             wifi: true,
             laundry: false
            },
           {
               id: 6,
               name: 'Mieszkanie 6',
               city: 'Gdańsk',
               state: 'PL',
               photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
               availableUntil:50,
               wifi: true,
               laundry: false
             }
           ];
           getAllHousinglocation(): Housinglocation[] {
               return this.HousinglocationList;
           }
           getHousinglocationById(id:number): Housinglocation |
           undefined {
            return this.HousinglocationList.find(Housinglocation =>
              Housinglocation.id === id)
           }
  
  }

