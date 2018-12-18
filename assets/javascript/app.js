var questions = [
   { 
        question: "His rookie season was in 1989 and his record as a starter was 1-15. this hall of famer wore #8 for Dallas for a total of 12 seasons. Who is he?",
        answers:["Troy Aikman", "Tony Romo", "Roger Staubach", "Danny White"],
        correct: ["0","Troy Aikman"]
    },
    {
        question: "The Dallas Cowboys do not play in Dallas, but in which Texas city?",
        answers: ["Irving", "Arlington", "Fort Worth", "Plano"],
        correct: ["1","Arlington"]
    },
    {
        question: "What year did the Dallas Cowboys join the NFL?",
        answers: ["1956", "1954", "1962", "1960"],
        correct: ["3","1960"]
    },
    {
        question: "What is the Cowboys logo on their helmets?",
        answers: ["Horse", "Arrowhead", "Star", "D"],
        correct: ["2","Star"]
    },
    {
        question: "The Cowboys won three Super Bowls in a four-year span during the early 1990s. Two of these three Super Bowl wins were against the same team. Who was this team?",
        answers: ["Pittsburgh Steelers", "Miami Dolphins", "Baltimore Colts", "Buffalo Bills"],
        correct: ["3", "Buffalo Bills"]
    },
    {
        question: " In 2007, which Dallas Cowboy WR was inducted into the Pro Football Hall of Fame.",
        answers: ["Deion Sanders", "Kevin Williams", "Emmitt Smith", "Michael Irvin"],
        correct: ["3", "Michael Irvin"]
    },
    {
        question: " For the first 40 years of the franchise, how many owners did the Cowboys have?",
        answers: ["2", "1", "4", "5"],
        correct: ["2", "4"]
    },
    {
        question: " What is the primary color of the Cowboys home jersey?",
        answers: ["White", "Blue", "Grey", "Black"],
        correct: ["0", "White"]
    },
    {
        question: "The Cowboys won their first Division title in what year?",
        answers: ["1960", "1954", "1963", "1966"],
        correct: ["3", "1966"]
    },
    {
        question: "Which one of these former players did not win the Heisman Trophy?",
        answers: ["Roger Staubach","Troy Aikman", "Ty Detmer", "Tony Dorsett"],
        correct: ["1", "Troy Aikman"]
    },
    {
        question: "The Cowboys cornerback during the 1990s, Deion Sanders, was nicknamed Primetime. Which number did Primetime wear during his time in Dallas?",
        answers: ["24", "21", "23", "22"],
        correct: ["1", "21"]
    },
    {
        question: "How many times have the Cowboys won a Super Bowl Championship?",
        answers: ["3", "5", "6", "4"],
        correct: ["1", "5"]
    }
];

var correct = 0;
var wrong = 0;
var didNotAnswer = 0;
var numbers=[];
var time = 10;
var picked = {};
var userGuess ="";
var intervalId;
var useThisNumber;
var number;

$("#reset").hide();
$("#answers0").hide();
$("#answers1").hide();
$("#answers2").hide();
$("#answers3").hide();
$("#question").hide();
$("#time").hide();




$("#start").on("click",function(){
    $("#start").hide();
    generator();

});

function generator(){ 
    number = Math.floor(Math.random()*questions.length);
    pick()
 }

var pick = function (){
    if (numbers.length === questions.length){
        gameover();
    }else if (numbers.indexOf(number) != -1){
        generator()
    }else{
        useThisNumber = number;
        numbers.push(useThisNumber);
        picked = questions[useThisNumber];
        slide()
    } 
    
}


    


var slide = function (){
    timer();
    $("#reset").hide();
    $("#answers0").show();
    $("#answers1").show();
    $("#answers2").show();
    $("#answers3").show();
    $("#question").show();
    $("#time").show();
    $("#time").html("<h1>" + time + "</h1>");

    $("#question").html(picked.question);
    
    $("#answers0").addClass("btn btn-large mx-auto");
    $("#answers0").text(picked.answers[0]);

    $("#answers1").addClass("btn btn-large mx-auto");
    $("#answers1").text(picked.answers[1]);

    $("#answers2").addClass("btn btn-large mx-auto");
    $("#answers2").text(picked.answers[2]);

    $("#answers3").addClass("btn btn-large mx-auto");
    $("#answers3").text(picked.answers[3]);
}

$(".ansbutton").on("click", function() {
    userGuess = $(this).val();
    console.log(userGuess)
    slide2()
    stop()      
});

$("#reset").on("click", function() {
    correct = 0;
    wrong = 0;
    didNotAnswer = 0;
    numbers=[];
    picked = {};
    userGuess ="";
    generator()
});

function slide2(){
    setTimeout(generator, 3000)
    if (userGuess == picked.correct[0]){
        userGuess="";
        $("#question").html("<h3>" + " Your are Correct! " + "<h3>");
        $("#answers0").hide();
        $("#answers1").hide();
        $("#answers2").hide();
        $("#answers3").hide();
        $("#time").hide();
        correct++;
    }else{
        userGuess="";
        $("#question").html("<h3>" + " Sorry, that is incorrect. The Correct Answer is " + "<h3><br>" + picked.correct[1]);
        $("#answers1").hide();
        $("#answers0").hide();
        $("#answers2").hide();
        $("#answers3").hide();
        $("#time").hide();
        wrong++;
    }
    
}

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    time--;
    $("#time").html("<h1>" + time + "</h1>");

    if (time === 0) {
        stop();
        timeup();
    }
}

function stop() {
    clearInterval(intervalId);
    time = 10;
}

function timeup(){
    setTimeout(generator, 3000)
    $("#question").html("<h3>" + " Sorry, Your time is up. The Correct Answer is " + "<h3><br>" + picked.correct[1]);
    $("#answers1").hide();
    $("#answers0").hide();
    $("#answers2").hide();
    $("#answers3").hide();
    $("#time").hide();
    didNotAnswer++;
    time = 10;
}

function gameover(){
    stop()
    $("#reset").show();
    $("#answers0").hide();
    $("#answers1").hide();
    $("#answers2").hide();
    $("#answers3").hide();
    $("#question").show();
    $("#time").hide();
    $("#question").html("Good Job!<br>" + "Correct: " + correct + "<br> Wrong: " + wrong + "<br> Did not Answer: " + didNotAnswer);
}


// display a random question
// display possible answers
// start timer and show timer
// timer run out senerio
// correct answer senerio
// incorrect answer senerio
// display new question that is not already used
// end 
// display correct, wrong, not answerd
// resart