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
		images : "<img src=https://media.giphy.com/media/l41lYSXS3H8JXbZV6/giphy-downsized-large.gif height=250>"
	}
	var q2 = {
		question : "Who won drunkest friend on Spring Break Junior Year?",
		answers : ["A. Nicollete","B. Alex Remstein","C. Jess Carter", "D. Billy Rand"],
		correctAnswer : "B. Alex Remstein",
		images : "<img src=https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12108081_10206118721109223_6742408814261763761_n.jpg?oh=a78bf37f45276959f8ec5e07a45d0c9a&oe=5A53CAEE height=250>"
	}
	var q3 = {
		question :"How many drinks does it take until Jaime's jersey accent comes out?",
		answers : ["A. Its usually there by the pregame","B. 3-5","C. Just 1", "D. Never"],
		correctAnswer : "A. Its usually there by the pregame",
		images : "<img src=https://media.tenor.com/images/878e6f1bdce4b878b7886db32616144e/tenor.gif height=250>"
	}
	var q4 = {
		question : "Whats Barone's favorite rom-com?",
		answers : ["A. What Happens In Vegas","B. Crazy Stupid Love","C. Just friends", "D. Love Actually"],
		correctAnswer : "D. Love Actually",
		images : "<img src=https://media.giphy.com/media/1YqRetWqdaWEE/giphy.gif height=250>"
	}
	var q5 = {
		question : "In all four years of school who had the worst relationship?",
		answers : ["A. Billy and Chillanj","B. Max and Madi","C. Erica and Yoni","D. We all know the answer I put here"],
		correctAnswer : "A. Billy and Chillanj",
		images : "<img src=https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10898217_10205713083726735_2178701937100689242_n.jpg?oh=08f8f5644a28eeb5476cdc6a49d9c919&oe=5A525B05 height=250>"
	}
	var q6 = {
		question : "What dynamic trio loved sleeping at collegestreet/noho?",
		answers : ["A. Jess, Taylor, Nicollete","B. TBooch, Mirm, Rachel","C. Erica, Mary, Taylor", "D. Ellen, Bridgette, Crazy Jill"],
		correctAnswer : "B. TBooch, Mirm, Rachel",
		images : "<img src=https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/15327433_1239558666104749_2615860212145420278_n.jpg?oh=b5f0ad19f42c8c13348ea695cd867304&oe=5A3CB377 height=250>"
	}
	var q7 = {
		question : "Who is still technically dating Jess since they never officially broke up?",
		answers : ["A. Joe Varnas","B. Mitch","C. Adam Ladd", "D. Club Hockey Coach"],
		correctAnswer : "C. Adam Ladd",
		images : "<img src=https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/18446793_10212583965171067_6470863626085853214_n.jpg?oh=e2ac9a33adeef1955aad18a5bb499ecd&oe=5A8295C8 height=250>"
	}
	var q8 = {
		question : "Who is most likely to be watching Fairly Odd Parents at 5AM?",
		answers : ["A. Cam Felix","B. Billy Rand","C. Rachel Ray", "D. DJ TKears"],
		correctAnswer : "D. DJ Tyler Kears",
		images : "<img src=http://vignette4.wikia.nocookie.net/fairlyoddparents/images/9/9a/GIF-Timvisible-Crocker001.gif/revision/latest?cb=20120413002240&path-prefix=en height=250>"
	}
	var q9 = {
		question : "Who got too drunk at Teibel Easter, threw up, and wiped up the throw up with Philip's sweatshirt?",
		answers : ["A. Smokey the Bear","B. Jess Carter","C. Erica Gray", "D. Taylor Kelly"],
		correctAnswer : "D. Taylor Kelly",
		images : "<img src=https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11088525_572992806137036_9044012998914242278_n.jpg?oh=733789f009718386dfaa49aeeb1a94db&oe=5A843C73 height=250>"
	}
	var q10 = {
		question : "Who's got the best friends in the world?",
		answers : ["A. Not us","B. ALL OF US!","C. Austin", "D. British Chloe"],
		correctAnswer : "B. ALL OF US!",
		images : "<img src=https://media.giphy.com/media/12UlfHpF05ielO/giphy.gif height=250>"
	}

	var qArray = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]

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

