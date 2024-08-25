var translations = {
    vi: {
        
        enterlicense:"Xin nhập biển số xe của bạn"  ,
        checkin:"Kiểm tra thông tin"  
  
      },
    en: {

      enterlicense:"Enter your license plate number",
      checkin:"Get Information"  

    }
    
  };

  var currentLanguage = 'vi';

  function translate(language, key) {
    return translations[language][key] || '';
  }

  function changeLanguage(language) {
    currentLanguage = language;
    updateUI();

    localStorage.setItem("currentLanguage", currentLanguage);
  console.log(currentLanguage);
  }

  function updateUI() {

    document.getElementById('enterlicense').innerText = translate(currentLanguage, 'enterlicense');
    //document.getElementById('checkin').innerText = translate(currentLanguage, 'checkin');
    // (document.getElementById('checkin').value).innerText = translate(currentLanguage, 'checkin');
    const submitButton = document.getElementById("checkin");
    submitButton.value = translate(currentLanguage, 'checkin');


  
    // document.getElementById('title').innerText = translate(currentLanguage, 'title');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');




  }

  // Cập nhật giao diện ban đầu
  updateUI();