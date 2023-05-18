import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          alt="Imagem do usuário"
          src={avatarUrl}
          width={40}
          height={40}
          className="h-10 w-10 text-gray-500"
        />
      </div>
      <p className="max-w-[140px] text-sm leading-snug">
        {' '}
        Olá {name}!
        <a className="block text-red-400 hover:text-red-300" href="">
          Quero sair
        </a>
      </p>
    </div>
  )
}
