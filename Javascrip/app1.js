
const userInput = localStorage.getItem("userInput");
console.log(userInput)

document.getElementById('plate').innerHTML = userInput;

handleQrcode(userInput)
  function handleQrcode (userInput){
    // Tạo một thẻ <img> để hiển thị hình ảnh QR code
  var RearImage = document.createElement('img');

  RearImage.width = 300;
RearImage.height = 250;
  var FrontImage = document.createElement('img');

  FrontImage.width = 300;
FrontImage.height = 250;
  var failedImage = document.createElement('img');

  failedImage.src="/asset/img/failed.png"

  // Gửi yêu cầu lấy base64 từ máy chủ
  fetch(`http://118.68.68.25:5000/getInfors?plateNumber=${userInput}`)
    .then(response => response.json())
    .then(data => {

      const infors = data.infors;
    
    // Kiểm tra nếu mảng infors không rỗng
    if (infors.length > 0) {
      // Lấy phần tử đầu tiên trong mảng
      const firstInfor = infors[0];
 

    
  
  
  document.getElementById('entry').textContent = firstInfor.entry;
  document.getElementById('expiration').textContent = firstInfor.expiration;
  document.getElementById('duration').textContent = firstInfor.duration;
  document.getElementById('discount').textContent = firstInfor.discount;
  document.getElementById('amount').textContent = firstInfor.amount;



      // console.log(data)
      // console.log(data.qrcodeBase64)
      // Thiết lập base64 nhận được là nguồn hình ảnh của <img>
      RearImage.src = 'data:image/png;base64,' + firstInfor.RearImage;
      console.log(RearImage.src)
  
      // Thêm <img> vào phần tử HTML để hiển thị
      document.getElementById('img-license').appendChild(RearImage);

      

      FrontImage.src = 'data:image/png;base64,' + firstInfor.FrontImage;
      console.log(FrontImage.src)
  
      // Thêm <img> vào phần tử HTML để hiển thị
      document.getElementById('img-license1').appendChild(FrontImage);

    }})
    .catch(error => {
      console.error('Lỗi khi tải mã base64 từ máy chủ:', error);
      document.getElementById('img-license').appendChild(failedImage);
      alert("Không tìm thấy, mời bạn nhập lại")
    });
  }

 

// function fetchDataAndDisplay(userInput) {
//   fetch(`http://192.168.11.112:5000/getInfors?plateNumber${userInput}`)
//     .then(response => response.json())
//     .then(data => {
//       // Hiển thị dữ liệu theo ID

//         // Truy cập vào mảng infors
// const infors = data.infors;

// // Kiểm tra nếu mảng infors không rỗng
// if (infors.length > 0) {
//   // Lấy phần tử đầu tiên trong mảng
//   const firstInfor = infors[0];
  
//   // Truy cập các thuộc tính của phần tử
//   const id = firstInfor.id;
//   const plate = firstInfor.plate;
//   const entry = firstInfor.entry;
//   const duration = firstInfor.duration;
//   const fee = firstInfor.fee;

//   document.getElementById('duration').textContent = firstInfor.duration;
//       document.getElementById('fee').textContent = firstInfor.fee;
//       document.getElementById('plate').textContent = firstInfor.plate;
//       document.getElementById('entry').textContent = firstInfor.entry;
//       document.getElementById('duration1').textContent = firstInfor.duration;
//       document.getElementById('fee1').textContent = firstInfor.fee;
//       document.getElementById('discount').textContent = firstInfor.discount;
//       document.getElementById('amount').textContent = firstInfor.amount;
//       document.getElementById('duration').textContent = firstInfor.duration;
  
//   // Sử dụng dữ liệu
//   console.log(id, plate, entry, duration, fee);
// } else {
//   console.log('Không có dữ liệu infors');
// }
// })
// .catch(error => {
// // Xử lý lỗi nếu có
// console.error(error);
// });


// } 

document.addEventListener('DOMContentLoaded', function () {
  // Lắng nghe sự kiện click trên nút
  document.getElementById('myButton').addEventListener('click', function () {
    // Chuyển hướng đến trang khác
    window.location.href = 'index2.html';
  });
});





