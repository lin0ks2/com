(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const LANG_STORAGE_KEY = 'moyamova_lang';

  const translations = {
    ru: {
      'nav.how': 'Как работает',
      'nav.who': 'Кому подойдёт',
      'nav.screens': 'Интерфейс',
      'nav.faq': 'FAQ',

      'hero.title': 'Личный тренажёр слов, который живёт в вашем телефоне',
      'hero.subtitle': 'moyamova — это тренажёр на карточках прямо в браузере. Без установки, с умными повторами и прогрессом, который не теряется.',
      'hero.ctaPrimary': 'Запустить тренажёр',
      'hero.ctaSecondary': 'Как это работает',
      'hero.note': 'Тренажёр откроется как веб-приложение. На телефоне его можно добавить на главный экран.',

      'how.title': 'Как это работает',
      'how.step1.title': '1. Выбираете язык и набор слов',
      'how.step1.text': 'Откройте тренажёр на moyamova.online, выберите язык и колоду. Система сама подберёт первую порцию слов.',
      'how.step2.title': '2. Отвечаете на карточки',
      'how.step2.text': 'На экране слово — вы вспоминаете перевод. Сложные слова попадаются чаще, а ошибки собираются в отдельный список.',
      'how.step3.title': '3. Прогресс копится сам',
      'how.step3.text': 'Тренажёр помнит, что вы уже выучили. Статистика и ошибки доступны в любой момент внутри приложения.',

      'who.title': 'Кому подойдёт moyamova',
      'who.card1.title': 'Тем, кто уже учит язык',
      'who.card1.text': 'Если вы занимаетесь с преподавателем или на курсах, тренажёр помогает держать лексику в тонусе между занятиями.',
      'who.card2.title': 'Тем, кто устал от “комбайнов”',
      'who.card2.text': 'Никаких лишних разделов и ленты достижений. Только слова, повторения и понятный прогресс.',
      'who.card3.title': 'Тем, кто любит простые инструменты',
      'who.card3.text': 'Тренажёр работает в браузере. Откройте ссылку, добавьте на главный экран — и он всегда под рукой.',

      'screens.title': 'Интерфейс',
      'screens.lead': 'moyamova проектирован в первую очередь как мобильный тренажёр. Один экран — одна карточка — одно решение.',
      'screens.card1.text': 'Экран тренировки с понятными вариантами и крупными кнопками под палец.',
      'screens.card2.title': 'Статистика внутри тренажёра',
      'screens.card2.text': 'Смотрите, сколько слов вы повторили и выучили за день и за последние недели.',
      'screens.card3.title': 'Отдельные наборы ошибок и избранного',
      'screens.card3.text': 'Можно отдельно повторять сложные слова или держать компактный набор избранного под быстрый прогон.',

      'faq.title': 'FAQ',
      'faq.q1.title': 'Нужно ли что-то устанавливать?',
      'faq.q1.text': 'Нет. moyamova работает прямо в браузере. На телефоне вы можете добавить тренажёр на главный экран — он будет вести себя как обычное приложение.',
      'faq.q2.title': 'Работает ли тренажёр офлайн?',
      'faq.q2.text': 'Да. После первого открытия основные файлы кэшируются. Тренажёр может работать без постоянного подключения к интернету.',
      'faq.q3.title': 'Где хранится мой прогресс?',
      'faq.q3.text': 'Прогресс хранится в вашем браузере на этом устройстве. Если очистить данные браузера или сменить устройство, тренажёр начнёт с нуля.',
      'faq.q4.title': 'Какие языки поддерживаются?',
      'faq.q4.text': 'Список языков и наборов слов развивается. Актуальные варианты вы всегда увидите внутри тренажёра.',

      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'meta.title': 'moyamova — Личный тренажёр слов в вашем браузере'
    },
    uk: {
      'nav.how': 'Як це працює',
      'nav.who': 'Кому підійде',
      'nav.screens': 'Інтерфейс',
      'nav.faq': 'FAQ',

      'hero.title': 'Ваш особистий тренажер слів у телефоні',
      'hero.subtitle': 'moyamova — це тренажер карток прямо в браузері. Без встановлення, з розумними повторами та прогресом, який не губиться.',
      'hero.ctaPrimary': 'Запустити тренажер',
      'hero.ctaSecondary': 'Як це працює',
      'hero.note': 'Тренажер відкриється як веб-додаток. На телефоні його можна закріпити на головному екрані.',

      'how.title': 'Як це працює',
      'how.step1.title': '1. Обираєте мову та набір слів',
      'how.step1.text': 'Відкрийте тренажер на moyamova.online, виберіть мову та колоду. Система сама збере першу порцію слів.',
      'how.step2.title': '2. Відповідаєте на картки',
      'how.step2.text': 'На екрані слово — ви згадуєте переклад. Складні слова з’являються частіше, а помилки потрапляють в окремий список.',
      'how.step3.title': '3. Прогрес накопичується сам',
      'how.step3.text': 'Тренажер пам’ятає, що ви вже вивчили. Статистика та помилки завжди під рукою всередині додатка.',

      'who.title': 'Кому підійде moyamova',
      'who.card1.title': 'Тим, хто вже вивчає мову',
      'who.card1.text': 'Якщо ви займаєтесь з викладачем або на курсах, тренажер допомагає тримати лексику в тонусі між заняттями.',
      'who.card2.title': 'Тим, кого втомили “комбайни”',
      'who.card2.text': 'Жодних зайвих розділів і стрічок досягнень. Тільки слова, повторення та зрозумілий прогрес.',
      'who.card3.title': 'Тим, хто любить прості інструменти',
      'who.card3.text': 'Тренажер працює в браузері. Відкрийте посилання, додайте на головний екран — і він завжди поруч.',

      'screens.title': 'Інтерфейс',
      'screens.lead': 'moyamova спочатку задумувався як мобільний тренажер. Один екран — одна картка — одне рішення.',
      'screens.card1.text': 'Екран тренування з зрозумілими варіантами та великими кнопками під палець.',
      'screens.card2.title': 'Статистика всередині тренажера',
      'screens.card2.text': 'Дивіться, скільки слів ви повторили та вивчили за день і за останні тижні.',
      'screens.card3.title': 'Окремі набори помилок та обраного',
      'screens.card3.text': 'Можна окремо проганяти складні слова або тримати компактний набір улюблених слів.',

      'faq.title': 'FAQ',
      'faq.q1.title': 'Чи потрібно щось встановлювати?',
      'faq.q1.text': 'Ні. moyamova працює прямо в браузері. На телефоні ви можете додати тренажер на головний екран — він поводитиметься як звичайний додаток.',
      'faq.q2.title': 'Чи працює тренажер офлайн?',
      'faq.q2.text': 'Так. Після першого відкриття основні файли кешуються. Тренажер може працювати без постійного підключення до інтернету.',
      'faq.q3.title': 'Де зберігається мій прогрес?',
      'faq.q3.text': 'Прогрес зберігається у вашому браузері на цьому пристрої. Якщо очистити дані браузера або змінити пристрій, тренажер почне з нуля.',
      'faq.q4.title': 'Які мови підтримуються?',
      'faq.q4.text': 'Список мов та наборів слів розвивається. Актуальні варіанти ви завжди побачите всередині тренажера.',

      'footer.privacy': 'Політика конфіденційності',
      'footer.terms': 'Умови використання',
      'meta.title': 'moyamova — Особистий тренажер слів у вашому браузері'
    }
  };

  function detectInitialLang() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && (stored === 'ru' || stored === 'uk')) {
      return stored;
    }
    const navLang = (navigator.language || navigator.userLanguage || 'ru').slice(0, 2).toLowerCase();
    if (navLang === 'uk') return 'uk';
    if (navLang === 'ru') return 'ru';
    return 'ru';
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.ru;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (!text) return;
      el.textContent = text;
    });

    document.documentElement.lang = lang === 'uk' ? 'uk' : 'ru';

    if (dict['meta.title']) {
      document.title = dict['meta.title'];
    }

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  const currentLang = detectInitialLang();
  applyLang(currentLang);

  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang');
      if (!lang || !(lang in translations)) return;
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      applyLang(lang);
    });
  }

  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('.nav-link')) {
        nav.classList.remove('nav-open');
      }
    });
  }

  // Scroll to "How it works"
  const howBtn = document.querySelector('[data-role="how-it-works"]');
  const howSection = document.getElementById('how');

  if (howBtn && howSection) {
    howBtn.addEventListener('click', () => {
      howSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Smart opening of trainer
  const startBtn = document.querySelector('[data-role="start-trainer"]');
  const TRAINER_URL = 'https://moyamova.online/';

  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
        || window.innerWidth < 768;

      if (isMobile) {
        window.location.href = TRAINER_URL;
      } else {
        window.open(TRAINER_URL, '_blank', 'noopener');
      }
    });
  }
})();