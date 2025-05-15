import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import MortgageAmount from './components/MortgageAmount'
import MortgageTerm from './components/MortgageTerm'
import MortgageRate from './components/MortgageRate'
import MortgageType from './components/MortgageType'
import MortgageButton from './components/MortgageButton'
import MortgageBeforeResults from './components/MortgageBeforeResults'
import MortgageCalculateDisplayText from './components/MortgageCalculateDisplayText'
import MortgageCalculateDisplay from './components/MortgageCalculateDisplay'

function App() {

  const textPreset2: string = "text-[#133041] font-[800] leading-[125%] text-[2.4rem]"
  const textPreset4: string = "text-[#4E6E7E] text-[1.6rem] font-[500] leading-[150%] tracking-[0%]"
  const textPreset3: string = "text-[1.8rem] text-[#133041] leading-[125%] tracking-[0%] font-[700]"
  const textPreset5: string = "font-[600] text-[1.4rem] text-[#D73328] leading-[150%] tracking-[0%]"
  const inputStyle: string = "no-spinner hover:border-[#D8DB2F] border-solid border-[1px] border-[#6B94A8] rounded-[5px] p-[16px]! outline-hidden w-[100%]"
  const spanStyle: string = "bg-[#E4F4FD] p-[16px]! border-[#6B94A8] rounded-[5px_0_0_5px] min-h-[56.5px] border-[1px_0_1px_1px]"
  const roundInputStyle: string = "flex items-center justify-center border-[2px] border-solid border-[#4E6E7E] rounded-[100%] w-[20px] h-[20px]"

  const [checked, setChecked] = useState(0)

  const [repayment, setRepayment] = useState<boolean | undefined>(undefined)

  const [form, setForm] = useState({
    amount: "",
    term: "",
    rate: ""
  })

  const P: number = parseFloat(form.amount)
  const r: number = (parseFloat(form.rate) / 100) / 12
  const n: number = parseFloat(form.term) * 12

  const M = (P: number, r: number, n: number): number => {
    return P * (r * (1 + r) ** n) / ((1 + r) ** n - 1)
  }

  const MIT = (M: number, n: number): number => {
    return M * n
  }

  const I = (P: number, r: number): number => {
    return P * r
  }


  function clearInput(): void {
    setForm({ amount: "", term: "", rate: "" })
    setChecked(0)
  }

  const [calculateDisplay, setCalculateDisplay] = useState<boolean>(false)

  const [ErrorAmount, setErrorAmount] = useState<boolean>(false)
  const [ErrorTerm, setErrorTerm] = useState<boolean>(false)
  const [ErrorRate, setErrorRate] = useState<boolean>(false)
  const [ErrorType, setErrorType] = useState<boolean>(false)

  const handleCheck = (): void => {
    checked === 0 ? setErrorType(true) : setErrorType(false)
  }

  const [errors, activateErrors] = useState(false)

  function handleCalculate(): void {
    form.amount === "" ? setErrorAmount(true) : setErrorAmount(false)
    form.term === "" ? setErrorTerm(true) : setErrorTerm(false)
    form.rate === "" ? setErrorRate(true) : setErrorRate(false)
    checked === 0 ? setErrorType(true) : setErrorType(false)
    handleCheck()

    form.amount != "" && form.rate != "" && form.term != "" && checked != 0 ? setCalculateDisplay(true) : setCalculateDisplay(false)
  }


  function handleCalculateMethod(): void {
    checked === 1 ? setRepayment(true) : checked === 2 ? setRepayment(false) : null
  }

  const errorSpan = {
    backgroundColor: "#D73328", borderTop: "1px solid #D73328", borderBottom: "1px solid #D73328", borderRight: "1px solid #D73328", color: "#ffffff"
  }

  const errorInput = {
    borderTop: "1px solid #D73328", borderBottom: "1px solid #D73328", borderLeft: "1px solid #D73328"
  }

  return (
    <>
      <div className='flex max-lg:flex-col max-w-[1000px] bg-[#ffffff] rounded-[20px] overflow-hidden max-lg:m-[20px]! '>
        <div className='p-[40px]! max-lg:w-[100%] max-lg:p-[20px]! w-[50%] bg-[#FFFFFF] flex flex-col gap-[24px]'>
          <Header
            textPreset2={textPreset2}
            textPreset4={textPreset4}
            clearInput={clearInput} />

          <MortgageAmount
            textPreset4={textPreset4}
            spanStyle={spanStyle}
            ErrorAmount={ErrorAmount}
            errorSpan={errorSpan}
            form={form}
            setForm={setForm}
            errors={errors}
            setErrorAmount={setErrorAmount}
            textPreset3={textPreset3}
            inputStyle={inputStyle}
            errorInput={errorInput}
            textPreset5={textPreset5} />
          <div className='flex w-[100%] gap-[24px]'>
            <MortgageTerm
              textPreset4={textPreset4}
              spanStyle={spanStyle}
              errorSpan={errorSpan}
              form={form}
              setForm={setForm}
              errors={errors}
              textPreset3={textPreset3}
              inputStyle={inputStyle}
              errorInput={errorInput}
              textPreset5={textPreset5}
              setErrorTerm={setErrorTerm}
              ErrorTerm={ErrorTerm}
            />
            <MortgageRate
              textPreset4={textPreset4}
              spanStyle={spanStyle}
              errorSpan={errorSpan}
              form={form}
              setForm={setForm}
              errors={errors}
              textPreset3={textPreset3}
              inputStyle={inputStyle}
              errorInput={errorInput}
              textPreset5={textPreset5}
              setErrorRate={setErrorRate}
              ErrorRate={ErrorRate}
            />
          </div>

          <MortgageType
            setChecked={setChecked}
            setErrorType={setErrorType}
            errors={errors}
            checked={checked}
            inputStyle={inputStyle}
            roundInputStyle={roundInputStyle}
            textPreset3={textPreset3}
            textPreset5={textPreset5}
            textPreset4={textPreset4}
            ErrorType={ErrorType}
          />

          <MortgageButton
            handleCalculate={handleCalculate}
            handleCalculateMethod={handleCalculateMethod}
            activateErrors={activateErrors}
            textPreset3={textPreset3}
          />
        </div>

        <div className='w-[50%] max-lg:w-[100%] max-lg:rounded-[0_0_20px_20px] p-[40px]! bg-[#133041] flex justify-center rounded-[0_0_0_80px]'>
          <MortgageBeforeResults
            calculateDisplay={calculateDisplay}
            textPreset2={textPreset2}
            textPreset4={textPreset4}
          />
          <div className='flex-col max-w-[440px] gap-[40px]' style={calculateDisplay ? { display: "flex" } : { display: "none" }}>
            <MortgageCalculateDisplayText
              textPreset2={textPreset2}
              textPreset4={textPreset4}
            />
            <MortgageCalculateDisplay
              textPreset4={textPreset4}
              repayment={repayment}
              P={P}
              r={r}
              I={I}
              textPreset2={textPreset2}
              n={n}
              MIT={MIT}
              M={M}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
