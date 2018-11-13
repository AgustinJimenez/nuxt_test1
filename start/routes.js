'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
Route.any('*', 'NuxtController.render')

//Route.get('/countries', 'CountriesController.index');

Route.group(() => 
{

    Route.resource('/countries', 'Backend/CountriesController')/*.apiOnly()*/;

})
//.namespace('Backend')
//.formats(['json'], true)
//.middleware(['auth'])
.prefix('backend');

