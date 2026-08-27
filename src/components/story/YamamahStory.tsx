import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, BarChart3, ChevronDown, FlaskConical, Handshake, MapPinned, Pill, UsersRound, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import mark from "@/assets/yamamah-34.png.asset.json";
import play from "@/assets/yamamah-35.png.asset.json";
import conference from "@/assets/yamamah-36.png.asset.json";
import ribbons from "@/assets/yamamah-37.png.asset.json";
import professional from "@/assets/yamamah-38.png.asset.json";
import evidenceIcon from "@/assets/yamamah-39.png.asset.json";
import marketIcon from "@/assets/yamamah-40.png.asset.json";
import partnerIcon from "@/assets/yamamah-41.png.asset.json";
import hand from "@/assets/yamamah-43.png.asset.json";
import capsule from "@/assets/yamamah-44.png.asset.json";
import brandMark from "@/assets/yamamah-mark.png.asset.json";


type Stage = 0 | 1 | 2 | 3;
type Solution = { title: string; summary: string; detail: string; icon: string | null };

const solutions: Solution[] = [
  { title: "الحلول التجارية وسوق الدواء", summary: "قرارات استراتيجية مبنية على حركة السوق الحقيقية", detail: "تحليلات دقيقة لحجم السوق والحصص التنافسية، مع تتبع كامل لسلاسل إمداد الدواء من المصنع حتى المريض، وفهم عميق لسلوك الوصفات الدوائية.", icon: marketIcon.url },
  { title: "الأدلة الواقعية والتجارب السريرية", summary: "تسريع الأبحاث العلمية بالأدلة الواقعية", detail: "بنية تحتية رقمية تتيح توليد البيانات الواقعية لحظيًا لدعم الأبحاث، وتسهيل إجراء التجارب السريرية وتحديد الفئات المستهدفة بدقة.", icon: evidenceIcon.url },
  { title: "الوصول إلى الفئات المستهدفة", summary: "تواصل أدق مع المستفيدين والممارسين", detail: "نُمكّن التواصل المستهدف عبر القنوات الرقمية لدعم التوعية الصحية والبرامج الموجهة والمشاركة في الدراسات والبرامج الصحية.", icon: null },
  { title: "الشراكات والاستثمار الصحي", summary: "منظومة متكاملة تسرّع الابتكار", detail: "نربط بين القطاعين العام والخاص والجهات التشريعية لتمكين العلاجات الرقمية الحديثة وتطوير حلول رعاية صحية مبتكرة.", icon: partnerIcon.url },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Beam({ active, className = "" }: { active: boolean; className?: string }) {
  return <div className={`beam-path ${active ? "is-active" : ""} ${className}`}><span /></div>;
}

function StageNav({ stage, go }: { stage: Stage; go: (s: Stage) => void }) {
  return (
    <nav className="stage-nav" aria-label="مراحل القصة">
      {[0, 1, 2, 3].map((item) => (
        <button key={item} aria-label={`الانتقال إلى المرحلة ${item + 1}`} aria-current={stage === item ? "step" : undefined} onClick={() => go(item as Stage)} className={stage === item ? "active" : ""} />
      ))}
    </nav>
  );
}

function GlassMark({ stage }: { stage: Stage }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className="mark-morph" animate={{ opacity: stage < 2 ? 1 : 0, x: stage === 0 ? 0 : stage === 1 ? "-30vw" : "-45vw", y: stage === 0 ? 0 : "44vh", scale: stage === 0 ? 1 : stage === 1 ? 2.1 : 2.5, rotate: stage === 0 ? 0 : -6 }} transition={{ duration: reduced ? 0 : 1.25, ease }}>
      <img src={mark.url} alt="رمز اليمامة الزجاجي" />
      <div className="mark-sheen" />
      {!reduced && <div className="mark-particles">{Array.from({ length: 12 }).map((_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>}
    </motion.div>
  );
}

function Hero({ onPlay, leaving }: { onPlay: () => void; leaving: boolean }) {
  return (
    <motion.section className="story-panel hero-panel" initial={false} animate={{ opacity: leaving ? 0 : 1, pointerEvents: leaving ? "none" : "auto" }} transition={{ duration: 0.8, ease }}>
      <div className="hero-copy">
        <h1>ماذا تخبرنا البيانات عن الدواء؟</h1>
        <div className="cyan-rule" />
        <p className="hero-sub">اكتشف القصة الكاملة وراء الدواء<strong>بيانات وطنية. رؤى دوائية. قرارات أذكى.</strong></p>

        <button className="play-orb" onClick={onPlay} aria-label="ابدأ قصة البيانات">
          <span className="play-halo" />
          <img src={play.url} alt="" aria-hidden="true" />
        </button>
      </div>
      <Beam active={leaving} className="hero-beam" />
    </motion.section>
  );
}

function NationalData({ active }: { active: boolean }) {
  const groups = ["من أكبر منظومة بيانات صحية..", "نرسم مستقبل قطاع الأدوية."];
  return (
    <motion.section className="story-panel data-panel" animate={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }} transition={{ duration: 0.65 }}>
      <div className="data-copy">
        <h2>{groups.map((g, i) => <motion.span key={g} initial={false} animate={{ opacity: active ? 1 : 0, filter: active ? "blur(0px)" : "blur(10px)", y: active ? 0 : 8 }} transition={{ delay: active ? i * 0.18 : 0, duration: 0.9, ease }}>{g}</motion.span>)}</h2>
        <motion.p animate={{ opacity: active ? 1 : 0 }} transition={{ delay: 0.65 }} dangerouslySetInnerHTML={{ __html: "نُمكّن شركات الأدوية والقطاع الصحي من فهم حركة السوق وتتبع الأدوية،<br />وتفعيل التجارب السريرية، استنادًا إلى أعلى معايير البيانات الوطنية</motion.p>
      </div>
      <motion.div className="ribbons" animate={{ y: active ? 0 : 280, scaleX: active ? 1.08 : 0.48, scaleY: active ? 1 : 0.4, opacity: active ? 1 : 0 }} transition={{ duration: 1.25, ease }}>
        <img src={ribbons.url} alt="مسارات بيانات زجاجية متدفقة" />
        <div className="ribbon-light one" /><div className="ribbon-light two" />
      </motion.div>
    </motion.section>
  );
}

function SolutionIcon({ solution }: { solution: Solution }) {
  if (solution.icon) return <img src={solution.icon} alt="" />;
  return <span className="generated-icon"><UsersRound aria-hidden="true" /></span>;
}

function Solutions({ active }: { active: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedSolution = selected === null ? undefined : solutions[selected];
  return (
    <motion.section className="story-panel solutions-panel" animate={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}>
      <motion.div className="professional" animate={{ x: active ? 0 : -180, opacity: active ? 1 : 0 }} transition={{ duration: 1.1, ease }}><img src={professional.url} alt="متخصص سعودي محاط بلوحات بيانات صحية" /></motion.div>
      <div className="solutions-copy"><p className="kicker">قدرات اليمامة</p><h2>من البيانات إلى قرارات دوائية أذكى</h2></div>
      <div className="solutions-grid">
        {solutions.map((solution, i) => (
          <motion.button layoutId={`solution-${i}`} key={solution.title} className="solution-card" onClick={() => setSelected(i)} initial={false} animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.8, y: active ? 0 : 70 }} transition={{ delay: active ? i * 0.12 : 0, duration: 0.75, ease }} whileHover={{ scale: 1.025, y: -3 }}>
            <motion.div className="solution-icon" transition={{ duration: 0.45 }}><SolutionIcon solution={solution} /></motion.div>
            <div><h3>{solution.title}</h3><p>{solution.summary}</p><span>استكشف <ArrowLeft size={15} /></span></div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && selectedSolution && <motion.div className="detail-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.article layoutId={`solution-${selected}`} className="solution-detail" onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" size="icon" onClick={() => setSelected(null)} aria-label="إغلاق"><X /></Button>
            <div className="solution-icon"><SolutionIcon solution={selectedSolution} /></div>
            <h3>{selectedSolution.title}</h3><p>{selectedSolution.detail}</p>
          </motion.article>
        </motion.div>}
      </AnimatePresence>
    </motion.section>
  );
}

function Dashboard() {
  return <div className="laptop" aria-label="معاينة منصة اليمامة"><div className="laptop-camera"/><div className="screen"><aside><span className="mini-mark"/><BarChart3/><Pill/><UsersRound/><FlaskConical/><MapPinned/></aside><main><header><div><small>Yamamah Life Sciences</small><b>CareFlow</b></div><span className="live-dot">مباشر</span></header><div className="filters"><span>جميع المناطق</span><span>ارتفاع ضغط الدم</span><span>آخر 12 شهرًا</span></div><div className="metrics"><div><small>إجمالي الحالات</small><b>512.4M</b></div><div><small>الوصفات</small><b>321.7M</b></div><div><small>المرضى</small><b>24.8M</b></div></div><div className="dashboard-grid"><div className="chart"><b>الحصة الدوائية</b>{[82,65,56,43,31].map((w,i)=><i key={i} style={{width:`${w}%`}} />)}</div><div className="donut"><span>41%</span></div><div className="map"><MapPinned/><span>14 منطقة</span></div></div></main></div><div className="laptop-base"/></div>;
}

function Platform({ active }: { active: boolean }) {
  const [demo, setDemo] = useState(false);
  return <motion.section className="story-panel platform-panel" animate={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}>
    <div className="platform-copy"><p className="kicker">من الدواء إلى الرؤية</p><h2>كل إشارة تتحول إلى<br />قرار قابل للتنفيذ</h2><p>تترجم منصة اليمامة حركة الدواء إلى معرفة وطنية دقيقة، في اللحظة التي تحتاجها.</p><Button variant="glass" size="lg" onClick={() => setDemo(true)}>استعرض المنصة <ArrowLeft /></Button></div>
    <motion.img className="data-hand" src={hand.url} alt="يد رقمية تتفاعل مع بيانات الدواء" animate={{ opacity: active ? 0.82 : 0, x: active ? 0 : -140 }} transition={{ duration: 1.3, ease }} />
    <motion.img className="data-capsule" src={capsule.url} alt="كبسولة دواء تتحول إلى بيانات" animate={{ opacity: active ? 1 : 0, rotate: active ? [0, 2, -2, 0] : 0, y: active ? [0, -8, 0] : 80 }} transition={{ opacity: { duration: 0.7 }, rotate: { repeat: Infinity, duration: 7 }, y: { repeat: Infinity, duration: 5 } }} />
    <Beam active={active} className="platform-beam" />
    <motion.div className="dashboard-wrap" animate={{ opacity: active ? 1 : 0, x: active ? 0 : 120 }} transition={{ delay: 0.55, duration: 1.2, ease }}><Dashboard /></motion.div>
    <AnimatePresence>{demo && <motion.div className="demo-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Button variant="ghost" size="icon" onClick={() => setDemo(false)} aria-label="إغلاق العرض"><X/></Button><Dashboard /></motion.div>}</AnimatePresence>
  </motion.section>;
}

export function YamamahStory() {
  const [stage, setStage] = useState<Stage>(0);
  const [transitioning, setTransitioning] = useState(false);
  const lock = useRef(false);
  const go = useCallback((next: Stage) => { if (lock.current || next === stage) return; lock.current = true; setTransitioning(true); window.setTimeout(() => { setStage(next); setTransitioning(false); window.setTimeout(() => { lock.current = false; }, 450); }, next > stage ? 520 : 120); }, [stage]);
  useEffect(() => { const wheel = (event: WheelEvent) => { if (Math.abs(event.deltaY) < 24) return; event.preventDefault(); go(Math.max(0, Math.min(3, stage + (event.deltaY > 0 ? 1 : -1))) as Stage); }; window.addEventListener("wheel", wheel, { passive: false }); return () => window.removeEventListener("wheel", wheel); }, [go, stage]);
  useEffect(() => { const key = (e: KeyboardEvent) => { if (["ArrowDown","PageDown","ArrowLeft"].includes(e.key)) go(Math.min(3, stage + 1) as Stage); if (["ArrowUp","PageUp","ArrowRight"].includes(e.key)) go(Math.max(0, stage - 1) as Stage); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [go, stage]);
  return <main className={`story-shell stage-${stage}`} dir="rtl">
    <header className="brand-header"><img src={conference.url} alt="المؤتمر السنوي الدولي السادس للجمعية السعودية للصيدلة الإكلينيكية" /><img className="brand-mark" src={brandMark.url} alt="اليمامة لعلوم الحياة" /></header>
    <GlassMark stage={stage} />
    <Hero onPlay={() => go(1)} leaving={transitioning || stage !== 0} />
    <NationalData active={stage === 1} />
    <Solutions active={stage === 2} />
    <Platform active={stage === 3} />
    <StageNav stage={stage} go={go} />
    <div className="progress"><i style={{ transform: `scaleX(${(stage + 1) / 4})` }} /></div>
    <button className="next-cue" onClick={() => go(Math.min(3, stage + 1) as Stage)} aria-label="المتابعة" disabled={stage === 3}><ChevronDown /><span>{stage === 0 ? "ابدأ القصة" : stage === 3 ? "" : "تابع"}</span></button>
    {stage > 0 && <button className="back-cue" onClick={() => go((stage - 1) as Stage)} aria-label="العودة"><ArrowRight /></button>}
  </main>;
}
