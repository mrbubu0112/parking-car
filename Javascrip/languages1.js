

var translations = {
    vi: {
        licensePlates: "Biển số xe",
        plateNo:"Biển số xe",
        entryTime:"Thời gian vào",
        parkingDuration: "Thời gian đỗ xe",
        Expire:"Thời hạn",
        discountt:"Giảm giá",
        Amountt: "Thành tiền",
        enterlicense:"Xin nhập biển số xe của bạn",
        myButton:"Bắt đầu thanh toán"
  
  
  

      },
    en: {

      licensePlates: "License Plates",
      plateNo:"Plate Number",
      entryTime:"Entry Time",
      parkingDuration: "Parking Duration",
      Expire:"Expiration",
      discountt:"Discount",
      Amountt: "Amount",
      enterlicense:"Enter your license plate number",
      myButton:"Start Payment"
  

    }
    
  };

  // var currentLanguage = 'vi';

  var currentLanguage = localStorage.getItem("currentLanguage");
console.log(currentLanguage)

  function translate(language, key) {
    return translations[language][key] || '';
  }

  function changeLanguage(language) {
    currentLanguage = language;
    updateUI();
  }

  function updateUI() {

    document.getElementById('licensePlates').innerText = translate(currentLanguage, 'licensePlates');
    document.getElementById('parkingDuration').innerText = translate(currentLanguage, 'parkingDuration'); 
    document.getElementById('plateNo').innerText = translate(currentLanguage, 'plateNo');
    document.getElementById('Amountt').innerText = translate(currentLanguage, 'Amountt');
    document.getElementById('entryTime').innerText = translate(currentLanguage, 'entryTime');
    document.getElementById('discountt').innerText = translate(currentLanguage, 'discountt');
    document.getElementById('Expire').innerText = translate(currentLanguage, 'Expire');
    document.getElementById('myButton').innerText = translate(currentLanguage, 'myButton');

   

    
  
    // document.getElementById('title').innerText = translate(currentLanguage, 'title');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');



  }

  // Cập nhật giao diện ban đầu
  updateUI();