document.getElementById("startLesson").addEventListener("click", function() {
    var variableName = document.getElementById("variableInput").value.trim();
    if (variableName !== "") {
        document.getElementById("startPage").style.display = "none";
        document.getElementById("lesson").style.display = "block";
    } else {
        alert("Please input a variable!");
    }
});

document.getElementById("startExercise").addEventListener("click", function() {
    document.getElementById("lesson").style.display = "none";
    document.getElementById("exercise").style.display = "block";
});

document.getElementById("checkAnswer").addEventListener("click", function() {
    var userCode = document.getElementById("codeInput").value.trim();
    if (userCode === "var name = 'YourName';") {
        document.getElementById("feedback").textContent = "Correct!";
        setTimeout(function() {
            document.getElementById("exercise").style.display = "none";
            document.getElementById("lesson2").style.display = "block";
        }, 5000); // Switch after 5 seconds
    } else {
        document.getElementById("feedback").textContent = "Incorrect. Try again!";
    }
});

document.getElementById("startExercise2").addEventListener("click", function() {
    document.getElementById("lesson2").style.display = "none";
    document.getElementById("exercise2").style.display = "block";
});

document.getElementById("checkAnswer2").addEventListener("click", function() {
    var userCode = document.getElementById("codeInput2").value.trim();
    if (userCode === "number = 20;") {
        document.getElementById("feedback2").textContent = "Correct!";
        setTimeout(function() {
            document.getElementById("exercise2").style.display = "none";
            document.getElementById("congratulations").style.display = "block";
        }, 5000); // Switch after 5 seconds
    } else {
        document.getElementById("feedback2").textContent = "Incorrect. Try again!";
    }
});
