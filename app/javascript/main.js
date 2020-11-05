window.addEventListener('load', () => {
  console.log("OK!")
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
    }
  ];

  const quizCount = quiz.length;
  let quizIndex = 0;
  while (quizIndex < quizCount ){
    document.getElementById('q').textContent = quiz[quizIndex].question;
    quizIndex++;
  }
  
  const answers = document.getElementsByClassName('answer');

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



  })
    
    
    
    
    
