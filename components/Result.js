// // // import React from 'react';
// // // import './Result.css';

// // // function Result({ score, total }) {
// // //     return (
// // //         <div className="result">
// // //             <h3>
// // //                 Your Score: {score} / {total}
// // //             </h3>
// // //         </div>
// // //     );
// // // }

// // // export default Result;
// // import React from 'react';
// // import './Result.css';

// // function Result({ score, total }) {
// //     return (
// //         <div className="result">
// //             <h3>
// //                 Your Score: {score} / {total}
// //             </h3>
// //         </div>
// //     );
// // }

// // export default Result;
// import React from 'react';
// import './Result.css';

// function Result({ score, total }) {
//     return (
//         <div className="result">
//             <h3>
//                 Your Score: {score} / {total}
//             </h3>
//         </div>
//     );
// }

// export default Result;
// src/components/Result.js
import React from 'react';

const Result = ({ score, total }) => {
    return (
        <div className="result">
            <h3>Your Score: {score} / {total}</h3>
        </div>
    );
};

export default Result;
