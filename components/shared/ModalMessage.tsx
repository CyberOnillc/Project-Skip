import React from 'react'
export type ModalProps = {
    message: string;
    isSuccess: boolean;
    onClose: ()=>void;

}
function ModalMessage({  message, isSuccess, onClose}:ModalProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50`}
        >
            <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
            <div className="z-50 bg-white rounded-lg p-6 w-1/2">
                <div className="text-center">
                    {isSuccess ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-green-500 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-red-500 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                    <p className="text-xl font-semibold mt-4">{isSuccess ? 'Success' : 'Error'}</p>
                    <p className="text-gray-600 mt-2">{message}</p>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalMessage