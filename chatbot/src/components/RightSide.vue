<template >
  <div id="mainDiv"> 
  <h3 style="align:center ; margin-left:30px;margin-top:19px ;font-family: 'Abril Fatface';font-size:35px">FAQ 
    <i class="material-icons mb2 orange--text text--darken-1" style="margin-left:5px" x-large >help</i></h3>

    <!--  A container the FAQ's --> 
    <v-container  style="position:relative; left:8px; top: 35px; border-radius: 10px; height:120px;">
          <!--  A row containing a button for first FAQ --> 
          <v-row>
            <div class = "suggestions" style = "border-radius: 10px; width: 330px;">
            <v-col cols="3">
              <button class = "button1"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">Waterfall</button>
            </v-col>
            </div>
          </v-row>

          <!--  A row containing a button for second FAQ --> 
          <v-row style ="margin-top:20px;">
            <div class ="suggestions" style="border-radius: 10px; width: 330px;">
            <v-col cols="3">
              <button class = "button2"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">VShaped</button>
            </v-col>
            </div>
          </v-row>
        </v-container>

  </div>
</template>

<script>
  export default {
    
  }      
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

  /*  On hover to suggestions div blocks change the background color to highlight */ 
  .suggestions:hover {
    background-color:#ffffff;
  }
</style>