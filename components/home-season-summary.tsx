'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {terms,seoulDate,currentTerm,daysUntil} from '../lib/seasons';

export function HomeSeasonSummary(){
  const [today,setToday]=useState('');
  useEffect(()=>{const update=()=>setToday(seoulDate());update();const timer=setInterval(update,60000);return()=>clearInterval(timer)},[]);
  const supported=today.startsWith('2026-');
  const term=supported?currentTerm(today):undefined;
  const next=supported?terms.find(item=>item.date>today):undefined;
  return <section className="home-season" aria-labelledby="today-term"><div className="container home-season-grid">
    <div><p className="home-season-date">{today?<time dateTime={today}>{today.replaceAll('-','.')} · 한국 시간</time>:'오늘 날짜 확인 중'}</p><h2 id="today-term">오늘의 절기 · {term?.name??'계절의 흐름'}</h2><p>{term?.description??'2026년 절기 달력에서 계절 이야기를 살펴보세요.'}</p></div>
    <div><h3>대표 제철 식재료</h3><p>{term?.foods??'절기 달력에서 확인해 주세요.'}</p></div>
    <div><h3>다음 절기</h3>{next?<p><strong>{next.name} · <time dateTime={next.date}>{next.date.slice(5).replace('-','월 ')}일</time></strong><span className="home-days">{daysUntil(next.date,today)}일 남았어요</span></p>:<p>{today?'2026년 전체 달력 보기':'날짜 확인 중'}</p>}<Link href="/season">24절기 전체 보기<ArrowRight size={17} aria-hidden="true"/></Link></div>
  </div></section>
}
