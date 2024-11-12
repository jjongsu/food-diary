import { CircleProgressBar, DrinkWater } from './components';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPerson } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { GoInbox } from 'react-icons/go';

export default function Diary() {
    return (
        <div className='h-full font-pre'>
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

            <div className='flex items-center justify-between px-3 py-5'>
                <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-textColor2 bg-opacity-20 px-3 py-1.5 text-sm font-semibold'>2024년 11월 12일</div>
                    <IoIosArrowBack size={24} className='rounded-full fill-textColor2' />
                    <IoIosArrowForward size={24} className='rounded-full fill-textColor2' />
                </div>
                <div className='flex h-9 w-9 flex-col items-center justify-center rounded-full bg-color2'>
                    <FaPerson size={16} className='fill-color1' />
                    <div className='w-full text-center text-[8px] font-extrabold text-color1'>KG</div>
                </div>
            </div>

            <div className='flex w-full items-center justify-center gap-12 py-5'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm text-textColor2'>일일권장</div>
                        <div className='text-xl font-bold text-textColor1'>1,646</div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm text-textColor2'>섭취</div>
                        <div className='text-xl font-bold text-textColor1'>1,541</div>
                    </div>
                </div>
                <CircleProgressBar value2={75} title='잔여' text1={105} text2='kcal' />
            </div>

            <div className='grid grid-cols-3 px-3 py-5'>
                <div className='flex flex-col gap-4 px-2'>
                    <div className='text-sm font-bold text-textColor1'>탄수화물</div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex text-xs'>
                            <div className='font-bold'>181</div>
                            <div className='text-textColor2'>/226g</div>
                        </div>
                        <div className='h-3 w-full rounded-full bg-textColor2'>
                            <div className='h-3 w-[50px] rounded-full bg-color1'></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 px-2'>
                    <div className='text-sm font-bold text-textColor1'>단백질</div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex text-xs'>
                            <div className='font-bold'>181</div>
                            <div className='text-textColor2'>/226g</div>
                        </div>
                        <div className='h-3 w-full rounded-full bg-textColor2'>
                            <div className='h-3 w-[50px] rounded-full bg-color1'></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 px-2'>
                    <div className='text-sm font-bold text-textColor1'>지방</div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex text-xs'>
                            <div className='font-bold'>181</div>
                            <div className='text-textColor2'>/226g</div>
                        </div>
                        <div className='h-3 w-full rounded-full bg-textColor2'>
                            <div className='h-3 w-[50px] rounded-full bg-color1'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-3 w-full bg-backColor'></div>

            <div className='flex items-center justify-between px-3 py-5'>
                <div className='text-xl font-bold text-textColor1'>식사기록</div>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-color2'>
                    <FaPlus className='fill-color1' size={20} />
                </div>
            </div>
            <div className='flex flex-col gap-3 px-3 py-5 text-lg'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='font-semibold text-textColor1'>아침</div>
                        <div className='flex items-center justify-center'>
                            <div>1,541</div>
                            <div className='text-textColor2'>/kcal</div>
                        </div>
                    </div>

                    <div className='flex gap-2 py-2'>
                        <div className='grid h-[100px] w-[100px] place-items-center rounded-xl bg-textColor2 bg-opacity-20'>
                            <GoInbox className='fill-textColor2' opacity={0.3} size={35} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='font-semibold text-textColor1'>점심</div>
                        <div className='flex items-center justify-center'>
                            <div>0</div>
                            <div className='text-textColor2'>/kcal</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='font-semibold text-textColor1'>저녁</div>
                        <div className='flex items-center justify-center'>
                            <div>0</div>
                            <div className='text-textColor2'>/kcal</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-3 w-full bg-backColor'></div>

            <DrinkWater />
        </div>
    );
}
