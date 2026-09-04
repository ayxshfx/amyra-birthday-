import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Heart, Sparkles } from 'lucide-react';

const wishes = [
  'more reasons to laugh until your cheeks hurt',
  'people who make you feel completely yourself',
  'little adventures that become big memories',
  'a year that surprises you in the best ways',
];

function App() {
  const [kept, setKept] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const celebrate = () => {
    document.body.classList.remove('celebrate');
    void document.body.offsetWidth;
    document.body.classList.add('celebrate');
    setTimeout(() => document.body.classList.remove('celebrate'), 1800);
  };

  const share = async () => {
    const data = { title: 'Amyra — A Little Birthday Corner ✦', text: 'A little birthday corner made for Amyra.', url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1600); }
    } catch {}
  };

  const toggleWish = (i: number) => setChecked(v => v.includes(i) ? v.filter(x => x !== i) : [...v, i]);

  return (
    <main id="top" className="site">
      <div className="grain" />
      <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
      <nav className="nav">
        <a href="#top" className="brand">A / <span>Amyra</span></a>
        <div className="nav-links"><a href="#memories">memories</a><a href="#wishes">wishes</a><a href="#letter">letter</a></div>
        <button className="share" onClick={share}>{copied ? 'copied ✦' : 'share keepsake'} <ArrowUpRight size={14}/></button>
      </nav>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">22 / 09 — a little corner of the internet</p>
          <h1>happy<br/><em>birthday,</em><br/>Amyra<span>.</span></h1>
          <p className="intro">For the person who somehow turned ordinary conversations into memories worth keeping.</p>
          <a className="scroll" href="#memories"><span>scroll to the good stuff</span><ArrowDown size={16}/></a>
        </div>
        <div className="hero-card"><div className="card-stamp">✦</div><p className="tiny">a note for today</p><p className="quote">“Some people arrive quietly and then make the whole year feel different.”</p><div className="card-line"/><p className="tiny">made with care — Ash</p></div>
      </section>
      <div className="ticker"><div className="ticker-track">{Array(4).fill(null).map((_,i)=><span key={i}>HAPPY BIRTHDAY ✦ KEEP SMILING ✦ MAKE MORE MEMORIES ✦</span>)}</div></div>
      <section id="memories" className="section memories">
        <div className="section-head"><div><p className="eyebrow">01 / the archive</p><h2>tiny moments,<br/><em>big meaning.</em></h2></div><p className="side-copy">The best memories rarely announce themselves. They just happen — and somehow become the stories you keep coming back to.</p></div>
        <div className="memory-grid">
          <article className="memory big"><div className="memory-art art-one">✦<strong>good<br/>times</strong><small>worth remembering</small></div><p>the laughs</p><span>01</span></article>
          <article className="memory"><div className="memory-art art-two"><Heart fill="currentColor" size={42}/></div><p>the people</p><span>02</span></article>
          <article className="memory"><div className="memory-art art-three"><Sparkles size={46}/></div><p>the little things</p><span>03</span></article>
        </div>
      </section>
      <section id="wishes" className="section wishes"><div className="wish-title"><p className="eyebrow">02 / for the year ahead</p><h2>a few things<br/><em>i wish</em> for you.</h2><button className="celebrate" onClick={celebrate}><Sparkles size={15}/> send a little sparkle</button></div><div className="wish-list">{wishes.map((w,i)=><button className={`wish ${checked.includes(i) ? 'done':''}`} key={w} onClick={()=>toggleWish(i)}><span>{checked.includes(i) ? <Check size={15}/> : String(i+1).padStart(2,'0')}</span><strong>{w}</strong><ArrowUpRight size={17}/></button>)}<p className="progress">{checked.length} / {wishes.length} wishes held close</p></div></section>
      <section id="letter" className="letter"><div className="letter-inner"><p className="eyebrow gold">03 / the words i meant</p><h2>a little<br/><em>letter.</em></h2><article className="paper"><p className="tiny">from Ash, with everything i wanted to say</p><div className="letter-text"><p>I still remember how a random conversation became something I genuinely looked forward to.</p><p>Somewhere between the jokes, the late conversations and all the little things, you became a really special part of my days.</p><p>So today is simple: I hope you have a birthday full of the kind of happiness that stays with you long after the candles are gone.</p><p>Keep being exactly who you are. Keep making memories. And please keep smiling.</p><p className="signature">happy birthday, lilie <Heart size={17} fill="currentColor"/></p></div></article></div></section>
      <section className="finale"><p className="eyebrow">04 / save this moment</p><h2>keep this<br/><em>little love.</em></h2><p>Come back whenever you need a reminder that this chapter mattered.</p><button onClick={()=>setKept(true)}>{kept ? 'saved in your heart ✦' : 'make it a keepsake'} <Heart size={15} fill="currentColor"/></button></section>
      <footer><span>made for september 22</span><strong>happy birthday, Amyra<span>.</span> — Ash</strong><a href="#top">back to top ↑</a></footer>
    </main>
  );
}
export default App;
