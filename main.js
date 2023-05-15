const menuSection = document.querySelectorAll('.menu-section');
const btns = document.querySelectorAll('.menu-tab')

const showSection = (id, e) => {
    const btn = e.target;
    btns.forEach(item => {
        item.classList.remove('menu-tab-active')
    })
    btn.classList.add('menu-tab-active')

	menuSection.forEach((item) => {
		item.style.display = 'none';
		const section = document.getElementById(id);
		section.style.display = 'block';
	});
};
