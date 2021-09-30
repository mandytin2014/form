
 

$('#btn').click(function(){
  

    let name = $('#name').val(); // 抓取input值
    let gender = $('input[name="gender"]:checked').val();
    let telephone = $('#telephone').val();
    let email = $('#email').val();
    let level = $('input[name="level"]:checked').val();
    let lesson =$('#lesson')
    let motivation = [];
    $('input[name="motivation"]:checked').each(function(index,item){
        motivation.push($(this).val())
    });
    let position =$('#position').val();
    let suggestion =$('#suggestion').val();
    
    if( name == ""||gender==""||telephone==""||email==""||level==""||lesson==""||motivation==""||position==""||suggestion==""　 ){ // 判斷空值時加上提示樣式
      
      $('.input__required').addClass('input__required--active');
      
    } else { // 否則移除提示樣式並傳送資料給API
  
      $('.input__required').removeClass('input__required--active');
      
      $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwXLHjTDfIOblbHAYn-OJMMtnsR0p7UgdN-0g5gtxJpfnqjIHSP4kDfIhGELZVO4BYotQ/exec",
      data: {
        "name": name,
        "gender":gender,
        "telephone":telephone,
        "email":email,
        "level":level,
        "lesson":lesson.toString(),
        "motivation":motivation.toString(),
        "position":position,
        "suggestion":suggestion,
        
         //以JSON格式傳送資料
      },
      success: function (response) {
        if (response == "報名成功") {  //回傳“成功”時跳出提示
          alert("報名成功"); 
        }
      },
    });
    }
    
  }
  )