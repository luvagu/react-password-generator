export default function generatePassword(
	numOfChars = 8,
	includeUppercase = false,
	includeNumbers = false,
	includeSymbols = false
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
	const SymbolsCodes = [
		...getAsciiCharacters(33, 47),
		...getAsciiCharacters(58, 64),
		...getAsciiCharacters(91, 96),
		...getAsciiCharacters(123, 126),
	]

	let passwordCharCodes = LowerCaseCodes

	if (includeUppercase)
		passwordCharCodes = [...passwordCharCodes, ...UpperCaseCodes]
	if (includeNumbers)
		passwordCharCodes = [...passwordCharCodes, ...NumbersCodes]
	if (includeSymbols)
		passwordCharCodes = [...passwordCharCodes, ...SymbolsCodes]

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
