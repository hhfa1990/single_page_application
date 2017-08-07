<template>
    <v-app standalone>
      <v-navigation-drawer persistent :mini-variant.sync="mini" v-model="drawer" overflow>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="http://68.media.tumblr.com/avatar_119356c63011_128.png" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ user_name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
              <li v-for="item in items">
                <router-link :to="item.path" class="list__tile" exact>
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </router-link>
              </li>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar fixed class="blue" dark>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <main>
        <v-container fluid>
          <slot></slot>
        </v-container>
      </main>
    </v-app>
</template>

<script>
    export default {
        props: ['title', 'user_name', 'items'],
        data () {
          return {
            drawer: true,
            mini: false,

          }
        },
    }
</script>
