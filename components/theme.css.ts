 import { createGlobalTheme } from '@vanilla-extract/css';

 export const vars = createGlobalTheme(':root', {
   color: {
     pink: 'pink',
     blue: 'blue',
     navy: 'navy',
     red: 'red',
   },
   space: {
     small: '8px',
     medium: '16px',
     large: '24px',
   },
   font: {
     body: 'arial',
   },
 });