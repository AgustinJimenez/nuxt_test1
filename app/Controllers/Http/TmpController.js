'use strict'

class TmpController 
{
    test({ request, response }) 
    {
        return {hello: 'there'};
    }
}

module.exports = TmpController
