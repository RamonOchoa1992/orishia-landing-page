import Image from "next/image";

type DividerProps = {
  width: number,
  height: number
}

const Divider = ({ width, height }: DividerProps) => {
  return (
    <div className='w-full px-4 flex justify-center mt-4'>
      <Image
        src='/assets/images/separador.png'
        alt='Separador'
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default Divider;