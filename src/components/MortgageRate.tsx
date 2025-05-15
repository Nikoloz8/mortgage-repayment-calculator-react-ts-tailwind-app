import type { Dispatch, SetStateAction } from "react";

type MortgageRateProps = {
    textPreset4: string
    spanStyle: string
    errorSpan: React.CSSProperties
    form: {
        amount: string
        term: string
        rate: string
    };
    setForm: Dispatch<SetStateAction<{
        amount: string
        term: string
        rate: string
    }>>;
    errors: boolean
    textPreset3: string
    inputStyle: string
    errorInput: React.CSSProperties
    textPreset5: string
    setErrorRate: Dispatch<SetStateAction<boolean>>
    ErrorRate: boolean
}

export default function MortgageRate({ textPreset4,
    spanStyle,
    errorSpan,
    form,
    setForm,
    errors,
    textPreset3,
    inputStyle,
    errorInput,
    textPreset5,
    setErrorRate,
    ErrorRate}:
     MortgageRateProps) {
    return (
        <div className='flex flex-col w-[50%]'>
            <label htmlFor="rate" className={textPreset4}>Interest Rate</label>
            <div className='flex spanHover3'>
                <input onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                    errors ? (e.target.value !== "" ? setErrorRate(false) : setErrorRate(true)) : undefined
                }} name='rate' value={form.rate} onWheel={(e) => e.currentTarget.blur()} onKeyDown={(e) => e.key === "ArrowUp" || e.key === "ArrowDown" ? e.preventDefault() : null} type="number" id='rate' className={`${inputStyle} ${textPreset3} border-[1px_0_1px_1px] hover:border-[#133041]! rounded-[5px_0_0_5px]!`} style={ErrorRate ? { ...errorInput } : undefined} />
                <span className={`${spanStyle} border-[1px_1px_1px_0] styledSpan3 rounded-[0_5px_5px_0]! ${textPreset3} `} style={ErrorRate ? { ...errorSpan, borderLeft: "1px solid #D73328" } : undefined}>%</span>
            </div>
            <p className={`${textPreset5} mt-[12px]!`} style={ErrorRate ? { display: "block" } : { display: "none" }}>This field is required</p>
        </div>
    )
}
