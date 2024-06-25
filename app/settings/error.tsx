'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

export default function Error({
  error, // This object is an instance of JavaScript's native Error object.
  reset, // This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center">
      {/* <h1 className="-translate-y-16 text-3xl">Tools</h1> */}
      <ExclamationTriangleIcon width={128} />
      <h2 className="pb-4 text-center text-6xl">Ooops something went wrong!</h2>
      <p className="pb-16">{error.message}</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
