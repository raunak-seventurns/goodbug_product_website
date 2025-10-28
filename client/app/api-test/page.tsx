'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface HealthCheck {
  status: string;
  message: string;
}

export default function ApiTest() {
  const [health, setHealth] = useState<HealthCheck | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/health`);
      const data = await response.json();
      setHealth(data);
    } catch (err) {
      setError('Failed to connect to API. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">API Test</h1>
          
          <div className="mb-6">
            <Button onClick={checkHealth} disabled={loading}>
              {loading ? 'Loading...' : 'Check API Health'}
            </Button>
          </div>

          {error && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
              {error}
            </div>
          )}

          {health && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded mb-4">
              <p className="font-semibold">API Status: {health.status}</p>
              <p>{health.message}</p>
            </div>
          )}

          <div className="mt-6">
            <p className="text-gray-600 mb-2">API URL:</p>
            <code className="bg-gray-200 p-2 rounded block">
              {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}
            </code>
          </div>
        </Card>
      </div>
    </div>
  );
}

