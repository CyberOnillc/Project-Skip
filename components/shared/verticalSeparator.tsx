import React from 'react';

const VerticalSeparator = () => {
    return (
        <div className="h-auto min-h-[1em] w-2 bg-dotted-background bg-repeat-y bg-[length:3px_12px]  self-stretch  opacity-100">
            <div className=" h-full w-full  backdrop-blur-lg bg-gradient-to-b from-transparent via-transparent to-[#ffffff45]  "></div>
        </div>

    );
};

export default VerticalSeparator;