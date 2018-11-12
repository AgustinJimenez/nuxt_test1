<template>
  <v-app id="inspire">

    <!-- NAVIGATION-DRAWER-START -->
        <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app >
            <v-list dense>
                <!-- DRAWER-ITEM-SIMPLE-START -->
                    <v-list-tile>
                        <v-subheader>
                            {{ this.$lang("forms").toUpperCase() }}
                        </v-subheader>
                    </v-list-tile>

                    <v-list-tile :to="this.$get_custom_route('countries_index')">

                        <v-list-tile-action>
                            <v-icon>flag</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title> {{ this.$lang("contries") }} </v-list-tile-title>
                        </v-list-tile-content>
                            
                    </v-list-tile>
            
                <!-- DRAWER-ITEM-SIMPLE-END -->
            </v-list>
        </v-navigation-drawer>
    <!-- NAVIGATION-DRAWER-END -->

    <!-- TOOLBAR-START -->
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title>
            <nuxt-link v-html="title.content" :to="title.route" class="white--text"></nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- TOOLBAR-OPTIONS-START -->
            <v-toolbar-items>
                <v-btn flat v-if="user_signed_in"> 
                    <v-icon>account_box</v-icon> <div class="text-xs-center mt-3" v-html="current_user.email"></div>
                </v-btn>
                <v-menu :nudge-width="100">
                    <v-btn slot="activator" icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                
                    <v-list>
                        <v-list-tile to="/oto">
                            <v-list-tile-content>
                                <v-list-tile-title>ACCOUNT</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>account_circle</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                        <v-list-tile to="/oto">
                            <v-list-tile-content>
                                <v-list-tile-title>LOGOUT</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>power_settings_new</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                    </v-list>
                </v-menu>
            </v-toolbar-items>
        <!-- TOOLBAR-OPTIONS-END -->
      
    </v-toolbar>
    <!-- TOOLBAR-END -->

    <!-- CONTENT-START -->
    <v-content>
        <v-container>
            <v-layout wrap>

                <v-flex v-if="alert.is_visible">
                    <v-alert :value="true" :type="alert.type" transition="scale-transition">
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ alert.message }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>power_settings_new</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-alert>
                </v-flex>

                <v-flex xs12>
                    <nuxt/>
                </v-flex>
                
            </v-layout>
      </v-container>
    </v-content>
    <!-- CONTENT-END -->

  </v-app>
</template>

<script>
    
    export default 
    {
        mounted()
        {
            console.log( this );
            
            this.showSuccessMsg();
        },
        computed: 
        {
            alert(){return this.$store.state.alert;}
        },
        data: () => 
        ({
            title: { content: '<b>App Title</b>', route: '/' },
            user_signed_in: false,
            current_user: {},
            drawer: true
        }),
        methods: 
        {
            
            /*
            http: function(url, options)
            {
                this.$axios.request()
                .then( response => 
                {
                    console.log(response.data );
                })
                .catch(error => console.log(error));
                
            }
            */
        }

    }
</script>