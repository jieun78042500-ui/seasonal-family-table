'use client';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {posts,postCategories} from '../lib/posts';
export default function BlogList(){const [category,setCategory]=useState('전체');return <section className="section container"><div className="chips">{['전체',...postCategories].map(c=><button key={c} aria-pressed={c===category} onClick={()=>setCategory(c)}>{c}</button>)}</div><p role="status">{posts.filter(p=>category==='전체'||p.category===category).length}개의 이야기</p><div className="recipe-grid">{posts.filter(p=>category==='전체'||p.category===category).map(p=><article key={p.slug} className="recipe-card"><Link href={`/blog/${p.slug}`}><Image src={p.image} alt={p.title} width={720} height={480} unoptimized className="dish-image"/><div className="recipe-card-body"><span className="badge">{p.category}</span><h2>{p.title}</h2><p>{p.description}</p><span className="text-link">이어서 읽기 →</span></div></Link></article>)}</div></section>}
