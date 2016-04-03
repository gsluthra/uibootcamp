Image = require('./Image')
FlickrGateway = require('./FlickrGateway')

class FlickrService

  getImages: (searchString, callback) ->
    @callback = callback
    FlickrGateway.getImages searchString, @processResponse

  processResponse: (response) =>
    photos = response.photos.photo.map (photo) -> new Image(photo)
    @callback photos.filter (photo) -> photo.isValid()


instance = null
get = () ->
  instance ?= new FlickrService();

module.exports = get();