import { CircleProgressBar } from './components';

export default function Home() {
    return (
        <div className='w-full h-full'>
            <div>title</div>
            <div className='font-pre'>내 현재 칼로리</div>
            <div>내 현재 칼로리</div>
            <div>
                <CircleProgressBar value2={75} />
            </div>
            <div>article3</div>
            <div>article4</div>
        </div>
    );
}
