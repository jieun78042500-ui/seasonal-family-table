import {notFound} from 'next/navigation';
import {Intro} from '../../components/food-card';
import RecipeSearch from '../../components/recipe-search';
import WeeklyTable from '../../components/weekly-table';
import SauceGuide from '../../components/sauce-guide';
import Wellness from '../../components/wellness';
import BlogList from '../../components/blog-list';
import PrintButton from '../../components/print-button';
import {metadata as meta} from '../../lib/site';
const pages:Record<string,{title:string;description:string;kicker:string}>={weekly:{title:'한 번 장보는 7일 식단',description:'5인 가족의 아침·점심·저녁과 장보기 수량을 한눈에 확인하세요. 같은 재료로 다양하게 차리는 가을 식단 예시입니다.',kicker:'WEEKLY MEAL PLAN'},recipes:{title:'초보도 성공하는 제철 레시피',description:'5인분 재료와 쉬운 조리 순서. 제철·재료·시간·난이도로 우리 가족에게 맞는 한 끼를 찾아보세요.',kicker:'EASY RECIPES'},sauces:{title:'밥숟가락으로 배우는 양념 사전',description:'간장부터 국물 양념까지, 5인분 계량과 짠맛·단맛을 조절하는 방법을 알려드려요.',kicker:'SAUCE GUIDE'},wellness:{title:'잘 먹고, 가볍게 움직이는 하루',description:'오늘의 5분 운동과 성장기 선수의 영양식, 가족의 균형 잡힌 식사 관리를 만나보세요.',kicker:'DAILY WELLNESS'},blog:{title:'제철을 잘 먹고, 잘 사는 이야기',description:'제철 이야기, 주간 식단, 영양식단, 다이어트식, 초보 요리, 장보기와 건강을 기록합니다.',kicker:'SEASONAL JOURNAL'}};
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=pages[slug];if(!p)return {};return meta(p.title,p.description,'/'+slug)}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=pages[slug];if(!p)notFound();return <main><Intro title={p.title} kicker={p.kicker}><p>{p.description}</p>{slug==='weekly'&&<div className="hero-actions"><a className="button primary" href="#shopping">장보기 목록으로 ↓</a><PrintButton/></div>}</Intro>{slug==='weekly'?<WeeklyTable/>:slug==='recipes'?<RecipeSearch/>:slug==='sauces'?<SauceGuide/>:slug==='wellness'?<Wellness/>:<BlogList/>}</main>}
