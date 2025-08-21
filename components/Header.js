import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-12 pb-8">
      <div className="flex flex-col items-center">
        
        {/* Company Name */}
        <h1 className="text-4xl font-bold text-center dark:text-white mb-2">
          <Link href="/">{name}</Link>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg text-center dark:text-gray-300 text-gray-600 max-w-2xl">
          Pioneering the future of physical AI embodiments
        </p>
      </div>
    </header>
  );
}
