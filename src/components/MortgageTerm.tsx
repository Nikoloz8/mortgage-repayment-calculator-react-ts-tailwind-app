import type { Dispatch, SetStateAction } from "react";

type MortgageTermProps = {
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
    setErrorTerm: Dispatch<SetStateAction<boolean>>
    ErrorTerm: boolean
}

export default function MortgageTerm({
    textPreset4,
    spanStyle,
    errorSpan,
    form,
    setForm,
    errors,
    textPreset3,
    inputStyle,
    errorInput,
    textPreset5,
    setErrorTerm,
    ErrorTerm
}: MortgageTermProps) {
    return (
        <div className='flex flex-col w-[50%]'>
            <label htmlFor="years" className={textPreset4}>Mortgage Term</label>
            <div className='flex spanHover2'>
                <input onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                    errors ? (e.target.value !== "" ? setErrorTerm(false) : setErrorTerm(true)) : undefined
                }} name='term' value={form.term} onKeyDown={(e) => e.key === "ArrowUp" || e.key === "ArrowDown" ? e.preventDefault() : null}
                    onWheel={(e) => e.currentTarget.blur()} type="number" id='years' className={`${inputStyle} ${textPreset3} border-[1px_0_1px_1px] hover:border-[#133041]! rounded-[5px_0_0_5px]!`} style={ErrorTerm ? { ...errorInput } : undefined} />
                <span className={`${spanStyle} styledSpan2 border-[1px_1px_1px_0] rounded-[0_5px_5px_0]! ${textPreset3} `} style={ErrorTerm ? { ...errorSpan, borderLeft: "1px solid #D73328" } : undefined}>Years</span>
            </div>
            <p className={`${textPreset5} mt-[12px]!`} style={ErrorTerm ? { display: "block" } : { display: "none" }}>This field is required</p>
        </div>)
}
