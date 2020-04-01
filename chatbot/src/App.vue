<template>
  <v-app>
    <v-content>
      <!--content-->
      <v-row style="min-height: 100%;background-color:#ffffff ">
        <v-col cols="12" style = "background-image:/assets/mainchatbackground.jpg;">
          <ChatBot/>
        </v-col>
       <!-- <v-col cols="3" style="background-image: linear-gradient(#ffc966 , #ffedcc );">
          <RightSide/>
        </v-col> -->
      </v-row>
<!--  -->
      <Footer/>
    </v-content>
  </v-app>

</template>

<script>
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
//import RightSide from './components/RightSide';


export default {
  name: 'App',

  components: {
    ChatBot,
    Footer
  },

  data ()  {
    return {
      
    }
  },

};

</script>
