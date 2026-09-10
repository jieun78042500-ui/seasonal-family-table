'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useRef,useState} from 'react';
import {Menu,X,ArrowRight} from 'lucide-react';
import {navigation} from '../lib/site';
function Brand(){return <Image src="/jecheol-life-logo.png" alt="제철라이프 홈" width={2086} height={754} unoptimized className="site-logo" priority/>}
export function Header(){
  const [open,setOpen]=useState(false);
  const toggle=useRef<HTMLButtonElement>(null);
  const path=usePathname();
  return <header className="site-header landing-header"><div className="container nav-wrap">
    <Link className="brand logo-brand" href="/" onClick={()=>setOpen(false)}><Brand/></Link>
    <button ref={toggle} className="menu-toggle" aria-label={open?'메뉴 닫기':'메뉴 열기'} aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav id="site-navigation" className={`main-nav ${open?'is-open':''}`} aria-label="주 메뉴" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}}}>
      {navigation.map(([url,label])=><Link key={url} href={url} aria-current={path===url||(url!=='/'&&path.startsWith(url+'/'))?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}
      <Link className="button primary home-primary mobile-weekly-cta" href="/weekly" onClick={()=>setOpen(false)}>이번 주 식단·장보기 보기<ArrowRight size={18} aria-hidden="true"/></Link>
    </nav>
    <Link className="button primary home-primary nav-cta" href="/weekly">이번 주 식단·장보기 보기<ArrowRight size={18} aria-hidden="true"/></Link>
  </div></header>
}
export function Footer(){return <footer className="landing-footer"><div className="container footer-inner"><div><Link className="brand logo-brand footer-logo" href="/"><Brand/></Link><p>한 번 장보고, 다섯 식구의 일주일을 건강하게.<br/>제철 식단과 장보기, 쉬운 요리법을 함께 나눕니다.</p></div><nav aria-label="하단 메뉴">{navigation.map(([url,label])=><Link href={url} key={url}>{label}</Link>)}</nav><small>© 2026 제철라이프 · 모든 요리는 5인분 기준</small></div></footer>}
