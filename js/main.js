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

      'hero.title': 'Ваш бесплатный тренажёр немецких слов — всегда под рукой',
      'hero.subtitle': '<span class="brand-word">MOYAMOVA</span> — простой и бесплатный тренажёр немецких слов. Работает прямо в браузере, без скачивания, регистрации и слежки. Умные повторы, офлайн-доступ и сохранение прогресса — даже без интернета.',
      'hero.currentLang': 'Учите немецкий без регистрации, рекламы и ограничений',
      'hero.ctaPrimary': 'Начать учить слова бесплатно',
      'hero.ctaSecondary': 'Как это работает',
      'hero.note': '* работает как приложение, сохраняет прогресс офлайн',

      'how.title': 'Как MOYAMOVA помогает выучить немецкие слова быстрее',
      'how.step1.title': '1. Выбираете уровень и словарь',
      'how.step1.text': 'Откройте тренажёр на <a href="https://MOYAMOVA.online/" target="_blank" rel="noopener">MOYAMOVA.online</a>, выберите немецкий язык и подходящий словарь уровня A1–B2. Никакой регистрации и установки — всё работает прямо в браузере.',
      'how.step2.title': '2. Отвечаете на карточки с примерами',
      'how.step2.text': 'Отвечайте на карточки с переводом и примерами. Тренажёр сам подстраивает частоту повторений: сложные слова показываются чаще, ошибки собираются в отдельный список.',
      'how.step3.title': '3. Прогресс копится сам — даже офлайн',
      'how.step3.text': 'Прогресс сохраняется автоматически и доступен даже без интернета. В любой момент вы видите, сколько слов повторили и выучили, и какие темы требуют больше внимания.',

      'who.title': 'Кому подойдёт тренажёр MOYAMOVA',
      'who.card1.title': 'Тем, кто уже учит немецкий',
      'who.card1.text': 'Если вы занимаетесь с преподавателем, на курсах или в приложениях, тренажёр помогает закреплять лексику между занятиями и не забывать новые слова.',
      'who.card2.title': 'Тем, кто устал от “комбайнов”',
      'who.card2.text': 'Без лишних разделов, ленты достижений и навязчивых уведомлений. Только слова, повторения, понятный прогресс — и никакой рекламы.',
      'who.card3.title': 'Тем, кто любит простые инструменты',
      'who.card3.text': 'Тренажёр работает в браузере и офлайн. Откройте ссылку, добавьте на главный экран — и он всегда под рукой, даже без интернета.',

      'screens.title': 'Интерфейс тренажёра',
      'screens.lead': '<span class="brand-word">MOYAMOVA</span> — чистый тренажёр без лишних разделов, рекламы и платных подписок. Только вы, словари уровней A1–B2 и ваш прогресс.',
      'screens.themes.text': 'Адаптивный интерфейс под светлую и тёмную темы. Тренажёр удобно использовать на телефоне, планшете и ноутбуке.',
      'screens.light.label': 'Светлая тема',
      'screens.dark.label': 'Тёмная тема',
      'screens.card2.title': 'Статистика и прогресс внутри тренажёра',
      'screens.card2.text': 'Смотрите, сколько слов вы повторили и выучили, какие наборы проходите чаще всего и где стоит усилить тренировку.',
      'screens.card3.title': 'Отдельные наборы ошибок и избранного',
      'screens.card3.text': 'Повторяйте сложные слова в отдельном наборе или собирайте любимые слова в короткие личные подборки.',
      'support.headerCta': 'Поддержать проект',
      'support.title': 'Поддержать MOYAMOVA',
      'support.text': 'MOYAMOVA остаётся бесплатным тренажёром без рекламы за счёт поддержки пользователей. Если вам нравится формат и вы хотите больше словарей A1–B2 и новых функций, вы можете помочь развитию проекта любой суммой.',
      'support.go': 'Перейти к поддержке',
      'screens.card4.text': 'Удобные фильтры, примеры к словам, озвучка и другие опции, чтобы учить немецкий быстрее и без лишнего шума.',
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
      'support.text': 'MOYAMOVA остаётся бесплатным тренажёром без рекламы за счёт поддержки пользователей. Если вам нравится формат и вы хотите больше словарей A1–B2 и новых функций, вы можете помочь развитию проекта любой суммой.',
      'support.donate': 'Поддержать бесплатный тренажёр',
      'support.contact': 'Связаться с командой',
      'support.collab': '',
      'share.title': 'Поделиться MOYAMOVA с друзьями',
      'stores.title': 'Предпочитаете формат приложения?',
      'stores.subtitle': 'MOYAMOVA доступен как веб-приложение и как мобильное приложение. Выберите удобный для вас формат:',
      'stores.label': 'Скачать приложение:',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'meta.title': 'MOYAMOVA — бесплатный тренажёр немецких слов A1–B2 без рекламы'
    },
    uk: {
      'nav.how': 'Як це працює',
      'nav.who': 'Кому підійде',
      'nav.screens': 'Інтерфейс',
      'nav.faq': 'FAQ',

      'hero.title': 'Ваш безкоштовний тренажер німецьких слів — завжди під рукою',
      'hero.subtitle': '<span class="brand-word">MOYAMOVA</span> — простий і безкоштовний тренажер німецьких слів. Працює прямо в браузері, без завантажень, реєстрації та стеження. Розумні повтори, офлайн-доступ і збереження прогресу — навіть без інтернету.',
      'hero.currentLang': 'Вчіть німецьку без реєстрації, реклами та обмежень',
      'hero.ctaPrimary': 'Почати вчити слова безкоштовно',
      'hero.ctaSecondary': 'Як це працює',
      'hero.note': '* працює як застосунок, зберігає прогрес офлайн',

      'how.title': 'Як MOYAMOVA допомагає швидше вивчати німецькі слова',
      'how.step1.title': '1. Обираєте рівень і словник',
      'how.step1.text': 'Відкрийте тренажер на <a href="https://MOYAMOVA.online/" target="_blank" rel="noopener">MOYAMOVA.online</a>, оберіть німецьку мову і відповідний словник рівня A1–B2. Жодної реєстрації чи встановлення — все працює прямо в браузері.',
      'how.step2.title': '2. Відповідаєте на картки з прикладами',
      'how.step2.text': 'Відповідайте на картки з перекладом і прикладами. Тренажер сам налаштовує частоту повторень: складні слова показуються частіше, помилки збираються в окремий список.',
      'how.step3.title': '3. Прогрес накопичується сам — навіть офлайн',
      'how.step3.text': 'Прогрес зберігається автоматично і доступний навіть без інтернету. Ви в будь-який момент бачите, скільки слів повторили і вивчили, та які теми потребують більше уваги.',

      'who.title': 'Кому підійде тренажер MOYAMOVA',
      'who.card1.title': 'Тим, хто вже вчить німецьку',
      'who.card1.text': 'Якщо ви займаєтесь з викладачем, на курсах чи в застосунках, тренажер допомагає закріплювати лексику між заняттями і не забувати нові слова.',
      'who.card2.title': 'Тим, кого втомили “комбайни”',
      'who.card2.text': 'Без зайвих розділів, стрічок досягнень і нав’язливих сповіщень. Лише слова, повторення, зрозумілий прогрес — і жодної реклами.',
      'who.card3.title': 'Тим, хто любить прості інструменти',
      'who.card3.text': 'Тренажер працює в браузері та офлайн. Відкрийте посилання, додайте на головний екран — і він завжди поруч, навіть без інтернету.',

      'screens.title': 'Інтерфейс тренажера',
      'screens.lead': '<span class="brand-word">MOYAMOVA</span> — чистий тренажер без зайвих розділів, реклами та платних підписок. Лише ви, словники рівнів A1–B2 і ваш прогрес.',
      'screens.themes.text': 'Адаптивний інтерфейс під світлу й темну теми. Тренажер зручно використовувати на телефоні, планшеті та ноутбуці.',
      'screens.light.label': 'Світла тема',
      'screens.dark.label': 'Темна тема',
      'screens.card2.title': 'Статистика і прогрес всередині тренажера',
      'screens.card2.text': 'Дивіться, скільки слів ви повторили та вивчили, які набори проходите найчастіше і де варто посилити тренування.',
      'screens.card3.title': 'Окремі набори помилок та обраного',
      'screens.card3.text': 'Проганяйте складні слова в окремому наборі або збирайте улюблені слова в короткі особисті добірки.',
      'support.headerCta': 'Підтримати проєкт',
      'support.title': 'Підтримати MOYAMOVA',
      'support.text': 'MOYAMOVA залишається безкоштовним тренажером без реклами завдяки підтримці користувачів. Якщо вам подобається формат і ви хочете більше словників A1–B2 та нових функцій, ви можете допомогти розвитку проєкту будь-якою сумою.',
      'support.go': 'Перейти до підтримки',
      'screens.card4.text': 'Зручні фільтри, приклади до слів, озвучка та інші опції, щоб вчити німецьку швидше і без зайвого шуму.',
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
      'support.text': 'MOYAMOVA залишається безкоштовним тренажером без реклами завдяки підтримці користувачів. Якщо вам подобається формат і ви хочете більше словників A1–B2 та нових функцій, ви можете допомогти розвитку проєкту будь-якою сумою.',
      'support.donate': 'Підтримати безкоштовний тренажер',
      'support.contact': 'Зв’язатися з командою',
      'support.collab': '',
      'share.title': 'Поділитися MOYAMOVA з друзями',
      'stores.title': 'Віддаєте перевагу формату застосунку?',
      'stores.subtitle': 'MOYAMOVA доступний як веб-застосунок і як мобільний застосунок. Оберіть зручний для себе формат:',
      'stores.label': 'Завантажити застосунок:',
      'footer.privacy': 'Політика конфіденційності',
      'footer.terms': 'Умови використання',
      'meta.title': 'MOYAMOVA — безкоштовний тренажер німецьких слів A1–B2 без реклами'
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
