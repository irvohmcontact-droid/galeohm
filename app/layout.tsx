import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site';
export const viewport: Viewport = {width:'device-width',initialScale:1,themeColor:'#f7f8f2',colorScheme:'light'};
export const metadata: Metadata = { metadataBase:new URL('https://galeohm.vercel.app'),title:{default:'GALEOHM — Votre borne. Votre maison. Votre liberté.',template:'%s | GALEOHM'},description:'Installation de borne de recharge à domicile : préparez votre projet, comparez les solutions, comprenez les prix et choisissez la puissance adaptée à votre voiture électrique.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body><a className="skip" href="#contenu">Aller au contenu</a><Header/>{children}<Footer/></body></html>}
