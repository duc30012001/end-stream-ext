# Hướng dẫn cài đặt

1. Truy cập [https://github.com/duc30012001/end-stream-ext](https://github.com/duc30012001/end-stream-ext)
2. Nhấn vào Code -> Download ZIP
3. Mở [chrome://extensions](chrome://extensions) trên trình duyệt
4. Bật chế độ nhà phát triển (Developer mode)
5. Nhấn vào Load unpacked và chọn thư mục chứa các file của extension
6. Bật extension

# Hướng dẫn tuỳ chỉnh

Để tuỳ chỉnh extension này, bạn cần chỉnh sửa file `config.js`:

1. Tìm đến file `config.js` trong thư mục bạn đã giải nén extension.
2. Mở file `config.js` bằng một trình soạn thảo văn bản.
3. Thay đổi giá trị của các hằng số để phù hợp với nhu cầu của bạn. Hãy cẩn thận không thay đổi tên của các hằng số, vì điều này có thể làm cho extension không hoạt động.
4. Lưu thay đổi và đóng trình soạn thảo văn bản.
5. Chạy lệnh `npx webpack`
6. Quay lại [chrome://extensions](chrome://extensions) trên trình duyệt của bạn.
7. Nhấn vào nút Reload của extension để áp dụng các thay đổi.

Lưu ý rằng các hằng số trong `content.js` điều khiển hành vi của extension. Việc thay đổi các giá trị này có thể thay đổi đáng kể cách hoạt động của extension. Luôn đảm bảo kiểm tra extension sau khi thực hiện bất kỳ thay đổi nào để đảm bảo nó vẫn hoạt động như mong đợi.
