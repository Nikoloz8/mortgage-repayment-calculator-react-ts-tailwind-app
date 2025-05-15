type MortgageCalculateDisplayTextProps = {
    textPreset2: string
    textPreset4: string
}

export default function MortgageCalculateDisplayText({textPreset2, textPreset4}:MortgageCalculateDisplayTextProps) {
    return (
        <div className='flex flex-col gap-[16px]'>
            <h2 className={`${textPreset2} text-[#ffffff]`}>Your results</h2>
            <p className={`${textPreset4} text-[#9ABED5]`}>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        </div>)
}
