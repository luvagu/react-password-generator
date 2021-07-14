import { useEffect, useRef, useState } from 'react'
import { checkPasswordStrength, generatePassword } from './helpers'

function App() {
	const [numOfChars, setNumOfChars] = useState(10)
	const [displayPassword, setDisplayPassword] = useState('password')
	const [options, setOptions] = useState({})
	const [isCopied, setIsCopied] = useState(false)
	const [isGenerated, setIsGenerated] = useState(false)
	const [paswordStrength, setPaswordStrength] = useState(
		checkPasswordStrength(displayPassword)
	)

	const passwordMeter = useRef()

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

		setDisplayPassword(password)
	}

	const handleChage = e => {
		setOptions(prevOptions => ({
			...prevOptions,
			[e.target.id]: e.target.checked,
		}))
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(displayPassword)
		setIsCopied(true)
	}

	useEffect(() => {
		passwordMeter.current.style.setProperty(
			'--strength',
			paswordStrength.strength
		)
	}, [paswordStrength])

	useEffect(() => {
		setPaswordStrength(checkPasswordStrength(displayPassword))
	}, [displayPassword])

	return (
		<div className='container'>
			<h1 className='title'>Password Generator</h1>
			<h3 className='display-password'>{displayPassword}</h3>
			{paswordStrength && (
				<div ref={passwordMeter} className='password-meter'>
					<span>
						{paswordStrength.message} ({paswordStrength.strength}/100)
					</span>
				</div>
			)}
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
