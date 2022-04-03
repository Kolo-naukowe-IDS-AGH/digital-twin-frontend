import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '@src/assets/arrow.svg'

interface Props {
  href: string
  text: string
}

const LinkButton: React.FC<Props> = ({ href, text }: Props) => {
  return (
    <Link href={href}>
      <div className="mt-4 flex justify-between bg-primary-700 hover:bg-primary-600 cursor-pointer py-2 px-4 rounded-md">
        <p className="text-lg text-primary-100">{text}</p>
        <Image src={arrow} width={15} height={15} objectFit={'contain'} />
      </div>
    </Link>
  )
}

export default LinkButton
