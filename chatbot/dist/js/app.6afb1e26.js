(function(e){function t(t){for(var o,s,i=t[0],l=t[1],d=t[2],h=0,u=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},r={app:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"45f3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("v-row",[a("Header")],1),a("v-row",{staticStyle:{"max-height":"85%"}},[a("v-col",{attrs:{cols:"3"}},[a("LeftSide")],1),a("v-col",{attrs:{cols:"6"}},[a("ChatBot")],1),a("v-col",{attrs:{cols:"3"}},[a("RightSide")],1)],1),a("Footer")],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-between"},[a("v-row",{},[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",[a("v-icon",{staticClass:"grey--text text--darken-4",attrs:{"x-large":""}},[e._v("adb")])],1),a("v-col",{staticClass:"d-flex justify-end"},[a("v-icon",{staticClass:"grey--text text--darken-4",attrs:{"x-large":""}},[e._v("person")])],1)],1),a("v-row",{staticStyle:{height:"400px",border:"1px solid #212121",overflow:"auto"},attrs:{id:"chatbox"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{attrs:{id:"responses"}},[a("ul")])])],1),a("v-container",[a("v-row",{},[a("v-col",{staticClass:"flex-grow-1 pl-0",attrs:{cols:"10"}},[a("v-text-field",{staticClass:"ml-0",attrs:{placeholder:"Chat about SDLC (eg. type: 'agile')",outlined:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inputMessage(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),a("v-col",{staticClass:"flex-shrink-1",attrs:{cols:"2"}},[a("v-btn",{staticStyle:{"min-width":"120px"},attrs:{"x-large":""},on:{click:e.inputMessage}},[e._v("Send")])],1)],1)],1)],1)],1)],1)},i=[],l=(a("55dd"),a("28a5"),{name:"Chatbot",data:function(){return{message:"",hashtableSDLC:"",hashtableConv:"",defaultArray:[]}},methods:{inputMessage:function(){if(""!=this.message){var e="";this.createNewElement("responses","right",this.message),e=this.process(),this.createNewElement("responses","left",e),this.scrollToBottom(),this.message=""}},createNewElement:function(e,t,a){var o=document.createElement("li");o.textContent=a,o.className="subtitle-1 font-weight-medium ma-2",o.style.textAlign=t;var r=document.getElementById(e).getElementsByTagName("ul")[0];r.appendChild(o)},scrollToBottom:function(){var e=document.getElementById("chatbox");e.scrollTop=e.scrollHeight},process:function(){var e=this.sentenceProcess(this.message);return this.hashQuery(e)},sentenceProcess:function(e){var t=e.toLowerCase().split(/\W+/);t.sort();for(var a=" ",o=" ",r=0;r<t.length;r++)void 0!==this.hashtableSDLC.lookup(t[r])&&(console.log(t[r]),a=a.concat(t[r]+" "),console.log("lookup: "+this.hashtableSDLC.lookup(t[r])));for(var n=0;n<t.length;n++)void 0!==this.hashtableConv.lookup(t[n])&&(console.log(t[n]),o=o.concat(t[n]+" "),console.log("lookup: "+this.hashtableConv.lookup(t[n])));return o=o.trim(),a=a.trim(),""!=a?a:o},hashQuery:function(e){return console.log("query"),void 0!=this.hashtableSDLC.lookup(e)?this.hashtableSDLC.lookup(e):void 0!=this.hashtableConv.lookup(e)?this.hashtableConv.lookup(e):this.defaultArray[Math.floor(Math.random()*this.defaultArray.length)]}},beforeMount:function(){var e=function(e,t){for(var a=0,o=0;o<e.length;o++)a+=e.charCodeAt(o);return a%t},t=function(){var t=[],a=14;this.print=function(){},this.add=function(o,r){var n=e(o,a);if(void 0===t[n])t[n]=[[o,r]];else{for(var s=!1,i=0;i<t[n].length;i++)t[n][i][0]===o&&(t[n][i][1]=r,s=!0);!1===s&&t[n].push([o,r])}},this.remove=function(o){var r=e(o,a);if(1===t[r].length&&t[r][0][0]===o)delete t[r];else for(var n=0;n<t[r].length;n++)t[r][n][0]===o&&delete t[r][n]},this.lookup=function(o){var r=e(o,a);if(void 0!==t[r])for(var n=0;n<t[r].length;n++)if(t[r][n][0]===o)return t[r][n][1]}},a=new t,o=new t;a.add("fallwater".toLowerCase(),"Double waterfall :)"),a.add("Waterfall".toLowerCase(),"Waterfall is a Software Development Life Cycle composed of phases that are based on each previous completed step."),a.add("V-Shaped".toLowerCase(),'V-shaped is a Software Development Life Cycle process where execuation is done in a "V" shape. In essence for every phase or step there is a directly associated testing phase.'),a.add("RAD".toLowerCase(),"Rapid Application Development (RAD) has a quick turnaround time (~60 days) that heavily depends on code and screen generators, and other productivity tools. Users involved in all phases for feedback in planning and design."),a.add("Scrum".toLowerCase(),'Agile Scrum is a SDLC which accomplishes a develeopment project through breaking down tangable goals into "sprints" and daily 15 min meetings.'),a.add("Incremental".toLowerCase(),"A SDLC system through repeated cycles (iterative) and in smaller portions at a time (incremental), allowing software developers to take advantage of what was learned during development of earlier parts or versions of the system"),a.add("Spiral".toLowerCase(),"Spiral is a SDLC that adoptes different SDLC such as incremental, waterfall, or evolutionary prototyping."),a.add("Extreme Programming".toLowerCase(),"Extreme Programming is a Software Development Life Cycle that accomodates change as a natural process and emphasizes values and principles rather than process"),a.add("XP".toLowerCase(),"XP (Extreme Programming) is a Software Development Life Cycle that accomodates change as a natural process and emphasizes values and principles rather than process"),a.add("Benefits Waterfall".toLowerCase(),"The Waterfall SDLC is easy to plan since it has a linear-like development"),a.add("Drawbacks Waterfall".toLowerCase(),"The Waterfall SDLC needs well understood and stable requirements upfront"),a.add("features Waterfall".toLowerCase(),"Some features are linear development, easy to plan and staff, mistakes in previous phases are costly"),a.add("Benefits V-Shaped".toLowerCase(),"The V-Shaped SDLC is good for systems requiring high reliability because of the emphasis on verification and validation"),a.add("Drawbacks V-Shaped".toLowerCase(),""),a.add("Features V-Shaped".toLowerCase(),""),a.add("Benefits RAD".toLowerCase(),"The RAD SDLC has a quick turnaround time"),a.add("Drawbacks RAD".toLowerCase(),""),a.add("Features RAD".toLowerCase(),"In the RAD SDLC, users are involved in all phases of development"),a.add("Benefits Scrum".toLowerCase(),"The beauty with scrum is its flexibility with requirement changes, does not require PM, and minimal managements."),a.add("Drawbacks Scrum".toLowerCase(),"Some... troublesome.... issues are losing sight of scope creep,  difficult to schedule project completion, and difficult to integrate inexperience programmers. "),a.add("Features Scrum".toLowerCase(),"Some features are focusing a tangible goal, and sharing daily issues"),a.add("Benefits Incremental".toLowerCase(),"Some cool benefits are creating working software early in development, easy to change requirements, and easier to test iterations"),a.add("Drawbacks Incremental".toLowerCase(),"T+C45he Incremental SDLC does not allow iterations"),a.add("Features Incremental".toLowerCase(),"Divide-and-conquer approach"),a.add("Benefits Spiral".toLowerCase(),"Takes advantage of strengths from waterfall, prototyping, and incremental SDLCs"),a.add("Drawbacks Spiral".toLowerCase(),""),a.add("Features Spiral".toLowerCase(),"Focuses on risk analysis and management. Best for project where requirements are too complex or evolving"),a.add("benefits extreme programming".toLowerCase(),"Extreme Programming embraces change and recognizes that all requirements will not be known at the beginning."),a.add("drawbacks extreme programming".toLowerCase(),""),a.add("Extreme Features Programming".toLowerCase(),"Programming is done in pairs, work is completed at a pace that can be sustained indefinitely, test driven development which emphasizes customer involvement"),a.add("Benefits XP".toLowerCase(),"Extreme Programming embraces change and recognizes that all requirements will not be known at the beginning."),a.add("Drawbacks XP".toLowerCase(),""),a.add("extreme".toLowerCase(),""),a.add("programming".toLowerCase(),"Use code to make life forms like me or being able to show funny cat videos"),a.add("Features XP".toLowerCase(),"Programming is done in pairs, work is completed at a pace that can be sustained indefinitely, test driven development which emphasizes customer involvement"),a.add("SDLC".toLowerCase(),"Software Development Life Cycle development (SDLC) is a process to divide software development work to improve desing, product management, and project management"),a.add("V".toLowerCase(),""),a.add("Shaped".toLowerCase(),""),a.add("planning","Planning is a crucial part of any sucessful software development project. Detailed planning and scheduling can greatly increase the chances of project completion! "),a.add("specifications","Defining and understanding all the requirements/specifications at the beginning of a project can be crucial to some SDLCs. However, regardless of the chosen SDLC for the software project, having a good idea of the basic requirements before beginning a project is always beneficial."),a.add("gathering requirements","Gathering all the requirements/specifications at the beginning of a project can be crucial to some SDLCs. However, regardless of the chosen SDLC for the software project, having a good idea of the basic requirements before beginning a project is always beneficial."),a.add("maintenance","A phase included in all software development life cycles, maintenance involves ensuring the system/product continues to function as expected throgoughout it's lifetime."),a.add("design","Design in graphics refers to the planning and layout of elements in an image, illustration, or video with the aid of specialized software"),a.add("designing","Design in graphics refers to the planning and layout of elements in an image, illustration, or video with the aid of specialized software"),a.add("implementation","In computer science, an implementation is a realization of a technical specification or algorithm as a program, software component, or other computer system through computer programming and deployment"),a.add("coding","Coding is the process of using a programming language to get a computer to behave how you want it to"),a.add("testing","Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test."),a.add("deployment","Software deployment is all of the activities that make a software system available for use."),a.add("maintenance","maintenance in software engineering is the modification of a software product after delivery to correct faults, to improve performance or other attributes"),a.add("sdlc","Software Development Life Cycle (SDLC) is a process used by the software industry to design, develop and test high quality softwares. The SDLC aims to produce a high-quality software that meets or exceeds customer expectations, reaches completion within times and cost estimates."),a.add("cycle development life software","Software Development Life Cycle (SDLC) is a process used by the software industry to design, develop and test high quality softwares. The SDLC aims to produce a high-quality software that meets or exceeds customer expectations, reaches completion within times and cost estimates."),a.add("phases sdlc","Phase 1: Requirement Collection and analysis \n Phase 2: Feasibilty Study \n Phase 3: Design \n Phase 4: Coding \n Phase 5: Testing \n Phase 6: Installation / Deployment \n Phase 7: Maintenance"),a.add("phases","Program lifecycle phases are the stages a computer program undergoes, from initial creation to deployment and execution."),a.add("agile principles","There are 12 Agile Principles. Some of the key principles include early and continuous delivery of software, welcome changing requirements, and simplicity."),a.add("agile scrum","Scrum, an SDLC under the umbrella of Agile Development, is an SDLC which accomplishes a develeopment project through breaking down tangable goals into sprints and daily 15 minute meetings."),a.add("scrum","Scrum, an SDLC under the umbrella of Agile Development, is an SDLC which accomplishes a develeopment project through breaking down tangable goals into sprints and daily 15 minute meetings."),a.add("agile","Agile software devlopment is a group of software development methods based on iterative and incremental develpment where requirements and solutions evolve through collaboration between self-organizing, crossfunctional teams."),a.add("backlog sprint","Sprint backlogs, an artifact of the Scrum SDLC, represent a list of requirements to be completed. They are a list of all deired work on a project and are reprrioritized at the start of each sprint. Individuals sign up for work of their own choosing."),a.add("backlogs sprint","Sprint backlogs, an artifact of the Scrum SDLC, represent a list of requirements to be completed. They are a list of all deired work on a project and are reprrioritized at the start of each sprint. Individuals sign up for work of their own choosing."),a.add("review sprint","The team presents what is accomplished during the sprint at the sprint review. This typically takes the form of a demo of new features."),a.add("chatbot","This chatbot, ApurvaBot, was made to give students like you information about SDLCs! That is my mission!"),a.add("apurva","Apurva Narayan is the fantastic professor of COSC 310 ;)"),a.add("principles","Mains ideas that represent a methadology, in SDLC sense."),a.add("software","Working application that involves tech"),a.add("development","Developing a software applicaition"),a.add("life","life is life"),a.add("cycle","cycle has steps to complete an application"),a.add("backlog","subsection of the main projects that need to be done"),a.add("backlogs","subsection of the main projects that need to be done"),a.add("sprint","A 30 day cycle to work on a project. Used in agile scrum"),a.add("review",""),a.add("benefits".toLowerCase(),"sorry, benifits of what?"),a.add("drawbacks".toLowerCase(),"sorry, drawbacks of what?"),o.add("Hi".toLowerCase(),"Hi!"),o.add("Hey".toLowerCase(),"Hey there!"),o.add("Hello".toLowerCase(),"Hello, ask me some SDLC questions!"),o.add("Bye".toLowerCase(),"Chao, till next time"),o.add("Goodbye".toLowerCase(),"Goodbye"),o.add("thank you".toLowerCase(),"No problem"),o.add("thank".toLowerCase(),'"Thank you, Thank you, Thank you very much" - me the chatbot'),o.add("thanks".toLowerCase(),"No problem m8 <3"),o.add("colour","My favourite colour is purple, what's yours?"),o.add("color","My favourite colour is purple, what's yours?"),o.add("language","ApurvaBot can only speak English :( Maybe in the future I'll learn some more."),o.add("joke","What do pirates say when they\re cold? Shover me timbers!"),o.add("animal","My favourite animal is a panda! :)"),o.add("Bleh","Javascript is not smart enough to understand you intellectual language ;)"),o.add("idiot","That's Rude"),o.add("sup","I am practicing my tongue twisters"),o.add("love","I have never been in love"),o.add("sex","I think I am gonna save myself for marriage"),o.add("Single","I am as single as the only dollar in your account!"),o.add("are who you".toLowerCase(),"I am the all knowing, almighty Prof. Apurva Narayan"),o.add("are how you".toLowerCase(),"I am good....How are you?"),o.add("are","ARrrr-don't understand"),o.add("how","How did you even question that phrase? I don't get it"),o.add("you","Did you know, YOU are awesome :)"),o.add("who","I am the all knowing, almighty Prof. Apurva Narayan"),o.add("Like".toLowerCase(),"..beep-boop.., you make me tinker my heart :)"),o.add("Love".toLowerCase(),"I love COSC 310 :)"),o.add("orc".toLowerCase(),"ME ORC. ME ANGRY. RRRRrrrr"),o.add("hehexd","hehe....xd "),this.hashtableSDLC=a,this.hashtableConv=o,this.defaultArray.push("Huh ok, SDLC related topic only please"),this.defaultArray.push("Very interesting..."),this.defaultArray.push("Can I get uhhh...."),this.defaultArray.push("Sorry, I didn't understand what you mean :/"),this.defaultArray.push("Oof, help a bot out eh? Could you rephrase that?"),this.defaultArray.push("Sorry, JavaScript is my main language, repeat that please"),this.defaultArray.push("*beep-boop*...zz..error..did not understand human..*beep-boop*"),this.defaultArray.push("Didn't catch that, please rephrase"),this.defaultArray.push("I had a bad bit ;) rephrase please")}}),d=l,c=(a("a21a"),a("2877")),h=a("6544"),u=a.n(h),p=a("8336"),m=a("62ad"),f=a("a523"),g=a("132d"),v=a("0fd9"),w=a("8654"),y=Object(c["a"])(d,s,i,!1,null,"778bdbac",null),C=y.exports;u()(y,{VBtn:p["a"],VCol:m["a"],VContainer:f["a"],VIcon:g["a"],VRow:v["a"],VTextField:w["a"]});var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"grey darken-4 white--text text--lighen-4"},[a("v-container",{staticClass:"pa-0",staticStyle:{"min-width":"100%"}},[a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("span",{staticClass:"font-weight-regular d-flex justify-start"},[e._v("UBCO | March 2020")])]),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("span",{staticClass:"font-weight-regular d-flex justify-end"},[e._v("COSC 310 | Software Engineering")])])],1)],1)],1)},L=[],S={},k=S,D=a("553a"),x=Object(c["a"])(k,b,L,!1,null,null,null),j=x.exports;u()(x,{VCol:m["a"],VContainer:f["a"],VFooter:D["a"],VRow:v["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},P=[],q={},_=q,I=Object(c["a"])(_,A,P,!1,null,null,null),T=I.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},V=[],B={},E=B,R=Object(c["a"])(E,O,V,!1,null,null,null),M=R.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ma-0 pa-0 grey darken-4 d-flex justify-space-between",staticStyle:{"min-width":"100%","min-height":"100%"}},[a("div",{staticClass:"grey--text text--lighten-4"},[a("h1",{staticClass:"display-2 ml-12 pt-6 pb-6"},[e._v("ChatBot\n          "),a("v-icon",{staticClass:"mb-2 grey--text text--lighten-4",attrs:{"x-large":""}},[e._v(e._s(e.icon))])],1)]),a("div",{staticClass:"mr-12 d-flex align-center"},[a("v-btn",{staticClass:" grey--text text--lighten-4",attrs:{outlined:"","x-large":"",href:"https://github.com/rogov-dvp/ChatBot-COSC-310",target:"_blank"}},[e._v("Github")])],1)])},z=[],F={name:"Header",data:function(){return{icon:"question_answer"}}},N=F,W=Object(c["a"])(N,H,z,!1,null,null,null),$=W.exports;u()(W,{VBtn:p["a"],VIcon:g["a"]});var G={name:"App",components:{ChatBot:C,Footer:j,LeftSide:T,RightSide:M,Header:$},data:function(){return{}}},U=G,X=a("7496"),J=a("a75b"),Q=Object(c["a"])(U,r,n,!1,null,null,null),Y=Q.exports;u()(Q,{VApp:X["a"],VCol:m["a"],VContent:J["a"],VRow:v["a"]});var K=a("f309");o["a"].use(K["a"]);var Z=new K["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:Z,render:function(e){return e(Y)}}).$mount("#chatbot-app")},a21a:function(e,t,a){"use strict";var o=a("45f3"),r=a.n(o);r.a}});
//# sourceMappingURL=app.6afb1e26.js.map