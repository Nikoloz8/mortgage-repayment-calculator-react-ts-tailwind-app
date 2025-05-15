import { useState } from "react"

export default function CalculatorLogics() {
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
    return {
        checked,
        setChecked,
        repayment,
        setRepayment,
        form,
        setForm,
        calculateDisplay,
        setCalculateDisplay,
        ErrorAmount,
        setErrorAmount,
        ErrorTerm,
        setErrorTerm,
        ErrorRate,
        setErrorRate,
        ErrorType,
        setErrorType,
        errors,
        activateErrors,
        P,
        r,
        n,
        M,
        MIT,
        I,
        clearInput,
        handleCheck,
        handleCalculate,
        handleCalculateMethod
    }
}
