import Card from '@/components/Card';
import Button from '@/components/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About This Project</h1>
          <p className="text-gray-600 mb-6">
            This is a MERN stack application with Next.js frontend and Express backend.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Technology Stack</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Frontend: Next.js 14 with App Router</li>
                <li>Backend: Express.js and Node.js</li>
                <li>Database: MongoDB with Mongoose</li>
                <li>Styling: Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </Card>
      </div>
    </div>
  );
}

