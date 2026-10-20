import type {ReactNode} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {GradientButton} from '@/components/ui/gradient-button';
import styles from './animated-cta.module.css';

type Props={href:string;children:ReactNode;className?:string;leadingIcon?:ReactNode};

/** Slot styles the native link directly: one label and immediate navigation. */
export function AnimatedCta({href,children,className='',leadingIcon}:Props){
 return <GradientButton asChild className={'button '+styles.cta+' '+className}>
  <a href={href}>
   <span className={styles.label}>{leadingIcon&&<span className={styles.leading} aria-hidden="true">{leadingIcon}</span>}{children}</span>
   <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true"/>
  </a>
 </GradientButton>
}
