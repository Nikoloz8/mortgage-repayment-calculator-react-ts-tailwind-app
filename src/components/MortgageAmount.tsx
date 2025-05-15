import type { Dispatch, SetStateAction } from "react";

type MortgageAmountProps = {
    textPreset4: string
    spanStyle: string
    ErrorAmount: boolean
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
    setErrorAmount: Dispatch<SetStateAction<boolean>>
    textPreset3: string
    inputStyle: string
    errorInput: React.CSSProperties
    textPreset5: string
};

export default function MortgageAmount({
    textPreset4,
    spanStyle,
    ErrorAmount,
    errorSpan,
    form,
    setForm,
    errors,
    setErrorAmount,
    textPreset3,
    inputStyle,
    errorInput,
    textPreset5
}: MortgageAmountProps) {
    return (
        <div>
            <label htmlFor="amount" className={textPreset4}>Mortgage Amount</label>
            <div className='flex spanHover1'>
                <span className={`${textPreset3} styledSpan1 ${spanStyle}`} style={ErrorAmount ? { ...errorSpan, borderLeft: "1px solid #D73328" } : undefined}>£</span>
                <input onChange={(e) => {
                    setForm({ ...form, [e.target.name]: e.target.value })
                    errors ? (e.target.value !== "" ? setErrorAmount(false) : setErrorAmount(true)) : undefined
                }} name='amount' value={form.amount} onKeyDown={(e) => e.key === "ArrowUp" || e.key === "ArrowDown" ? e.preventDefault() : null} onWheel={(e) => e.currentTarget.blur()} type="number" id='amount' className={`${inputStyle} hover:border-[#133041]! border-[1px_1px_1px_0] rounded-[0_5px_5px_0]! ${textPreset3}`} style={ErrorAmount ? { ...errorInput, borderRight: "1px solid #D73328" } : undefined} />
            </div>
            <p className={`${textPreset5} mt-[12px]!`} style={ErrorAmount ? { display: "block" } : { display: "none" }}>This field is required</p>
        </div>
    )
}

