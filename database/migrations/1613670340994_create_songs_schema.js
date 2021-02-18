'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateSongsSchema extends Schema {
  up () {
    this.create('create_songs', (table) => {
      table.increments()
      table.string('name')
      table
        .integer('album_id')
        .references('id')
        .inTable('create_albums')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('create_songs')
  }
}

module.exports = CreateSongsSchema
