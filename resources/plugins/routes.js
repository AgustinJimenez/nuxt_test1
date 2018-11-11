export default ({ app }, inject) => 
{
    var default_values =
    {
        route_type: 'frontend'
    },
    routes =
    {
        "backend":
        {
            
        },
        'frontend': 
        {
            "countries_index": "countries"
        }
    };

    inject('get_custom_route', (name, type) =>
    {
        type = (type!=undefined) ? type : default_values.route_type ;
        return routes[type][name];
    });

}