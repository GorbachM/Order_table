let burgerMenu = document.querySelector(".burger-menu");
let aside = document.querySelector(".aside");
let wrapper = document.querySelector('.wrapper');

burgerMenu.addEventListener("click", function() {
    aside.classList.toggle("open");
    wrapper.classList.toggle('open');
});




function openTab(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Получаем выпадающий список
let select = document.querySelector('select');

// Обрабатываем изменение значения в списке
select.addEventListener('change', function() {
    // Получаем выбранную опцию
    let selectedOption = this.options[this.selectedIndex];

    // Удаляем класс "default-option" у выбранной опции
    selectedOption.classList.remove('default-option');
});



let table = document.getElementById("myTable");
let rowsPerPage = 15;
let currentPage = 1;
let nextPath = document.getElementById('nextPath');
let prevPath = document.getElementById('prevPath');

function showPage(page) {
    let startIndex = (page - 1) * rowsPerPage + 1;
    let endIndex = startIndex + rowsPerPage;

    for (let i = 1; i < table.rows.length; i++) {
        if (i >= startIndex && i < endIndex) {
            table.rows[i].style.display = "table-row";
            prevPath.style.stroke = '#A1A5BA'
        } else {
            table.rows[i].style.display = "none";
            prevPath.style.stroke = '#E7E9ED'
        }
    }
    let totalPages = Math.ceil((table.rows.length - 1) / rowsPerPage);

    let pageNumberElement = document.getElementById("pageNumber");
    pageNumberElement.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement("span");
        pageButton.textContent = i;
        pageButton.classList.add("page-number");

        if (i === page) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", function() {
            currentPage = parseInt(this.textContent);
            showPage(currentPage);
        });

        pageNumberElement.appendChild(pageButton);
    }


    let startIndex1 = (currentPage) * rowsPerPage;
    let endIndex1 = startIndex1 + rowsPerPage - 1;
    let items = data.slice(startIndex1, endIndex1);
    console.log(items);
// Отображаем элементы на странице
    let rowCount = table.rows.length;
    let itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.innerHTML = startIndex + "-" + (startIndex + 14)  + " of " + rowCount;

    let ordersCount = document.getElementById('ordersCount');
    ordersCount.innerHTML = table.rows.length;;

}
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];




function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < Math.ceil((table.rows.length - 1) / rowsPerPage)) {
        currentPage++;

        showPage(currentPage);
    }
}
function changePerPage() {
    rowsPerPage = parseInt(document.getElementById("perPageSelect").value);
    currentPage = 1;
    showPage(currentPage);
}

showPage(currentPage);

