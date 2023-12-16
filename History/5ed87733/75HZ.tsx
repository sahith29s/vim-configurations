import React from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { dotsHoverToggleState } from '../redux/feature/dotsHover/dotsHoverSlice';

import { RootState } from '../redux/store/store';

interface Props {
    setIsHoveringDots: React.Dispatch<React.SetStateAction<boolean>>;

}

const DotsHover = () => {

    const isDotsHover = useAppSelector((state: RootState) => state.dotsHover.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="absolute rounded-2xl w-[14rem] right-[-1rem]"
                onMouseOver={() => dispatch(dotsHoverToggleState)}
                onMouseOut={() => dispatch(dotsHoverToggleState)}
            >
                <div className='mt-2 bg-green-300 p-3 rounded-2xl'>

                    <ul>
                        <li >- Notification Preferences</li>
                        <li>- 24x7 Customer Care</li>
                        <li>- Advertise</li>
                        <li>- Download App</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default DotsHover