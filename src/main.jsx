import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Menu, X, Play, Hammer, Building2, Utensils, ShoppingBag, Landmark, Ruler, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import './styles.css';

const A='/assets/';
const LOGO=A+'heb-logo-sage-peach.png';
// Add the final WhatsApp number here when it is provided. Use country code, digits only.
const WHATSAPP_NUMBER='923122609099';

const experience=[
 {title:'Restaurant & Food Outlets',icon:Utensils,text:'Construction and renovation experience for restaurant and food-service environments, with a focus on practical execution and business-ready spaces.'},
 {title:'Retail & Shop Construction',icon:ShoppingBag,text:'Construction and development experience for customer-facing retail and shop environments built around function, durability and presentation.'},
 {title:'Banks & Institutional Spaces',icon:Landmark,text:'Experience across institutional and commercial environments where quality, reliability and professional execution matter.'},
 {title:'Renovation & Upgrades',icon:Hammer,text:'Transforming existing spaces through renovation, structural improvements, interior development and finishing work.'}
];
const services=[
 ['Commercial Construction',Building2],['Restaurant & Outlet Construction',Utensils],['Retail & Shop Construction',ShoppingBag],['Renovation & Remodeling',Hammer],['Civil & Structural Works',Ruler],['Interior & Finishing',CheckCircle2]
];
const projects=[
 {title:'RCC Roof Construction',meta:'New Rizvia Society',image:'foundation.jpeg',video:'rcc-roof.mp4',desc:'On-site RCC roof filling and structural work.'},
 {title:'Civil & Foundation Works',meta:'Site Execution',image:'foundation.jpeg',desc:'Foundation and early-stage civil construction activity.'},
 {title:'Structural & RCC Works',meta:'Multi-Storey Construction',image:'structural.jpeg',video:'tr-girder.mp4',desc:'Structural construction and formwork in progress.'},
 {title:'Building Construction',meta:'Construction Progress',image:'construction-1.jpeg',video:'under-construction.mp4',desc:'Active construction showcasing on-site execution.'},
 {title:'Interior & Kitchen Works',meta:'Interior Development',image:'kitchen-1.jpeg',video:'kitchen-work.mp4',desc:'Kitchen and interior development work.'},
 {title:'Architectural Design',meta:'Proposed Design',image:'exterior-render.jpeg',desc:'Architectural visualization for modern building design.'}
];
const videos=[
 {title:'RCC Roof Construction',text:'RCC roof filling and structural work.',src:'rcc-roof.mp4'},
 {title:'TR Girder Roof Works',text:'TR girder fitting and roof construction activity.',src:'tr-girder.mp4'},
 {title:'Building Construction',text:'Construction progress from an active project site.',src:'under-construction.mp4'},
 {title:'Kitchen & Interior Work',text:'Interior development and kitchen-related work.',src:'kitchen-work.mp4'},
 {title:'Building Finishing',text:'Finishing-stage construction activity.',src:'building-finishing.mp4'},
 {title:'Eid Greeting',text:'Haider Estate & Builders greeting video.',src:'eid-greeting.mp4'}
];

function App(){
 const [open,setOpen]=useState(false);
 const [video,setVideo]=useState(null);
 const [sent,setSent]=useState(false);
 const nav=['About','Services','Projects','Approach','Contact'];
 const scroll=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <div className="site">
  <header className="nav"><div className="brand" onClick={()=>scroll('home')}><img className="brand-logo" src={LOGO} alt="Haider Estate & Builders logo" /><div><strong>HAIDER</strong><span>ESTATE & BUILDERS</span><small>Building Spaces. Delivering Excellence.</small></div></div>
   <div className={'nav-links '+(open?'show':'')}>{nav.map(n=><button key={n} onClick={()=>scroll(n.toLowerCase())}>{n}</button>)}</div>
   <button className="nav-cta" onClick={()=>scroll('contact')}>START A PROJECT <ArrowRight size={16}/></button>
   <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>

  <main>
   <section id="home" className="hero">
    <div className="hero-copy"><p className="eyebrow">COMMERCIAL CONSTRUCTION · RENOVATION</p><h1>We Build Spaces<br/>Where <em>Businesses Grow.</em></h1><p className="lead">Haider Estate & Builders delivers professional construction, renovation and commercial building solutions for businesses, retail spaces, restaurants and institutional projects.</p><div className="actions"><button className="primary" onClick={()=>scroll('projects')}>EXPLORE OUR WORK <ArrowRight size={17}/></button><button className="secondary" onClick={()=>scroll('contact')}>START YOUR PROJECT <ArrowRight size={17}/></button></div></div>
    <div className="hero-media"><video autoPlay muted loop playsInline preload="auto" poster={A+'construction-1.jpeg'} onError={e=>{e.currentTarget.poster=A+'construction-1.jpeg'}}><source src={A+'under-construction.mp4'} type="video/mp4"/></video><div className="hero-overlay"></div><button className="play" onClick={()=>setVideo(videos[2])}><Play fill="currentColor"/></button><div className="hero-badge"><span>Your Expansion.</span><b>Our Execution.</b></div></div>
   </section>

   <section className="cap-strip">{services.map(([name,Icon])=><div key={name}><Icon size={22}/><span>{name}</span></div>)}</section>

   <section id="about" className="section experience"><div className="section-head"><div><p className="eyebrow">OUR EXPERIENCE</p><h2>Experience Across<br/><em>Business Spaces.</em></h2></div><p>Our experience spans construction, structural works, renovation and interior development across commercial, retail, restaurant and institutional environments.</p></div><div className="experience-grid">{experience.map(({title,icon:Icon,text},i)=><article className="exp-card" key={title}><div className="image-wrap"><img src={A+["kitchen-1.jpeg","construction-2.jpeg","interior-render.jpeg","house-render.jpeg"][i]}/><span className="icon"><Icon size={21}/></span></div><div className="card-body"><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={22}/></div></article>)}</div></section>

   <section id="services" className="section services"><div className="services-intro"><p className="eyebrow">WHAT WE DO</p><h2>Our<br/><em>Services.</em></h2><p>From foundations to finishing, we support the construction needs of business and commercial spaces.</p></div><div className="service-grid">{services.map(([name,Icon])=><div className="service" key={name}><Icon size={28}/><h3>{name}</h3></div>)}</div></section>

   <section id="projects" className="section work"><div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>Featured <em>Projects.</em></h2></div><p>A selection of available project documentation showcasing our construction, structural and interior capabilities.</p></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title} onClick={()=>p.video&&setVideo(p)} onKeyDown={e=>{if((e.key==='Enter'||e.key===' ')&&p.video){e.preventDefault();setVideo(p)}}} role={p.video?'button':undefined} tabIndex={p.video?0:undefined}><div className="project-img">{p.video?<video className="project-video" muted autoPlay loop playsInline preload="metadata" poster={A+p.image} aria-label={p.title}><source src={A+p.video} type="video/mp4"/></video>:<img src={A+p.image} alt={p.title}/>} {p.video&&<span className="video-pill"><Play size={13} fill="currentColor"/> VIDEO</span>}</div><div><h3>{p.title}</h3><p>{p.meta}</p><span>{p.desc}</span></div><ArrowUpRight size={19}/></article>)}</div></section>

   <section className="motion"><div className="motion-head"><div><p className="eyebrow">CONSTRUCTION IN MOTION</p><h2>See Our Work <em>in Action.</em></h2></div><button onClick={()=>scroll('projects')}>VIEW ALL PROJECTS <ArrowRight size={16}/></button></div><div className="video-grid">{videos.map(v=><div className="video-card" key={v.src} onClick={()=>setVideo(v)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setVideo(v)}}} role="button" tabIndex={0} aria-label={`Play ${v.title}`}><video muted autoPlay loop playsInline preload="metadata" poster={A+'construction-1.jpeg'} onError={e=>{e.currentTarget.poster=A+'construction-1.jpeg'}}><source src={A+v.src} type="video/mp4"/></video><span className="video-play"><Play size={19} fill="currentColor"/></span><div><h3>{v.title}</h3><p>{v.text}</p></div></div>)}</div></section>

   <section id="approach" className="section approach"><div className="approach-title"><p className="eyebrow">OUR APPROACH</p><h2>From Concept<br/>to <em>Completion.</em></h2><p>Our structured approach keeps quality, transparency and timely delivery at the center of every stage.</p></div><div className="steps">{[['01','Understand','We understand your requirements, site conditions and goals.'],['02','Plan','We plan the scope, resources and strategy for smooth execution.'],['03','Build','Our team executes civil, structural and construction works.'],['04','Develop','Interior, finishing and project-specific details are completed.'],['05','Deliver','We deliver a space ready for your business to grow.']].map(([n,t,d])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></section>

   <section className="outlet"><div><p className="eyebrow">FOR GROWING BUSINESSES</p><h2>Building Your <em>Next Outlet.</em></h2><p>Whether you're opening a new restaurant outlet, expanding a retail network, developing a commercial space or upgrading an existing location, Haider Estate & Builders brings practical construction and renovation experience to the project.</p></div><button onClick={()=>scroll('contact')}>DISCUSS YOUR PROJECT <ArrowRight size={17}/></button></section>

   <section className="trust section"><div><p className="eyebrow">EXPERIENCE BUILT OVER REAL PROJECTS</p><h2>Practical Experience.<br/><em>Professional Execution.</em></h2><p>Our work has included restaurant and outlet environments, retail spaces, banking and institutional facilities, renovations and general building works. Selected historical documentation is currently unavailable, so this portfolio intentionally showcases only the project material we can presently document.</p></div><div className="trust-box"><div><strong>RESTAURANT</strong><span>OUTLET EXPERIENCE</span></div><div><strong>RETAIL</strong><span>SHOP CONSTRUCTION</span></div><div><strong>BANKING</strong><span>INSTITUTIONAL WORK</span></div><div><strong>RENOVATION</strong><span>UPGRADES & REMODELING</span></div></div></section>

   <section id="contact" className="contact section"><div className="contact-info"><p className="eyebrow">LET'S TALK</p><h2>Let's Build Your <em>Next Project.</em></h2><p>Tell us what you're planning. Our team will get in touch to discuss your requirements.</p><div className="details"><div><Phone size={19}/><span>Shamim Haider<br/><b>0300 3638688</b></span></div><div><Phone size={19}/><span>Inzamam Haider<br/><b>0312 2609099</b></span></div><div><MapPin size={19}/><span>Pakistan</span></div></div></div><form onSubmit={e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const data=Object.fromEntries(fd.entries());if(WHATSAPP_NUMBER==='REPLACE_WITH_WHATSAPP_NUMBER'){setSent(true);return;}const message=[`Hello Haider Estate & Builders,`,``, `Name: ${data.name||''}`,`Company: ${data.company||''}`,`Phone: ${data.phone||''}`,`Email: ${data.email||''}`,`Project Type: ${data.projectType||''}`,`Location: ${data.location||''}`,`Project Details: ${data.message||''}`].join('\n');window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');setSent(true);e.currentTarget.reset();}}><div className="form-row"><input name="name" required placeholder="Full Name *"/><input name="company" placeholder="Company Name"/></div><div className="form-row"><input name="phone" required type="tel" placeholder="Phone Number *"/><input name="email" required type="email" placeholder="Email Address *"/></div><div className="form-row"><select name="projectType" defaultValue=""><option value="" disabled>Project Type *</option><option>Restaurant / Outlet</option><option>Retail / Shop</option><option>Commercial Building</option><option>Bank / Institutional</option><option>Renovation</option><option>Other</option></select><input name="location" placeholder="Project Location"/></div><textarea name="message" required placeholder="Tell us about your project *" rows="5"></textarea><button className="primary" type="submit">{sent?'INQUIRY READY ✓':'SEND INQUIRY'} <ArrowRight size={17}/></button></form></section>
  </main>
  <footer><div className="footer-brand"><img className="brand-logo footer-logo" src={LOGO} alt="Haider Estate & Builders logo" /><div><strong>HAIDER</strong><span>ESTATE & BUILDERS</span><small>Building Spaces. Delivering Excellence.</small></div></div><div><b>QUICK LINKS</b>{nav.map(n=><button key={n} onClick={()=>scroll(n.toLowerCase())}>{n}</button>)}</div><div><b>OUR SERVICES</b>{services.slice(0,5).map(([n])=><span key={n}>{n}</span>)}</div><div><b>CONTACT INFO</b><span>0300 3638688</span><span>0312 2609099</span><span>Pakistan</span></div></footer>
  <div className="copyright">© 2026 Haider Estate & Builders. All Rights Reserved.</div>
  {video&&<div className="modal" onClick={()=>setVideo(null)}><div className="modal-inner" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setVideo(null)}><X/></button><video controls autoPlay muted playsInline preload="auto"><source src={A+video.src} type="video/mp4"/><p>Your browser could not load this video. Please try again.</p></video><div><p className="eyebrow">WORK SHOWCASE</p><h2>{video.title}</h2><p>{video.text}</p></div></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
