export const state = () => 
({
   type: 'error',//success info warning error
   message: '',
   is_visible: false
});
 
 export const mutations = 
 {
   show_message( state, new_state ) 
   {
      state.type = (new_state.type!=undefined) ? new_state.type : 'info' ;
      state.message = new_state.message;
      state.is_visible = true;
   },
   clear(state) 
   {
      state.message = null;
      state.is_visible = false;
   }
 }