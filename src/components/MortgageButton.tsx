import type { Dispatch, SetStateAction } from "react";

type MortgageButtonProps = {
    handleCalculate: () => void
    handleCalculateMethod: () => void
    activateErrors: Dispatch<SetStateAction<boolean>>
    textPreset3: string 
}

export default function MortgageButton({handleCalculate, handleCalculateMethod, activateErrors, textPreset3}:MortgageButtonProps) {
    return (
        <button onClick={() => {
            handleCalculate()
            handleCalculateMethod()
            activateErrors(true)
        }} className={`${textPreset3} rgbaButton max-w-[314px] bg-[#D8DB2F] mt-[16px]! flex gap-[12px] p-[16px_40px_16px_40px]! cursor-pointer rounded-[100px]`}><img src='images/icon-calculator.svg'></img> Calculate Repayments</button>)
}
