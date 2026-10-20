'use client';

import {useEffect,useRef,useState,type ReactNode,type MouseEvent} from 'react';
import {useRouter} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';

const PAGE_TURN_MS=620;
type Props={href:string;children:ReactNode;className?:string;leadingIcon?:ReactNode};

/** A native link with a two-sided book page that opens only on activation. */
export function AnimatedCta({href,children,className='',leadingIcon}:Props){
 const router=useRouter();
 const [turning,setTurning]=useState(false);
 const locked=useRef(false);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
 function activate(event:MouseEvent<HTMLAnchorElement>){
  // Preserve native new-tab, download and modified-click behavior.
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  event.preventDefault();
  if(locked.current)return;
  locked.current=true;setTurning(true);
  timer.current=setTimeout(()=>{
   router.push(href);
   // Shared header/footer links may survive the navigation or target the current route.
   timer.current=setTimeout(()=>{setTurning(false);locked.current=false;timer.current=null},300);
  },PAGE_TURN_MS);
 }
 return <a href={href} className={'button animated-cta book-cta '+(turning?'is-turning ':'')+className} onClick={activate}>
  <span aria-hidden="true" className="cta-book-left"/>
  <span aria-hidden="true" className="cta-book-page"><span className="cta-page-front"/><span className="cta-page-back"/></span>
  <span className="cta-original-content"><span className="cta-label">{leadingIcon&&<span className="cta-leading" aria-hidden="true">{leadingIcon}</span>}{children}</span><span aria-hidden="true" className="cta-arrow"><ArrowUpRight size={19}/></span></span>
  <span aria-hidden="true" className="cta-revealed-content"><span>{children}</span><ArrowUpRight size={19}/></span>
 </a>
}
