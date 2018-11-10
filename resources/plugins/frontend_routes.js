
export default ({ app }, inject) => 
{
    inject('custom_routes', 
    {
        "backend":
        {
            
        },
        'frontend' : 
        {
            "paises_index": "/paises"
        }
    });
}