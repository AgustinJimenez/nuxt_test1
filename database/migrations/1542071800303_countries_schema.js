'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountriesSchema extends Schema 
{
  up() 
  {
    this.create('countries', (table) => 
    {
      table.increments()
      
      table.string('nombre', 80).unique()
      
      table.timestamps()
    })
  }

  down() 
  {
    this.drop('countries')
  }
}

module.exports = CountriesSchema
