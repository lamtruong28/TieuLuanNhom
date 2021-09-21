const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var btnOrders = $$(".btn-order"); //lấy ds nút đặt hàng;
var Modal = $(".modal"); //lấy lớp phủ;
var btnCloseFormOrder = $(".form-orderclose"); //lấy nút đóng form đặt hàng
var containerOderForm = $(".form-order"); //lấy form đặt hàng
var btnMenues = $$(".btn-menu"); //lấy danh sách nút menu
var menuLists = $$(".menu-lists"); //lấy danh sách loại đồ bán (đồ ăn và nước uống)
var btnDecreases = $$(".decrease"); //lấy ds nút giảm
var boxQuantitys = $$(".quantity"); //lấy ds box số lượng hiển thị
var btnIncreases = $$(".increase"); //lấy ds nút tăng
var btnMovePages = $$(".move-pages__btn"); //ds nút chuyển trang;
// var btnMovePagesDrinks = $$(".drink-list .move-pages__btn");
var foodPageMenues = $$(".food .page-menu");
var drinkPageMenues = $$(".drink .page-menu");
var btnBackPage = $('.page__btn-back');
var btnNextPage = $('.page__btn-next');



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
});

//Hàm hiển thị danh sách đồ uống
btnMenues.forEach(function(btnMenu, index) {
    var menuItem = menuLists[index];
    btnMenu.addEventListener('click', function() {
        $('.btn-menu.active').classList.remove('active');
        this.classList.add('active');
        $('.menu-lists.menu-current').style.animation = 'showHidden linear .2s';
        setTimeout(function(){
            $('.menu-lists.menu-current').classList.remove('menu-current');
            menuItem.classList.add('menu-current');
        },200);
        menuItem.style.animation = 'hiddenShow linear .2s';
    })
});

//JS chuyển trang;
btnMovePages.forEach(function(btnMovePageFood , index){
    btnMovePageFood.addEventListener('click', function() {
        var foodPageMenue = foodPageMenues[index];
        var drinkPageMenue = drinkPageMenues[index];
        $('.move-pages__btn.active').classList.remove("active"); //Kiểm tra nếu nút đang active thì bỏ active;
        this.classList.add("active");
        $('.food .page-menu.page-current').classList.remove('page-current');
        foodPageMenue.classList.add('page-current');
        $('.drink .page-menu.page-current').classList.remove('page-current');
        drinkPageMenue.classList.add('page-current');
        
        if(index > 0) {
            btnBackPage.classList.remove('disable');
        }else {
            btnBackPage.classList.add('disable');
        }
    })
});




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
