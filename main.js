const menuSection = document.querySelectorAll('.menu-section');
const btns = document.querySelectorAll('.menu-tab')

const showSection = (id) => {
    btns.forEach(tab => {tab.classList.remove('menu-tab-active')})
	menuSection.forEach((section) => {section.style.display = 'none'})

    document.getElementById(id).style.display = 'block';

	const currentActiveBtn = document.querySelector(`[data-id='${id}']`)
    currentActiveBtn.classList.add('menu-tab-active')
};


// VERSION with e.target
// const showSection = (id, e) => {
//     const btn = e.target;
//     btns.forEach(item => {
//         item.classList.remove('menu-tab-active')
//     })
//     btn.classList.add('menu-tab-active')

// 	menuSection.forEach((item) => {
// 		item.style.display = 'none';
// 		const section = document.getElementById(id);
// 		section.style.display = 'block';
// 	});
// };