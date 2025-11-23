(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const LANG_STORAGE_KEY = 'MOYAMOVA_lang';

  const translations = {
    ru: {
      'nav.how': 'Как работает',
      'nav.who': 'Кому подойдёт',
      'nav.screens': 'Интерфейс',
      'nav.faq': 'FAQ',

      'hero.title': 'Личный тренажер немецких слов, который всегда с вами',
      'hero.subtitle': '<span class="brand-word">MOYAMOVA</span> — это тренажёр на карточках прямо в браузере. Без установки, с умными повторами и прогрессом, который не теряется.',
      'hero.currentLang': 'Учите немецкий бесплатно прямо сейчас!',
      'hero.ctaPrimary': 'Запустить тренажёр',
      'hero.ctaSecondary': 'Как это работает',
      'hero.note': 'Тренажёр откроется как веб-приложение. На телефоне его можно добавить на главный экран.',
      'hero.ctaPro': 'Купить PRO',

      'how.title': 'Как это работает',
      'how.step1.title': '1. Выбираете язык и набор слов',
      'how.step1.text': 'Откройте тренажёр на <a href="https://MOYAMOVA.online/" target="_blank" rel="noopener">MOYAMOVA.online</a>, выберите язык и колоду. Система сама подберёт первую порцию слов.',
      'how.step2.title': '2. Отвечаете на карточки',
      'how.step2.text': 'На экране слово — вы вспоминаете перевод. Сложные слова попадаются чаще, а ошибки собираются в отдельный список.',
      'how.step3.title': '3. Прогресс копится сам',
      'how.step3.text': 'Тренажёр помнит, что вы уже выучили. Статистика и ошибки доступны в любой момент внутри приложения.',

      'who.title': 'Кому подойдёт MOYAMOVA',
      'who.card1.title': 'Тем, кто уже учит язык',
      'who.card1.text': 'Если вы занимаетесь с преподавателем или на курсах, тренажёр помогает держать лексику в тонусе между занятиями.',
      'who.card2.title': 'Тем, кто устал от “комбайнов”',
      'who.card2.text': 'Никаких лишних разделов и ленты достижений. Только слова, повторения и понятный прогресс.',
      'who.card3.title': 'Тем, кто любит простые инструменты',
      'who.card3.text': 'Тренажёр работает в браузере. Откройте ссылку, добавьте на главный экран — и он всегда под рукой.',

      'screens.title': 'Интерфейс',
      'screens.lead': '<span class="brand-word">MOYAMOVA</span> спроектирован в первую очередь как мобильный тренажёр без рекламы и платных подписок',
      'screens.themes.text': 'Адаптивный интерфейс. Тренажёр автоматически подстраивается под системные настройки, а при желании тему можно сменить вручную.',
      'screens.light.label': 'Светлая тема',
      'screens.dark.label': 'Тёмная тема',
      'screens.card2.title': 'Статистика внутри тренажёра',
      'screens.card2.text': 'Смотрите, сколько слов вы повторили и выучили за день и за последние недели.',
      'screens.card3.title': 'Отдельные наборы ошибок и избранного',
      'screens.card3.text': 'Можно отдельно повторять сложные слова или держать компактный набор избранного под быстрый прогон.',
      'support.headerCta': 'Поддержать проект',
      'support.title': 'Поддержать MOYAMOVA',
      'support.text': 'Если вам нравится наше приложение  — вы можете поддержать развитие проекта. Это помогает нам развивать тренажёр и добавлять новые функции.',
      'support.go': 'Перейти к поддержке',
      'screens.card4.text': 'Удобные списки, полезные примеры к изучаемым словам, озвучка и другие опции для Ваших тренировок.',
      'screens.features.dicts.label': 'Словари',
      'screens.features.examples.label': 'Примеры и озвучка',
      'screens.errors.label': 'Мои ошибки',
      'screens.fav.label': 'Избранное',

      'faq.title': 'FAQ',
      'faq.q1.title': 'Это бесплатно?',
      'faq.q1.text': 'Да, тренажёр можно использовать бесплатно для некоммерческого использования. В тренажёре есть платные функции, которые повышают удобство и эффективность обучения, но они не являются обязательными к покупке.',
      'faq.q2.title': 'Работает ли тренажёр офлайн?',
      'faq.q2.text': 'Да. Тренажёр работает без подключения к сети; интернет требуется только для установки и обновлений.',
      'faq.q3.title': 'Какие языки поддерживаются?',
      'faq.q3.text': 'Сейчас поддерживаются немецкий и английский языки. Мы активно работаем над добавлением новых языков и улучшением словарей для уже доступных.',
      'faq.q4.title': 'Как насчёт конфиденциальности?',
      'faq.q4.text': 'Мы не собираем, не храним и не передаём третьим лицам ваши персональные данные. Мы используем минимальную анонимную статистику только с вашего явного согласия, чтобы улучшать приложение.',
      'faq.q5.title': 'Как сохранить прогресс при переносе тренажёра на другое устройство?',
      'faq.q5.text': 'В приложении реализована функция экспорта и импорта. Вы можете сохранять резервную копию и без проблем переносить ваш прогресс между устройствами.',
      'faq.q6.title': 'Чем PRO-версия лучше?',
      'faq.q6.text': 'Здесь позже появится описание возможностей PRO-версии и дополнительных инструментов для продвинутого обучения.',
      'support.title': 'Поддержать MOYAMOVA',
      'support.text': 'Если вам нравится наше приложение — вы можете поддержать развитие проекта. Это помогает нам развивать тренажёр и добавлять новые функции.',
      'support.donate': 'Поддержать проект',
      'support.contact': 'Связаться с командой',
      'support.collab': '',
      'share.title': 'Поделиться',

      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'meta.title': 'MOYAMOVA — Личный тренажёр слов в вашем браузере'
    },
    uk: {
      'nav.how': 'Як це працює',
      'nav.who': 'Кому підійде',
      'nav.screens': 'Інтерфейс',
      'nav.faq': 'FAQ',

      'hero.title': 'Ваш особистий тренажер слів у телефоні',
      'hero.subtitle': '<span class="brand-word">MOYAMOVA</span> — це тренажер карток прямо в браузері. Без встановлення, з розумними повторами та прогресом, який не губиться.',
      'hero.currentLang': 'Вчіть німецьку прямо зараз!',
      'hero.ctaPrimary': 'Запустити тренажер',
      'hero.ctaSecondary': 'Як це працює',
      'hero.note': 'Тренажер відкриється як веб-додаток. На телефоні його можна закріпити на головному екрані.',
      'hero.ctaPro': 'Придбати PRO',

      'how.title': 'Як це працює',
      'how.step1.title': '1. Обираєте мову та набір слів',
      'how.step1.text': 'Відкрийте тренажер на <a href="https://MOYAMOVA.online/" target="_blank" rel="noopener">MOYAMOVA.online</a>, виберіть мову та колоду. Система сама збере першу порцію слів.',
      'how.step2.title': '2. Відповідаєте на картки',
      'how.step2.text': 'На екрані слово — ви згадуєте переклад. Складні слова з’являються частіше, а помилки потрапляють в окремий список.',
      'how.step3.title': '3. Прогрес накопичується сам',
      'how.step3.text': 'Тренажер пам’ятає, що ви вже вивчили. Статистика та помилки завжди під рукою всередині додатка.',

      'who.title': 'Кому підійде MOYAMOVA',
      'who.card1.title': 'Тим, хто вже вивчає мову',
      'who.card1.text': 'Якщо ви займаєтесь з викладачем або на курсах, тренажер допомагає тримати лексику в тонусі між заняттями.',
      'who.card2.title': 'Тим, кого втомили “комбайни”',
      'who.card2.text': 'Жодних зайвих розділів і стрічок досягнень. Тільки слова, повторення та зрозумілий прогрес.',
      'who.card3.title': 'Тим, хто любить прості інструменти',
      'who.card3.text': 'Тренажер працює в браузері. Відкрийте посилання, додайте на головний екран — і він завжди поруч.',

      'screens.title': 'Інтерфейс',
      'screens.lead': '<span class="brand-word">MOYAMOVA</span> спочатку задумувався як мобільний тренажер. Один екран — одна картка — одне рішення.',
      'screens.themes.text': 'Світла і темна теми. Тренажер автоматично підлаштовується під системні налаштування, а за бажання тему можна змінити вручну.',
      'screens.light.label': 'Світла тема',
      'screens.dark.label': 'Темна тема',
      'screens.card2.title': 'Статистика всередині тренажера',
      'screens.card2.text': 'Дивіться, скільки слів ви повторили та вивчили за день і за останні тижні.',
      'screens.card3.title': 'Окремі набори помилок та обраного',
      'screens.card3.text': 'Можна окремо проганяти складні слова або тримати компактний набір улюблених слів.',
      'support.headerCta': 'Підтримати проєкт',
      'support.title': 'Підтримати MOYAMOVA',
      'support.text': 'Якщо вам подобається <span class="brand-word">MOYAMOVA</span> — ви можете підтримати розвиток проєкту. Це допомагає нам розвивати тренажер і додавати нові функції.',
      'support.go': 'Перейти до підтримки',
      'screens.card4.text': 'Додаткові можливості MOYAMOVA : окремі словники, живі приклади до слів, озвучка та інші опції для зручних тренувань.',
      'screens.features.dicts.label': 'Словники',
      'screens.features.examples.label': 'Приклади та озвучка',
      'screens.errors.label': 'Мої помилки',
      'screens.fav.label': 'Обране',

      'faq.title': 'FAQ',
      'faq.q1.title': 'Це безкоштовно?',
      'faq.q1.text': 'Так, тренажер можна використовувати безкоштовно для некомерційного використання. У тренажері є платні функції, які підвищують зручність та ефективність навчання, але вони не є обов’язковими до покупки.',
      'faq.q2.title': 'Чи працює тренажер офлайн?',
      'faq.q2.text': 'Так. Тренажер працює без підключення до мережі; інтернет потрібен лише для встановлення та оновлень.',
      'faq.q3.title': 'Які мови підтримуються?',
      'faq.q3.text': 'Зараз підтримуються німецька та англійська мови. Ми активно працюємо над додаванням нових мов та покращенням словників для вже доступних.',
      'faq.q4.title': 'Що щодо конфіденційності?',
      'faq.q4.text': 'Ми не збираємо, не зберігаємо й не передаємо третім особам ваші персональні дані. Ми використовуємо мінімальну анонімну статистику лише за вашої явної згоди, щоб покращувати застосунок.',
      'faq.q5.title': 'Як зберегти прогрес під час перенесення тренажера на інший пристрій?',
      'faq.q5.text': 'В застосунку реалізовано функцію експорту та імпорту. Ви можете зберігати резервну копію і без проблем переносити ваш прогрес між пристроями.',
      'faq.q6.title': 'Чим PRO-версія краща?',
      'faq.q6.text': 'Тут пізніше з’явиться опис можливостей PRO-версії та додаткових інструментів для просунутого навчання.',
      'support.title': 'Підтримати MOYAMOVA',
      'support.text': 'Якщо вам подобається MOYAMOVA — ви можете підтримати розвиток проєкту. Це допомагає нам розвивати тренажер і додавати нові функції.',
      'support.donate': 'Підтримати проєкт',
      'support.contact': 'Зв’язатися з командою',
      'support.collab': '',
      'share.title': 'Поділитися <span class="brand-word">MOYAMOVA</span>:',

      'footer.privacy': 'Політика конфіденційності',
      'footer.terms': 'Умови використання',
      'meta.title': 'MOYAMOVA — Особистий тренажер слів у вашому браузері'
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
      el.innerHTML = text;
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
  const TRAINER_URL = 'https://MOYAMOVA.online/';

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

  // Simple slider for themes

  
  // Support & donate integration
  function openDonateSheet() {
    try {
      if (window.Donate && typeof window.Donate.open === 'function') {
        window.Donate.open();
        return;
      }
    } catch (_) {}

    // fallback: open monobank jar in new tab
    const fallbackUrl = 'https://send.monobank.ua/jar/56HNLifwyr';
    window.open(fallbackUrl, '_blank', 'noopener');
  }

  const supportButtons = document.querySelectorAll('[data-role="support-open"]');
  supportButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDonateSheet();
    });
  });

  const buyProBtn = document.querySelector('[data-role="buy-pro"]');
  if (buyProBtn) {
    buyProBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDonateSheet();
    });
  }

  const sliders = document.querySelectorAll('.screen-slider');
  if (sliders.length) {
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll('.screen-slide');
      const dots = slider.querySelectorAll('.screen-dot');
      if (!slides.length || !dots.length) return;
      let current = 0;

      function setSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;
        slides.forEach((s, i) => {
          s.classList.toggle('is-active', i === current);
        });
        dots.forEach((d, i) => {
          d.classList.toggle('is-active', i === current);
        });
      }

      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => setSlide(idx));
      });

      let startX = null;

      slider.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startX = e.touches[0].clientX;
        }
      });

      slider.addEventListener('touchend', (e) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;
        const threshold = 40;
        if (Math.abs(deltaX) > threshold) {
          if (deltaX < 0) {
            setSlide(current + 1);
          } else {
            setSlide(current - 1);
          }
        }
        startX = null;
      });
    });
  }
})();
