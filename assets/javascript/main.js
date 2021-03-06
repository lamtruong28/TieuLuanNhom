const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var btnOrders = $$(".btn-order"); //lấy ds nút đặt hàng;
var btnAddCarts = $$(".btn-add-cart"); //ds nút thêm giở hàng
var noticeQuantity = $('.header__bag-notice'); //số lượng thông báo ở giỏ hàng;
var Modal = $(".modal"); //lấy lớp phủ;
var btnCloseFormOrder = $(".form-orderclose"); //lấy nút đóng form đặt hàng
var containerOderForm = $(".form-order"); //lấy form đặt hàng
var btnMenues = $$(".btn-menu"); //lấy danh sách nút menu
var menuLists = $$(".menu-lists"); //lấy danh sách loại đồ bán (đồ ăn và nước uống)
var btnDecreases = $$(".decrease"); //lấy ds nút giảm
var boxQuantitys = $$(".quantity"); //lấy ds box số lượng hiển thị
var btnIncreases = $$(".increase"); //lấy ds nút tăng
var btnMovePages = $$(".move-pages__btn"); //ds nút chuyển trang;
var foodPageMenues = $$(".food .page-menu"); //ds trang đồ ăn;
var drinkPageMenues = $$(".drink .page-menu"); //ds trang đồ uống
var btnBackPage = $('.page__btn-back'); //nút lùi trang
var btnNextPage = $('.page__btn-next'); //nút tiến trang
// MOBIlE:
var menuMobile = $('.menu-mobile');
var menubarMobile = $('.navBar-mobile');
var menuMobileItems = $$('.navBar-mobile a');


//Hàm hiển thị modal;
function showFormOrder() {
    Modal.classList.remove('close');
    containerOderForm.classList.remove('close');
}

//Hàm ẩn modal
function hiddenFormOrder() {
    Modal.classList.add('close');
    menubarMobile.classList.add('close');
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

//Chuyển menu"
btnMenues.forEach(function(btnMenu, index) {
    var menuItem = menuLists[index];

    btnMenu.addEventListener('click', function() {
        $('.btn-menu.active').classList.remove('active');
        this.classList.add('active');

        $('.menu-lists.menu-current').style.animation = 'showHidden linear .2s';
        menuItem.style.animation = 'hiddenShow linear .2s';
        setTimeout(function(){
            $('.menu-lists.menu-current').classList.remove('menu-current');
            menuItem.classList.add('menu-current');
        },200);
        //xử lý đưa về trang 1;
        $('.move-pages__btn.active').classList.remove("active");
        btnMovePages[0].classList.add('active');
        $('.food .page-menu.page-current').classList.remove('page-current');
        foodPageMenues[0].classList.add('page-current');
        $('.drink .page-menu.page-current').classList.remove('page-current');
        drinkPageMenues[0].classList.add('page-current');
        btnBackPage.classList.add('disable');
        btnNextPage.classList.remove('disable');
        
        i = j = k = 1;
        x = y = z = index - 1;
    })
});

// JS chuyển trang;
btnMovePages.forEach(function(btnMovePage , index){
    btnMovePage.addEventListener('click', function() {
        var foodPageMenu = foodPageMenues[index];
        var drinkPageMenu = drinkPageMenues[index];

        $('.move-pages__btn.active').classList.remove("active"); //Kiểm tra nếu nút đang active thì bỏ active;
        this.classList.add("active");

        $('.food .page-menu.page-current').classList.remove('page-current');
        foodPageMenu.classList.add('page-current');

        $('.drink .page-menu.page-current').classList.remove('page-current');
        drinkPageMenu.classList.add('page-current');
        
        i = j = k = index + 1;;
        x = y = z = index - 1;
        if(index > 0)
            btnBackPage.classList.remove('disable');
        else 
            btnBackPage.classList.add('disable');

        if(i == 4)
            btnNextPage.classList.add('disable');
        else
            btnNextPage.classList.remove('disable');
    });
});

// js nút tới:
var i=1,j=1,k=1;
btnNextPage.addEventListener('click', function() {
    x=y=z=i-1;
    if(i < 4){
        $('.move-pages__btn.active').classList.remove("active");
        btnMovePages[i++].classList.add("active");
        $('.food .page-menu.page-current').classList.remove('page-current');
        foodPageMenues[j++].classList.add('page-current');
        $('.drink .page-menu.page-current').classList.remove('page-current');
        drinkPageMenues[k++].classList.add('page-current');
        btnBackPage.classList.remove('disable');
        if(i == 4)
            btnNextPage.classList.add('disable');
        else
            btnNextPage.classList.remove('disable');
    }
});

// JS nút lùi trang:
var x,y,z;
btnBackPage.addEventListener('click', function() {
    i=j=k=x+1;
    if(x >= 0){
        $('.move-pages__btn.active').classList.remove("active");
        btnMovePages[x--].classList.add("active");
        $('.food .page-menu.page-current').classList.remove('page-current');
        foodPageMenues[y--].classList.add('page-current');
        $('.drink .page-menu.page-current').classList.remove('page-current');
        drinkPageMenues[z--].classList.add('page-current');
        btnBackPage.classList.remove('disable');
        if(x == -1)
            btnBackPage.classList.add('disable');
        else
            btnBackPage.classList.remove('disable');
            btnNextPage.classList.remove('disable');
    }
});



//JS tăng giảm số lượng món;
const MAX = 10;

for (let i = 0; i < btnIncreases.length ; i++) {
    var btnIncrease = btnIncreases[i];
    btnIncrease.addEventListener('click', function() {
        if(boxQuantitys[i].value < MAX)
            boxQuantitys[i].value++;
        
        if(boxQuantitys[i].value == MAX)
            btnIncreases[i].classList.add('disable');
        btnDecreases[i].classList.remove('disable');
    })
    
}

for (let i = 0; i < btnDecreases.length ; i++) {
    var btnDecrease = btnDecreases[i];
    btnDecrease.addEventListener('click', function() {
        if(boxQuantitys[i].value > 0)
            boxQuantitys[i].value--;

        if(boxQuantitys[i].value==0)
            btnDecreases[i].classList.add('disable');
        btnIncreases[i].classList.remove('disable');
    }) 
}

// Js sự kiện bấm nút thêm vào giỏ hàng;
btnAddCarts.forEach(function(btnAddCart, index){
    btnAddCart.addEventListener('click',function() {
        if( boxQuantitys[index].value !=0 )
            noticeQuantity.value++;
    });
});

// JS menu mobile:

menuMobile.addEventListener('click', function() {
    menubarMobile.classList.remove('close');
    Modal.classList.remove('close');
    containerOderForm.classList.add('close');
})

//Đóng menu khi chọn item:

for(const menuMobileItem of menuMobileItems){
    menuMobileItem.addEventListener('click', function() {
        menubarMobile.classList.add('close');
        Modal.classList.add('close');
    });
}