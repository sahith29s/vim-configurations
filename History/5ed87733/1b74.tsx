import React from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { dotsHoverSetFalse, dotsHoverSetTrue } from '../redux/feature/dotsHover/dotsHoverSlice';

import { RootState } from '../redux/store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faCrosshairs, faMultiply } from '@fortawesome/free-solid-svg-icons';

interface Props {
    setIsHoveringDots: React.Dispatch<React.SetStateAction<boolean>>;

}

const DotsHover = () => {

    // const isDotsHover = useAppSelector((state: RootState) => state.dotsHover.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="absolute  right-[-1rem]"
                onMouseOver={() => dispatch(dotsHoverSetTrue())}
            // onMouseOut={() => dispatch(dotsHoverSetFalse())}
            >
                <div className='mt-[-2rem] w-[14rem] bg-green-300 p-3 rounded-2xl'>

                    <div  className='border-2 inline-block px-2 rounded-3xl border-black float-right clear-both'>

                        <FontAwesomeIcon icon={faMultiply} />
                    </div>
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