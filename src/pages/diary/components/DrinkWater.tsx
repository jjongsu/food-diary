import { MouseEventHandler, useEffect, useRef, useState } from 'react';

export default function DrinkWater() {
    const [water, setWater] = useState(0);
    const gaugeRef = useRef<HTMLDivElement>(null);
    const handleWater: MouseEventHandler<HTMLButtonElement> = (e) => {
        const isAdd = e.currentTarget.id === 'plus';
        setWater((prev) => {
            if (isAdd) return Number((prev + 0.2).toFixed(2));
            return Number(Math.max(prev - 0.2, 0).toFixed(2));
        });
    };

    useEffect(() => {
        const percent = Math.max(Math.min(1, water / 2), 0) * 100;
        if (gaugeRef.current) {
            gaugeRef.current.setAttribute('style', `width: ${percent}%;`);
        }

        return () => {};
    }, [water]);

    return (
        <>
            <div className='px-3 py-5'>
                <div className='text-xl font-bold text-textColor1'>물 섭취</div>
            </div>

            <div className='flex flex-col gap-4 px-3 py-3'>
                <div className='flex items-baseline'>
                    <div className='text-3xl font-semibold'>{water}</div>
                    <div className='text-sm text-textColor2'>/2L</div>
                </div>
                <div className='h-3 w-full rounded-full bg-textColor2'>
                    <div ref={gaugeRef} className='h-3 rounded-full bg-color1'></div>
                </div>

                <div className='flex h-[50px] w-full items-center gap-2 text-center text-color1'>
                    <button id={'plus'} className='h-full flex-1 rounded-xl bg-color2' onClick={handleWater}>
                        + 200ml
                    </button>
                    <button id={'minus'} className='flex-0 h-full w-[50px] rounded-xl bg-color2' onClick={handleWater}>
                        -
                    </button>
                </div>
            </div>
        </>
    );
}
