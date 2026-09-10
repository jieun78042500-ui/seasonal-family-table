import './globals.css';
import './extension.css';
import './home.css';
import {Header,Footer} from '../components/site-shell';
import {metadata as makeMetadata,origin} from '../lib/site';
export const metadata={...makeMetadata('한 번 장보고 일주일을 건강하게','제철 재료로 차리는 5인 가족의 7일 식단, 장보기, 영양식과 초보 요리 레시피.','/'),metadataBase:new URL(origin),icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><a className="skip-link" href="#main-content">본문 바로가기</a><Header/><div id="main-content">{children}</div><Footer/></body></html>}

