import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import Flag from 'react-flagkit';


import { HiMenu } from "react-icons/hi"
import { FaUser } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaPanorama } from "react-icons/fa6";
import { LuText } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
import { FaCity } from "react-icons/fa6";
import { PiArticleMediumFill } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { TbTextCaption } from "react-icons/tb";
import { BsPersonVcard } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className='fixed top-0 w-full'>

                <div className='h-16 w-full bg-white/50 backdrop-blur z-10 border-b border-gray-300 flex items-center justify-between px-2 md:px-6'>
                    <button onClick={() => {
                        setIsMenuOpen(() => !isMenuOpen)
                    }}>
                        <HiMenu size={28} />
                    </button>
                    <h1 className='text-2xl md:text-3xl font-montserrat font-bold'>
                        Sosyal Kampüs
                    </h1>
                    <button>
                        <FaUser size={23} />
                    </button>
                </div>
            </header>
            <div className={classNames({
                'fixed inset-0 w-full h-full transition-all': true,
                'bg-zinc-900/20 backdrop-blur opacity-100 visible': isMenuOpen,
                'opacity-0 invisible ': !isMenuOpen,
            })} >

                <nav className={classNames({
                    'max-w-full w-80 h-full bg-white duration-500 rounded-e-3xl border-r-8 border-r-amber-400 flex flex-col justify-between overflow-hidden': true,
                    '-translate-x-10 skew-x-6': !isMenuOpen,
                    'translate-x-0 skew-x-0': isMenuOpen,
                })}>
                    <header className='h-16 flex items-center justify-between px-4 shadow'>

                        <div className='flex items-center'>
                            <h6 className='text-2xl font-montserrat font-bold'>
                                ./sosyalkampus
                            </h6>
                            <a href='/' className='self-end ps-1 font-montserrat font-semibold text-xs text-zinc-600 mb-1'>v3.0.0</a>
                        </div>
                        <button onClick={() => {
                            setIsMenuOpen(() => !isMenuOpen)
                        }}>
                            <IoMdClose size={24} />

                        </button>
                    </header>

                    <div className='py-2 px-1 mb-auto overflow-auto'>
                        <h6 className='text-xl font-[500] font-poppins mt-3 ms-3 ps-2 border-l-4 border-l-amber-400 -tracking-wide'>
                            Sosyal Kampüsü Keşfet
                        </h6>
                        <ul className='p-2'>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <IoHome size={20} />
                                    Anasayfa
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <FaPanorama size={20} />
                                    Akış fotoğraflar
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <LuText size={20} />

                                    Akış Gönderiler
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <MdMessage size={20} />
                                    Mesajlar
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <FaCity size={20} />
                                    Şehrimdeki Öğrenciler
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <PiArticleMediumFill size={20} />
                                    Makaleler
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <FaBookBookmark size={20} />
                                    Soru & Cevap
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <FaEarthEurope size={20} />
                                    Kampüs Sohbet
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <TbTextCaption size={20} />
                                    Bilgi Yarışması
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <BsPersonVcard size={20} />
                                    Özgeçmiş Hazırla
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <BsShop size={20} />
                                    Eşya Al & Sat
                                </a>
                            </li>
                            <li className='menu-item-container'>
                                <a href="" className='menu-item'>
                                    <IoCodeWorkingSharp size={20} />
                                    İş İlanları
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full h-16 flex items-center border-t border-zinc-200 gap-2 px-4'>
                        <button className='h-9 px-1 flex-1 flex items-center justify-center bg-amber-400 gap-2 rounded-md text-gray-50'>
                            <FaDownload size={18} />
                            Yükle
                        </button>
                        <button className='h-9 px-2 flex-1 flex items-center justify-center bg-zinc-800 gap-2 rounded-md text-gray-50'>
                            <BsMoonStars size={18} />
                            Sistem
                        </button>
                        <button className='h-9 flex items-center bg-slate-50 gap-2 rounded-md text-gray-50'>
                            <Flag country="TR" size={50} className='rounded' />
                        </button>
                    </div>
                </nav>

            </div>
        </>

    )
}
