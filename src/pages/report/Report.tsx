import { MouseEventHandler, useState } from 'react';
import { Header } from '../../layouts';
import { clsx } from 'clsx';

const tabList = [
    { title: '변화추이', value: 'trendOfChange' },
    { title: '영양균형', value: 'nutritionBalance' },
    { title: '식사기록', value: 'mealLog' },
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

            {tab === 'trendOfChange' && <div>변화추이</div>}
            {tab === 'nutritionBalance' && <div>영양균형</div>}
            {tab === 'mealLog' && <div>식사기록</div>}
        </div>
    );
}
