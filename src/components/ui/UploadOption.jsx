import React, { useCallback, useRef, useState } from 'react'
import useCamera from '../../hooks/sensors/useCamera'
import { useDropzone } from 'react-dropzone';
import { Camera, ImageIcon, ImageUp, X } from 'lucide-react';
import Button from './Button';


function UploadOption({ onUpload, onClose, cameraFacing }) {
    const { hasBackCamera, hasFrontCamera, loading } = useCamera();
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [mode, setMode] = useState('select');

    const cameraRef = useRef();

    const hasCamera = cameraFacing === 'user' ? hasBackCamera : hasFrontCamera

    const onDrop = useCallback((acceptedFiles) => {
        const selected = acceptedFiles[0];
        if (!selected) return;
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
        setMode('preview');
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
        maxFiles:false,
        maxFiles: 1,
        maxSize: 10 * 1024 * 1024
    });

    const handleCameraCapture = (e) => {
        const captured = e.target.files[0];
        if (!captured) return;
        setFile(captured);
        setPreview(URL.createObjectURL(captured));
        setMode('preview');
    };

    const handleUpload = () => {
        if (!file) return;
        onUpload(file);
        handleReset();
        if (onClose) onClose();
    };

    const handleReset = () => {
        setPreview(null);
        setFile(null);
        setMode('select');
    }


    return (
        <div>
            {loading ? (
                <div className='flex items-center justify-center py-12'>
                    <div className='w-6 h-6 rounded-full border-2 border-[#C9A96E] border-t-transparent animate-spin' />
                </div>
            ) : mode === 'select' ? (
                <section className='flex flex-col gap-4'>
                    <div
                        {...getRootProps()}
                        className={`
                            relative flex flex-col items-center justify-center
                            gap-3 p-8 sm:p-10
                            border-2 border-dashed rounded-[20px]
                            cursor-pointer transition-all duration-200
                            ${isDragActive
                                ? 'border-[#C9A96E] bg-[#F5ECD9]'
                                : 'border-[#E7E1CF] bg-[#F5F0E8] hover:border-[#C9A96E] hover:bg-[#F5ECD9]/50'
                            }`
                        }
                    >
                        <input {...getInputProps()} />
                        
                        <div className='w-12 h-12 rounded-full bg-[#FDFAF6] border border-[#E7E1CF] flex items-center justify-center'>
                            <ImageUp size={20} className='text-[#C9A96E]' aria-hidden='true' />
                        </div>

                        <div className='text-center flex flex-col gap-1'>
                            <p className='playfair italic text-[15px] sm:text-[16px] text-[#1A1A18]'>
                                {isDragActive ? 'Drop your piece here' : 'Upload from device'}
                            </p>
                            <p className='work-sans text-[11px] sm:text-[12px] text-[#6B6460] tracking-[0.02em]'>
                                Drag & drop or click to browse
                            </p>
                            <p className='work-sans text-[10px] text-[#A8A29E] tracking-[0.02em] mt-1'>
                                JPG, PNG, WEBP — Max 10MB
                            </p>
                        </div>
                    </div>

                    {hasCamera && (
                        <>
                            <div className='flex items-center gap-3'>
                                <div className='flex-1 h-[1px] bg-[#E7E1CF]' />
                                <span className='work-sans text-[11px] text-[#A8A29E] uppercase tracking-[2px]'>or</span>
                                <div className='flex-1 h-[1px] bg-[#E7E1CF]' />
                            </div>

                            <button
                                type='button'
                                onClick={() => cameraRef.current.click()}
                                className=' w-full flex items-center justify-center gap-3 p-4 rounded-[20px] border border-[#E7E1CF] bg-[#F5F0E8] hover:border-[#C9A96E] hover:bg-[#F5ECD9]/50  transition-all duration-200 cursor-pointer'
                            >
                                <div className='w-9 h-9 rounded-full bg-[#FDFAF6] border border-[#E7E1CF] flex items-center justify-center'>
                                    <Camera size={16} className='text-[#C9A96E]' aria-hidden='true' />
                                </div>
                                <div className='text-left'>
                                    <p className='playfair italic text-[15px] text-[#1A1A18]'>
                                        {cameraFacing === 'user' ? 'Take a selfie' : 'Capture with camera'}
                                    </p>
                                    <p className='work-sans text-[11px] text-[#6B6460] tracking-[0.02em]'>
                                        {cameraFacing === 'user' ? 'Use your front camera' : 'Use your back camera for best results'}
                                    </p>
                                </div>
                            </button>
                            <input
                                ref={cameraRef}
                                type='file'
                                accept='image/*'
                                capture={cameraFacing}
                                onChange={handleCameraCapture}
                                className='hidden'
                                aria-hidden='true'
                            />
                        </>
                    )}
                </section>
            ) : (
                <section className='flex flex-col gap-4'>
                    <figure className='relative rounded-[16px] overflow-hidden bg-[#F0EDE6]'>
                        <img src={preview} alt="Selected wardrobe Item" className='w-full h-[240px] sm:h-[280px] object-cover object-top' />

                        <button
                            type='button'
                            onClick={handleReset}
                            aria-label='Remove selected image'
                            className='
                                absolute top-3 right-3
                                w-8 h-8 rounded-full
                                bg-white/90 backdrop-blur-sm
                                flex items-center justify-center
                                text-[#C0705A]
                                hover:bg-[#C0705A] hover:text-white
                                transition-all duration-200 shadow-md
                            '
                        >
                            <X size={14} aria-hidden='true' />
                        </button>
                    </figure>

                    <aside className='flex items-start gap-2 p-3 rounded-[12px] bg-[#F5ECD9] border border-[#E7E1CF]'>
                        <ImageIcon size={14} className='text-[#C9A96E] mt-0.5 flex-shrink-0' aria-hidden='true' />
                        <p className='work-sans text-[11px] sm:text-[12px] text-[#6B6460] leading-relaxed'>
                            {cameraFacing === 'user'
                                ? 'Our AI will analyse your facial features and body proportions to personalise your outfit recommendations.'
                                : ' Our AI will automatically identify the name, category, colour and style of this piece.'
                            }
                        </p>
                    </aside>

                    <div className='flex gap-3'>
                        <Button
                            type='button'
                            variant='ghost'
                            size='full'
                            onClick={handleReset}
                        >
                            Change
                        </Button>
                        <Button
                            type='button'
                            size='full'
                            onClick={handleUpload}
                        >
                            {cameraFacing === 'user' ? "Add to Profile" : "Upload to Wardrobe"}
                        </Button>
                    </div>
                </section>
            )}
        </div>
    )
}

export default UploadOption
