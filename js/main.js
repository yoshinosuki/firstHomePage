// 获取上下页按钮和页数显示元素
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const pageSpan = document.querySelector('#page');
// 获取所有页面元素
const pages = document.querySelectorAll('.page');
// 当前页数
let currentPage = 0;
// 给上一页按钮添加点击事件
prevBtn.addEventListener('click', function() {
  // 如果当前不是第一页，则切换到上一页
  if (currentPage > 0) {
    // 隐藏当前页面
    pages[currentPage].classList.remove('active');
    // 切换到上一页
    currentPage--;
    // 显示上一页
    pages[currentPage].classList.add('active');
    // 更新页数显示
    pageSpan.textContent = currentPage + 1;
  }
});
// 给下一页按钮添加点击事件
nextBtn.addEventListener('click', function() {
  // 如果当前不是最后一页，则切换到下一页
  if (currentPage < pages.length - 1) {
    // 隐藏当前页面
    pages[currentPage].classList.remove('active');
    // 切换到下一页
    currentPage++;
    // 显示下一页
    pages[currentPage].classList.add('active');
    // 更新页数显示
    pageSpan.textContent = currentPage + 1;
  }
});






const form = document.getElementById("search-form");
form.addEventListener("submit", e => {
	e.preventDefault();
	const searchInput = form.querySelector("input[type='text']");
	const searchTerm = searchInput.value.toLowerCase();
	const cols = document.querySelectorAll(".col");
	cols.forEach(col => {
		const title = col.querySelector("h2").textContent.toLowerCase();
		if (title.includes(searchTerm)) {
			col.style.display = "block";
		} else {
			col.style.display = "none";
		}
	});
});


function search() {
	let input = document.getElementById("search-form").value;
	let images = document.getElementsByClassName("column");
	for (let i = 0; i < images.length; i++) {
	if (images[i].innerText.toLowerCase().includes(input.toLowerCase())) {
	window.scrollTo(0, images[i].offsetTop);
	break;
	}
	}
	}

