window.addEventListener('click', e => {
	let stepTwo = document.querySelector('.steps li:nth-child(2)')
	let stepOne = document.querySelector('.steps li:first-child')
	let bodyAll = document.querySelector('.all')
	let formWrapper = document.querySelector('.form-wrapper')
	if (second.checked){
		stepTwo.classList.add('step-active')
		stepOne.classList.add('next-active')
		bodyAll.classList.add('step-two-active')
		formWrapper.classList.add('form-wrapper-step-two-active')
	} else if (!second.checked) {
		stepTwo.classList.remove('step-active')
		stepOne.classList.remove('next-active')
		bodyAll.classList.remove('step-two-active')
		formWrapper.classList.remove('form-wrapper-step-two-active')
	}
})
