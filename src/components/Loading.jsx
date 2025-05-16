// const Loading = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
//       <div className="flex flex-col items-center gap-4">
//         <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
//         <p className="text-white text-lg font-medium animate-pulse">Loading...</p>
//       </div>
//     </div>
//   );
// };

// export default Loading;

import { RingLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50">
      <RingLoader color="#915EFF" size={100} />
      <p className="text-white mt-6 text-lg font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
