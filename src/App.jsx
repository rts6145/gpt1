import { useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  Mail,
  Menu,
  PlayCircle,
  Sparkles,
  Users,
  X,
  Youtube,
} from 'lucide-react';

const channelConfig = {
  channelName: 'Arab Center Channel',
  channelUrl: 'https://www.youtube.com/@YourChannelHandle',
  featuredVideoId: 'dQw4w9WgXcQ',
};

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'الخدمات', href: '#services' },
  { label: 'من نحن', href: '#about' },
  { label: 'يوتيوب', href: '#youtube' },
  { label: 'تواصل معنا', href: '#contact' },
];

const services = [
  {
    icon: BookOpen,
    title: 'برامج تدريبية',
    text: 'مسارات تدريب وورش عملية تساعد الأفراد والمؤسسات على تطوير مهاراتهم باحترافية.',
  },
  {
    icon: Users,
    title: 'استشارات متخصصة',
    text: 'حلول واضحة ومبنية على احتياج العميل لتطوير الأداء وبناء خطط قابلة للتنفيذ.',
  },
  {
    icon: Globe2,
    title: 'مشاريع مجتمعية',
    text: 'مبادرات تركز على المعرفة والتعاون والتأثير الإيجابي داخل المجتمع العربي.',
  },
];

const achievements = [
  { value: '+10', label: 'برامج' },
  { value: '+500', label: 'مستفيد' },
  { value: '24/7', label: 'دعم' },
  { value: '100%', label: 'التزام' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState(channelConfig.channelUrl);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const cleanYoutubeUrl = useMemo(() => {
    const value = youtubeUrl.trim();
    return value || channelConfig.channelUrl;
  }, [youtubeUrl]);

  return (
    <div className="app-shell" id="home">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.header
        className="navbar"
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      >
        <div className="container nav-content">
          <motion.a className="brand" href="#home" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <motion.span
              className="brand-mark"
              animate={{ rotate: [0, 5, -5, 0], boxShadow: ['0 10px 30px rgba(214,168,79,.25)', '0 18px 48px rgba(214,168,79,.45)', '0 10px 30px rgba(214,168,79,.25)'] }}
              transition={{ duration: 3.4, repeat: Infinity }}
            >
              AC
            </motion.span>
            <span>المركز العربي</span>
          </motion.a>

          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.06 }}
                whileHover={{ y: -3, color: '#d6a84f' }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="nav-actions">
            <motion.a className="btn btn-primary desktop-only" href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.94 }}>
              ابدأ الآن
              <ArrowLeft size={18} />
            </motion.a>
            <motion.button
              className="menu-btn"
              type="button"
              aria-label="فتح القائمة"
              onClick={() => setMenuOpen((value) => !value)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>

      <main>
        <section className="hero section-glow">
          <motion.div className="orb orb-one" animate={{ y: [0, -28, 0], x: [0, 16, 0], scale: [1, 1.12, 1] }} transition={floatTransition} />
          <motion.div className="orb orb-two" animate={{ y: [0, 24, 0], x: [0, -14, 0], scale: [1, 0.92, 1] }} transition={{ ...floatTransition, duration: 6.2 }} />

          <div className="container hero-grid">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div className="eyebrow" variants={itemVariants} whileHover={{ scale: 1.04 }}>
                <Sparkles size={17} />
                بوابة عربية حديثة للتميز
              </motion.div>

              <motion.h1 variants={itemVariants}>
                المركز العربي <span>للتطوير والتأثير</span> بخبرة رقمية عصرية.
              </motion.h1>

              <motion.p variants={itemVariants}>
                واجهة React احترافية تعرض خدمات المركز، برامجه، إنجازاته، وقناته على YouTube مع حركات سلسة لكل عنصر داخل الصفحة.
              </motion.p>

              <motion.div className="hero-actions" variants={itemVariants}>
                <motion.a className="btn btn-primary" href="#services" whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.94 }}>
                  استكشف الخدمات
                  <ArrowLeft size={18} />
                </motion.a>
                <motion.a className="btn btn-outline" href="#youtube" whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.94 }}>
                  شاهد القناة
                  <Youtube size={18} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.aside
              className="hero-card"
              initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.35 }}
              whileHover={{ y: -8, rotate: 1 }}
            >
              <motion.div className="gold-ring" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="arabic-title" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                المركز<br />العربي<br />للتميّز
              </motion.div>

              <div className="card-bottom">
                {achievements.map((item, index) => (
                  <motion.div
                    className="stat"
                    key={item.label}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + index * 0.12, type: 'spring' }}
                    whileHover={{ y: -8, scale: 1.06 }}
                  >
                    <strong>{item.value}</strong>
                    <small>{item.label}</small>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <SectionTitle eyebrow="خدماتنا" title="خدمات مصممة لتترك أثراً واضحاً" text="كل بطاقة وكل عنصر في هذا القسم يتحرك عند الظهور أو التفاعل ليعطي الصفحة إحساساً احترافياً وحيوياً." />

            <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className="service-card"
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ y: -12, scale: 1.03, rotate: index === 1 ? 0 : index === 0 ? 1 : -1 }}
                  >
                    <motion.div className="icon" whileHover={{ rotate: 12, scale: 1.12 }}>
                      <Icon size={28} />
                    </motion.div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-grid">
            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ type: 'spring', stiffness: 70, damping: 16 }}>
              <SectionTitle eyebrow="من نحن" title="هوية عربية موثوقة برؤية رقمية حديثة" text="الموقع مبني على React ويستخدم Framer Motion لإضافة انتقالات، ظهور تدريجي، حركات عائمة، تفاعل عند الضغط، وتأثيرات عند التمرير." />
            </motion.div>

            <motion.div className="about-panel" initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ type: 'spring', stiffness: 70, damping: 16 }}>
              {[
                'تصميم Responsive يعمل على الهاتف والكمبيوتر.',
                'حركات كثيرة لكل قسم وبطاقة وزر وعنوان.',
                'قسم YouTube قابل للتعديل والربط مع أي قناة.',
                'جاهز للتطوير لاحقاً إلى موقع كامل بعدة صفحات.',
              ].map((item, index) => (
                <motion.div className="check-row" key={item} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: -8 }}>
                  <CheckCircle2 size={23} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="youtube" className="youtube-section section-glow">
          <div className="container youtube-grid">
            <motion.div initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }}>
              <div className="eyebrow red-eyebrow">
                <Youtube size={18} />
                ربط قناة YouTube
              </div>
              <h2>اعرض قناة المركز وفيديو مميز داخل الموقع</h2>
              <p>
                يمكن تغيير رابط القناة من الحقل الموجود هنا، أو تثبيته نهائياً من ملف <code>src/App.jsx</code> داخل <code>channelConfig</code>.
              </p>

              <div className="youtube-form">
                <input
                  type="url"
                  value={youtubeUrl}
                  onChange={(event) => setYoutubeUrl(event.target.value)}
                  placeholder="ضع رابط قناة YouTube هنا"
                  aria-label="رابط قناة YouTube"
                />
                <motion.a className="btn btn-youtube" href={cleanYoutubeUrl} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  فتح القناة
                  <Youtube size={18} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="video-card" initial={{ opacity: 0, scale: 0.86, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ type: 'spring', stiffness: 75, damping: 16 }} whileHover={{ y: -10 }}>
              <motion.div className="play-badge" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <PlayCircle size={34} />
              </motion.div>
              <iframe
                src={`https://www.youtube.com/embed/${channelConfig.featuredVideoId}`}
                title="Arab Center featured YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="cta">
          <motion.div className="container cta-box" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} whileHover={{ scale: 1.01 }}>
            <div>
              <div className="eyebrow light-eyebrow">
                <Award size={18} />
                جاهز للتواصل
              </div>
              <h2>ابدأ رحلة المركز العربي الآن</h2>
              <p>واجهة تفاعلية جاهزة للتعديل، الربط، والنشر على GitHub Pages أو أي استضافة حديثة.</p>
            </div>
            <motion.a className="btn btn-gold" href="mailto:info@arabcenter.com" whileHover={{ scale: 1.07, rotate: -1 }} whileTap={{ scale: 0.94 }}>
              تواصل معنا
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <span>© 2026 المركز العربي. جميع الحقوق محفوظة.</span>
          <span>React + Framer Motion</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div className="section-heading" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      <motion.div className="eyebrow" variants={itemVariants}>
        <Sparkles size={16} />
        {eyebrow}
      </motion.div>
      <motion.h2 variants={itemVariants}>{title}</motion.h2>
      <motion.p variants={itemVariants}>{text}</motion.p>
    </motion.div>
  );
}

export default App;
