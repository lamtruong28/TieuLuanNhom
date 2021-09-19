const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var btnOrders = $$(".btn-order");
var Modal = $(".modal");
var btnCloseFormOrder = $(".form-orderclose");
var containerOderForm = $(".form-order");
var btnDrink = $(".drink");
var btnFood = $(".food");
var drinkList = $(".drink-list");
var foodList = $(".food-list");
var btnDecreases = $$(".decrease");
var boxQuantitys = $$(".quantity");
var btnIncreases = $$(".increase");


//Hàm hiển thị modal;
function showFormOrder() {
    Modal.classList.remove('close');
}

//Hàm ẩn modal
function hiddenFormOrder() {
    Modal.classList.add('close');
}

//bắt sự kiện khi nhấn nút đặt hàng
for (const btnOrder of btnOrders) {
    btnOrder.addEventListener("click", showFormOrder);
}

//Đóng form đặt hàng
btnCloseFormOrder.onclick = hiddenFormOrder;
Modal.addEventListener("click", hiddenFormOrder);
//Ngăn sự kiện nổi bọt (khi bấm vào form đặt hàng modal không bị ẩn đi);
containerOderForm.addEventListener("click", function(event){
    event.stopPropagation();
})

//Hàm hiển thị danh sách đồ uống
function showDrinkList() {
    btnDrink.classList.add('active');
    btnFood.classList.remove('active');
    drinkList.style.display = "block";
    foodList.style.animation = 'rightToLeftFood linear .3s';
    drinkList.style.animation = 'rightToLeftDrink linear .3s';
    setTimeout(function () {
        foodList.style.display = "none";
    },310);
}

//Hàm hiển thị đồ ăn;
function showFoodList() {
    btnDrink.classList.remove('active');
    btnFood.classList.add('active');
    foodList.style.display = "block";
    foodList.style.animation = 'leftToRightFood linear .3s';
    drinkList.style.animation = 'leftToRightDrink linear .3s';
    setTimeout(function () {
        drinkList.style.display = "none";
    },300);
}

//JS khi chuyển menu;
btnDrink.addEventListener('click', showDrinkList);
btnFood.addEventListener('click', showFoodList);

//JS chuyển trang;




//JS tăng giảm số lượng món;
const MAX = 10;

for (let i = 0; i < btnIncreases.length ; i++) {
    var btnIncrease = btnIncreases[i];
    btnIncrease.addEventListener('click', function() {
        if(boxQuantitys[i].value < MAX)
            boxQuantitys[i].value++;
        else
            btnIncreases[i].classList.add('disable');
        btnDecreases[i].classList.remove('disable');
    })
    
}

for (let i = 0; i < btnDecreases.length ; i++) {
    var btnDecrease = btnDecreases[i];
    btnDecrease.addEventListener('click', function() {
        if(boxQuantitys[i].value > 0)
            boxQuantitys[i].value--;
        else
        btnDecreases[i].classList.add('disable');
        btnIncreases[i].classList.remove('disable');
    })
    
}
