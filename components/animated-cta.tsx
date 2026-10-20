import type {ReactNode} from 'react';
import {ArrowUpRight} from 'lucide-react';
import styles from './animated-cta.module.css';

type Props={href:string;children:ReactNode;className?:string;leadingIcon?:ReactNode};

/** One native link, one visible label, no delayed navigation or duplicate face. */
export function AnimatedCta({href,children,className='',leadingIcon}:Props){
 return <a href={href} className={'button '+styles.cta+' '+className}>
  <span className={styles.label}>{leadingIcon&&<span className={styles.leading} aria-hidden="true">{leadingIcon}</span>}{children}</span>
  <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true"/>
 </a>
}
