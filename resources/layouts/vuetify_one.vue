<template>
  <v-app id="inspire">

    <!-- NAVIGATION-DRAWER-START -->
        <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app >
            <v-list dense>
                <template v-for="item in items">
                    
                    <!-- DRAWER-ITEM-HEADING-START -->
                        <v-layout v-if="item.heading" :key="item.heading" row align-center>
                            <v-flex xs6>
                                <v-subheader v-if="item.heading">
                                    {{ item.heading }}
                                </v-subheader>
                            </v-flex>
                            <v-flex xs6 class="text-xs-center">
                                <a href="#!" class="body-2 black--text">EDIT</a>
                            </v-flex>
                        </v-layout>
                    <!-- DRAWER-ITEM-HEADING-END -->

                    <!-- DRAWER-ITEM-WITH-CHILD-START -->
                        <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                            <v-list-tile slot="activator">
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile v-for="(child, i) in item.children" :key="i">
                                <v-list-tile-action v-if="child.icon">
                                    <v-icon>{{ child.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ child.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list-group>
                    <!-- DRAWER-ITEM-WITH-CHILD-END -->

                    <!-- DRAWER-ITEM-SIMPLE-START -->

                        <v-list-tile v-else :key="item.text" :to="item.route">

                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.text">
                                </v-list-tile-title>
                            </v-list-tile-content>
                                
                        </v-list-tile>
              
                    <!-- DRAWER-ITEM-SIMPLE-END -->

                </template>
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
        data: () => 
        ({
            title: { content: '<b>App Title</b>', route: '/' },
            user_signed_in: false,
            current_user: {},
            dialog: false,
            drawer: null,
            items: 
            [
                { icon: 'flag', text: 'Paises', route: '/paises' },
                { icon: 'history', text: 'Frequently contacted' },
                { icon: 'content_copy', text: 'Duplicates' },
                { icon: 'keyboard_arrow_up', 'icon-alt': 'keyboard_arrow_down', text: 'Labels', model: true,
                    children: 
                    [
                        { icon: 'add', text: 'Create label' }
                    ]
                },
                { icon: 'keyboard_arrow_up', 'icon-alt': 'keyboard_arrow_down', text: 'More', model: false,
                    children: 
                    [
                        { text: 'Import' },
                        { text: 'Export' },
                        { text: 'Print' },
                        { text: 'Undo changes' },
                        { text: 'Other contacts' }
                    ]
                },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Send feedback' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },
                { icon: 'keyboard', text: 'Go to the old version' }
            ]
        }),
        methods:
        {
            
        },
        props: 
        {
            source: String
        }
        //,router
    }
</script>