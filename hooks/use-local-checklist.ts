'use client';
import {useCallback,useState,useSyncExternalStore} from 'react';
const unavailable='__storage_unavailable__';
export function useLocalChecklist(key:string,allowed:string[]){
 const [writeError,setWriteError]=useState(false);
 const subscribe=useCallback((onChange:()=>void)=>{window.addEventListener('storage',onChange);window.addEventListener('seasonal-storage',onChange);return()=>{window.removeEventListener('storage',onChange);window.removeEventListener('seasonal-storage',onChange)}},[]);
 const getSnapshot=useCallback(()=>{try{return localStorage.getItem(key)||'[]'}catch{return unavailable}},[key]);
 const raw=useSyncExternalStore(subscribe,getSnapshot,()=> '[]');
 const [fallback,setFallback]=useState<string[]>([]);
 let saved:string[]=[];try{const parsed=JSON.parse(raw);if(Array.isArray(parsed))saved=parsed.filter(x=>typeof x==='string'&&allowed.includes(x))}catch{/* Corrupt or unavailable storage keeps an empty selection. */}
 const picked=writeError?fallback:saved;
 function toggle(name:string){const next=picked.includes(name)?picked.filter(x=>x!==name):[...picked,name];try{localStorage.setItem(key,JSON.stringify(next));window.dispatchEvent(new Event('seasonal-storage'));setWriteError(false)}catch{setFallback(next);setWriteError(true)}}
 return {picked,toggle,storageError:writeError||raw===unavailable};
}
