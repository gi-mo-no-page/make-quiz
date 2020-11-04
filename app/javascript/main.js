window.addEventListener('load', () => {
  console.log("OK!")
  const question = "今日の日付は？";
  const answers = ["11月4日","11月5日","11月6日","11月7日"];
  const correct = "11月4日";
  
  document.getElementById('q').textContent = question;
  const ans = document.getElementsByClassName('ans');
  // let i = 0;
  // while (i < ans.length){
    //   ans[i].textContent = answers[i];
    //   i++;
    // };
    
    for (let i = 0; i < ans.length; i++){
      ans[i].textContent = answers[i];
      
      ans[i].addEventListener('click', () => {
        if (ans[i].textContent === correct) {
          window.alert("正解！！")
        } else {
          window.alert("残念！！")
        }
      });
    }
  })
    
    
    
    
    
