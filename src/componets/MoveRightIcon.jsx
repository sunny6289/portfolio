import React from 'react';
import { CgMoveRight } from 'react-icons/cg';
import { MdSwipeRight } from 'react-icons/md';

const MoveRightIcon = () => {
    return (
        <>
            <p className="swipe-page text-[#ffffff80] absolute top-7 left-5 text-3xl sm:top-3 sm:left-3">
                <MdSwipeRight className='block sm:hidden' />
                <CgMoveRight title='Grab and move' className='hidden sm:block' />
            </p>
        </>
    );
}

export default MoveRightIcon;
