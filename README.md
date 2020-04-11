
# ChatBot 

Chatbot: https://chatbot-310-app.firebaseapp.com/

Topic: **Software Development Life Cycle**

Language: ``` JavaScript ```

### Why JavaScript 
JavaScript has enough to tools to build the same chatbot that we would have made with a programming langauge but JS also has other useful features. For example, it allowed us to host our website and were able to develop an aesthetic UI. Furthermore, it will be easy to implement an API later in the project development to boost our word matching and responses.

### Input Examples
Try to ask these statements to our [chatbot](https://chatbot-310-app.firebaseapp.com/)

```
What is agile?
```
```
What are some incremental drawbacks?
```
```
Are there any benefits to Extreme Programming?
```


## Code | Frontend

The website is a single page application developed in Vue.js with a Vuetify(UI) component gramework. This makes it easy to implmenent stylish Material Design based components.

## API | DialogFlow  

### Integration

The chatbot uses a RESTful API and calls a GET method to DialogFlow via axios. The API call occurs after the user has placed an input. The first step of the API call is sending the user's string input as the query (request). DialogFlow then processes the query and returns a string (response). The response is then sent as the chatbot's response.

### Features

#### Typo 

DialogFlow has built in typo checker. If there are large typos with words that are not key words, DialogFlow still understands what is being requested of it. However, it can only handle small typos's such as capitalizations or adding an 's' at the end of key words.

![Example of Typo](https://github.com/AhmadRazaJamal/ApuChat-ChatBot-/blob/master/README_Images/Typo.png)

#### Small Talk

We implemented the small talk plugin within DialogFlow. This covers phrases such as greetings, goodbyes, thank you, how's your day, and other smaller one phrase conversations. This plugin makes the chatbot seem more natural with small talk.

![Example of Small Talk](https://github.com/AhmadRazaJamal/ApuChat-ChatBot-/blob/master/README_Images/Small_talk.png)


#### Conversations life length increase

DialogFLow allows for multiple conversation life steps. A step is when a chatbot and the user both say a phrase (eg) question and answer). Multiple life steps means that DialogFlow can continue a conversation of the same topic based on the previous conversation steps. This improves conversation flow and changes the conversation from an interview conversation to a dialogue.

![Example of two step-life conversation](https://github.com/AhmadRazaJamal/ApuChat-ChatBot-/blob/master/README_Images/Convo_length_scrum.png)


#### Multiple variations of user input structure.

Another feature of DialogFlow is allowing the user to use synonyms for key words. For example, "extreme programming" may be written and most likely be written as "xp". This synonym system allows DialogFlow to understand what the user is saying. The result increases the way a user may type their input and thus improves our chatbot. 

![Example of synonym use](https://github.com/AhmadRazaJamal/ApuChat-ChatBot-/blob/master/README_Images/synonyms.png)


### Hosting

Google Firebase is currently hosting our [site](https://chatbot-310-app.firebaseapp.com/).

As well, since we already have a project with Firebase, it allowed us to easily connect the same project with DialogFlow since they are both maintained by Google.

## About

Devleoped By: *Ahmad Raza Jamal, Alex Rogov, Florencia Chomski, Paul Zapote, Kshitij Suri*

University of British Columbia | Software Engineering Course | 2020 Spring





