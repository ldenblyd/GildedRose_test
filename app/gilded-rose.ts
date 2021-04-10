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

enum itemsNames {
  AGED_BRIE = "Aged Brie",
  BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert",
  RAGNAROS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateBackStage(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updateRegular(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateConjured(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 2;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case itemsNames.AGED_BRIE:
          this.updateAgedBrie(this.items[i]);
          break;
        case itemsNames.BACKSTAGE_PASSES:
          this.updateBackStage(this.items[i]);
          break;
        case itemsNames.CONJURED:
          this.updateConjured(this.items[i]);
          break;
        case itemsNames.RAGNAROS:
          break;
        default:
          this.updateRegular(this.items[i]);
          break;
      }
    }

    return this.items;
  }


    // updateQuality() {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (
    //       this.items[i].name != itemsNames.AGED_BRIE &&
    //       this.items[i].name != itemsNames.BACKSTAGE_PASSES
    //     ) {
    //       if (this.items[i].quality > 0) {
    //         if (this.items[i].name != itemsNames.RAGNAROS) {
    //           this.items[i].quality = this.items[i].quality - 1;
    //         }
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;

    //         if (this.items[i].name == itemsNames.BACKSTAGE_PASSES) {
    //           if (this.items[i].sellIn < 11) {
    //             if (this.items[i].quality < 50) {
    //               this.items[i].quality = this.items[i].quality + 1;
    //             }
    //           }
    //           if (this.items[i].sellIn < 6) {
    //             if (this.items[i].quality < 50) {
    //               this.items[i].quality = this.items[i].quality + 1;
    //             }
    //           }
    //         }
    //       }
    //     }

    //     if (this.items[i].name != itemsNames.RAGNAROS) {
    //       this.items[i].sellIn = this.items[i].sellIn - 1;
    //     }

    //     if (this.items[i].sellIn < 0) {
    //       if (this.items[i].name != itemsNames.AGED_BRIE) {
    //         if (this.items[i].name != itemsNames.BACKSTAGE_PASSES) {
    //           if (this.items[i].quality > 0) {
    //             if (this.items[i].name != itemsNames.RAGNAROS) {
    //               this.items[i].quality = this.items[i].quality - 1;
    //             }
    //           }
    //         } else {
    //           this.items[i].quality =
    //             this.items[i].quality - this.items[i].quality;
    //         }
    //       } else {
    //         if (this.items[i].quality < 50) {
    //           this.items[i].quality = this.items[i].quality + 1;
    //         }
    //       }
    //     }
    //   }

    //   return this.items;
    // }
}
