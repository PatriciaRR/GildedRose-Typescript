import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('1) should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it ('2) should decrease quality by one for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    })

    it ('3)should not return a negative quality for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 3, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    })

    it ('4) should decrease sellIn by one for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    })

    it ('5) should allow sellIn to return negative for ITEMS products ', function () {
        const gildedRose = new GildedRose([new Item('item', 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
    })

    it ('6) should allow quality to increase by one for BACKSTAGE passes when SellIn is over 10 days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    })

    it ('7) should allow quality to increase by two for BACKSTAGE passes when SellIn is 10 or less days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    })


    it ('8) should allow quality to increase by three for BACKSTAGE passes when SellIn is 5 or less days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    })

    it('9) should increase the quality of Aged Brie by one as the sellIn days decreas', function () {
        const gildedRose = new GildedRose ([new Item('Aged Brie', 6, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    })

    it('10) should increase the quality of Aged Brie by two when the SellIn days have gone (sellIn < 0)', function () {
         const gildedRose = new GildedRose([new Item('Aged Brie', -2, 10)]);
         const items = gildedRose.updateQuality();
         expect(items[0].quality).to.equal(12);
    })

    it('11) should maintain quality and sellIn values for "Sulfuras, Hand of Ragnaros" products', function () {
        const gildedRose = new GildedRose ([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    })

    it ('12) should return quality 0 for BACKSTAGE passes once sellIn date passes (<0)', function() {
        const gildedRose = new GildedRose ([new Item('Backstage passes to a TAFKAL80ETC concert', -2, 7)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    })

    it ('13) should return quality decreasing by two after the sellIn date has passed (<0)', function () {
        const gildedRose = new GildedRose([new Item('item', -2, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    })

    it('14) should decrease quality by two when the product is Conjured Mana Cake', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
        
    })

    it('15) should decrease by one the sellIn value when the product is conjured mana cake', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    })

    it('should pass the golden master test', function() {
        //arrange
        const inputData = [ 
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
            new Item('item4', 0, 0),
            new Item('item4', 0, 9)
        ];

        const gildedRose = new GildedRose(inputData)
 
        const expectedoutputData = [
            new Item ('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item ('Aged Brie', 5, 6),
            new Item ('Aged Brie', 3, 16),
            new Item ('Aged Brie', -1, 37),
            new Item ('Aged Brie', -3, 47),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 19, 11),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 9, 22),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 4, 33),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 33),
            new Item ('Backstage passes to a TAFKAL80ETC concert', -1, 0),
            new Item ('Backstage passes to a TAFKAL80ETC concert', -2, 0),
            new Item ('item1', 4, 24),
            new Item ('item2', 3, 19),
            new Item ('item3', -3, 13),
            new Item ('item4', -1, 0),
            new Item ('item4', -1, 7)
        ]

        //act
        const outputData = gildedRose.updateQuality()

        //assert
        expect(outputData).to.eql(expectedoutputData);
        
    });


});
