import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    html {
        scroll-behavior: smooth;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body{
        position: relative;
        min-height: 100vh;
        font-family: "Inter", sans-serif;
        /* background: #000;
        background: -webkit-linear-gradient(
            to right,
            #000,#CC0000
        );
        background: linear-gradient(to right, #000, #CC0000); */

        background-image: linear-gradient(
      #0009,
      #0000
    ),
    url('https://usagif.com/wp-content/uploads/gif-heart-3.gif');
    }


    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: "";
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button, input, select, a, textarea{
        outline: none;
    }
    
    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }

    .container{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }

     :root{

        --swiper-pagination-color: #fff;
        --swiper-pagination-progressbar-bg-color: #fff;
    }
`
