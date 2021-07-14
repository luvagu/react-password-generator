export default function checkPasswordStrength(password) {
	const weaknesses = []
	weaknesses.push(
		checkPasswordLength(password),
		checkLowercaseCharacters(password),
		checkUppercaseCharacters(password),
		checkNumberCharacters(password),
		checkSymbolCharacters(password),
		checkRepeatCharacters(password)
	)
	return strenghtCalculator(weaknesses)
}

function strenghtCalculator(weaknesses) {
	let strength = 100
	weaknesses.forEach(weakness => (strength -= weakness))

	if (strength === 100) {
		return {
			message: '💪 Probably Unhackable',
			strength,
		}
	}

	if (strength >= 80) {
		return {
			message: 'Very Strong',
			strength,
		}
	}

	if (strength >= 60 && strength < 80) {
		return {
			message: 'Strong',
			strength,
		}
	}

	if (strength >= 40 && strength < 60) {
		return {
			message: 'OK',
			strength,
		}
	}

	if (strength >= 20 && strength < 40) {
		return {
			message: 'Weak',
			strength,
		}
	}

	return {
		message: 'Very Weak',
		strength,
	}
}

// password length
function checkPasswordLength(password) {
	if (password.length <= 5) {
		return 40
	}

	if (password.length <= 10) {
		return 15
	}

	return 0
}

// 2 min lowercase characters
function checkLowercaseCharacters(password) {
	return checkMinCharacterType(password, /[a-z]/g)
}

// 2 min uppercase characters
function checkUppercaseCharacters(password) {
	return checkMinCharacterType(password, /[A-Z]/g)
}

// some number characters
function checkNumberCharacters(password) {
	return checkMinCharacterType(password, /[0-9]/g)
}

// some symbol characters
function checkSymbolCharacters(password) {
	return checkMinCharacterType(password, /[^a-zA-Z0-9\s]/g)
}

function checkMinCharacterType(password, regex) {
	const matches = password.match(regex) || []

	if (matches.length === 0) {
		return 20
	}

	if (matches.length <= 2) {
		return 5
	}

	return 0
}

// no consecutive repeat characters
function checkRepeatCharacters(password) {
	const matches = password.match(/(.)\1/g) || []

	if (matches.length > 0) {
		return 10
	}

	return 0
}
