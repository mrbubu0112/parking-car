var translations = {
    vi: {
        payment:"Thanh Toán",
        scan:"Quét QR ở đây để thanh toán",
        countdown1:"Thời gian còn lại",
        textThanhToan:"Thanh toán không thành công",
        bankname1:"Ngân Hàng",
        owner1:"Chủ tài khoản",
        accountnumber1:"Số tài khoản",
        contentbank:"Nội dụng chuyển khoản",
        notification:"Đã sao chép",
        paymentStatus:"Thanh toán thành công",
        paymentStatus:"Vui lòng thanh toán"



      },
    en: {
    countdown1:"Time",
    payment:"Payment",
    scan:"Scan here to pay",
    textThanhToan:"Payment failed",
    bankname1:"Bank",
        owner1:"Owner",
        accountnumber1:"Account Number",
        contentbank:"Content",
        notification:"Copied",
        paymentStatus:"Payment Successful!",
        paymentStatus:"Wait payment "



    }
    
  };

  //var currentLanguage = 'vi';

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
    document.getElementById('countdown1').innerText = translate(currentLanguage, 'countdown1');
    document.getElementById('payment').innerText = translate(currentLanguage, 'payment');
    document.getElementById('scan').innerText = translate(currentLanguage, 'scan');
    document.getElementById('textThanhToan').innerText = translate(currentLanguage, 'textThanhToan');
    document.getElementById('bankname1').innerText = translate(currentLanguage, 'bankname1');
    document.getElementById('owner1').innerText = translate(currentLanguage, 'owner1');
    document.getElementById('accountnumber1').innerText = translate(currentLanguage, 'accountnumber1');
    document.getElementById('contentbank').innerText = translate(currentLanguage, 'contentbank');
    document.getElementById('notification').innerText = translate(currentLanguage, 'notification');
    document.getElementById('paymentStatus').innerText = translate(currentLanguage, 'paymentStatus');





    // document.getElementById('title').innerText = translate(currentLanguage, 'title');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');
    // document.getElementById('message').innerText = translate(currentLanguage, 'message');



  }

  // Cập nhật giao diện ban đầu
  updateUI();