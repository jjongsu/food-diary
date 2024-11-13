import { FaRegUser } from 'react-icons/fa';

export default function Header() {
    return (
        <div className='flex w-full items-center justify-between border px-3 py-2'>
            <div className='flex items-center gap-3'>
                <div className='text-xl font-bold text-textColor1'>황종수님</div>
                <div className='flex gap-1 rounded-lg bg-backColor px-1.5 py-1 text-sm'>
                    <div className='text-textColor1'>기록누적</div>
                    <div className='font-bold text-textColor1'>0일째</div>
                </div>
            </div>
            <FaRegUser size={24} />
        </div>
    );
}
