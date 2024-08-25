const inputField = document.querySelector('.input-control');

        inputField.addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn chặn sự kiện click từ lan rộng
            inputField.classList.add('expanded');
        });

        document.addEventListener('click', () => {
            inputField.classList.remove('expanded'); // Đặt lại chiều rộng khi click ra ngoài
        });

handleInput()

function handleInput(){

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  
  event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện submit

  const textInput = document.getElementById("textInput");
  const userInput = textInput.value;

  // Xử lý dữ liệu người dùng đã nhập
  console.log("Người dùng đã nhập:", userInput);
  
  // Gửi dữ liệu lên server hoặc thực hiện các hành động khác

  fetchDataAndDisplay(userInput)
  
// localStorage.setItem("userInput", document.getElementById("textInput").value);
// window.location.href = 'index1.html';
  
});

}

// const searchId = userInput;
  
  function fetchDataAndDisplay(soxe) {
      fetch(`http://118.68.68.25:5000/getInfors?plateNumber=${soxe}`)
      .then(response => {
        if (response.ok) { // Kiểm tra status code là 200
          return response.json();
        } else {
          throw new Error('Lỗi khi lấy dữ liệu');
        }
      })

        .then(data => {
        
    const infors = data.infors;

 
    
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

    localStorage.setItem("userInput", soxe);
    window.location.href = 'index1.html';
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);

    alert('Lỗi khi lấy dữ liệu, vui lòng thử lại sau.');
  });

  }



////////////////////////////////////////




      //     console.log(data);
      //     const discount = data[0].discount;

      // console.log(discount); // In ra "10,000 VND"
          
       

          

          // Hiển thị dữ liệu trong HTML
        //   document.getElementById('duration').textContent = data.duration;
        //   document.getElementById('fee').textContent = data.fee;
        //   document.getElementById('plate').textContent = data.plate;
        //   document.getElementById('entry').textContent = data.entry;
        //   document.getElementById('duration1').textContent = data.duration;
        //   document.getElementById('fee1').textContent = data.fee;
        //   document.getElementById('discount').textContent = data.discount;
        //   document.getElementById('amount').textContent = data.amount;
        //   document.getElementById('duration').textContent = data.duration;
          
        // })
        // .catch(error => {
        //   console.error('Lỗi khi gọi API:', error);
        //   alert("Có lỗi xảy ra khi gọi API.");
        // });
      
  

