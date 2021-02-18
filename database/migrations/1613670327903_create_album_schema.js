'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAlbumSchema extends Schema {
  up () {
    this.create('create_albums', (table) => {
      table.increments()
      table.string('name')
      table.string('artist')
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('create_albums')
  }
}

module.exports = CreateAlbumSchema
