/* ===========================================================
   Portfolio — logique : i18n FR/EN, reveals, topbar, lang
   =========================================================== */
(function () {
  'use strict';

  /* ---------- i18n ---------- */
  var I18N = {
    fr: {
      nav_work: 'Projets',
      nav_about: 'À propos',
      nav_skills: 'Expertise',
      nav_contact: 'Contact',
      avail: 'Disponible',
      hero_lede: 'Je transforme des données complexes en décisions concrètes — de l\u2019exploration statistique au <strong>déploiement supervisé en production</strong>.',
      hero_cta: 'Voir les projets',
      hero_loc_l1: 'Data Scientist · diplômé OpenClassrooms',
      hero_loc_l2: 'Ouvert aux opportunités · 2026',

      works_title: 'Projets sélectionnés',
      works_note: 'Neuf projets menés de bout en bout, du notebook à la mise en production.',
      feat_tag: 'Pièce maîtresse',
      feat_h: 'Scoring crédit — de la modélisation à la production',
      feat_p: 'Modèle LightGBM de risque de défaut avec <strong>fonction de coût métier asymétrique</strong> : seuil calibré à 0,096, pas à 0,5. Pipeline industrialisé — API FastAPI, dashboard, MLflow, suivi du data drift, tests et CI/CD.',
      feat_m1: 'AUC validation',
      feat_m2: 'Coût métier',
      feat_m3: 'Tests pytest',
      feat_cap: 'Dashboard Streamlit · scoring',

      p6_h: 'Classification automatique de biens de consommation',
      p6_p: 'Benchmark de 11 approches NLP (BoW → Sentence-BERT) et transfer learning image. Sentence-BERT en tête sur l\u2019ARI.',
      p6_cap: 'UMAP · espaces d\u2019embeddings',
      p9_h: 'Pipeline Big Data de classification d\u2019images',
      p9_p: 'Architecture AWS reproduite en local avec Docker, puis déployée sur EMR. Feature extraction MobileNetV2 sur workers Spark, PCA 95 %.',
      p9_cap: 'Architecture · AWS EMR + Spark',
      p8_h: 'Dashboard scoring & veille NLP — BERTopic',
      p8_p: 'Dashboard Streamlit en production. Veille : LDA vs SBERT+K-Means vs BERTopic, avec un pipeline hybride original.',
      p8_cap: 'BERTopic · clusters de topics',
      p5_h: 'Segmentation clients e-commerce — Olist',
      p5_p: 'RFM + K-Means sur 100 000 commandes. Contrat de maintenance : stabilité du modèle mesurée par l\u2019ARI sur 26 semaines glissantes.',
      p5_cap: 'RFM · clusters clients',

      works_more: 'Les 9 projets sur GitHub',

      stat1: 'Projets de bout en bout',
      stat2: 'Coût métier · scoring crédit',
      stat3: 'AUC · modèle de production',
      stat4: 'Approches NLP benchmarkées',

      about_title: 'À propos',
      about_lead: 'Un modèle n\u2019a de valeur que lorsqu\u2019il est <span class="accent">interprétable, fiable et déployé.</span>',
      about_p1: 'Diplômé Data Scientist d\u2019OpenClassrooms, j\u2019ai mené neuf projets de bout en bout : du nettoyage de données brutes au déploiement supervisé en production, avec monitoring.',
      about_p2: 'Ce qui distingue mon travail : des seuils de décision calibrés sur le <strong>coût métier réel</strong>, le suivi du data drift, des tests automatisés et du CI/CD. La performance sur un jeu de test ne suffit pas — un modèle doit être utile à l\u2019équipe qui s\u2019appuie dessus.',

      skills_title: 'Expertise',
      skills_note: 'Une stack pensée pour couvrir tout le cycle de vie d\u2019un projet ML.',
      cap1: 'Machine Learning',
      cap2: 'NLP & Vision',
      cap3: 'MLOps & Production',
      cap4: 'Big Data & Cloud',

      contact_tag: 'Contact',
      contact_h: 'Parlons de votre prochain',
      contact_h_accent: 'projet data.',
      contact_sub: 'Disponible pour des opportunités en Data Science, Machine Learning et MLOps.',

      foot_role: 'Data Scientist — ML · NLP · Big Data · MLOps'
    },
    en: {
      nav_work: 'Work',
      nav_about: 'About',
      nav_skills: 'Expertise',
      nav_contact: 'Contact',
      avail: 'Available',
      hero_lede: 'I turn complex data into concrete decisions — from statistical exploration to <strong>supervised deployment in production</strong>.',
      hero_cta: 'View the work',
      hero_loc_l1: 'Data Scientist · OpenClassrooms graduate',
      hero_loc_l2: 'Open to opportunities · 2026',

      works_title: 'Selected work',
      works_note: 'Nine projects taken end to end, from notebook to production.',
      feat_tag: 'Flagship',
      feat_h: 'Credit scoring — from modelling to production',
      feat_p: 'LightGBM default-risk model with an <strong>asymmetric business-cost function</strong>: threshold calibrated at 0.096, not 0.5. Industrialised pipeline — FastAPI, dashboard, MLflow, data-drift monitoring, tests and CI/CD.',
      feat_m1: 'Validation AUC',
      feat_m2: 'Business cost',
      feat_m3: 'pytest tests',
      feat_cap: 'Streamlit dashboard · scoring',

      p6_h: 'Automatic classification of consumer goods',
      p6_p: 'Benchmark of 11 NLP approaches (BoW → Sentence-BERT) and image transfer learning. Sentence-BERT leads on ARI.',
      p6_cap: 'UMAP · embedding spaces',
      p9_h: 'Big Data image-classification pipeline',
      p9_p: 'AWS architecture reproduced locally with Docker, then deployed on EMR. MobileNetV2 feature extraction on Spark workers, PCA 95%.',
      p9_cap: 'Architecture · AWS EMR + Spark',
      p8_h: 'Scoring dashboard & NLP review — BERTopic',
      p8_p: 'Streamlit dashboard in production. Tech review: LDA vs SBERT+K-Means vs BERTopic, with an original hybrid pipeline.',
      p8_cap: 'BERTopic · topic clusters',
      p5_h: 'E-commerce customer segmentation — Olist',
      p5_p: 'RFM + K-Means on 100,000 orders. Maintenance contract: model stability measured by ARI over 26 rolling weeks.',
      p5_cap: 'RFM · customer clusters',

      works_more: 'All 9 projects on GitHub',

      stat1: 'End-to-end projects',
      stat2: 'Business cost · credit scoring',
      stat3: 'AUC · production model',
      stat4: 'NLP approaches benchmarked',

      about_title: 'About',
      about_lead: 'A model is only worth something once it is <span class="accent">interpretable, reliable and deployed.</span>',
      about_p1: 'A Data Scientist graduate of OpenClassrooms, I have run nine projects end to end: from cleaning raw data to supervised deployment in production, with monitoring.',
      about_p2: 'What sets my work apart: decision thresholds calibrated on <strong>real business cost</strong>, data-drift monitoring, automated tests and CI/CD. Test-set performance is not enough — a model has to be useful to the team relying on it.',

      skills_title: 'Expertise',
      skills_note: 'A stack built to cover the full life cycle of an ML project.',
      cap1: 'Machine Learning',
      cap2: 'NLP & Vision',
      cap3: 'MLOps & Production',
      cap4: 'Big Data & Cloud',

      contact_tag: 'Contact',
      contact_h: 'Let\u2019s talk about your next',
      contact_h_accent: 'data project.',
      contact_sub: 'Available for opportunities in Data Science, Machine Learning and MLOps.',

      foot_role: 'Data Scientist — ML · NLP · Big Data · MLOps'
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('ys_lang', lang); } catch (e) {}
  }

  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var stored = 'fr';
    try { stored = localStorage.getItem('ys_lang') || 'fr'; } catch (e) {}
    applyLang(stored);

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang); });
    });

    /* topbar condense */
    var topbar = document.getElementById('topbar');
    var onScroll = function () { topbar.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* reveals */
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('.reveal').forEach(function (el, i) {
        el.style.transitionDelay = (Math.min(i % 4, 3) * 0.06) + 's';
        io.observe(el);
      });
    }
  });
})();
