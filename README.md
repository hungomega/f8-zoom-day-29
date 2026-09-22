# 🛍️ F8 Zoom Day 29 - Product Store

Ứng dụng hiển thị danh sách và thông tin chi tiết sản phẩm, sử dụng API từ [DummyJSON](https://dummyjson.com).

## 📌 Giới thiệu

Project được xây dựng bằng **HTML, CSS và JavaScript**, sử dụng `fetch()` để lấy dữ liệu sản phẩm từ DummyJSON và render lên giao diện.

Các chức năng chính:

- 📦 Hiển thị danh sách sản phẩm
- 🔎 Hiển thị thông tin sản phẩm
- 🖱️ Click vào sản phẩm để xem chi tiết
- 🔗 Truyền `id` sản phẩm qua Query Parameter
- 📄 Hiển thị trang chi tiết sản phẩm
- 🔙 Quay lại trang danh sách sản phẩm
- 📱 Giao diện responsive cơ bản

---

## 🛠️ Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript
- Fetch API
- DummyJSON API

---

## 📂 Cấu trúc thư mục

```text
f8-zoom-day-29/
│
├── css/
│   ├── detail.css
│   └── style.css
│
├── js/
│   ├── detail.js
│   └── main.js
│
├── detail.html
├── index.html
└── README.md
```

---

## 🔄 Luồng hoạt động

```text
┌──────────────────────┐
│      index.html      │
│  Danh sách sản phẩm  │
└──────────┬───────────┘
           │
           │ fetch()
           ▼
┌──────────────────────┐
│      DummyJSON       │
│     /products        │
└──────────┬───────────┘
           │
           │ render
           ▼
┌──────────────────────┐
│   Product List UI    │
└──────────┬───────────┘
           │
           │ Click sản phẩm
           ▼
┌──────────────────────┐
│ detail.html?id=15    │
└──────────┬───────────┘
           │
           │ params.get("id")
           ▼
┌──────────────────────┐
│        id = 15       │
└──────────┬───────────┘
           │
           │ fetch()
           ▼
┌──────────────────────────────┐
│   DummyJSON /products/15     │
└──────────┬───────────────────┘
           │
           │ render
           ▼
┌──────────────────────┐
│ Product Detail UI    │
└──────────────────────┘
```

---

## 📋 Đề bài

### Yêu cầu chung

1. Tạo repo `f8-zoom-day-29`.
2. Giao diện tự làm, rõ ràng, sạch sẽ, hiển thị thông tin hợp lý.
3. Đọc tài liệu DummyJSON phần `products` để biết các thông tin của sản phẩm.
4. Sử dụng `fetch` hoặc `XHR` để lấy dữ liệu sản phẩm và render ra UI.

### #1. Trang danh sách sản phẩm

1. Sử dụng `https://dummyjson.com` phần `products` làm nguồn dữ liệu.
2. Thiết kế giao diện rõ ràng, sạch sẽ.
3. Hiển thị đủ thông tin sản phẩm phù hợp với dạng danh sách.
4. Click vào một sản phẩm thì chuyển sang `detail.html` và hiển thị đúng sản phẩm vừa click.

### #2. Trang chi tiết sản phẩm

1. Đọc tài liệu DummyJSON để biết cách GET chi tiết sản phẩm.
2. Sử dụng query parameter để xác định sản phẩm hiện tại.

Ví dụ:

```text
detail.html?id=1
```

3. Lấy `id` từ URL:

```js
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
```

4. Gọi API lấy thông tin sản phẩm:

```js
fetch(`https://dummyjson.com/products/${id}`)
```

5. Nhận JSON và render thông tin chi tiết sản phẩm lên giao diện.

---

## 🌐 API sử dụng

### Lấy danh sách sản phẩm

```text
GET https://dummyjson.com/products
```

### Lấy chi tiết sản phẩm

```text
GET https://dummyjson.com/products/{id}
```

Ví dụ:

```text
GET https://dummyjson.com/products/15
```

📚 [DummyJSON Products Documentation](https://dummyjson.com/docs/products)

---

## 🚀 Cách chạy

Mở project bằng VS Code và chạy `index.html` bằng **Live Server**.

Sau đó:

```text
index.html
    ↓
Chọn sản phẩm
    ↓
detail.html?id=...
    ↓
Xem chi tiết sản phẩm
```

---

## 👨‍💻 Author

**Nguyễn Hữu Hùng**

F8 Frontend - Day 29
