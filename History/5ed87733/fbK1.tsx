import React from 'react'

interface Props {
    setIsHoveringDots: React.Dispatch<React.SetStateAction<boolean>>;

}

const DotsHover = ({ setIsHoveringDots }: Props) => {

    return (
        <>
            <div className="absolute bg-green-300 mt-[-2rem] rounded-2xl p-3 w-[14rem] right-[-1rem]"
                onMouseOver={() => setIsHoveringDots(true)}
                onMouseOut={() => setIsHoveringDots(false)}
            >
                <ul>
                    <li>- Notification Preferences</li>
                    <li>- 24x7 Customer Care</li>
                    <li>- Advertise</li>
                    <li>- Download App</li>
                </ul>
            </div>

        </>
    )
}

export default DotsHover