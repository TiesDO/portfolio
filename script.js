const initializeIcons = () => {
	const icons = document.querySelectorAll('.hero .icons .icon');

	// description text containers
	const descriptions = document.querySelector('#toolDescriptions');

	// enter a dummy into each dummy container
	for (let i = 0; i < icons.length; i++) {}

	const expandIcon = (e) => {
		// add expanding class
		e.currentTarget.classList.add('active');

		// what description should it show
		let target = e.currentTarget.dataset.toggleFor;

		// toggle the correct tool description
		descriptions
			.querySelector(`div[data-text-for='${target}']`)
			.classList.add('active');

		// make the container visible
		descriptions.classList.add('active');

		// swap the onclick listener to close
		e.currentTarget.removeEventListener('click', expandIcon);
		e.currentTarget.addEventListener('click', collapseIcon);
	};

	const collapseIcon = (e) => {
		e.currentTarget.classList.remove('active');

		let target = e.currentTarget.dataset.toggleFor;

		// toggle the correct tool description
		descriptions
			.querySelector(`div[data-text-for='${target}']`)
			.classList.remove('active');

		// make the container visible
		descriptions.classList.remove('active');

		// swap the event listener
		e.currentTarget.removeEventListener('click', collapseIcon);
		e.currentTarget.addEventListener('click', expandIcon);
	};

	icons.forEach((icon) => {
		icon.addEventListener('click', expandIcon);
	});
};

close();

// run app
const run = () => {
	initializeIcons();
};

run();
