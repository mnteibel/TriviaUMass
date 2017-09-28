$(document).ready(function() {

	var counter;
	var index = 0;
	var chooseAnswer;
	var correctCount = 0;
	
	$("#answerA").hide();
	$("#answerB").hide();
	$("#answerC").hide();
	$("#answerD").hide();

	var q1 = {
		question : "What actor stared in the hit 80s movie Roadhouse",
		answers : ["A. Patrick Swayze","B. Brad Pitt","C. Tom Cruise", "D. Brian Barone"],
		correctAnswer : "A. Patrick Swayze",
		images : "<img src=https://media.giphy.com/media/l41lYSXS3H8JXbZV6/giphy-downsized-large.gif height=220>"
	}
	var q2 = {
		question : "Who was the 43rd President of the United States?",
		answers : ["A. Harrison Ford","B. George W. Bush","C. Will Ferrel", "D. Abraham Lincoln"],
		correctAnswer : "B. George W. Bush",
		images : "<img src=https://media.giphy.com/media/KU5ZYokJKL3tC/giphy.gif height=220>"
	}
	var q3 = {
		question : "Which crime-fighting cartoon dog has the initals 'S.D.' on his collar?",
		answers : ["A. Max","B. Snoopy","C. Smokey the Bear", "D. Scooby Doo"],
		correctAnswer : "D. Scooby Doo",
		images : "<img src=https://media.giphy.com/media/lHswuNEWQhiMw/giphy.gif height=220>"
	}
	var q4 = {
		question : "What job does Bill Murray work in the movie Caddyshack?",
		answers : ["A. Golf Pro","B. General Manager","C. Mailman", "D. Grounds Keeper"],
		correctAnswer : "D. Grounds Keeper",
		images : "<img src=https://cdn20.patch.com/inline_images/3500945/1474660521.gif height=220>"
	}
	var q5 = {
		question : "How many error messages to you get trying to code this assignment?",
		answers : ["A. Too many to count","B. None","C. Fifteen", "D. Just click one you have a 1/4 chance"],
		correctAnswer : "A. Too many to count",
		images : "<img src=https://i1.wp.com/blog-pantheon-prod.global.ssl.fastly.net/blog/wp-content/uploads/2017/03/coding-programming-errors-r2d2.gif?resize=500%2C211&ssl=1 height=220>"
	}
	//var q6 = {
		//question : "Question?",
		//answers : ["A.","B.","C.", "D."],
		//correctAnswer : "B.",
		//images : "<img href=../images/roadhouse.gif>"
	//}
	//var q7 = {
	//	question : "Question?",
	//	answers : ["A.","B.","C.", "D."],
	//	correctAnswer : "C.",
	//	images : "<img href=../images/roadhouse.gif>"
	//}
	//var q8 = {
	//	question : "Question?",
	//	answers : ["A.","B.","C.", "D."],
	//	correctAnswer : "D.",
	//	images : "<img href=../images/roadhouse.gif>"
	//}
	//var q9 = {
	//	question : "Question?",
	//	answers : ["A.","B.","C.", "D."],
	//	correctAnswer : "A.",
	//	images : "<img href=../images/roadhouse.gif>"
	//}
	//var q10 = {
	//	question : "Question?",
	//	answers : ["A.","B.","C.", "D."],
	//	correctAnswer : "B.",
	//	images : "<img href=../images/roadhouse.gif>"
	//}

	var qArray = [q1,q2,q3,q4,q5]

	///////TIMER FUNCTION//////

	function run() {
		//runs function every second
		count = 30
		counter = setInterval(game, 1000)
	};

	function game() {

		//$("#image").empty();
		//decrease count by 1
		count--;

		questions();
		$("#image").empty();

		if (count === 0)
			timeOut();

		}

	function reset() {
		count = 31
		counter = setInterval(game, 1000)
		//$("#image").empty();
	}

	function questions(){

		if(index < qArray.length){

		$("#seconds").html("<h4>Time Remaining: " + count + " Seconds</h4>");

		$("#message").empty();
		$("#correctAns").empty();
		$("#question").show();
		$("#question").html("<h2>" + qArray[index].question + "</h2>")
		$("#answerA").text(qArray[index].answers[0]);
		$("#answerA").show();
		$("#answerB").text(qArray[index].answers[1]);
		$("#answerB").show();
		$("#answerC").text(qArray[index].answers[2]);
		$("#answerC").show();
		$("#answerD").text(qArray[index].answers[3]);
		$("#answerD").show();
		}else{
			finish();
		}
	}
	function timeOut(){
			clearInterval(counter)
			$("#question").hide();
			$("#message").html("<h2>Time ran out!</h2><h5>The correct answer is " + qArray[index].correctAnswer +"</h5>")
			$("#answerA").hide();
			$("#answerB").hide();
			$("#answerC").hide();
			$("#answerD").hide();
			$("#image").html(qArray[index].images)
			index++
			setTimeout(reset, 3250)
		}

	function correct(){

			clearInterval(counter)
			$("#message").html("<h2>Correct!</h2><h4>" + qArray[index].correctAnswer + "</h4>");
			$("#question").hide();
			$("#answerA").hide();
			$("#answerB").hide();
			$("#answerC").hide();
			$("#answerD").hide();
			$("#image").html(qArray[index].images)
			index++
			correctCount++
			setTimeout(reset, 3250)
		}

	function incorrect(){

			clearInterval(counter)
			$("#message").html("<h2>Wrong!</h2><h5>The correct answer was " + qArray[index].correctAnswer+ "</h5>")
			$("#question").hide();
			$("#answerA").hide();
			$("#answerB").hide();
			$("#answerC").hide();
			$("#answerD").hide();
			$("#image").html(qArray[index].images)
			index++
			setTimeout(reset, 3250)

		}

	function answerSelect(){

		$("#answerA").on("click", function(){
				if(qArray[index].correctAnswer === qArray[index].answers[0]){
					console.log("correct!")
					correct();				
				}else{
					console.log(qArray[index].correctAnswer)
					incorrect();
				}
			});
		$("#answerB").on("click", function(){
				if(qArray[index].correctAnswer === qArray[index].answers[1]){
					console.log("correct!")
					correct();
				}else{
					console.log(qArray[index].correctAnswer)
					incorrect();
				}
			});
		$("#answerC").on("click", function(){
				if(qArray[index].correctAnswer === qArray[index].answers[2]){
					console.log("correct!")
					correct();
				}else{
					console.log(qArray[index].correctAnswer)
					incorrect();
				}
			});
		$("#answerD").on("click", function(){
				if(qArray[index].correctAnswer === qArray[index].answers[3]){
					console.log("correct!")
					correct();
				}else{
					console.log(qArray[index].correctAnswer)
					incorrect();
				}
			});
		}

		function finish(){
			clearInterval(counter)
			$("#message").empty();
			$("#seconds").empty();
			$("#start").html("<h2>Game Over!</h2>")
			$("#message").html("<h2>You got " + correctCount + " out of " + qArray.length + " correct!</h2><h4>Refresh the page to try again!</h4>")
			///$("#seconds").html("<h2>Push start to try again!</h2>")
			///$("#start").show()
		}

		//////////PROGRAM RUNNING/////////

		$("#start").on("click", function(){
		$("#start").hide();

		run();
		questions();

		});

		$(".answer").on("click", answerSelect())
});

