import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
return this.getAll().find(food => food.id == id)!;


  }


  getAllFoodByTag( tag:string):Foods[] {
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      {name:'All' ,count:14},
      {name:'FastFood', count:4},
      {name:'dinner',count:2},
      {name:'lunch',count:3},
      {name:'party',count:2},
      {name:'diet',count:1},
      {name:'healthy food', count:1},
      {name:'coffee', count:1}
    ]
  }

  getAll():Foods[]{
    return[

      {
        id:1 ,
        price:99 ,
        name: 'Burger',
        favorite:false,
        star:4.5,
        tags:['FastFood',' ','lunch'],
        imageUrl: '/assets/food-1.jpg',
        cookTime: '30-40min',
        origins:['italy'],

           },

           {
            id:2,
            price:145 ,
            name: 'Salad',
            favorite:false,
            star:4.5,
            tags:['diet'],
            imageUrl: '/assets/food-2.jpg',
            cookTime: '20-30min',
            origins:['india'],






               },
               {
                id:3,
                price:250 ,
                name: 'Mix Dinner Plate',
                favorite:false,
                star:4.5,
                tags:['healthy food',' dinner','lunch'],
                imageUrl: '/assets/food-3.jpg',
                cookTime: '50-60min',
                origins:['india'],




                   },
                   {
                    id:4 ,
                    price:400 ,
                    name: 'Mix Complete Dinner',
                    favorite:false,
                    star:4.5,
                    tags:['green vegetable','dinner ','lunch'],
                    imageUrl: '/assets/food-4.jpg',
                    cookTime: '30-50min',
                    origins:['india'],




                       },

                       {
                        id:5 ,
                        price:199 ,
                        name: 'Cappucinno',
                        favorite:false,
                        star:4.5,
                        tags:['date',' coffee','timepass'],
                        imageUrl: '/assets/food-5.jpg',
                        cookTime: '20-40min',
                        origins:['italy'],




                           },

                           {
                            id:6 ,
                            price:129 ,
                            name: 'Sandwich',
                            favorite:false,
                            star:4.5,
                            tags:['FastFood','dinner ','lunch'],
                            imageUrl: '/assets/food-6.jpg',
                            cookTime: '30-40min',
                            origins:['italy'],




                               },

                               {
                                id:7 ,
                                price:499,
                                name: 'Greens Pizza',
                                favorite:false,
                                star:4.5,
                                tags:['FastFood','party ','lunch'],
                                imageUrl: '/assets/food-7.jpg',
                                cookTime: '40-60min',
                                 origins:['italy'],




                                   },

                                   {
                                    id:8 ,
                                    price:176 ,
                                    name: 'Egg curry',
                                    favorite:false,
                                    star:4.5,
                                    tags:['dinner','party ','lunch'],
                                    imageUrl: '/assets/food-8.jpg',
                                    cookTime: '50-60min',
                                    origins:['italy'],




                                       },

                                       {
                                        id:9 ,
                                        price:99 ,
                                        name: 'Great Indian Thali',
                                        favorite:false,
                                        star:4.5,
                                        tags:['healthy food ','dinner ','lunch'],
                                        imageUrl: '/assets/food-9.jpg',
                                        cookTime: '30-40min',
                                        origins:['india'],




                                           }

    ];


  }
}
