import Link from 'next/link'

export default function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembraça, comece a{' '}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          criar agora!
        </Link>
      </p>
    </div>
  )
}
