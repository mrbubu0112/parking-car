

document.addEventListener('DOMContentLoaded', function () {
    // Đặt thời gian bắt đầu và thời hạn kết thúc (timestamp)
    const startTime = new Date().getTime(); // Thời gian hiện tại
    const endTime = startTime + (3* 60 * 1000); // Thời gian kết thúc: 30 phút sau

    let maxPaymentTime = 1000 * 10 * 1; // Thời gian thanh toán tối đa là 30 phút

  
    function updateCountdown() {
      const currentTime = new Date().getTime();
      const timeDifference = maxPaymentTime - (currentTime - startTime);
  
      if (timeDifference > 0) {
          if (apiSuccess) {
              clearInterval(interval); // Dừng cập nhật thời gian đếm ngược nếu API thành công
              document.getElementById('countdown').innerHTML = ''; // Xóa hiển thị thời gian đếm ngược
              return;
          }
  
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          document.getElementById('countdown').innerHTML = `${minutes} min ${seconds} s`;
      } else {
          clearInterval(interval); // Dừng cập nhật thời gian đếm ngược khi hết thời gian
          document.getElementById('textThanhToan').style.display = 'block';
          document.getElementById('paymentStatus').innerHTML = 'Thời gian thanh toán đã hết!';
          
      }}
    
    // Cập nhật thời gian đếm ngược mỗi giây
    const interval = setInterval(updateCountdown, 1000);
    
    // Khởi chạy hàm để hiển thị ngay khi trang được tải
    updateCountdown();
  });


  const userInput = localStorage.getItem("userInput");
console.log(userInput)



handleQrcode(userInput)
  function handleQrcode (userInput){


    // Tạo một thẻ <img> để hiển thị hình ảnh QR code
  var qrCodeImage = document.createElement('img');
  qrCodeImage.width = 450;
  qrCodeImage.height = 400;

 

  // Gửi yêu cầu lấy base64 từ máy chủ
  fetch(`http://118.68.68.25:5000/Payment?plateNumber=${userInput}`)
    .then(response => response.json())
    .then(data => {

      const infors = data.PaymentInfo;
    
    // Kiểm tra nếu mảng infors không rỗng
    if (infors.length > 0) {
      // Lấy phần tử đầu tiên trong mảng
      const firstInfor = infors[0];

      // Thiết lập base64 nhận được là nguồn hình ảnh của <img>
      qrCodeImage.src = 'data:image/png;base64,' + firstInfor.QR;
      console.log(qrCodeImage.src)
  
      // Thêm <img> vào phần tử HTML để hiển thị
      document.getElementById('qr-code-container').appendChild(qrCodeImage);
      document.getElementById('bankname').textContent = firstInfor.bankname;
      document.getElementById('owner').textContent = firstInfor.owner;
      document.getElementById('accountnumber').textContent = firstInfor.accountnumber;
      document.getElementById('content').textContent = firstInfor.content;
      console.log(firstInfor.content)

      // Bắt đầu kiểm tra trạng thái thanh toán
      checkPaymentStatus(userInput);
      
    }})
    .catch(error => {
      console.error('Lỗi khi tải mã base64 từ máy chủ:', error);
                document.getElementById('textThanhToan').style.display = 'block'
      
      
    });
  }

    
  let apiSuccess = false;

    function checkPaymentStatus(userInput) {
      if (apiSuccess) {
          return; // Dừng việc gọi API nếu đã thành công trước đó
      }

      fetch(`http://118.68.68.25:5000/isPaid?plateNumber=${userInput}`)
          .then(response => response.json())
          .then(data => {
              const Payment = data.Payment;

              if (Payment.length > 0) {
                const firstPayment = Payment[0];
                console.log(firstPayment.isPaid)
                if (firstPayment.isPaid === true) {
                  handlePaymentSuccess(true);;
                    apiSuccess = true; // Đánh dấu là đã thành công
                } else {
                    // Tiếp tục kiểm tra trạng thái thanh toán sau 5 giây
                    handlePaymentSuccess(false);
                    setTimeout(function () {
                        checkPaymentStatus(userInput);
                    }, 3000);
                }
            }
          })
          .catch(error => {
              console.error('Lỗi khi tải mã base64 từ máy chủ:', error);
              document.getElementById('textThanhToan').style.display = 'block'
          });
  }

  function handlePaymentSuccess(isPaidStatus) {
    if (isPaidStatus === true) {
        document.getElementById('paymentStatus').innerHTML = 'Thanh toán thành công!';
    } else {
        document.getElementById('paymentStatus').innerHTML = 'Vui lòng thanh toán.';
    }
  }

function copyContent() {
  var contentToCopy = document.getElementById("content").textContent;
  navigator.clipboard.writeText(contentToCopy);
  showNotification();

}
function copyAccount() {
  var contentToCopy = document.getElementById("accountnumber").textContent;
  navigator.clipboard.writeText(contentToCopy);
 
  showNotification();
}

function showNotification() {
  var notification = document.getElementById("notification");
  notification.classList.add("show");
  setTimeout(function() {
    notification.classList.remove("show");
  }, 3000);
}