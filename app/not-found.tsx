import Link from 'next/link';
export default function NotFound(){return <main className="section container empty-state"><p className="kicker">404</p><h1>찾으시는 페이지가 없어요</h1><p>주소를 확인하거나 레시피 목록에서 다시 찾아보세요.</p><Link className="button primary" href="/recipes">레시피 찾아보기</Link></main>}
