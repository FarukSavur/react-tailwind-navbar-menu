import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import Flag from 'react-flagkit';
import { NavLink } from 'react-router-dom';


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
import { IoSettingsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiChartScatter } from "react-icons/pi";
import { PiUserList } from "react-icons/pi";
import { PiArchiveBoxLight } from "react-icons/pi";
import { IoBugOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


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
                    <button className='group relative'>
                        <FaUser size={23} />
                        <div className='opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible group-focus-within:top-11 top-10 duration-500 absolute right-0  px-2 py-4 w-56 bg-slate-50 shadow rounded-md '>
                            <nav className='flex flex-col gap-1'>
                                <NavLink to='/ayarlar-ve-guvenlik' className='user-dropdown'>
                                    <IoSettingsOutline size={19}/>
                                    Ayarlar ve güvenlik
                                </NavLink>
                                <NavLink to='/kullanici-ara' className='user-dropdown'>
                                    <GoSearch size={19}/>
                                    Kullanıcılarda ara
                                </NavLink>
                                <NavLink to='/kaydedilenler' className='user-dropdown'>
                                    <IoBookmarkOutline size={19}/>
                                    Kaydedilenler
                                </NavLink>
                                <NavLink to='/hareketlerin' className='user-dropdown'>
                                    <PiChartScatter size={19}/>
                                    Hareketlerin
                                </NavLink>
                                <NavLink to='/profilim' className='user-dropdown'>
                                    <PiUserList size={19}/>
                                    Profilim
                                </NavLink>
                                <NavLink to='/arsiv' className='user-dropdown'>
                                    <PiArchiveBoxLight size={19}/>
                                    Arşiv
                                </NavLink>
                                <NavLink to='/sorun-bildir' className='user-dropdown'>
                                    <IoBugOutline size={19}/>
                                    Sorun bildir
                                </NavLink>
                                <NavLink to='/cikis-yap' className='user-dropdown bg-red-100 hover:bg-red-200 text-red-800'>
                                    <LuLogOut size={19}/>

                                    Çıkış yap
                                </NavLink>
                            </nav>
                        </div>
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
                            <li>
                                <NavLink to='/' className='menu-item'>
                                    <IoHome size={20} />
                                    Anasayfa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='akis-fotograflar' className='menu-item'>
                                    <FaPanorama size={20} />
                                    Akış fotoğraflar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='akis-gonderiler' className='menu-item'>
                                    <LuText size={20} />
                                    Akış Gönderiler
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='mesajlar' className='menu-item'>
                                    <MdMessage size={20} />
                                    Mesajlar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='sehrimdeki-ogrenciler' className='menu-item'>
                                    <FaCity size={20} />
                                    Şehrimdeki Öğrenciler
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='makaleler' className='menu-item'>
                                    <PiArticleMediumFill size={20} />
                                    Makaleler
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='kampus-sozluk' className='menu-item'>
                                    <FaBookBookmark size={20} />
                                    Soru & Cevap
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='kampus-sohbet' className='menu-item'>
                                    <FaEarthEurope size={20} />
                                    Kampüs Sohbet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='bilgi-yarismasi' className='menu-item'>
                                    <TbTextCaption size={20} />
                                    Bilgi Yarışması
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='ozgecmis-hazirla' className='menu-item'>
                                    <BsPersonVcard size={20} />
                                    Özgeçmiş Hazırla
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='esya-al-sat' className='menu-item'>
                                    <BsShop size={20} />
                                    Eşya Al & Sat
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='is-ilanlari' className='menu-item'>
                                    <IoCodeWorkingSharp size={20} />
                                    İş İlanları
                                </NavLink>
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
