import { Pie, PieChart } from 'recharts';

/**
 * 잔여 칼로리 컴포넌트
 * @param {{value1?:number; value2: number;title?:string, text1?:string, text2?:string}} param0 value1:전체 percent, value2: 나타낼 percent, title, text1, text2
 * @returns
 */
export default function CircleProgressBar({
    value1 = 100,
    value2 = 75,
    title = 'ㅤ',
    text1 = 'ㅤ',
    text2 = 'ㅤ',
}: {
    value1?: number;
    value2: number;
    title?: string;
    text1?: string | number;
    text2?: string;
}) {
    const data = [
        { value: value2, opacity: 1 },
        { value: value1 - value2, opacity: 0 },
    ];
    return (
        <div>
            <div className='text-center relative w-[200px] h-[200px]'>
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ value: 100 }]} // 전체 배경용 값 100%
                        startAngle={-140} // 반원을 만들기 위한 시작 각도
                        endAngle={-400} // 반원을 만들기 위한 끝 각도
                        innerRadius={60}
                        outerRadius={80}
                        fill='#e0e0e0' // 배경색 설정
                        dataKey='value'
                        cornerRadius={10}
                        animationDuration={0}
                    />
                    <defs>
                        <linearGradient id='gradientColor' x1='0' y1='0' x2='1' y2='1'>
                            <stop offset='0%' stopColor='#4CAF50' /> {/* 시작 색상 */}
                            <stop offset='100%' stopColor='#81C784' /> {/* 끝 색상 */}
                        </linearGradient>
                    </defs>

                    <Pie
                        data={data}
                        startAngle={-140}
                        endAngle={-400}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey='value'
                        fill='url(#gradientColor)'
                        cornerRadius={10}
                    ></Pie>
                </PieChart>
                <div className='absolute w-[200px] h-[200px] top-[50px] left-0'>
                    <div className='text-[14px] text-[#888]'>{title}</div>
                    <div className='text-[32px] font-bold text-[#333]'>{text1}</div>
                    <div className='text-[14px] text-[#888]'>{text2}</div>
                </div>
            </div>
        </div>
    );
}
