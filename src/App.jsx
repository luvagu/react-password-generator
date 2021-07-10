import { useState } from 'react'

const generatePassword = (
	numOfChars = 8,
	includeUppercase = false,
	includeNumbers = false,
	includeSymbols = false
) => {
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

function App() {
	const [numOfChars, setNumOfChars] = useState(8)
	const [dysplayPassword, setDysplayPassword] = useState('password')
	const [options, setOptions] = useState({})
	const [isCopied, setIsCopied] = useState(false)
	const [isGenerated, setIsGenerated] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		setIsGenerated(true)
		setIsCopied(false)

		const password = generatePassword(
			numOfChars,
			options.uppercase,
			options.numbers,
			options.symbols
		)

		setDysplayPassword(password)
	}

	const handleChage = e => {
		setOptions(prevOptions => ({
			...prevOptions,
			[e.target.id]: e.target.checked,
		}))
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(dysplayPassword)
		setIsCopied(true)
	}

	return (
		<div className='container'>
			<h1 className='title'>Password Generator</h1>
			<h3 className='display-password'>{dysplayPassword}</h3>
			<form className='form-fields' onSubmit={handleSubmit}>
				<label htmlFor='rangeNumber'>Number of Characters:</label>
				<div className='input-range-number'>
					<input
						type='range'
						id='rangeNumber'
						min='1'
						max='50'
						value={numOfChars}
						onChange={e => setNumOfChars(parseInt(e.target.value))}
					/>
					<input
						type='number'
						id='rangeNumber'
						min='1'
						max='50'
						value={numOfChars}
						onChange={e => setNumOfChars(parseInt(e.target.value))}
						className='number-input'
					/>
				</div>
				<label htmlFor='uppercase'>Include Uppercase</label>
				<input type='checkbox' id='uppercase' onChange={handleChage} />
				<label htmlFor='numbers'>Include Numbers</label>
				<input type='checkbox' id='numbers' onChange={handleChage} />
				<label htmlFor='symbols'>Include Symbols</label>
				<input type='checkbox' id='symbols' onChange={handleChage} />
				<button type='submit' className='btn'>
					Generate Secure Password 🔒
				</button>
				{isGenerated && (
					<button type='button' className='btn' onClick={copyToClipboard}>
						{isCopied ? 'Copied ✔️' : 'Copy Password To Clipboard 📋'}
					</button>
				)}
			</form>
		</div>
	)
}

export default App
