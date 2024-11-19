import { MouseEventHandler, useState } from 'react';
import { Header } from '../../layouts';
import { clsx } from 'clsx';
import { Area, AreaChart, Legend, Tooltip, YAxis } from 'recharts';

const tabList = [
    { title: '변화추이', value: 'trendOfChange' },
    { title: '영양균형', value: 'nutritionBalance' },
    { title: '식사기록', value: 'mealLog' },
];
const kcalData = [
    { day: 'Day 1', calories: 1200, goal: 1600 },
    { day: 'Day 2', calories: 800, goal: 1600 },
    { day: 'Day 3', calories: 850, goal: 1600 },
    { day: 'Day 4', calories: 950, goal: 1600 },
    { day: 'Day 5', calories: 2000, goal: 1600 },
];

export default function Report() {
    const [tab, setTab] = useState<(typeof tabList)[number]['value']>('trendOfChange');

    const handleTab: MouseEventHandler<HTMLButtonElement> = (e) => {
        setTab(e.currentTarget.id as (typeof tabList)[number]['value']);
    };

    return (
        <div className='h-full font-pre'>
            <Header />

            <div className='flex w-full items-center gap-4 px-3 py-5'>
                {tabList.map(({ title, value }) => {
                    return (
                        <button
                            key={value}
                            id={value}
                            className={clsx(
                                'border-b-2 pb-2 text-lg font-semibold',
                                tab === value ? 'border-color1 text-color1' : 'border-transparent text-textColor2'
                            )}
                            onClick={handleTab}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>

            {tab === 'trendOfChange' && (
                <div>
                    <div>
                        <AreaChart width={400} height={300} data={kcalData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id='colorCalories' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#ffc8bf' stopOpacity={0.05} />
                                    <stop offset='100%' stopColor='#ffc8bf' stopOpacity={0.6} />
                                </linearGradient>
                            </defs>
                            <YAxis
                                // domain={[0, 3000]}
                                fontSize={12}
                                ticks={[0, 1000, 2000, 3000]}
                                label={{ value: '(kcal)', angle: 0, position: 'top', style: { fontSize: 12 } }}
                                padding={{ top: 10 }}
                                axisLine={false}
                            />
                            <Tooltip />
                            <Legend
                                payload={[
                                    { value: '섭취량', type: 'line', color: '#80bdff' },
                                    { value: '일일 권장 목표', type: 'line', color: '#cfe5fc' },
                                ]}
                                align='right'
                                verticalAlign='top'
                                // wrapperStyle={{
                                //     top: 0,
                                //     right: -150,
                                //     lineHeight: '40px',
                                // }}
                            />
                            {/* <ReferenceLine y={1700} name='a;sldk' stroke='#cfe5fc' strokeOpacity={0.8} strokeWidth={2} /> */}
                            <Area
                                type='linear'
                                dataKey='goal'
                                name='일일 권장 목표'
                                stroke='#cfe5fc'
                                strokeOpacity={0.8}
                                strokeWidth={2}
                                fill='transparent'
                            />
                            <Area
                                type='linear'
                                dot
                                name='섭취'
                                dataKey='calories'
                                stroke='#80bdff'
                                fillOpacity={1}
                                strokeWidth={2}
                                fill='url(#colorCalories)'
                            />
                        </AreaChart>
                    </div>
                </div>
            )}
            {tab === 'nutritionBalance' && <div>영양균형</div>}
            {tab === 'mealLog' && <div>식사기록</div>}
        </div>
    );
}
