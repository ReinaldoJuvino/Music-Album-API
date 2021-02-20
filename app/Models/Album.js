'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Album extends Model {

  //define que album tem muitos Songs
  songs(){
    return this.hasMany("App/Models/Song")
  }
  // Metodo responsavel por ocultar dados que estão no banco
  static get hidden(){
    return ["updated_at","created_at"]
  }

}

module.exports = Album
