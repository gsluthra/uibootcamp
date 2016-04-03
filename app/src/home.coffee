FlickrService  = require './FlickrService'

FlickrService.getImages 'sunrise', (images) ->
  console.log images