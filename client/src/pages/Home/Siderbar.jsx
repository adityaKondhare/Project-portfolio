import React from 'react'

const Siderbar = () => {
  return (
    <div>
        <div className="fixed left-0 bottom-0 px-10 items-center text-white somo1" >
            <div className="flex flex-col gap-5  mb-3">
                <a href="https://www.instagram.com/adi_kondhare_24/" rel='noreferrer' target="_blank"><i class="fa-brands fa-instagram insta f"></i></a>
                <a href="https://wa.me/+918108548003" target="_blank" rel='noreferrer'><i class="fa-brands fa-whatsapp wp f"></i></a>
                <a href="https://github.com/adityaKondhare" target="_blank" rel='noreferrer'><i class="fa-brands fa-github git f"></i></a>
                <a href="https://www.linkedin.com/in/aditya-kondhare-58a190215" target="_blank" rel='noreferrer'><i class="fa-brands fa-linkedin lk f"></i></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRmTpFtZfxqSclmsTHGHwRdhfgNPJVLKtTMlcswqmGNmcVfTJNmTfMxqQdzQvWQlKrqBVHb" target="_blank" rel='noreferrer'><i class="fa-regular fa-envelope mail f"></i></a>
            </div>
            
            <div className='border-l-white h-52 w-[1px] left-[9px] top-2 relative bg-white '>

            </div>
        </div>
    </div>
  )
}

export default Siderbar