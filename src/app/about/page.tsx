
import Link from 'next/link';
import { JSX } from 'react';

export default function About(): JSX.Element {
  return (
    <>
      <div className="bg-white relative flex items-center justify-center overflow-hidden z-50">
        <div className="relative mx-auto w-full h-screen px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className="relative">
              <div className="absolute top-0 -left-48 z-0 opacity-50">
                {/* You can add background images or patterns here */}
              </div>
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <p className="flex text-sm uppercase text-black">About Our Blogging Platform</p>
                <h4 className="mb-6 max-w-lg text-2xl font-light leading-snug tracking-tight text-black sm:text-4xl sm:leading-snug">
                  Share Your Stories, <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">Connect with Readers</span>
                </h4>
                <p className="text-base text-black">
                  Our platform provides a space for bloggers to express their creativity, share their expertise, and connect with a community of readers. Whether you are a hobbyist or a professional writer, our platform is designed to help you grow and engage with your audience.
                </p>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                    Start Writing Today
                  </Link>
                  <Link href="/how-it-works" className="group inline-flex items-center font-semibold text-black">
                    How It Works
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
              <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <img
                  src="/images/5484597.jpg"
                  alt="Blogging"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40">
          Blogging Platform
        </div>
        <div className="absolute -bottom-24 left-10 z-0 opacity-10">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            className="w-96 z-0 h-full object-fill fill-gray-300 text-gray-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
            ></path>
          </svg>
        </div>
        <div className="absolute -bottom-0 left-3/4 z-0 opacity-10">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 z-0 h-full -rotate-90 object-fill fill-red-300 text-red-300"
          >
            <path
              d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
