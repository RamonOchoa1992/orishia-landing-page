'use client';
import useLanguageStore from '../../store/useLanguageStore';

export default function LanguageToggle() {
  const { language, english, spanish } = useLanguageStore();

  return (
    <div className='flex items-center bg-white p-1 rounded-full border border-gray-200 shadow-sm w-fit gap-1'>
      {/* Botón Español */}
      <button
        onClick={spanish}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
          language === 'es'
            ? 'bg-[#2a458a] text-white shadow-md cursor-default'
            : 'text-[#2a458a] hover:bg-gray-50 cursor-pointer'
        }`}
      >
        <img
          src='https://flagcdn.com/w40/es.png'
          alt='España'
          className='w-5 h-5 rounded-full object-cover'
        />
        <span className='text-xs font-bold'>ES</span>
      </button>

      {/* Botón Inglés */}
      <button
        onClick={english}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#2a458a] text-white shadow-md cursor-default'
            : 'text-[#2a458a] hover:bg-gray-50 cursor-pointer'
        }`}
      >
        <img
          src='https://flagcdn.com/w40/gb.png'
          alt='UK'
          className='w-5 h-5 rounded-full object-cover'
        />
        <span className='text-xs font-bold'>EN</span>
      </button>
    </div>
  );
}
