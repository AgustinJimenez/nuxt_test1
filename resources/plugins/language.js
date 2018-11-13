export default ({ app }, inject) => 
{
    inject('lang', (key, lang) =>
    {
        var default_values =
        {
            lang: 'en'
        }, 
        languages =
        {
            "example":
                { "en": "", "es": ""},

            "welcome":
                { "en": "welcome", "es": "Bienvenido"},

            "save":
                { "en": "save", "es": "guardar"},

            "cancel":
                { "en": "cancel", "es": "cancelar"},

            "contries":
                { "en": "countries", "es": "paises" },

            "contry":
                { "en": "country", "es": "pais" },

            "contry_create": 
                { "en": "create contry", "es": "Crear Pais" },

            "contry_form": 
                { "en": "country form", "es": "Formulario de Pais" },

            "contry_form_saved": 
                { "en": "country saved correctly.", "es": "Pais guardado correctamente" },

            "name":
                { "en": "name", "es": "nombre"},

            "forms":
                { "en": "forms", "es": "formularios"},

            "form_name_is_required":
                { "en": "The name is required.", "es": "El nombre es requerido"}
            
        };
        lang = (lang!=undefined) ? lang : default_values.lang ;
        return languages[ key ][ lang ];
    });
}