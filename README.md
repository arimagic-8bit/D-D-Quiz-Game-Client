# D&D 5ed Quiz Game!

![](https://www.tribality.com/wp-content/uploads/2014/10/cover-dnd-e1501645849868.jpg)



## What is it about?

Hello fellow adventurer! In this game you will know if you are an expert of the most famous role-playing game in the world (only 5ed) answering to some challenging questions. Are you ready? Roll the dice!



You can play the game here: https://dnd-quiz-game.herokuapp.com/



#### Backlog

- User can select a language to play (ENG/SPA).
- Add a ranking to see who has more points.
- User can create their own quizzes.
- Users can play other users' quizzes.

### Client/Front-end

------

#### React Router Routes 

| Path  |  Component   |            Component Description            |
| :---: | :----------: | :-----------------------------------------: |
|   /   | SplashScreen |     Shows main screen when users enter.     |
| /game |  GameScreen  |              Shows game screen              |
| /end  |  EndScreen   | Shows the end of the quiz with final points |

### Server/Back-end  

------

##### Models

Question model

`{`

`question: String,`

`picture: String,`

`answers:[String],`

`correctAnswer:Number,`

`points:Number`

`}`

#### API Endpoints (backend routes)

| HTTP Method | URL  | Success Status | Error Status |          Description           |
| :---------: | :--: | :------------: | :----------: | :----------------------------: |
|     GET     | /api |      200       |     500      | Gets all questions and details |

### Links

------

[Back-end:](https://github.com/arimagic-8bit/D-D-Quiz-Game-Server) 

[Front-end](https://github.com/arimagic-8bit/D-D-Quiz-Game-Client)