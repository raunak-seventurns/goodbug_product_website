import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MERN Stack App
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Built with Next.js, Express, MongoDB, and Tailwind CSS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800">Frontend</h3>
            <p className="text-sm text-gray-600">Next.js 14</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-800">Backend</h3>
            <p className="text-sm text-gray-600">Express.js</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-gray-800">Database</h3>
            <p className="text-sm text-gray-600">MongoDB</p>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/api-test">
            <Button>Test API</Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary">About</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

