<template>
  <div class="ma-0 pa-0 grey darken-4 d-flex justify-space-between" style="min-width:100%; min-height:100%;">
        <div class="grey--text text--lighten-4">
            <h1 class="display-2 ml-12 pt-6 pb-6" style="">ChatBot
            <v-icon class="mb-2 grey--text text--lighten-4" x-large>{{ icon }}</v-icon></h1>    
        </div>
        <div class="mr-12 d-flex align-center">
            <v-btn
            class=" grey--text text--lighten-4" 
            outlined
            x-large 
            href="https://github.com/rogov-dvp/ChatBot-COSC-310"
            target="_blank"
            >Github</v-btn>    
        </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return{
        icon: 'question_answer', //spa, brightness_3, question_answer, opacity
      }
  }
}
</script>

<style>

</style>