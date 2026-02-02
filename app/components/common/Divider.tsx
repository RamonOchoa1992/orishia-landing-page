import Image from 'next/image';

type DividerProps = {
  width: number;
  height: number;
};

const Divider = ({ width, height }: DividerProps) => {
  return (
    <div className='w-full px-4 flex justify-center mt-4'>
      <Image
        src='/assets/images/separador.png'
        alt='Separador'
        width={width}
        height={height}
        priority
        // ESTA ES LA MAGIA DEL RESPONSIVE:
        // Permite que la imagen se reduzca en pantallas pequeñas
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Divider;
