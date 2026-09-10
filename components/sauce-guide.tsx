'use client';
import {useState} from 'react';
import Link from 'next/link';
import {sauces} from '../lib/sauces';
import {getRecipe,MEASURE} from '../lib/food';
export default function SauceGuide(){const [category,setCategory]=useState('전체');return <section className="section container"><p className="notice">{MEASURE}</p><div className="chips">{['전체',...sauces.map(s=>s.category)].map(c=><button aria-pressed={c===category} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div><div className="recipe-grid sauces-grid">{sauces.filter(s=>category==='전체'||s.category===category).map(s=><article className="panel" key={s.name}><span className="badge">{s.category} · 5인분</span><h2>{s.name}</h2><p className="sauce-ratio">{s.ratio}</p><p>별도 표기가 없으면 모두 밥숟가락입니다.</p><p>{s.use}</p><p>{s.method}</p><h3>짠맛 조절</h3><p>{s.salt}</p><h3>단맛 조절</h3><p>{s.sweet}</p><h3>활용 요리</h3>{s.recipes.map(slug=><Link className="block-link" href={`/recipes/${slug}`} key={slug}>{getRecipe(slug).name} →</Link>)}</article>)}</div></section>}
