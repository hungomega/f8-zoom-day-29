const $ = document.querySelector.bind(document);
const productDetail = $("#product-detail");

// Lấy id ở detail.html
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

// 2. Gọi API lấy sản phẩm theo id
fetch(`https://dummyjson.com/products/${id}`)
    .then((respon) => respon.json()) // Lấy dữ liệu server trả về và chuyển nó từ JSON thành object JavaScript.
    .then((product) => {
        console.log(product);

        // 3. Render sản phẩm
        productDetail.innerHTML = `
            <div class="product">
                <img 
                    src="${product.thumbnail}" 
                    alt="${product.title}"
                >

                <div class="product-info">
                    <h1>${product.title}</h1>

                    <p>${product.description}</p>

                    <p>Danh mục: ${product.category}</p>

                    <p>Giá: $${product.price}</p>

                    <p>Giảm giá: ${product.discountPercentage}%</p>

                    <p>⭐ ${product.rating}</p>

                    <p>Còn lại: ${product.stock}</p>

                    <p>Thương hiệu: ${product.brand}</p>
                </div>
            </div>
        `;
    });