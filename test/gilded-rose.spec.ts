import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("test empty items", function () {
    const gildedRose = new GildedRose();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });

  it("test regular item", function () {
    const gildedRose = new GildedRose([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(9);
  });

  it("test obsolete item", function () {
    const gildedRose = new GildedRose([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(8);
  });

  it("test degraded item", function () {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  it('test "Aged Brie" item', function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(2);
  });

  it('test top quality "Aged Brie" item', function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });

  it('test "Sulfuras, Hand of Ragnaros" item', function () {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 1, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(80);
  });

  it('test "Backstage passes" item (+10 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(11);
  });

  it('test "Backstage passes" item (-10 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(12);
  });

  it('test "Backstage passes" item (-5 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(13);
  });

  it('test obsolete "Backstage passes" item', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  it('test top quality "Backstage passes" item (+10 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(50);
  });

  it('test top quality "Backstage passes" item (-10 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });

  it('test top quality "Backstage passes" item (-5 day left)', function () {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });

  it('test "Conjured" item', function () {
    const gildedRose = new GildedRose([new Item("Conjured", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(47);
  });

  it('test obsolete "Conjured" item', function () {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(46);
  });


  it('test degraded "Conjured" item', function () {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });

  //   console.log(items[0]);
});
