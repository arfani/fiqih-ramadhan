
'use client';

import { faGlobe, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, Badge, Tooltip } from 'flowbite-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Pembahasan1 } from './contents/pembahasan1';
import { Pembahasan2 } from './contents/pembahasan2';
import { Pembahasan10 } from './contents/pembahasan10';
import Image from 'next/image';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Pembahasan7 } from './contents/pembahasan7';
import { Pembahasan6 } from './contents/pembahasan6';
import { Pembahasan3 } from './contents/pembahasan3';
import { Pembahasan4 } from './contents/pembahasan4';
import { Pembahasan8 } from './contents/pembahasan8';

export default function FiqihRamadhan() {
  interface pembahasanProps {
    pembahasanKe: string,
    title: string,
    mutarjim: string,
    socmedIcon: any,
    socmedLink: string,
    content: ReactNode,
  }

  const pembahasanAll: pembahasanProps[] = [
    { pembahasanKe: 'Pertama', title: 'Penentuan awal bulan', mutarjim: 'Arfan Abu Abdillah', socmedIcon: faGlobe, socmedLink: 'https://arfani.github.io', content: <Pembahasan1 /> },
    { pembahasanKe: 'Kedua', title: 'Puasa pada hari yang diragukan', mutarjim: 'Abu Ibrohim', socmedIcon: null, socmedLink: '#', content: <Pembahasan2 /> },
    { pembahasanKe: 'Ketiga', title: 'Bagaimana Hukum Puasa bagi orang yg sakit dan lemah/Lansia?', mutarjim: 'Muhamad Anjung', socmedIcon: faFacebook, socmedLink: 'https://www.facebook.com/muhamad.anjung.9', content: <Pembahasan3 /> },
    { pembahasanKe: 'Keempat', title: 'Berpuasa atau tidaknya orang yang Musafir', mutarjim: 'Ruslan Abdul Ghani', socmedIcon: null, socmedLink: '#', content: <Pembahasan4 /> },
    { pembahasanKe: 'Keenam', title: 'Puasa Wanita haid Dan Nifas', mutarjim: 'Ruslan Abdul Ghani', socmedIcon: null, socmedLink: '#', content: <Pembahasan6 /> },
    { pembahasanKe: 'Ketujuh', title: 'Pembatal-pembatal puasa', mutarjim: 'Abdul Waris', socmedIcon: faFacebook, socmedLink: 'https://www.facebook.com/profile.php?id=100079236276527', content: <Pembahasan7 /> },
    { pembahasanKe: 'Kedelapan', title: 'Qhada', mutarjim: 'Aji Indra Saputra', socmedIcon: null, socmedLink: '#', content: <Pembahasan8 /> },
    { pembahasanKe: 'Kesepuluh', title: 'Sunah-sunah puasa dan adab-adabnya', mutarjim: 'Abu Rumaysha', socmedIcon: faLinkedin, socmedLink: 'https://www.linkedin.com/in/ahmad-subki-56a124142/', content: <Pembahasan10 /> },
  ]
  
  const Panel = () => {
    return pembahasanAll.map((item: pembahasanProps) => {
      return (
        <Accordion.Panel key={item.pembahasanKe}>
          <Accordion.Title className='bg-teal-400 text-teal-100 font-semibold hover:bg-teal-500 drop-shadow-lg shadow-orange-500 focus:ring-0 [&>h2]:!w-full'>
            <div className="flex flex-col sm:flex-row">
              <span className='text-teal-800 bg-teal-300 p-2'>Pembahasan {item.pembahasanKe} :</span>
              <span className='bg-teal-800 p-2'>{item.title}</span>
              <span className="ml-auto mr-4 hidden md:inline-block">
                <Tooltip content="Mutarjim" className='' placement='left'>
                  <a target='_blank' href={item.socmedLink} className='inline-block font-semibold cursor-pointer'><Badge color="info" size="lg">{ item.socmedIcon && <FontAwesomeIcon icon={item.socmedIcon} className='mr-1' />}{item.mutarjim}</Badge></a>
                </Tooltip>
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content className='text-teal-100 backdrop-contrast-125 overflow-auto max-h-[calc(100vh-15rem)] [&>p]:indent-7 [&>p]:text-justify [&>p]:mb-3 [&>p]:leading-5 leading-10 [&_p]:leading-10'>
            {item.content}
            <div className="mt-8 ml-2">
              <Tooltip content="Mutarjim" className='bg-teal-600 text-teal-50' placement='right'>
                <a target='_blank' href={item.socmedLink} className='inline-block font-semibold cursor-pointer'><Badge color="info" size="lg">{ item.socmedIcon && <FontAwesomeIcon icon={item.socmedIcon} className='mr-1' />}{item.mutarjim}</Badge></a>
              </Tooltip>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      )
    })
  }
  return (
    <div className="w-full px-4 py-8 overflow-auto">

      <div className="logo text-center mb-3 flex flex-col items-center">
        <Image src={'/images/logo-al-muzany.png'} width={100} height={100} alt='Logo Mahad Al Muzany' />
        <h1 className='text-teal-50 font-bold'>{`Ma'had Al-Muzany Mataram`}</h1>
      </div>

      <h1 className='text-center sm:text-2xl mb-4 font-semibold text-teal-100 bg-teal-700 w-fit mx-auto px-4 py-2 border-b-2 border-teal-200 rounded'>Terjemah Kitab 10 Masalah Penting Terkait Puasa Ramadhan</h1>
      <Accordion className='focus:outline-none focus:[&_*]:!outline-none [&_button]:focus:!ring-transparent max-w-5xl mx-auto'>
        {Panel()}
      </Accordion>
      <Link href={'/'} className='max-w-5xl w-full block mx-auto'>
        <button className='bg-teal-600 text-teal-50 mt-3 mx-3 py-2 px-4 rounded'><FontAwesomeIcon icon={faRotateBack} /> Kembali</button>
      </Link>
    </div>
  );
}
