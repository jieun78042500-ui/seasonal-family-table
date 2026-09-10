import {navigation,origin} from '../lib/site';
import {recipes} from '../lib/food';
import {posts} from '../lib/posts';
export default function sitemap(){return [...navigation.map(([path])=>path),...recipes.map(r=>'/recipes/'+r.slug),...posts.map(p=>'/blog/'+p.slug)].map(path=>({url:origin+path,lastModified:'2026-09-09',changeFrequency:'weekly' as const,priority:path==='/'?1:0.7}))}
