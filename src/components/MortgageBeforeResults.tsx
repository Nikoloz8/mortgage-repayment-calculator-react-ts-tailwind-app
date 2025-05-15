type MortgageBeforeResultsProps = {
    calculateDisplay: boolean
    textPreset2: string
    textPreset4: string
}

export default function MortgageBeforeResults({ calculateDisplay, textPreset2, textPreset4 }: MortgageBeforeResultsProps) {
    return (
        <div className='w-[100%] flex flex-col justify-center items-center gap-[16px]' style={!calculateDisplay ? { display: "flex" } : { display: "none" }}>
            <img src="images/illustration-empty.svg" className='w-[192px]' alt="" />
            <h2 className={`${textPreset2} text-[#ffffff]`}>Results shown here</h2>
            <p className={`${textPreset4} text-center text-[#9ABED5]`}>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>)
}
