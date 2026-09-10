import SeasonCalendar from '../../components/season-calendar';
import {Intro} from '../../components/food-card';
import {metadata as meta} from '../../lib/site';
export const metadata=meta('오늘의 절기 · 2026년 24절기','24절기 날짜, 의미, 제철 음식과 건강·살림 팁. 오늘의 절기와 다음 절기까지 남은 날짜를 확인하세요.','/season');
export default function Page(){return <main><Intro kicker="2026 SEASONAL CALENDAR" title="계절의 흐름을 따라 오늘을 맛있게"><p>24절기를 한눈에 살펴보고, 지금 우리 식탁에 필요한 이야기를 만나보세요.</p></Intro><SeasonCalendar/></main>}
