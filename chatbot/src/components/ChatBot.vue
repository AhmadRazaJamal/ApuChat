<template id="mainBlock">
  <div style="margin:0px;" id='mainDiv'>
    <v-row class="">
      <v-col cols="9" >
            <div style="margin-top:5px;margin-left:25px;"><h1 dark style="margin=30px;font-family: 'Abril Fatface';font-size:40px">ApuChat</h1>
            <v-icon class="mb2 orange--text text--darken-1" style=" margin-top:-100px; margin-left:180px ;" x-large>{{ icon }}</v-icon></div>
            
            <!-- Start of About and Info drop down div blocks --> 
            <div style="position:fixed; top : 25px ; left : 850px">

            <!-- Start of dropdown div block holding About button -->
            <div class="Aboutdropdown">
            <button class="dropbtn" dark  style="display:inline;font-family: 'Abril Fatface';font-size:37px">ABOUT</button>
            <div class="dropdown-content">
            <p>
              This Chatbot mimics <b> Dr. Apurva Narayan [Professor at UBCO] </b> by providing users with information regarding 
              Software Development Life Cycles (SDLCs) based on the user’s queries. The user takes on 
              the role of a student in <b> COSC 310 [Software Engineering]</b> who is seeking to learn more about SDLCs. This Chatbot 
              was developed with the purpose of helping students review their knowledge of Software Engineering principles in an efficient manner.
            </p>
            </div>
            </div>
          
            <!-- End of dropdown div block holding About button -->
            
            <!-- Start of dropdown div block holding  Info button -->
            <div class="Infodropdown">
            <button id = "dropbtn2" class="material-icons mb2 orange--text text--darken-1" style="position:fixed; left : 990px ; top : 45px ;font-family: 'Abril Fatface';" >INFO</button>
            <div class="dropdown-content2">
             <p>
              Developed By: <br>
              Alex Rogov, Ahmad Raza Jamal, Florencia Chomski, Paul Zapote, Kshitij Suri
            </p>
            </div>
            </div>
            <!-- End of dropdown div block holding Info button -->

            </div>
            <!-- End of About and Info drop down div blocks --> 
        


        <!--Messenging bubbles and text appears in this row-->
          <v-row id="chatbox" style="height: 66vh;width: 72.9vw; overflow: auto; margin-top: 20px;">
            <v-col cols="12">
              <div id="responses">
                    <ul>
                        <!--Chatbot and users outputs are render into here-->
                    </ul>
              </div>
            </v-col>
          </v-row>

        <!--Where user inputs text-->
         <v-container style=" width: 120%; position:relative; left:0vw; top:70vh; border-radius:10px; ">
          <v-row class="">
            <v-col cols="10" class="flex-grow-1 pl-0" color="white" > <!--label="Chat"-->
              <v-text-field
              id="chat_textfield"
              class="ml-8 black--text"
              color="black"
              placeholder="Chat about SDLC ( eg. type: 'agile' )"
              style="font-size: 20px ; border-style: none; color: black ;font-family: 'Merriweather, bold';  border-bottom: none!important;box-shadow: none!important;"
              v-model="message"  
              v-on:keyup.enter="inputMessage"
              ></v-text-field> 
            </v-col>
            <v-col cols="2" class="flex-shrink-1">
              <button  
              v-on:click="inputMessage"
              style="min-width:120px ; border-style : none none solid none ;border-radius:3px; font-family: 'Abril Fatface'; font-size : 24px ; color: black ; margin-left:0px ; margin-top: 10px; font-family=bold ; background-color: transparent ;" 
              >SEND</button>
            </v-col>
          </v-row>
        </v-container>
        <!--  End of user input -->

     </v-col>
  </v-row>

  <!-- Start of div block 2 for FAQ section --> 
  <div id="mainDiv2" > 
    <h3 style="align:center ; margin-left:30px;margin-top:28px ;font-family: 'Abril Fatface';font-size:35px">FAQ 
    <i class="material-icons mb2 orange--text text--darken-1" style="margin-left:5px" x-large >help</i></h3>

    <!--  A container the FAQ's --> 
    <v-container  style="position:relative; left:8px; top: 35px; border-radius: 10px; height:120px;">
          <!--  A row containing a button for first FAQ --> 
          <v-row>
            <div class = "suggestions" style = "border-radius: 10px; width: 325px;" v-on:click="insertFAQ" >
            <v-col cols="3">
              <button id = "waterfall" v-on:click="insertFAQ"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">Waterfall</button>
            </v-col>
            </div>
          </v-row>

          <!--  A row containing a button for second FAQ --> 
          <v-row style ="margin-top:20px;" >
            <div class ="suggestions" style="border-radius: 10px; width: 325px;" v-on:click="insertFAQ">
            <v-col cols="3">
              <button id = "vshaped" v-on:click="insertFAQ"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">SDLC</button>
            </v-col>
            </div>
          </v-row>

          <v-row style ="margin-top:20px;">
            <div class ="suggestions" style="border-radius: 10px; width: 325px;" v-on:click="insertFAQ">
            <v-col cols="3">
              <button id = "agile" v-on:click="insertFAQ" 
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">Agile</button>
            </v-col>
            </div>
          </v-row>

          <v-row style ="margin-top:20px;">
            <div class ="suggestions" style="border-radius: 10px; width: 325px;" v-on:click="insertFAQ">
            <v-col cols="3">
              <button id = "scrum"  v-on:click="insertFAQ"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">Scrum</button>
            </v-col>
            </div>
          </v-row>

          <v-row style ="margin-top:20px;">
            <div class ="suggestions" style="border-radius: 10px; width: 325px;" v-on:click="insertFAQ">
            <v-col cols="3">
              <button id = "xp"  v-on:click="insertFAQ"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">XP</button>
            </v-col>
            </div>
          </v-row>

          <v-row style ="margin-top:20px;">
            <div class ="suggestions" style="border-radius: 10px; width: 325px;" v-on:click="insertFAQ">
            <v-col cols="3">
              <button id = "rad"  v-on:click="insertFAQ"
              style= "color: black; margin-left:10px; margin-top: 5px; font-family: 'Merriweather', bold; border:0 none; background-color: transparent;">RAD</button>
            </v-col>
            </div>
          </v-row>
        </v-container>
    </div>
    <!-- End of div block 2 for FAQ section -->

  </div>
</template>


<script>
/* eslint-disable */
import axios from 'axios';

//DialogFlow API
const token = '9a9c43e5c3c54464ae93aeab97a93c22'    //Client Access token

//Google Search API (Might use later -alex)
const apiKey = "AIzaSyBxcOy7bBJkgC9QsRXMmR47l5DR90cG9uA"; //API key
const cx = "008015703887553875666:rvmi3t7qwnf" //Google Engine ID

  export default {
    name: 'Chatbot',
    data() {
      return {
        message: '',          //User's message
      }   //        icon: 'question_answer', //spa, brightness_3, question_answer, opacity

    },
    methods: {
        
    inputMessage: function() {
        if(this.message != '') {
            let chatBotResponse = '';
            //Add user input
            this.createNewElement('responses','right','60%', this.message);
            
            //Processing user's message --> chatbot response
            this.DialogFlowAPI(this.message).then(response =>  {
              chatBotResponse = response;
              //Create new chatbot response
              this.createNewElement('responses','left', '66%' , chatBotResponse);
              
              //scroll to bottom if needed
              this.scrollToBottom(); 
            
            });



            this.message = '';
        }
    },

    //Create a new element into DOM 
    createNewElement: function(tagID,align,width, msg) {    //Creates new <li> element with appropriate class and styling
            let newLi = document.createElement('li');
            newLi.textContent = msg;
            newLi.style.textAlign = align;
            newLi.style.borderRadius = "10px" ;
            newLi.style.padding="14px"; 
            newLi.style.margin="10px 0";
            //newLi.style.left="310px";
            newLi.style.zIndex = "2";
            newLi.style.boxShadow = "0 0 8rem 0 rgba(black, 0.1),0rem 2rem 4rem -3rem rgba(black, 0.5);" ; 
            newLi.style.maxWidth = width;
            newLi.style.fontSize = "16px";
            newLi.style.fontFamily = "Merriweather, bold"

             if(align == 'right'){ // If its the user chat then chang chat box color to this
            newLi.style.backgroundColor = "#999999" ; 
            newLi.style.position = "relative";
            newLi.style.border = "3px solid white";
            newLi.style.left="30.9%"

            if(screen.width > 1450){
            newLi.style.left="22.9%"
            }

            }

            if(align == 'left'){ // If its the bot chat then chang chat box color to this
            newLi.style.backgroundColor = "#cccccc" ; 
            newLi.style.border = "3px solid white";
            newLi.style.bottom= "50px" ; 
            }

            let dest = document.getElementById(tagID).getElementsByTagName('ul')[0];
            dest.appendChild(newLi);

            if(align == "left"){ // Code that adds the image for bot chat and aligns it 
            var img_elem = document.createElement("img");
            img_elem.setAttribute("src", "https://pbs.twimg.com/profile_images/775736572822052864/t_zQN3e3_400x400.jpg");
            img_elem.setAttribute("border-radius","50%");
            img_elem.setAttribute("height", "65px");
            img_elem.setAttribute("width", "65px");
            img_elem.style.borderRadius= "50%" ; 
            img_elem.style.position="relative";
            img_elem.style.top="55px";
            img_elem.style.left="-48px";
            newLi.style.position= "relative";
            newLi.style.left="80px";
            img_elem.style.border="5px solid orange"
            dest.appendChild(img_elem);
            dest.appendChild(newLi);
            }

            if(align == "right"){ // Code that adds the image for user chat and aligns it 
            var img_elem = document.createElement("img");
            img_elem.setAttribute("src", "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png");
            img_elem.setAttribute("border-radius","50%");
            img_elem.setAttribute("height", "60px");
            img_elem.setAttribute("width", "60px");
            img_elem.style.borderRadius= "50%" ; 
            img_elem.style.position="relative";
            img_elem.style.top="-50px";
            img_elem.style.border="4px solid black"
            newLi.style.position= "relative";
            img_elem.style.left="915px";
            dest.appendChild(newLi);
            dest.appendChild(img_elem);}
    },

    insertFAQ: function(){ // Function that inserts FAQ
      var button = event.target ; 
      this.message = button.textContent ; 
    },

    scrollToBottom: function() {      //scroll div to bottom
      let chatbox = document.getElementById('chatbox');
      chatbox.scrollTop = chatbox.scrollHeight;
    },
    DialogFlowAPI: function(queryUser) {
          return axios.get(
              `https://api.dialogflow.com/v1/query?v=20150910&lang=en&sessionId=12346&query=${queryUser}`,   //API URL
              {
                headers: {
                  Authorization: `Bearer ${token}`      //Public Access Token
                }
              }
          )
          .then(response => {
          // handle success
          let snippet = response.data.result.fulfillment.speech;      //Get's the response based on user's message
          console.log('snippet: ' + snippet);
          return snippet;               
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      });
    }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sen&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab|Sen&display=swap');
@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

ul {
  list-style: none;
}


::placeholder{
  color: white;
}

#mainDiv{
    background-position: center;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100%;
    width:77%;
}

#mainDiv2{
    position:fixed;
    top:0px;
    left:1100px;
    background-image:  linear-gradient(#ffc966 , #ffedcc );
    height:100%;
    width:31%;
}

#chatbox{
  position: absolute;
  z-index: -4;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 100px;
  font-family: 'Merriweather', bold;
  padding: 30px;
  background-color: #f9f9f9;
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 999 ;
}

.dropdown-content2 {
  display: none;
  position: absolute;
  right: -40px;
  font-family: 'Merriweather', bold;
  padding: 30px;
  background-color: #f9f9f9;
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 999 ;
}

.Infodropdown:hover .dropdown-content2 {
  display: block;
}

.Aboutdropdown:hover .dropdown-content {
  display: block;
}

/*  On hover to suggestions div blocks change the background color to highlight */ 
.suggestions:hover {
  background-color:#ffffff;
}

</style>
