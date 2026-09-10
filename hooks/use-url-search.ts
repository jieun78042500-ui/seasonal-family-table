'use client';
import {useSyncExternalStore} from 'react';
function subscribe(change:()=>void){window.addEventListener('popstate',change);window.addEventListener('seasonal-search',change);return()=>{window.removeEventListener('popstate',change);window.removeEventListener('seasonal-search',change)}}
const snapshot=()=>location.search;
export function useURLSearch(){const search=useSyncExternalStore(subscribe,snapshot,()=> '');return {search,replace:(params:URLSearchParams)=>{history.replaceState(null,'',location.pathname+(params.size?'?'+params.toString():''));window.dispatchEvent(new Event('seasonal-search'))}}}
