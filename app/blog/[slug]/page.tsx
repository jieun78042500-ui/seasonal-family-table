import {notFound} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {posts} from '../../../lib/posts';
import {metadata as meta,origin} from '../../../lib/site';

export function generateStaticParams(){return posts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=posts.find(p=>p.slug===slug);
  if(!p)return {};
  const publishedAt='publishedAt' in p?p.publishedAt:'2026-09-09T09:00:00+09:00';
  const m=meta(p.title,p.description,`/blog/${slug}`,p.image);
  return {...m,openGraph:{...m.openGraph,type:'article',publishedTime:publishedAt,modifiedTime:publishedAt}};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=posts.find(p=>p.slug===slug);
  if(!p)notFound();
  const publishedAt='publishedAt' in p?p.publishedAt:'2026-09-09T09:00:00+09:00';
  const displayDate='displayDate' in p?p.displayDate:'2026년 9월 9일';
  const schema={'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.description,image:origin+p.image,datePublished:publishedAt,dateModified:publishedAt,author:{'@type':'Organization',name:'해피살림',url:origin},publisher:{'@type':'Organization',name:'해피살림'},mainEntityOfPage:origin+'/blog/'+p.slug,articleSection:p.category};
  return <main className="container article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    <nav className="breadcrumb" aria-label="현재 위치"><Link href="/blog">블로그</Link> / {p.category}</nav>
    <article>
      <span className="badge">{p.category}</span>
      <h1>{p.title}</h1>
      <p className="lead">{p.description}</p>
      <p>해피살림 편집팀 · {displayDate}</p>
      <Image src={p.image} alt={p.title} width={1000} height={660} unoptimized priority className="dish-image"/>
      {p.sections.map(([title,text],index)=><section key={title}>
        {index===1&&'bodyImage' in p&&<Image src={p.bodyImage} alt="수능 20일 전 생활 리듬과 공부 계획 체크리스트" width={1000} height={660} unoptimized className="dish-image"/>}
        <h2>{title}</h2><p style={{whiteSpace:'pre-line'}}>{text}</p>
      </section>)}
      {p.sources.length>0&&<aside className="notice"><h2>참고 자료</h2>{p.sources.map(([name,url])=><a className="block-link" key={url} href={url} target="_blank" rel="noreferrer">{name} ↗</a>)}</aside>}
      <Link className="button primary" href={p.related}>{'cta' in p?p.cta:'이야기 속 식단·생활 팁 확인하기 →'}</Link>
    </article>
    <section className="section"><h2>함께 읽을 이야기</h2><div className="posts">{posts.filter(x=>x.slug!==slug).slice(0,3).map(x=><article key={x.slug}><span>{x.category}</span><h3><Link href={`/blog/${x.slug}`}>{x.title}</Link></h3><p>{x.description}</p></article>)}</div></section>
  </main>
}
