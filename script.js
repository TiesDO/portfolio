const initializeIcons = () => {
	const icons = document.querySelectorAll('.hero > .icons .icon');

	// description text containers
	const descriptions = document.querySelector('#toolDescriptions');

	// enter a dummy into each dummy container
	for (let i = 0; i < icons.length; i++) {}

	const expandIcon = (e) => {
		// add expanding class
		e.currentTarget.classList.add('active');

		// what description should it show
		let description = e.currentTarget.dataset.toggleFor;

		// toggle the correct tool description
		descriptions.classList.add('active');
	};

	icons.forEach((icon) => {
		icon.addEventListener('click', expandIcon);
	});
};

// run app
const run = () => {
	initializeIcons();
};

run();
