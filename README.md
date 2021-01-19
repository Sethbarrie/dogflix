# <img src="https://github.com/Sethbarrie/FullStackProject/blob/main/app/assets/images/dogflix-logo.png" align="center" width="400" height="220"></img>

 ### [Dogflix](https://sethb-dogflix.herokuapp.com/#/)
 
***

Dogflix is the best streaming site to leave on for your pets while you are at work. Intuitive UI and lots of content so your pet never gets bored.

Technologies used: 
![](https://img.shields.io/badge/Front_End-Javascript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Front_End-React.js-informational?style=flat&logo=react&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Back_End-Ruby_on_Rails-informational?style=flat&logo=ruby-on-rails&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/State_Management-redux-informational?style=flat&logo=redux&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Framework-React_Router-informational?style=flat&logo=react-router&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Styling-Sass-informational?style=flat&logo=sass&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/HTTP_Requests-Jquery-informational?style=flat&logo=jquery&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Data_Hosting-AWS-informational?style=flat&logo=amazon-aws&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Database-postgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Cloud_Deployment-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Version_Control-Git-informational?style=flat&logo=git&logoColor=white&color=2bbc8a)


# Steps to using Dogflix

### Step 1:

> Sign up.


<img src="https://github.com/Sethbarrie/FullStackProject/blob/main/app/assets/images/dogflix-demo1.jpg" align="left" width="1500" height="600" background='cover'></img>


That's it. You are all ready to start leaving your pets at home guilt-free.

***

## Features:
* Easy to sign-in/sign-up.
* Many categories to choose from.
* Movie previews by hovering.
* Turn off auto-play if that isn't your thing.
* Stream all in the browser, no need for other services.

### Users are able to scroll through movies without navigating from the page, for endless decisions.
***



<img src="https://github.com/Sethbarrie/FullStackProject/blob/main/app/assets/images/dogflix-demo2.jpg" align="center" width="1300" height="500" background='cover' padding-bottom='20' margin-bottom='20'></img>





### Users can mute previews with a click of a button.
***





<img src="https://github.com/Sethbarrie/FullStackProject/blob/main/app/assets/images/dogflix-demo3.jpg" align="center" width="1300" height="500" background='cover' padding-bottom='20' margin-bottom='20'></img>





### Disappearing header to give your pet Full Immersion.
***

```
#fullscreen-movie-player{
    width: 100%;
    height: auto;
    max-height: 100vh;
    background-size: cover;
    background-color: black;
}

#signedin-movie-player-navbar{
    transition: 1s;
    opacity: 0;
}

#signedin-movie-player-navbar:hover{
    transition: .5s;
    opacity: 1;
}
```
