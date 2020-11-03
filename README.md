# Speed-Music-Machine-2020
## A forked version of an Meteor application for the Responsive Website Tutorial and Examples class (2nd. week) @ University of London. Runs on Meteor 1.10

## Very important:

        before running this app, run the following command:
        meteor npm install --save @babel/runtime
        
steps:
=
1.  `main.html`
    - edited the <title> 

2. `playground.js`
    - created a 10 new Maxim () objects.
    - loaded the song files with the newly created Maxim () object.
    - added the stopOrPlay <song-name> function for each play/stop button.
    - added the the playAll (), stopAll (), functions for the main button.
    - added the setSpeed ​​() function for the slider.
    - added template helpers for each song.
    - added template event functions for each play/stop button.

3. `main.js`
    - Set the song's names and values ​​to insert them into the collection. All values ​​were set to 0 except the one for the slide which is 50. The reason for setting at 0 is so that the sounds do not turn on all at once after a reset of the collection.

4. `playground.html`
    - added a row including a play/stop button for each song file.

5. `main.css`
    - I made all the necessary changes to make the application to my liking.

## Gallery
Below is a screenshot of my work on a full shrinked browser (mobile) view.
![Music machine running](/smm2020.png)

PS, Sarah Mattar, thank you for your GitHub help