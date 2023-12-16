// // src/components/Home.js
// import React from 'react';

// const videos = [
//     {
//         id: 1,
//         title: 'Video 1',
//         description: 'This is the first video description.',
//         embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
//     },
//     {
//         id: 2,
//         title: 'Video 2',
//         description: 'This is the second video description.',
//         embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
//     },
//     // Add more video objects as needed
// ];

// const Home = () => {
//     return (
//         <div>
//             <h1 className="text-4xl font-bold my-4">Featured Videos</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {videos.map(video => (
//                     <div key={video.id} className="bg-gray-200 p-4 rounded">
//                         <iframe
//                             title={video.title}
//                             width="100%"
//                             height="200"
//                             src={video.embedUrl}
//                             frameBorder="0"
//                             allowFullScreen
//                         />
//                         <h2 className="text-lg font-semibold mt-2">{video.title}</h2>
//                         <p className="text-gray-600">{video.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// src/components/Home.js
import React from 'react';

const videos = [
    {
        id: 1,
        title: 'Video 1',
        description: 'This is the first video description.',
        embedUrl: 'https://youtu.be/t1OGhTpWqNg?si=P1yhivU9U0u8W3Ob',
    },
    {
        id: 2,
        title: 'Video 2',
        description: 'This is the second video description.',
        embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    // Add more video objects as needed
];

const Home = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold my-4">Featured Videos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map(video => (
                    <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <iframe
                                title={video.title}
                                className="rounded-md"
                                src={video.embedUrl}
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                        <p className="text-gray-600">{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
