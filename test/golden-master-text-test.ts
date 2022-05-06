import { Item, GildedRose } from '../app/gilded-rose';

//master test to ensure code not broken when refactoring
//test for all products
//edga cases

const gildedRose = new GildedRose([ 
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Aged Brie', 6, 5),
    new Item('Aged Brie', 4, 15),
    new Item('Aged Brie', 0, 35),
    new Item('Aged Brie', -2, 45),
    new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
    new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30),
    new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0),
    new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
    new Item('item1', 5, 25),
    new Item('item2', 4, 20),
    new Item('item3', -2, 15),
    new Item('item4', 0, 0)

]);

//     new Item Sulfuras, Hand of Ragnaros, 0, 80
//     new Item Aged Brie, 5, 6
//     new Item Aged Brie, 3, 16
// new Item Aged Brie, -1, 37
// new Item Aged Brie, -3, 47
// new Item Backstage passes to a TAFKAL80ETC concert, 19, 11
// new Item Backstage passes to a TAFKAL80ETC concert, 9, 22
// new Item Backstage passes to a TAFKAL80ETC concert, 4, 33
// new Item Backstage passes to a TAFKAL80ETC concert, 0, 33
// new Item Backstage passes to a TAFKAL80ETC concert, -1, 0
// new Item Backstage passes to a TAFKAL80ETC concert, -2, 0
// new Item item1, 4, 24
// new Item item2, 3, 19
// new Item item3, -3, 13
// new Item item4, -1, 0
// new Item item4, -1, 7
    
// const adjustedItems = gildedRose.updateQuality();
// console.log(adjustedItems);

 // const adjustedItems = gildedRose.updateQuality();
        // adjustedItems.forEach(item => console.log(`new Item ('${item.name}', ${item.sellIn}, ${item.quality}),`))