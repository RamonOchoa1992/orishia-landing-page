'use client';

import React from 'react';
import { Dialog, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { constant } from '@/app/utils/about-constant';
import useLanguageStore from '@/app/store/useLanguageStore';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export interface BenefitItem {
  text: string;
  iconSrc: string;
}

export interface ModalData {
  logoSrc: string;
  description: string;
  benefits: BenefitItem[];
  dividerColor?: string;
}

interface OrishiaModalProps {
  open: boolean;
  onClose: () => void;
  data: ModalData | null;
}

const OrishiaModal: React.FC<OrishiaModalProps> = ({ open, onClose, data }) => {
  const { language } = useLanguageStore();

  if (!data) return null;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      maxWidth='md'
      fullWidth
      PaperProps={{
        style: {
          borderRadius: '2rem',
          padding: '1rem',
          maxWidth: '750px',
          boxShadow: '0px 10px 40px rgba(0,0,0,0.1)',
        },
      }}
    >
      <div className='relative p-4 md:p-8 bg-white overflow-hidden'>
        {/* Botón Cerrar */}
        <div className='absolute top-0 right-0'>
          <IconButton onClick={onClose} aria-label='close' size='large'>
            <CloseIcon sx={{ color: '#9CA3AF' }} />
          </IconButton>
        </div>

        {/* --- HEADER --- */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8'>
          {/* Logo */}
          <div className='relative w-[230px] h-[90px] flex-shrink-0'>
            <Image
              src={data.logoSrc}
              alt='Modal Logo'
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </div>

          {/* Divider Vertical */}
          <div
            className='hidden md:block w-[3px] h-24 rounded-full mx-2 flex-shrink-0'
            style={{ backgroundColor: data.dividerColor || '#EE6A2D' }}
          ></div>

          {/* Descripción */}
          <p className='text-[#2A458A] text-lg md:text-[19px] font-medium leading-snug'>
            {data.description}
          </p>
        </div>

        {/* --- BENEFICIOS --- */}
        <div className='flex justify-center w-full'>
          <div className='flex flex-col w-full max-w-fit'>
            <h3 className='text-[#2A458A] text-xl font-bold mb-4 text-left'>
              { constant[language].modalBenefitText}
            </h3>

            <div
              className={`grid grid-cols-1 ${
                data.benefits.length > 3 ? 'md:grid-cols-2' : ''
              } gap-x-12 gap-y-4`}
            >
              {data.benefits.map((benefit, index) => (
                <div key={index} className='flex items-center gap-3'>
                  {/* Icono */}
                  <div className='flex-shrink-0 relative w-6 h-6'>
                    <Image
                      src={benefit.iconSrc}
                      alt='Icon'
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {/* Texto */}
                  <p className='text-[#2A458A] text-[17px] font-medium leading-tight text-left'>
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default OrishiaModal;
