import { useState, useEffect } from 'react';

const Notify = () => {
  const [isShown, setIsShown] = useState(false);

  // Check if notification has been shown before
  const hasBeenShown = localStorage.getItem('notificationShown') === 'true';

  // Show notification after 5 seconds
  useEffect(() => {
    if (!hasBeenShown) {
      const timeout = setTimeout(() => {
        setIsShown(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [hasBeenShown]);

  const handleResponse = (response) => {
    localStorage.setItem('notificationReply', response);
    setIsShown(false);
  };

  const handleDismiss = () => {
    setIsShown(false);
  };

  return (
    <div className={`fixed top-4 right-4 ${isShown ? 'block' : 'hidden'}`} style={{ zIndex: 1000 }}>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Notification</h3>
          <button 
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          This is a one-time notification. Please respond to continue.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleResponse('yes')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Yes
          </button>
          <button
            onClick={() => handleResponse('no')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notify;


