import Link from 'next/link';
import Image from 'next/image';
import {Check, CalendarDays, ShoppingBasket, Users, CookingPot, Scale, Dumbbell, Leaf, BookOpen, Utensils, CupSoda, Flame, Carrot, Lightbulb, ListChecks, ArrowRight} from 'lucide-react';
import {getRecipe, weeklyPlan, pantryIngredients} from '../lib/food';
import {posts} from '../lib/posts';
import {origin} from '../lib/site';
import {HomeSeasonSummary} from '../components/home-season-summary';

const title='제철라이프 | 5인 가족 제철 식단과 일주일 장보기';
const description='제철 재료로 준비하는 5인 가족의 7일 식단과 한 번 장보기 목록. 영양식단, 다이어트식, 초보 레시피와 24절기 정보를 확인하세요.';
export const metadata={title,description,alternates:{canonical:origin+'/'},openGraph:{title,description,url:origin+'/',siteName:'제철라이프',locale:'ko_KR',type:'website',images:[{url:origin+'/seasonal-table.png',width:1536,height:1024,alt:'제철 재료로 차린 다섯 식구의 가족 식탁'}]},twitter:{card:'summary_large_image',title,description,images:[origin+'/seasonal-table.png']}};
const concerns=[
  {Icon:CalendarDays,problem:'매일 무엇을 먹을지 막막해요',solution:'7일 식단을 미리 살펴보세요.',detail:'월요일부터 일요일까지 아침·점심·저녁을 한 번에 정리했어요.'},
  {Icon:ShoppingBasket,problem:'장을 봐도 식재료가 남아요',solution:'한 번 장보고, 재료를 나눠 써요.',detail:'필요한 양을 모아 보고 같은 재료를 다른 요리에 활용해요.'},
  {Icon:Users,problem:'가족마다 필요한 식사가 달라요',solution:'한 식탁에서 목표에 맞게 골라요.',detail:'온 가족 메뉴와 영양식·다이어트식을 구분해 찾을 수 있어요.'},
  {Icon:Scale,problem:'5인분은 얼마나 넣어야 할까요?',solution:'재료 양과 양념 계량을 함께 봐요.',detail:'5인분 재료와 밥숟가락 기준으로 조리 전에 준비해요.'},
  {Icon:CookingPot,problem:'양념과 조리 순서가 복잡해요',solution:'손질부터 불 조절까지 순서대로.',detail:'단계별 요리법과 실패하기 쉬운 지점을 함께 안내해요.'},
];
const families=[
  {Icon:Dumbbell,title:'막내를 위한 영양식단',copy:'훈련과 성장에 필요한 탄수화물과 단백질을 한 끼에 균형 있게 챙겨요.',cta:'영양식단 보기',href:'/recipes?goal=영양식단'},
  {Icon:Leaf,title:'첫째·둘째를 위한 다이어트식',copy:'채소와 단백질을 충분히 먹으면서 건강하게 체중을 관리해요.',cta:'다이어트식 보기',href:'/recipes?goal=다이어트식'},
  {Icon:BookOpen,title:'요리 초보를 위한 실패 없는 집밥',copy:'밥숟가락 계량부터 불 조절까지 순서대로 따라 할 수 있어요.',cta:'쉬운 레시피 보기',href:'/recipes?difficulty=쉬움'},
];
const beginner=[
  {Icon:Utensils,title:'밥숟가락 계량',copy:'평평하게 한 숟가락, 15ml 기준'},
  {Icon:CupSoda,title:'종이컵 계량',copy:'한 컵 180ml로 물의 양 맞추기'},
  {Icon:Flame,title:'중불·약불 구분',copy:'재료를 익힐 때와 졸일 때 구분하기'},
  {Icon:Carrot,title:'재료 손질 순서',copy:'씻고, 자르고, 조리할 순서로 놓기'},
  {Icon:Lightbulb,title:'실패를 줄이는 조리 팁',copy:'타기 쉬운 양념은 불을 낮춰 넣기'},
  {Icon:ListChecks,title:'기본 양념 비율',copy:'간장·고추장·된장을 메뉴에 맞게'},
];
function WeeklyCTA({full=false}:{full?:boolean}){return <Link className="button primary home-primary" href="/weekly">{full?'이번 주 전체 식단·장보기 보기':'이번 주 식단·장보기 보기'}<ArrowRight size={18} aria-hidden="true"/></Link>}

export default function Home(){return <main className="home-landing">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'제철라이프',url:origin+'/',description,inLanguage:'ko-KR'}).replace(/</g,'\\u003c')}}/>
  <section className="hero home-hero" aria-labelledby="home-title"><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow">제철 재료로 준비하는 5인 가족 식탁</p><h1 id="home-title">제철 한 끼로,<br/><em>우리 가족을 건강하게</em></h1><p className="lead">일주일에 한 번 장보고, 다섯 식구가 맛있게 먹는 현실적인 7일 식단. 운동하는 자녀의 영양식과 다이어트식까지 한 식탁에서 준비하세요.</p><div className="hero-actions"><WeeklyCTA/><Link className="button ghost" href="/recipes?difficulty=쉬움">쉬운 레시피 찾기</Link></div><ul className="home-trust">{['5인 기준 정확한 양','한 번 장보기 목록','초보자 조리 순서'].map(text=><li key={text}><Check size={17} aria-hidden="true"/>{text}</li>)}</ul></div>
    <figure className="home-table"><Image src="/seasonal-table.png" width={1536} height={1024} alt="버섯과 고등어, 채소와 밥으로 차린 다섯 식구의 제철 식탁" unoptimized priority sizes="(max-width: 900px) 100vw, 50vw"/><figcaption><span>한 식탁에서 함께 먹는 건강한 일주일</span><strong>5인 가족 · 제철 재료 · 집밥</strong></figcaption></figure>
  </div></section>
  <HomeSeasonSummary/>
  <section className="home-section" aria-labelledby="weekly-title"><div className="container"><div className="home-heading"><p className="kicker">이번 주 저녁 미리보기 · 5인 가족 기준</p><h2 id="weekly-title">이번 주, 고민 없이 차리는 7일 식탁</h2><p>저녁 한 상을 먼저 살펴보고, 전체 식단에서 아침·점심과 장보기 수량까지 확인하세요.</p></div><div className="home-meals">{weeklyPlan.map(day=>{const recipe=getRecipe(day.dinner);return <article className="home-meal" key={day.day}><div className="home-meal-day">{day.day}<span>저녁 · 5인분</span></div><Link className="home-meal-link" href={`/recipes/${recipe.slug}`}><Image src={recipe.image} alt={recipe.name+' 한 상'} width={480} height={320} unoptimized sizes="(max-width: 359px) 100vw, (max-width: 700px) 50vw, 25vw"/><div className="home-meal-body"><h3>{recipe.name}</h3><p>{recipe.goal}</p><span className="home-recipe-link">레시피 보기 <ArrowRight size={17} aria-hidden="true"/></span></div></Link></article>})}</div><div className="home-section-action"><WeeklyCTA full/></div></div></section>
  <section className="home-section home-soft" aria-labelledby="concern-title"><div className="container"><div className="home-heading"><p className="kicker">메뉴 결정부터 마지막 양념까지</p><h2 id="concern-title">매일 반복되는 식단 고민을 줄여 드려요</h2></div><div className="home-concerns">{concerns.map(({Icon,problem,solution,detail})=><article key={problem}><Icon aria-hidden="true"/><p className="home-problem">{problem}</p><h3>{solution}</h3><p>{detail}</p></article>)}</div></div></section>
  <section className="home-section" aria-labelledby="family-title"><div className="container"><div className="home-heading"><p className="kicker">따로 만들지 않아도 괜찮아요</p><h2 id="family-title">한 식탁, 세 가지 건강 목표</h2></div><div className="home-families">{families.map(({Icon,title:heading,copy,cta,href})=><article key={heading}><Icon className="home-family-icon" aria-hidden="true"/><h3>{heading}</h3><p>{copy}</p><Link className="home-text-link" href={href}>{cta}<ArrowRight size={18} aria-hidden="true"/></Link></article>)}</div><p className="home-note">5인분은 가족이 함께 나누는 기준량이에요. 성장기 자녀는 끼니를 줄이기보다 성장과 활동량에 맞게 충분히 먹어요.</p></div></section>
  <section className="home-section home-pantry" aria-labelledby="pantry-title"><div className="container home-split"><div><p className="kicker">한 번 장보기, 여러 번 맛있게</p><h2 id="pantry-title">12가지 재료로 만드는<br/>20가지 집밥</h2><p>한 번 장본 재료를 남기지 않고, 온 가족 메뉴와 영양식·다이어트식으로 다양하게 활용하세요.</p><ul className="home-checks"><li><Check aria-hidden="true"/>집에 있는 재료 체크</li><li><Check aria-hidden="true"/>부족한 재료 확인</li><li><Check aria-hidden="true"/>20가지 요리로 재료 돌려쓰기</li></ul><Link className="button ghost" href="/ingredient-menu">12재료 20메뉴 보기<ArrowRight size={18} aria-hidden="true"/></Link></div><div className="home-ingredients">{[['단백질','4가지'],['채소','6가지'],['기타','2가지']].map(([group,count])=><div key={group}><h3>{group==='기타'?'기타 재료':group}<span>{count}</span></h3><p>{pantryIngredients.filter(([type])=>type===group).map(([,name])=>name).join(' · ')}</p></div>)}<div className="home-pantry-total"><strong>12재료</strong><ArrowRight aria-hidden="true"/><strong>20메뉴</strong></div></div></div></section>
  <section className="home-section" aria-labelledby="beginner-title"><div className="container"><div className="home-heading"><p className="kicker">초보자를 위한 작은 요리 수업</p><h2 id="beginner-title">계량부터 불 조절까지, 처음이어도 괜찮아요</h2></div><div className="home-basics">{beginner.map(({Icon,title:heading,copy})=><article key={heading}><Icon aria-hidden="true"/><h3>{heading}</h3><p>{copy}</p></article>)}</div><div className="home-section-action"><Link className="button ghost" href="/sauces">양념 사전 보기</Link><Link className="button ghost" href="/recipes?difficulty=쉬움">쉬운 레시피 보기</Link></div></div></section>
  <section className="home-section home-movement" aria-labelledby="movement-title"><div className="container home-split"><div><p className="kicker">잘 먹고, 가볍게 움직이는 하루</p><h2 id="movement-title">식탁 옆 오늘의 5분 운동</h2><p>식탁 옆 튼튼한 의자 하나로 시작해요.<br/>준비운동부터 마무리까지, 총 5분이면 충분해요.</p><Link className="button ghost" href="/wellness">오늘 운동 시작하기<ArrowRight size={18} aria-hidden="true"/></Link></div><div className="home-workout"><ol><li><span>1분</span><div><h3>준비운동 · 제자리 걷기</h3><p>편한 속도로 걸으며 몸을 깨워요.</p></div></li><li><span>3분</span><div><h3>의자 스쿼트와 휴식</h3><p>천천히 앉았다 일어나고, 남는 시간은 가볍게 걸어요.</p></div></li><li><span>1분</span><div><h3>마무리 스트레칭</h3><p>벽을 짚고 종아리를 좌우로 늘여요.</p></div></li></ol><p className="home-workout-note">초보자라면 바퀴 없는 의자를 벽에 붙여 주세요. 통증이나 어지러움이 있으면 멈추세요.</p></div></div></section>
  <section className="home-quote container" aria-labelledby="quote-title"><h2 id="quote-title">오늘의 한 줄</h2><blockquote>잘 차린 한 끼는,<br/>오늘의 나를 돌보는 다정한 방법입니다.</blockquote></section>
  <section className="home-section home-blog" aria-labelledby="blog-title"><div className="container"><div className="home-heading"><p className="kicker">최신 블로그</p><h2 id="blog-title">제철을 잘 먹고, 잘 사는 이야기</h2></div><div className="home-posts">{posts.slice(0,3).map(post=><article key={post.slug}><span>{post.category}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link className="home-text-link" href={`/blog/${post.slug}`}>이어서 읽기<ArrowRight size={18} aria-hidden="true"/></Link></article>)}</div><div className="home-section-action"><Link className="button ghost" href="/blog">제철라이프의 모든 글 보기</Link></div></div></section>
  <section className="home-final" aria-labelledby="final-title"><div className="container"><p className="kicker">다섯 식구의 일주일, 여기서 시작해요</p><h2 id="final-title">이번 주 식단 고민,<br/>오늘 한 번에 끝내세요</h2><p>5인 가족의 7일 식단과 필요한 장보기 재료를 한눈에 확인해 보세요.</p><div className="home-section-action"><WeeklyCTA/><Link className="button ghost" href="/ingredient-menu">12재료 20메뉴 보기</Link></div></div></section>
</main>}
