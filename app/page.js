import Link from 'next/link';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="h-full flex flex-col md:block">
      <div className="pt-40 flex flex-col h-full w-full text-center bg-europa-illustration bg-cover">
        <header className="block h-3 text-white text-xl pb-10 font-extralight">
          <Link
            href="/wormhole"
            className="justify-start flex-col underline hover:text-muted-gold"
          >
            Travel through the wormhole
          </Link>
        </header>
      </div>
      <Footer />
    </main>
  );
}
