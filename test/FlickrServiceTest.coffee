FlickrService = require('../app/src/FlickrService')

describe "Flickr test! ", () ->
  it "should return right sunrise images", () ->
    expect(new FlickrService().getImages('sunrise')).toBe('Hello')