const initializeIcons = () => {
	const icons = document.querySelectorAll('.hero > .icons .icon');

	// setup the dummy container
	const dummyContainer = document.createElement('div');

	// enter a dummy into each dummy container
	for (let i = 0; i < icons.length; i++) {}

	const expandIcon = (e) => {
		e.currentTarget.classList.add('active');
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
