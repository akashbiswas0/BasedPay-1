export default function Component() {
    return (
      <div className="bg-gray-900 text-white py-20 mt-10 relative overflow-hidden"> 
        <div className="container mx-auto px-4  relative z-10">
          <h2 className="text-5xl font-bold -mt-10 text-center mb-16">How it works ?</h2>
          <div className="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Campaign</h3>
              <p className="text-gray-400">Select a promotional campaign that suits you — watch a short video ad or complete a quick task.</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete the Task</h3>
              <p className="text-gray-400">Participate in the campaign, which could be as simple as watching a 15-30 second video or finishing a task in 30-180 seconds.</p>
            </div>
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Instant Discounts</h3>
              <p className="text-gray-400">Once completed, your reward is instantly applied to your ongoing purchase, saving you money right away.</p>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl">
           
          </div>
        </div>
      </div>
    );
  }