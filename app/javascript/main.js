window.addEventListener('load', () => {
  const quiz = [
    {
      question : "今日の日付は？",
      answers : ["11月4日","11月5日","11月6日","11月7日"],
      correct : "11月4日"
    },
    {
      question : "１＋１は？",
      answers : ["１","２","３","４"],
      correct : "２"
    },
    {
      question : "誕生日は？",
      answers : ["11月26日","11月27日","11月28日","11月29日"],
      correct : "11月29日"
    },
    {
      question : "名前は？",
      answers : ["あ","い","う","え"],
      correct : "う"
    }
  ];

  const q = document.getElementById('q');
  const answers = document.getElementsByClassName('answer');
  const next = document.getElementById('next');

  const quizCount = quiz.length;
  let quizIndex = 0;

    q.textContent = quiz[quizIndex].question;
     for (let i = 0; i < answers.length; i++){

     answers[i].textContent = quiz[quizIndex].answers[i];
      
     answers[i].addEventListener('click', () => {
       if (answers[i].textContent === quiz[quizIndex].correct) {
         window.alert("正解！！")
       } else {
         window.alert("残念！！")
       }
     });
   }

    



    next.addEventListener('click', () => {
      quizIndex++;
      q.textContent = quiz[quizIndex].question;
      let i = 0
      while ( i < answers.length ) {
      answers[i].textContent = quiz[quizIndex].answers[i];
      i++;
    }
  
    })



  // for (let i = 0; i < answers.length; i++){

  //     answers[i].textContent = quiz[quizIndex].answers[i];
      
  //     answers[i].addEventListener('click', () => {
  //       if (answers[i].textContent === quiz[quizIndex].correct) {
  //         window.alert("正解！！")
  //       } else {
  //         window.alert("残念！！")
  //       }
  //     });
  //   }



  })
    
    
    
    
    
