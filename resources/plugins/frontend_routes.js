export default ({ app }, inject) => 
{
    var system = (post_fix) => 'system/'+post_fix;
    
    var routes =
    {
        "system": system(''),
        "system.countries": system("countries")
    };

    inject('get_custom_route', (name) =>
    {
        return routes[name];
    });

}