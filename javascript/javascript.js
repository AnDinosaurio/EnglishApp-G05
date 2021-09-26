<<<<<<< HEAD


///let videoSRC;
console.log("hello");

let videos = ['https://www.youtube.com/embed/1j7AmQEYSFo',
 'https://www.youtube.com/embed/lX6JcybgDFo', 
 'https://www.youtube.com/embed/TGI4oz1QnZo', 
 'https://www.youtube.com/embed/IbWOQWw1wkM',
 'https://www.youtube.com/embed/fzew3PgeCj0', 
 'https://www.youtube.com/embed/Y486eiRm1q8', 
 'https://www.youtube.com/embed/ztrtZ0en8dw'];

function numRandom(){

    let num = Math.floor(Math.random()*videos.length);
    return num;

}


 $(document).ready(function(){
    
    
    
    $("#slide1").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom()] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide2").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() + 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#slide3").html('<iframe class="d-block w-100" width="500" height="450" src="' + videos[numRandom() - 1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    
    $("#video1").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#video2").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $("#video3").html('<iframe class="card-img-top" width="560" height="315" src="' + videos[Math.floor(Math.random()*videos.length)] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 });

/* function mixvideo() {
    num = Math.floor(Math.random()*videos.length);
    videoSRC = videos[num];
    console.log(videoSRC);
 }
mixvideo(); */


=======
var app = new Vue({
    el : "#ANS",
    data: {
        questionIndex: 0,
        questions: [
            {
            instructions: "Choose the best word to complete the sentence.",
            textQ: "The baby boy saw ___ in the mirror and started to cry.",
            responses: [
                {text: 'itself', correct:"wrong1"}, 
                {text: 'himself', correct: true}, 
                {text: 'herself', correct:"wrong2"},
            ]
            }, {
            instructions: "Choose the best word (or phrase) to complete the sentence.",
            textQ: "Firstly, I want to congratulate you all. Secondly, I would like to wish you good luck and ___ I hope you have enjoyed the course.",
            responses: [
                {text: 'finally', correct: true}, 
                {text: 'at last', correct:"wrong1"},
                {text: 'in the end', correct:"wrong2"},
            ]
            },{
            instructions: "Choose the best word to complete the sentence.",
            textQ: "You ___ clean your teeth twice a day to avoid having problems.",
            responses: [
                {text: 'should', correct: true}, 
                {text: 'can', correct:"wrong1"},
                {text: 'will', correct:"wrong2"},
            ]
            },{
            instructions: "Choose the best word to complete the dialogue.",
            textQ: "Jack: I think it’s going to rain. Jill: I ___ , the clouds are clearing. Jack: We’ll soon see.",
            responses: [
                {text: 'argue', correct:"wrong1"}, 
                {text: 'complain', correct:"wrong2"},
                {text: 'disagree', correct: true},
            ]
            },{
            instructions: "Choose the best word to complete the dialogue.",
            textQ: "Anne: Oh! I watched the new TV show last night. Jo: Was it any good? Anne: Yes. ___ the TV set is so old I could see very little.",
            responses: [
                {text: 'Mind you', correct:"wrong1"}, 
                {text: 'By the way', correct: true},
                {text: 'Still', correct: "wrong2" },
            ]
            },{
            instructions: "Choose the best word to complete the sentence.",
            textQ: "Have you got time to discuss your work now or are you ___ to leave?",
            responses: [
                {text: 'about', correct: true}, 
                {text: 'round', correct: "wrong1" },
                {text: 'planned', correct: "wrong2" },
                {text: 'thinking', correct: "wrong3" },
            ]
            },{
            instructions: "Choose the best word to complete the sentence.",
            textQ: "When I realised I had dropped my gloves, I decided to ___ my steps.",
            responses: [
                {text: 'retrace', correct: "wrong3" }, 
                {text: 'regress', correct: "wrong1" },
                {text: 'return', correct: "wrong2" },
                {text: 'resume', correct: true },
            ]
            },{
            instructions: "Choose the best phrase to complete the sentence.",
            textQ: "I'd like two tickets for tomorrow night.",
            responses: [
                {text: "How much did you pay?", correct: "wrong3" }, 
                {text: "I'll just check for you", correct: true },
                {text: "Afternoon and evening", correct: "wrong2" },
                {text: "none of the above", correct: "wrong1" },
            ]
            },{
            instructions: "Some words are often used together, e.g. smelly + socks. Choose a word which is often used with:",
            textQ: "sophisticated ____",
            responses: [
                {text: 'ship', correct: "wrong3" }, 
                {text: 'dress', correct: true },
                {text: 'purse', correct: "wrong2" },
                {text: 'none of the above', correct: "wrong1" },
            ]
            },{
            instructions: "Choose the word or phrase which has a similar meaning to:",
            textQ: "return",
            responses: [
                {text: 'account', correct: "wrong3" }, 
                {text: 'turn again', correct: "wrong2" },
                {text: 'go back', correct: true },
                {text: 'reverse', correct: "wrong1" },
            ]
            }
        ],
        userResponses: Array(10).fill(false)
    },

    methods: {
        next() {
            this.questionIndex++;
        },
        previous() {
            this.questionIndex--;
        },
        score() {
            return this.userResponses.filter(function(val) { if (val === true ) return val }).length;
        },
        level(){
            if (this.score() <= 2){
                return "A1"
            }
            if (this.score() > 2 && this.score() <= 5 ){
                return "A2"
            }
            if (this.score() > 5 && this.score() <= 8 ){
                return "B1"
            }
            else{
                return "B2"
            }
        }
    }
});
>>>>>>> b85526f8c684ffd778d90520fc249c0e9fc98d5d
