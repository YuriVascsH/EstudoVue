<template>
  <v-app>
    <!-- ========BARRA MENU======== -->
    <v-toolbar dark class="purple">
      <!-- Botão com o Método de ao clicar abrir o menu lateral  -->
      <!-- Adição da classe para esconder  -->
      <!-- o icone qunado a tela for igual ou maior em telas pequenas  -->
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <!-- Espaçamento do título -->
      <v-spacer></v-spacer>
      <!-- Lista de botões para colocar -->
      <!-- Adição da class para esconder esse botão quando apenas for rm telas extra pequenas. -->
      <v-toolabr-items class="hidden-xs-only">
        <!-- Botão superior no canto direito -->
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolabr-items>
    </v-toolbar>

    <!-- ========MENU LATERAL======== -->
    <!-- Quando você usa v-model="sideNav", está essencialmente criando uma relação bidirecional entre a variável sideNav no componente Vue.js e o estado de abertura do. 
    Isso significa que qualquer alteração na variável sideNav no 
    seu componente Vue.js será refletida no estado do drawer, e qualquer interação do usuário que altere o estado do drawer será refletida na variável sideNav. -->
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile class="menu" v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            <br />
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view> </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      // Criacao dos itens do menu para add em uma v-for
      menuItems: [
        { icon: "mdi-teamviewer", title: "View Meetups" },
        { icon: "mdi-account-location", title: "Organize Meetup" },
        { icon: "mdi-account", title: "Profile" },
        { icon: "mdi-arrow-right-bold", title: "Sign Up" },
        { icon: "mdi-arrow-right", title: "Sign in" },
      ],
    };
  },
};
</script>
