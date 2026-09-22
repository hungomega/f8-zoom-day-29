const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productList = $("#product-list");
fetch("https://dummyjson.com/products") // request đến http lấy dữ liệu trả về
    .then((respon) => respon.json()) // Lấy dữ liệu server trả về và chuyển nó từ JSON thành object JavaScript.
    .then((data) => {
        // dữ liệu bên trong response
        console.log(data);
        data.products.forEach((product) => {
            productList.innerHTML += `
                <!-- Thẻ link để click sang trang chi tiết -->
                <a href="./detail.html?id=${product.id}" class="product"> 

                    <div class="product">
                        <img src="${product.thumbnail}" alt="${product.title}">

                        <div class="product-info">
                            <h2>${product.title}</h2>

                            <p>${product.category}</p>

                            <p>$${product.price}</p>

                            <p>⭐ ${product.rating}</p>

                            <p>Còn lại: ${product.stock}</p>
                        </div>
                    </div>
                </a>
            `;
        });
    });


