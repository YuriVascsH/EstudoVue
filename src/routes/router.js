// Importação das novas páginas do site
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/";
import Meetups from "@/components/Meetup/Meetups.vue";
import CreateMeetup from "@/components/Meetup/CreateMeetup.vue";
import Signin from "@/components/User/Signin.vue";
import Signup from "@/components/User/Signup.vue";
import Profile from "@/components/User/Profile.vue";

Vue.use(VueRouter);

// Definindo as rotas do site
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups,
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: CreateMeetup,
    },
    {
      path: "/meetup/new",
      name: "CreateMeetup",
      component: CreateMeetup,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
  ],
});
