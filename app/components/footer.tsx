'use client'
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='min-[320px]:h-[15vh] min-[764px]:h-[5vh]'>
      <small className='flex flex-row gap-2 justify-center items-center'>
        &copy; {new Date().getFullYear()} Developed{' '}
        <FaHeart style={{ color: 'red' }} /> by -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://granada.com.gt/es/"
        >
          Abhi Surya Nugroho
        </a>
      </small>
    </footer>
  );
}
