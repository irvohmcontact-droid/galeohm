import {topics} from '@/lib/content';
import {GuideExplorer} from '@/components/explorer';
export const metadata={title:'Tous les guides de recharge à domicile',description:'Prix, puissance, installation, copropriété, aides, recharge solaire et utilisation : trouvez la réponse adaptée à votre projet de borne électrique.'};
export default function Page(){return <main id="contenu" className="guide-index"><div className="page-heading"><span className="eyebrow dark">LE GUIDE ÉLECTRIQUE / GALEOHM</span><h1>Les bonnes questions.<br/><em>Des réponses claires.</em></h1><p>Du premier devis au quotidien avec votre borne : explorez les sujets qui font avancer votre projet.</p></div><GuideExplorer topics={topics}/></main>}
