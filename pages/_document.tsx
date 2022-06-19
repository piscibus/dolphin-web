import {Head as NextHead, Html, Main, NextScript} from 'next/document';

const Document = () => (
  <Html>
    <NextHead/>
    <body data-layout="horizontal">
    <Main/>
    <NextScript/>
    </body>
  </Html>
);

export default Document;
