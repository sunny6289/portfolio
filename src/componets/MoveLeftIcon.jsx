import React from 'react';
import { MdSwipeLeft } from 'react-icons/md';
import { CgMoveLeft } from "react-icons/cg";

const MoveLeftIcon = () => {
    return (
        <>
            <p className="swipe-page text-[#ffffff80] absolute top-7 right-5 text-3xl sm:top-3 sm:right-3 ">
                <MdSwipeLeft className='block sm:hidden'/>
                <CgMoveLeft title='Grab and move' className='hidden sm:block'/>
            </p>
        </>
    );
}

export default MoveLeftIcon;
