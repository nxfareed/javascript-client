// import {
//   createMuiTheme
// } from '@material-ui/core/styles';

// export const theme = createMuiTheme({
//   Typography: {
//     htmlFontSize: 50,
//     fontFamily: [
//       'cursive',
//       '"Comic Sans MS"',
//       'sans-serif',
//     ].join(','),
//   },
// });

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
typography: {
htmlFontSize: 10,
fontFamily: [
'cursive',
'sans-serif',
'"Comic Sans MS"',
].join(','),
},
});
export default theme;
