function jumblingWord() {
    let card =document.getElementById("card")
    let changeword = document.getElementById('changeword') // Changing word button
    let wordScramble = document.getElementById("wordScramble"); // The word to be displayed
    let checkword = document.getElementById("checkword"); // Checking word button
    let userWord = document.getElementById("userWord"); // User Entered Word or User Input field
    let words = ["car","hate","love","hope","hard","easy","coffee","tea","solve","jumble","scramble","card","score","word","chair","table", "game"] // Different words
    let correctWord; //temp variable that store the correct word which matches the userWord and words
    let timeleft = document.getElementById("timeleft") // Time left to be displayed
    let btns = document.getElementById("btns")
    let totalTime = 30;
    let initScore = 0;
    let score = document.getElementById("score")
    score.innerText = initScore

    
    /*
    trying something new but not working :((
    card.removeChild(btns)
    console.log(card);
    let changeWord = document.createElement("button")
    let checkWord = document.createElement("button")
    changeWord.setAttribute("class","changeword")
    changeWord.setAttribute("id","changeword")
    changeWord.setAttribute("value","Change Word")
    checkWord.setAttribute("class","changeword")
    checkWord.setAttribute("id","changeword")
    checkWord.setAttribute("value","Change Word")
    console.log(changeWord);
    console.log(checkWord);
*/

    //changeword.innerText = "Start Game" // When page load changeword button text will be Start Game 
    // but it will change on click of the changeword button

    changeword.addEventListener("click", wordjumble) // Adding Functionality to changeWord button
    userWord.addEventListener("keypress", (event)=>{
        if(event.key==="Enter"){
            event.preventDefault();
            checkingWord()
            userWord.value =''
        }
    }) // Adding Functionality of if user press enter on keyboard to check the correct word
    function wordjumble() { // Creating Function to change the words that to be displayed in WordScramble
        changeword.remove()
        // changeword.innerText = "Restart" // Changing the text of button to Change word
        let randomWords = words[Math.floor(Math.random() * words.length )]; // getting random words from the array words
        let randomWord = randomWords.split(""); // Converting randWords to a String Format as it is an array 
        correctWord = randomWords // Assigning Value that to be checked to userEntered 
        // let jumbleWord = randomWord[Math.floor(Math.random() * randomWord.length)]; idk :((
        let temp = [] // Declaring temp array to store temporary sorted array as alphabetical order 
                      // Because my jumbling logic is not working So added sorting :((
                      // As alphabetical order to Scramble the words
        let jumbleWord = [] // Declaring jumbleWord to store the temp variable to be displayed on wordScramble
        temp = randomWord.sort() // Sorting randomWord in alphabetical order
        jumbleWord = temp.join(" ") // Combining all the Sorted alphabets with help of .join() as temp is an array so convertibg to a string
        wordScramble.innerText = jumbleWord // Displaying the Scrambled letter which are sorted in wordScramble
        totalTime =30;
        score.innerText = initScore
        initScore +=5;
        console.log("original words : " + randomWords)
        console.log("changed words : " + jumbleWord)
        console.log("correct words : " + correctWord)

    }
    checkword.addEventListener("click", checkingWord)
    function checkingWord(){ // Adding Functionality to checkWord button
        //let scrambleWord = wordScramble.innerText.toLowerCase() // I dont know why i wrote this line :(( but explaination though Converting the wordScramble to lower case that to be mathched with userEntered
        let userEntered = userWord.value.toLowerCase() // Converting the userEntered to lower case that to be mathched with wordScramble
        if (correctWord === userEntered) { // Checking both are same or not
            alert("You guessed it right :))") // Alerting if userEntered and wordScramble are same
            wordjumble(); // Calling wordjumble to change the scrambleWord value to another random word
            userWord.value = ""; // Reseting value of userEneterd textbox i know it is not neccessary but it is what it is :((
            randomWords = ""; //reseting value of randomWords i know it is not neccessary but it is what it is :((
            totalTime =30
        }
        else {
            alert("Not Same")
        }
    }
    // console.log(timeleft);

    changeword.addEventListener("click", startTimer)
     function startTimer() {
        setInterval(gameTime, 1000)
        timeleft.innerText = "";
         function gameTime() {
            let seconds = "s"
            if (totalTime == 0) {
                alert("you loose the word was " +`${correctWord}`);
                // jumblingWord()
                initScore = 0
                score.innerText = initScore
                totalTime = 30            
            }
            else{
            timeleft.innerText = `${totalTime} ${seconds}`;
            totalTime--;
            }
        }
    }
}

