HaloWorld = require '../app/src/HaloWorld'

describe "Hallo World! ", () ->
  it "should return Hello World", () ->
    haloworld = new HaloWorld();
    expect(haloworld.message()).toBe "HaloWorld";
