import Link from 'next/link'

export default function Home(){
  return(
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Organizovanje moje svadbe</h1>
      <p className="text-gray-600 mb-6">Dobrodosli! Ovo je app za organizovanje svadbe.</p>

      <h2 className="text-lg font-semibold mb-4">Opcije:</h2>

      <div className="flex flex-col gap-3">
        <Link href="/gosti">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Ja sam gost - Popuni pozivnicu</button>
        </Link>
        <Link href="/organizator">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">Ja sam organizator - Upravljanje stolovima</button>
        </Link>
      </div>

    </div>

  );
}