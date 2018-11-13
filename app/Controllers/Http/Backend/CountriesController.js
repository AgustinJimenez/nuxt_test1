'use strict'

class CountriesController 
{   
    index({ request, response }) 
    {
        return {hello:'here index countries'};
        return request;
    }

    show({ request, response }) 
    {
        return {hello:'here show countries'};
        return request;
    }

    tmp({ request, response }) 
    {
        return {hello:'here tmp countries'};
        return request;
    }

    store({ request, response }) 
    {
        return {hello:'there'};
        return request;
    }
}

module.exports = CountriesController