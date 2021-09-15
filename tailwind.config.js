  // module.exports = {
  //   theme: {
  //     backgroundSize: {
  //       'auto': 'auto',
  //       'cover': 'cover',
  //       'contain': 'contain',
  //      '50%': '50%',
  //      '16': '4rem',
  //     }
  //   }
    
  // }

//  // tailwind.config.js
// module.exports = {
//   theme: {
//     screens: {
//       'sm': '300px',
//       // => @media (min-width: 419px) { ... }

//       'md': '420px',
//       // => @media (min-width: 767px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   }
// }

// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': {'min': '150px', 'max': '419px'},
      'md': {'min': '420px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '959px'},
      'xl': {'min': '959px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  }
}