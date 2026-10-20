'use client';

// Adapted from Klyv UI ShimmerButton (MIT, Copyright (c) 2026 Klyv contributors).
// Source: https://github.com/Klyv-UI/klyv/blob/main/src/components/ShimmerButton/ShimmerButton.tsx
// Discovery: https://preview.21st.dev/@klyv-ui/components/klyv-shimmer-button
// Keeps native anchor semantics and adds reduced-motion and coarse-pointer guards.
import {useRef,type ReactNode,type PointerEvent} from 'react';
import {ArrowUpRight} from 'lucide-react';

type Props={href:string;children:ReactNode;className?:string;leadingIcon?:ReactNode};
export function AnimatedCta({href,children,className='',leadingIcon}:Props){
 const ref=useRef<HTMLAnchorElement>(null);
 function move(event:PointerEvent<HTMLAnchorElement>){
  if(event.pointerType!=='mouse'||!window.matchMedia('(hover: hover) and (pointer: fine)').matches||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const node=ref.current;if(!node)return;const rect=node.getBoundingClientRect();
  node.style.setProperty('--cta-glow-x',`${event.clientX-rect.left}px`);
  node.style.setProperty('--cta-glow-y',`${event.clientY-rect.top}px`);
  node.style.setProperty('--cta-glow-opacity','1');
 }
 function leave(){ref.current?.style.setProperty('--cta-glow-opacity','0')}
 return <a ref={ref} href={href} className={'button animated-cta '+className} onPointerMove={move} onPointerLeave={leave} onPointerCancel={leave}>
  <span aria-hidden="true" className="cta-pointer-glow"/>
  <span aria-hidden="true" className="cta-sheen"/>
  <span className="cta-label">{leadingIcon&&<span className="cta-leading" aria-hidden="true">{leadingIcon}</span>}{children}</span>
  <span aria-hidden="true" className="cta-arrow"><ArrowUpRight size={19}/></span>
 </a>
}
