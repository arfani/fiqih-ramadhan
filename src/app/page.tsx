import { faBook, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'flowbite-react';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[url('/images/bg.jpeg')] bg-cover overflow-auto">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-90">
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center font-serif p-4">

        <div className="logo text-center mb-3 flex flex-col items-center">
          <Image src={'/images/logo-al-muzany.png'} width={100} height={100} alt='Logo Mahad Al Muzany' />
          <h1 className='text-teal-50 font-bold'>{`Ma'had Al-Muzany Mataram`}</h1>
        </div>

        <Card className="w-md hidden md:flex text-teal-100 bg-gray-500 bg-opacity-30 p-4 shadow-md shadow-teal-400 mb-3" imgSrc="/images/cover-10-masalah-puasa.png" horizontal>
          <h2 className="text-xl font-bold tracking-tight text-teal-300 capitalize">
            Terjemah kitab 10 masalah penting terkait puasa ramadhan
          </h2>
          <p className='text-sm'>
            Karangan Guru Besar <strong>Dr. Shalih bin Abdul Aziz bin Utsman As-Sindi</strong> Bidang Aqidah di Universitas Islam Madinah
          </p>
          <p className='text-xs'>Diterjemah oleh Para Mahasiswa Al - Muzany Mataram</p>
          <div className="flex justify-end">
            <a className='bg-orange-500 text-teal-50 py-2 px-4 w-fit inline-block font-semibold rounded mr-1' target='_blank' href="https://drive.google.com/file/d/1CUomu4RUgVVJF8L7qLR8JZ_2CTUv0JLj/view?usp=sharing"><FontAwesomeIcon icon={faDownload} width={15} className='inline-block' /> Download PDF</a>
            <Link href={'/fiqih-ramadhan'}>
              <button className='bg-teal-600 text-teal-100 w-fit py-2 px-4 rounded font-semibold tracking-widest hover:scale-105 duration-100'><FontAwesomeIcon icon={faBook} className='inline-block' width={15} /> BACA</button>
            </Link>
          </div>
        </Card>

        <div className="box md:hidden flex flex-col bg-gray-500 bg-opacity-30 p-4 shadow-md shadow-teal-400 ">
          <h2 className="text-xl font-bold tracking-tight text-teal-300 text-center capitalize">
            Terjemah kitab 10 masalah penting terkait puasa ramadhan
          </h2>
          <Link href={'/fiqih-ramadhan'}>
            <button className='bg-teal-600 w-full text-sm text-teal-100 py-2 px-4 rounded font-semibold tracking-widest hover:scale-105 duration-100 my-2'><FontAwesomeIcon icon={faBook} className='inline-block' width={15} /> BACA</button>
          </Link>
          <a className='bg-orange-500 text-teal-50 text-sm py-2 px-4 inline-block font-semibold rounded text-center' target='_blank' href="https://drive.google.com/file/d/1CUomu4RUgVVJF8L7qLR8JZ_2CTUv0JLj/view?usp=sharing"><FontAwesomeIcon icon={faDownload} width={15} className='inline-block' /> Download PDF</a>
          <div className="text-xs text-center mt-4">
            <p className='text-sm text-teal-100'>
              Karangan Guru Besar <strong>Dr. Shalih bin Abdul Aziz bin Utsman As-Sindi</strong> Bidang Aqidah di Universitas Islam Madinah
            </p>
            <p className='text-xs mt-2 text-teal-300'>Diterjemah oleh Para Mahasiswa Al - Muzany Mataram</p>
          </div>
        </div>

        <div className="video flex flex-col justify-center items-center mt-4">
          <h2 className='text-lg text-teal-200 font-semibold'>Video Kitab</h2>
          <iframe className='w-60 border-2 rounded' src="https://www.youtube.com/embed/ngssPQUfN2g?si=YWZkU9s1qRC9dNR3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </main>
  )
}
