export default function generatePassword(
	numOfChars = 8,
	includeUppercase = false,
	includeNumbers = false,
	includeSpecial = false
) {
	// ASCII Character Codes Arrays
	// source: https://www.petefreitag.com/cheatsheets/ascii-codes/
	const getAsciiCharacters = (from, to) => {
		const codes = []
		for (let i = from; i <= to; i++) {
			codes.push(i)
		}
		return codes
	}

	const LowerCaseCodes = getAsciiCharacters(97, 122)
	const UpperCaseCodes = getAsciiCharacters(65, 90)
	const NumbersCodes = getAsciiCharacters(48, 57)
	const SpecialCharacters = [35, 37, 43, 58, 61, 63, 64] // #, %, +, :, =, ?, @

	let passwordCharCodes = LowerCaseCodes

	if (includeUppercase)
		passwordCharCodes = [...passwordCharCodes, ...UpperCaseCodes]
	if (includeNumbers)
		passwordCharCodes = [...passwordCharCodes, ...NumbersCodes]
	if (includeSpecial)
		passwordCharCodes = [...passwordCharCodes, ...SpecialCharacters]

	const password = []

	for (let i = 0; i < numOfChars; i++) {
		password.push(
			String.fromCharCode(
				passwordCharCodes[Math.floor(Math.random() * passwordCharCodes.length)]
			)
		)
	}

	return password.join('')
}
