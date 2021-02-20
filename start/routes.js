'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Album =  use('App/Models/Album')
const Song = use('App/Models/Song')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('/albums', async () => await Album.query().orderBy('id','desc').fetch())

Route.get('/albums/:id', async ({params}) => {
  //with chama a função dentro do model
  return await Album.query().with("songs").where("id", params.id).first()
})

Route.post("/Albums", async ({request}) => {
  console.log(request)
  const {artist , album } = request.all()
  const newAlbum = new Album()

  newAlbum.name = album
  newAlbum.artist = artist

  await newAlbum.save()

  return newAlbum
})

Route.delete('/albums/:id', async ({params}) => {
  const album = await Album.find(params.id)
  return album.delete()
})

Route.post("/albums/:id/song/add", async ({request,params}) => {

  const song = new Song()

  song.album_id = params.id
  // o parametro vem do body
  song.name = request.input("song")

  await song.save()

  return song

})
