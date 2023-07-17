import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [
    {
        id:'1',
        name:'Golden Corn Pizza',
        price: 129,
        cookTime:'30-40',
        origins: ['Italy'],
        
        imageUrl: 'assets/goldenCorn.jpeg',
        tags: ['FastFood', 'Pizza','Snacks'],
        stars: 4.1,
    },
    {
        id:'2',
        name:'Double Cheese Pizza',
        price: 199,
        cookTime:'40-50',
        origins: ['Italy'],
        
        imageUrl: 'assets/DoubleCheese.jpeg',
        tags: ['FastFood', 'Pizza','Snacks'],
        stars: 4.3,
    },
    {
        id:'3',
        name:'Chilliy Momos ',
        price: 99,
        cookTime:'30-40',
        origins: ['Korean'],
        
        imageUrl: 'assets/chillyMomos.jpeg',
        tags: ['FastFood', 'Momos','Snacks'],
        stars: 4.6,
    },
    {
        id:'4',
        name:'Pasta',
        price: 119,
        cookTime:'30-40',
        origins: ['Italy'],
        
        imageUrl: 'assets/pasta.jpeg',
        tags: ['FastFood', 'Pasta','Snacks'],
        stars: 4.7,
    },
    {
        id:'5',
        name:'Chinese Cuisine',
        price: 399,
        cookTime:'50-60',
        origins: ['Chinese'],
        
        imageUrl: 'assets/cuisine.jpeg',
        tags: ['FastFood', 'Noodles','manchurian','fried rice','Snacks'],
        stars: 4.5,
    },
    {
        id:'6',
        name:'Spring Rolls',
        price: 99,
        cookTime:'30-40',
        origins: ['Filipino'],
        
        imageUrl: 'assets/springRoll.jpeg',
        tags: ['FastFood', 'Pizza','Snacks'],
        stars: 4.1,
    },
    {
        id:'7',
        name:'Manchurian',
        price: 129,
        cookTime:'30-40',
        origins: ['China'],
        
        imageUrl: 'assets/manchurian.jpeg',
        tags: ['FastFood', 'manchurian','Snacks'],
        stars: 4.1,
    },
    {
        id:'8',
        name:'Masala Dosa',
        price: 129,
        cookTime:'30-40',
        origins: ['India'],
        
        imageUrl: 'assets/dosa.jpeg',
        tags: ['FastFood', 'Dosa','South indian','Snacks'],
        stars: 4.1,
    },
    {
        id:'9',
        name:'Bada Pav',
        price: 29,
        cookTime:'30-40',
        origins: ['India'],
        
        imageUrl: 'assets/bdapav.jpeg',
        tags: ['FastFood', 'Bda pav','Snacks'],
        stars: 4.1,
    },
    {
        id:'10',
        name:'Samosa',
        price: 30,
        cookTime:'30-40',
        origins: ['India'],
        
        imageUrl: 'assets/samosa.jpeg',
        tags: ['FastFood', 'samosa','Snacks'],
        stars: 4.1,
    }
]

export const sample_tags:Tag[]=[
    { name: 'All',count:10},
    { name: 'FastFood', count:10},
    { name: 'pizza', count:2},
    { name: 'pasta', count:1},
    { name:'momos', count:1},
    { name: 'chinese',count:4},
    { name: 'south indian',count:1},
    { name: 'indian', count:3},
    { name:'bdapav', count:1},
    { name:'samosa',count:1},
    { name:'dosa',count:1},
    { name:'manchurian', count:1}
]
