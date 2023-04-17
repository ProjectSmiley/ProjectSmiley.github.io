function checkAnswer(questionNumber) {
    var enteredAnswer = document.getElementById("answer" + questionNumber).value;
    var correctAnswer = "";
    var resultMessage = "";

    switch (questionNumber) {
        case 1:
            correctAnswer = "Goldie";
            break;
        case 2:
            correctAnswer = "Pussy";
            break;
        case 3:
            correctAnswer = "Djungelskog";
            break;
        default:
            break;
    }

    if (enteredAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "";

        // Hide the current question
        document.getElementById("question" + questionNumber).style.display = "none";

        if (questionNumber === 3) {
            // Display the completion message if this is the last question
            document.getElementById("completionMessage").style.display = "block";
            document.getElementById("finalButton").style.display = "block";
        } else {
            // Display the next question
            document.getElementById("question" + (questionNumber + 1)).style.display = "block";
        }
    } else {
        resultMessage = "Be better >:( </br> Try again!";
        document.getElementById("result").innerHTML = resultMessage;
    }
}

function showFinalMessage() {
    document.getElementById("completionMessage").style.display = "none";
    document.getElementById("finalButton").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
}
