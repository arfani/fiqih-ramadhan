
'use client';

import { faGlobe, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, Badge, Tooltip } from 'flowbite-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Pembahasan1 } from './contents/pembahasan1';

export default function FiqihRamadhan() {
  interface pembahasanProps {
    title: string,
    mutarjim: string,
    socmedLink: string,
    content: ReactNode,
  }

  const pembahasanAll: pembahasanProps[] = [
    { title: 'Penentuan Awal Bulan', mutarjim: 'rfun', socmedLink: 'https://arfani.github.io', content: <Pembahasan1 /> },
  ]

  const Panel = () => {
    return pembahasanAll.map((item: pembahasanProps) => {
      return (
        <Accordion.Panel key={item.mutarjim}>
          <Accordion.Title className='bg-teal-400 text-teal-100 font-semibold hover:bg-teal-500 drop-shadow-lg shadow-orange-500 focus:ring-0'>
            <div className="flex flex-col sm:flex-row">
              <span className='text-teal-800 bg-teal-300 p-2'>Pembahasan Pertama :</span>
              <span className='bg-teal-800 p-2'>{item.title}</span>
            </div>
          </Accordion.Title>
          <Accordion.Content className='text-teal-100 backdrop-contrast-125 overflow-auto max-h-[calc(100vh-15rem)] [&>p]:indent-7 [&>p]:text-justify [&>p]:mb-3 [&>p]:leading-5'>
            {item.content}
            <div className="mt-8 ml-2">
              <Tooltip content="Mutarjim" className='bg-teal-600 text-teal-50' placement='right'>
                <a href={item.socmedLink} className='inline-block font-semibold cursor-pointer'><Badge color="info" size="lg"><FontAwesomeIcon icon={faGlobe} className='mr-1' />{item.mutarjim}</Badge></a>
              </Tooltip>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      )
    })
  }
  return (
    <div className="w-full px-4 py-8 overflow-auto">
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
