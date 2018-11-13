export default function({ app }) 
{
  var error_msg = '';
  app.$axios.onError(error => 
  {
    error_msg = 'ERROR '+error.response.status;

    if( error.response.data!= undefined )
      error_msg += ': '+error.response.data;

    app.$toast.show( error_msg, {type: 'error'});
    console.log( error.response );
  });
}