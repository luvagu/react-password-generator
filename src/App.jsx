function App() {
	return (
		<div className='container'>
			<h1 className='title'>Password Generator</h1>
			<h3 className='display-password'>
				password
			</h3>
			<form className='form-fields'>
					<label htmlFor=''>Number of characters:</label>
					<div className='input-range-number'>
						<input type='range' min='1' max='50' />
						<input type='number' min='1' max='50' className='number-input' />
					</div>
          <label htmlFor="uppercase">Include Uppercase</label>
          <input type="checkbox" id="uppercase" />
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" id="numbers" />
          <label htmlFor="symbols">Include Symbols</label>
          <input type="checkbox" id="symbols" />
          <button type="submit" className="btn">Generate Password</button>
			</form>
		</div>
	)
}

export default App
