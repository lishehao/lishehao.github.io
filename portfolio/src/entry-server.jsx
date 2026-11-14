// Build-time prerender of the homepage, so it paints before the JS arrives.
import {renderToString} from 'react-dom/server';
import {DaybookPortfolio} from './DaybookPortfolio.jsx';

export function render(pathname){
 const previous=globalThis.location;
 globalThis.location={pathname,hash:'',href:'https://lishehao.github.io'+pathname};
 try{return renderToString(<DaybookPortfolio/>);}finally{globalThis.location=previous;}
}
