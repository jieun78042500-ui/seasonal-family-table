import Link from 'next/link';
import Image from 'next/image';
import type {Recipe} from '../lib/food';
export function FoodCard({recipe:r}:{recipe:Recipe}){return <article className="recipe-card"><Link href={`/recipes/${r.slug}`}><Image src={r.image} alt={r.imageNote?`${r.name}에 활용하는 재료의 식탁 예시`:r.name} width={720} height={480} unoptimized className="dish-image"/><div className="recipe-card-body"><span className="badge">{r.goal}</span><h3>{r.name}</h3><p>5인분 · {r.time}분 · {r.difficulty}</p><p>{r.nutrient}</p><span className="text-link">조리 순서 보기 →</span></div></Link></article>}
export function Intro({kicker,title,children}:{kicker:string;title:string;children:React.ReactNode}){return <section className="subhero"><div className="container"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="intro-copy">{children}</div></div></section>}
