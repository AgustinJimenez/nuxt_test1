<template>
  <v-app id="inspire">

    <!-- NAVIGATION-DRAWER-START -->
        <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app >
            <v-list dense>
                <!-- DRAWER-ITEM-SIMPLE-START -->
                    <v-list-tile>
                        <v-subheader>
                            FORMULARIOS
                        </v-subheader>
                    </v-list-tile>

                    <v-list-tile :to="this.$custom_routes.frontend['paises_index']">

                        <v-list-tile-action>
                            <v-icon>flag</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title> Paises </v-list-tile-title>
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
                        <v-list-tile @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>ACCOUNT</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>account_circle</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile @click="">
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
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <nuxt/>
        </v-layout>
      </v-container>
    </v-content>
    <!-- CONTENT-END -->

  </v-app>
</template>

<script>
    
    export default 
    {
        computed:
        {
            routes: () => this.$custom_routes
        },
        data: () => 
        ({
            title: { content: '<b>App Title</b>', route: '/' },
            user_signed_in: false,
            current_user: {},
            drawer: true
        })
        //,router
    }
</script>