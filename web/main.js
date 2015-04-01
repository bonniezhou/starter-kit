App.controller('home', function (page) {
    var topicsList = [
        "How did you first learn to ride a bike?",
        "What was your favorite Halloween costume?",
        "What's the most embarrassing thing that ever happened to you?",
        "What's your biggest fear?",
        "What did you get into trouble for the most when you were young?",
        "Which is more important: intelligence or common sense?",
        "If you could do something dangerous just once with no risk what would you do?",
        "Where would you choose to live if you had to leave this country?",
        "Which wild animal would you like to tame and keep as a pet?",
        "Would you rather live for a week in the past or the future?",
        "Which famous person would you love to meet?",
        "What’s your most prized possession?",
        "Which person in your family do you most resemble?",
        "Is it more charitable to spend your money or your time?",
        "Have you ever run into to someone you knew when you were far from home?",
        "What was your favorite movie when you were young?",
        "Who in your family does the wackiest things?",
        "If you opened a restaurant, what kind of food would you serve?",
        "If you had multiple personalities, what would they be?",
        "Have you ever pretended to be sick to get out of something?",
        "What smell reminds you of childhood?",
        "What color makes you the happiest?",
        "What’s the most amazing bug fact you know?",
        "If your pet could answer any question, what would you ask?",
        "Would you rather travel by train, car, plane, or ship?",
        "What's the most beautiful place you've ever seen?",
        "What fictional character do you wish you could meet?",
        "If you got a tattoo, what would you get and where?",
        "What's the most text messages you've sent in a month?",
        "What's the scariest movie you've seen?",
        "If you had to give every human being one quality, what would it be and why?",
        "If you were invisible where would you go and what would you do?",
        "If your life was made into a movie, who would play you?",
        "If you could invent one thing what would it be?",
        "If you could know one thing about the future, what would it be?",
        "What is the first thing you notice about a person?"
    ];


    var num = parseInt(Math.random()* topicsList.length);
	if (kik.message) {
	    var topic = kik.message.text;
	} else {
        var topic = topicsList[num];
	}
    $(page).find('#topic').text(topic);

    $(page).find('#button-topic').click(function () {
        num = parseInt(Math.random()* topicsList.length);
        topic = topicsList[num];
        $(page).find('#topic').text(topic);
    });

	$(page).find('#button-send').click(function () {
		if (kik.send) {
			kik.send({
				text: topic,
				data: {'text': topic}
			});
		} else {
			App.dialog({
                title        : 'Install Kik' ,
                text         : 'This is a feature of Kik Messenger. Install it to send messages.' ,
                okButton     : 'Install' ,
                cancelButton : 'Cancel'
              }, function (status) {
                if (status) {
                  var os = kik.utils.os;
                  if (os.ios) {
                    window.location.href = 'itms-apps://itunes.apple.com/app/kik-messenger/id357218860';
                  } else if (os.android) {
                    window.location.href = 'market://details?id=kik.android';
                  } else {
                    window.location.href = 'http://kik.com';
                  }
                }
              });
		}
	});
});



// Code to load app page
(function (App) {
	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
