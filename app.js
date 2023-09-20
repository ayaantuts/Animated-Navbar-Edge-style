const nav_1 = document.querySelector(".nav-1");
const links = nav_1.querySelectorAll(".link");
const line = nav_1.querySelector(".line");
links.forEach(link => {
	link.addEventListener("click", () => {
		links.forEach(l => {
			l.classList.remove("active");
		});

		link.classList.add("active");
		line.style.left = `${link.getBoundingClientRect().left}px`;
		line.style.top = `${nav_1.offsetHeight - 4}px`;
		line.style.width = `${link.offsetWidth + 8}px`;
	});
});

var ev = new Event("click");
links[0].dispatchEvent(ev);