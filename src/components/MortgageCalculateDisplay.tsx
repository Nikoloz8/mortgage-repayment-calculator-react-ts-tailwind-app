
type MortgageCalculateDisplayProps = {
    textPreset4: string
    repayment: boolean | undefined
    P: number
    r: number
    I: (P: number, r: number) => number
    textPreset2: string
    n: number
    MIT: (value: number, n: number) => number
    M: (P: number, r: number, n: number) => number
}


export default function MortgageCalculateDisplay({ textPreset4, repayment, P, r, I, textPreset2, n, MIT, M }: MortgageCalculateDisplayProps) {
    return (
        <div className=' gap-[8px] flex flex-col p-[32px]! w-[100%] rounded-[8px] border-[4px_0_0_0] border-solid border-[#D8DB2F] bg-[#112431]'>
            <p className={`${textPreset4} text-[#9ABED5]`}>Your monthly repayments</p>
            <h1 className='text-[5.6rem] leading-[125%] font-[700] text-[#D8DB2F]'>{repayment ? M(P, r, n).toFixed(2) : !repayment ? I(P, r).toFixed(2) : null}</h1>
            <span className='w-[100%] h-[1px] m-[24px_0_24px_0]! block' style={{ backgroundColor: "rgba(154, 190, 213, 0.25)" }}></span>
            <p className={`${textPreset4} text-[#9ABED5]`}>Total you'll repay over the term</p>
            <h2 className={`${textPreset2} text-[#ffffff]`}>{repayment ? MIT(M(P, r, n), n).toFixed(2) : !repayment ? MIT(I(P, r), n).toFixed(2) : null}</h2>
        </div>)
}
