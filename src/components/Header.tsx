import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
    textPreset2: string
    textPreset4: string
    clearInput: () => void
    setCalculateDisplay: Dispatch<SetStateAction<boolean>>
}

export default function Header({ textPreset2, clearInput, textPreset4, setCalculateDisplay }: HeaderProps) {
    return (
        <div className='flex justify-between w-[100%] mb-[16px]!'>
            <h1 className={textPreset2}>Mortgage Calculator</h1>
            <button onClick={() => {
                setCalculateDisplay(false)
                clearInput
            }
            } className={`${textPreset4} cursor-pointer underline decoration-[1px] underline-offset-2`}>Clear All</button>
        </div >)
}
