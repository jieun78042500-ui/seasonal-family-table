import Link from 'next/link';
import Pantry from '../../components/pantry';
import PrintButton from '../../components/print-button';
import {Intro} from '../../components/food-card';
import {metadata as meta} from '../../lib/site';
export const metadata=meta('12재료 20메뉴','단백질 4개, 채소 6개, 기타 2개로 만드는 5인 가족 요리 20가지. 집에 있는 재료를 체크하고 레시피를 확인하세요.','/ingredient-menu');
export default function Page(){return <main><Intro kicker="ONE CART, TWENTY MEALS" title="딱 12재료! 집밥 메뉴 20"><p>같은 재료를 다르게 요리하면 식탁은 매일 새로워져요.</p><div className="hero-actions"><Link className="button primary" href="/weekly#shopping">주간 장보기 목록 보기</Link><PrintButton/></div></Intro><Pantry/></main>}
