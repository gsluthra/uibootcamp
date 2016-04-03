require('./libs/flickrapi.js')

api_key = '1234ABCD1234ABCD1234ABCD1234ABCD'

class FlickrGateway
  constructor: () ->
    @flickr = new Flickr {
      api_key: api_key,
      format: 'json'
    }

    getImages: (searchString, fn) ->
      @flickr.photos.search {
        text: searchString,
        extras: 'url_o'
      }, (error, response) ->
        fn response


instance = null

get = () ->
  instance ?= new FlickrGateway();

module.exports = get();