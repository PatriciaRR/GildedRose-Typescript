export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            if (this.items[i].name.includes('item') === true) {  
                if (this.items[i].quality > 0) {
                    if(this.items[i].sellIn > 0) { 
                        this.items[i].quality = this.items[i].quality - 1;
                    }  else {
                        this.items[i].quality = this.items[i].quality - 2;
                    }  
                }
            }    
            
            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].sellIn > 11) {
                    this.items[i].quality = this.items[i].quality + 1;
                }
                if (this.items[i].sellIn > 5 && this.items[i].sellIn < 11 ) {
                    this.items[i].quality = this.items[i].quality + 2;
                }
                if (this.items[i].sellIn < 6) {
                    this.items[i].quality = this.items[i].quality + 3;
                }
                if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                }
            } 

            if (this.items[i].name === 'Aged Brie') {
                if (this.items[i].sellIn < 0) {
                this.items[i].quality = this.items[i].quality + 2;
                } else {
                    this.items[i].quality = this.items[i].quality + 1;
                }
            } 

            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = 80;
            }

            if (this.items[i].name === 'Conjured Mana Cake') {
                this.items[0].quality = this.items[0].quality - 2;
            }
            
        }
        return this.items;
    }
}