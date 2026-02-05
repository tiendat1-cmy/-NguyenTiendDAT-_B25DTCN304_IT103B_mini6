let accountAdmin = "admin";
let password = "12345";
let checkLogin = false;
let login = 0;
let userName, pass, choice, input, bookIndex, updateBook, bookOld, foundBook;
let libraries = ["Toán", "Văn", "Anh"];
while (login < 3) {
  userName = prompt(`Tên đăng nhập: `);
  pass = prompt(` Nhập mật khẩu`);

  if (userName === accountAdmin && pass === password) {
    alert(`Đăng nhập thành công`);
    checkLogin = true;
    break;
  } else {
    login++;
  }
  if (userName !== accountAdmin) {
    alert(`Bạn đã nhập sai tên đăng nhập còn ${3 - login} lần thử `);
  } else {
    alert(`Bạn đã nhập sai mật khẩu còn ${3 - login} lần thử `);
  }
}

if (!checkLogin) {
  alert(` Tài khoản của bạn đã bị khóa!!`);
} else {
  do {
    choice = +prompt(`---HỆ THỐNG THƯ VIỆN 4.0---
      1. Nhập thêm lô sách mới.
      2. Hiển thị danh sách sách.
      3. Tìm kiếm sách.
      4. Cập nhật tên sách.
      5. Đảo ngược thứ tự kệ sách.
      6. Nhập kho từ nguồn khác.
      7. Thoát chương trình.
`);

    let newBook, bookAdd, bookName;
    switch (choice) {
      case 1:
        input = prompt(
          ` Nhập vào số lượng sách cần thêm ( cách nhau bởi dấu , )`,
        );
        if (input) {
          newBook = input.split(",");
          bookAdd = 0;
          for (let i = 0; i < newBook.length; i++) {
            bookName = newBook[i].trim();
            if (bookName !== "") {
              libraries.push(bookName);
              bookAdd++;
            }
          }
        }
        alert(` Đã thêm thành công ${bookAdd} vào thư viện`);
        break;
      case 2:
        console.log(`Danh sách sách hiện có`);
        for (let i = 0; i < libraries.length; i++) {
          console.log(`${i + 1}. ${libraries[i]}`);
        }
        break;
      case 3:
        bookIndex = prompt(` Nhập vào vị trí sách cần tìm`).trim();
        let indexBook = libraries.indexOf(bookIndex);
        if (indexBook !== -1) {
          alert(` Sách ${bookIndex} được tìm thấy tại vị trí ${indexBook}`);
        } else {
          alert(` Không tìm thấy`);
        }
        break;
      case 4:
        bookOld = prompt(` Nhập vào sách cần thay đổi`).trim();
        foundBook = libraries.indexOf(bookOld);

        if (foundBook !== -1) {
          updateBook = prompt(
            `Tìm thấy sách ${bookOld}. Nhập tên sách mới: `,
          ).trim();
          if (updateBook) {
            libraries[foundBook] = updateBook;
            alert(` Cập nhật thành công`);
          }
        } else {
          alert(` Không tìm thấy sách`);
        }
        break;
      case 5:
        libraries.reverse();
        console.log(` Mảng sau khi đảo ngược`);
        for (let index in libraries) {
          console.log(`${index}. ${libraries[index]}`);
        }
        alert(` Đảo ngược mảng thành công`);
        break;
      case 6:
        let bookQuantity = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(bookQuantity);
        alert("Đã gộp kho sách từ chi nhánh khác thành công.");
        break;
      case 7:
        alert(` Hẹn gặp lại`);
        break;
      default:
        alert(` Không có lựa chọn này`);
        break;
    }
  } while (choice !== 7);
}