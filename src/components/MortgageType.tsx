import type { Dispatch, SetStateAction } from "react";

type MortgageTypeProps = {
    setChecked:Dispatch<SetStateAction<number>>
    setErrorType:Dispatch<SetStateAction<boolean>>
    errors:boolean
    checked:number
    inputStyle: string
    roundInputStyle: string 
    textPreset3: string
    textPreset5: string
    textPreset4: string
    ErrorType:boolean
}

export default function MortgageType({ setChecked, setErrorType, errors, checked, inputStyle, roundInputStyle, textPreset3, textPreset5, textPreset4, ErrorType }: MortgageTypeProps) {
    return (
        <div className='flex flex-col gap-[12px]'>
            <label htmlFor="" className={textPreset4}>Mortgage Type</label>
            <div onClick={() => {
                setChecked(1)
                setErrorType(false)
                errors ? (checked !== 0 ? setErrorType(false) : setErrorType(true)) : undefined
            }} style={checked === 1 ? { background: "rgba(216, 219, 47, 0.15)", border: "1px solid #D8DB2F" } : undefined} className={`${inputStyle} cursor-pointer flex gap-[16px]`}>
                <div className={roundInputStyle} style={checked == 1 ? { border: "2px solid #D8DB2F" } : undefined}>
                    <div className='w-[11px] h-[11px] bg-[#D8DB2F] rounded-full hidden' style={checked == 1 ? { display: "block" } : undefined}>

                    </div>
                </div>
                <h3 className={textPreset3}>Repayment</h3>
            </div>
            <div onClick={() => {
                setChecked(2)
                setErrorType(false)
            }} style={checked === 2 ? {
                background: "rgba(216, 219, 47, 0.15)",
                border: "1px solid #D8DB2F"
            } : undefined} className={`${inputStyle} cursor-pointer flex gap-[16px]`}>
                <div className={roundInputStyle} style={checked == 2 ? { border: "2px solid #D8DB2F" } : undefined}>
                    <div className='w-[11px] h-[11px] bg-[#D8DB2F] rounded-full hidden' style={checked == 2 ? { display: "block" } : undefined}>
                    </div>
                </div>
                <h3 className={textPreset3}>Interest Only</h3>
            </div>
            <p className={`${textPreset5}`} style={ErrorType ? { display: "block" } : { display: "none" }}>This field is required</p>
        </div>)
}
