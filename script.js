const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logo: 'VT', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ','Высокая скорость'],
    free: '5 дней за 1 ₽. Дальше — от 299 ₽/мес.',
    whyTitle: 'Лидер стабильности в России',
    whyText: 'Прошёл тест на 5 устройствах одновременно — ни одного разрыва за 72 часа. Telegram работает даже при нестабильном 4G и смене сетей.',
    pros: ['Работает в РФ без сбоев','Скорость до 100 Мбит/с','Пробный период за 1 ₽','Поддержка WireGuard'],
    cons: ['Нет полностью бесплатного тарифа','Сайт только на русском'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"Телеграм открывается мгновенно, даже видео без лагов. Первый VPN, который реально работает."',
    lifehack: 'Используй протокол WireGuard — он быстрее OpenVPN в 2–3 раза при той же безопасности.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logo: 'AG', logoClass: 'logo-ag', pinned: true,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ'],
    free: 'Бесплатно 3 ГБ/мес. Дальше — платно.',
    whyTitle: 'VPN + блокировщик рекламы',
    whyText: 'Сочетает VPN с блокировкой рекламы. Telegram работает стабильно, интерфейс интуитивный — подойдёт даже новичкам.',
    pros: ['Встроенная блокировка рекламы','Простой интерфейс','3 ГБ/мес бесплатно','Есть для iOS'],
    cons: ['Бесплатный лимит быстро заканчивается','Меньше серверов чем у конкурентов'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Удобный и понятный. Реклама в браузере тоже пропала — приятный бонус к VPN."',
    lifehack: 'На бесплатном тарифе отключи автозагрузку медиа в Telegram — трафик расходуется медленнее.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logo: 'HN', logoClass: 'logo-hn', pinned: true,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Работает в РФ','Высокая скорость'],
    free: '1 день бесплатно. Дальше — от 330 ₽/мес.',
    whyTitle: 'Проверенный российский сервис',
    whyText: 'Работает в РФ более 10 лет. Широкая география серверов и стабильная скорость делают его надёжным выбором для Telegram.',
    pros: ['94 Мбит/с','Широкая география серверов','Работает в РФ','Понятный интерфейс'],
    cons: ['Нет постоянного бесплатного тарифа','Цена чуть выше среднего'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Пользуюсь больше года. Telegram зависал раньше — теперь всё чисто и быстро."',
    lifehack: 'При медленном интернете выбирай ближайший сервер — разница в пинге может быть в 2–3 раза.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для Windows','Без логов'],
    free: 'Полностью бесплатный, нужен свой VPS.',
    whyTitle: 'Полный контроль над трафиком',
    whyText: 'Лучший выбор для технически грамотных пользователей. Открытый код, никаких посредников — твой трафик проходит только через твой сервер.',
    pros: ['Полностью бесплатный','Без логов по умолчанию','Открытый исходный код','Высокая кастомизация'],
    cons: ['Нужен собственный VPS','Сложная настройка для новичков'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Настроил за час. Теперь никто не знает, что я делаю в Telegram."',
    lifehack: 'Используй бесплатный Oracle Cloud VPS — постоянный Outline VPN без единой копейки.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Outline'
  },
  {
    rank: 5, name: 'Lantern', logo: 'LA', logoClass: 'logo-la', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для Windows','Бесплатный период'],
    free: '500 МБ/мес бесплатно. Очень мало.',
    whyTitle: 'Быстрый старт без регистрации',
    whyText: 'Прост в установке, работает в странах с жёсткой цензурой. Хорош как экстренный вариант, когда нет времени на настройку.',
    pros: ['Простая установка','Не нужна регистрация','Работает в РФ','Есть для Android'],
    cons: ['Бесплатный лимит 500 МБ — очень мало','Нет для iOS','Нестабильная скорость'],
    speed: 60, maxSpeed: 100,
    price: 'от $3/мес (~280 ₽)',
    review: '"На крайний случай — сойдёт. Для постоянного использования лучше нормальный VPN."',
    lifehack: 'Используй только для срочного доступа к Telegram — лимит 500 МБ хватит на пару часов чата.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Lantern'
  },
  {
    rank: 6, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Бесплатный период'],
    free: 'Бесплатно с ограниченной скоростью.',
    whyTitle: 'Бесплатный без регистрации',
    whyText: 'Один из немногих полностью бесплатных вариантов без регистрации. Работает в условиях блокировок, хотя скорость уступает платным сервисам.',
    pros: ['Полностью бесплатный','Не нужна регистрация','Работает в РФ','Есть для iOS'],
    cons: ['Низкая скорость (~30 Мбит/с)','Нестабильное соединение','Нет kill switch'],
    speed: 30, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"Медленно, но работает. Для срочного доступа к Telegram — рабочий вариант."',
    lifehack: 'В настройках выбери L2TP — в некоторых регионах России он работает стабильнее по умолчанию.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Psiphon'
  },
  {
    rank: 7, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Бесплатный период','Без логов'],
    free: '10 ГБ/мес бесплатно (с email).',
    whyTitle: 'Щедрый бесплатный тариф',
    whyText: 'Самый щедрый бесплатный тариф из проверенных сервисов. Строгая политика без логов и поддержка WireGuard делают его достойной альтернативой платным.',
    pros: ['10 ГБ/мес бесплатно','Без логов','Kill switch','Поддержка WireGuard'],
    cons: ['Нестабильная скорость на бесплатном','Поддержка только на английском'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~530 ₽)',
    review: '"10 ГБ в месяц бесплатно — хватает для Telegram и иногда YouTube. Очень доволен."',
    lifehack: 'Подтверди email при регистрации — получишь 10 ГБ вместо 2 ГБ на бесплатном тарифе.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  },
  {
    rank: 8, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Бесплатный период','Без логов'],
    free: 'Безлимитный бесплатный тариф (1 сервер).',
    whyTitle: 'Единственный безлимитный бесплатный',
    whyText: 'Единственный VPN с безлимитным трафиком на бесплатном тарифе. Швейцарская юрисдикция и независимые аудиты безопасности.',
    pros: ['Бесплатный безлимитный трафик','Строгая no-logs политика','Швейцарская юрисдикция','Открытый код'],
    cons: ['Бесплатный сервер часто перегружен','Скорость ниже конкурентов','Дорогие платные тарифы'],
    speed: 75, maxSpeed: 100,
    price: 'от 6 €/мес (~620 ₽)',
    review: '"Бесплатный тариф иногда тормозит, но это честный VPN без продажи данных."',
    lifehack: 'На бесплатном тарифе подключайся утром — серверы менее загружены, скорость выше.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Proton VPN'
  },
  {
    rank: 9, name: 'NordVPN', logo: 'NV', logoClass: 'logo-nv', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Высокая скорость','Без логов'],
    free: 'Нет. 30 дней — гарантия возврата.',
    whyTitle: 'Мировой лидер по скорости',
    whyText: 'Один из лидеров рынка с высокой скоростью и надёжностью. 6 устройств одновременно и функция Double VPN для максимальной анонимности.',
    pros: ['96 Мбит/с','6 устройств одновременно','Строгая no-logs политика','Double VPN'],
    cons: ['Нет бесплатного тарифа','Не всегда работает в РФ','Высокая цена за первый год'],
    speed: 96, maxSpeed: 100,
    price: 'от $3.99/мес (~370 ₽)',
    review: '"Скорость отличная, всё работает стабильно. В России иногда нужно менять сервер."',
    lifehack: 'Используй Obfuscated Servers — они лучше обходят блокировки провайдеров в России.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к NordVPN'
  },
  {
    rank: 10, name: 'ExpressVPN', logo: 'EV', logoClass: 'logo-ev', pinned: false,
    badge: null,
    tags: ['Для Telegram','Для Android','Для iPhone','Для Windows','Высокая скорость'],
    free: 'Нет. 30 дней — гарантия возврата.',
    whyTitle: 'Максимальная скорость в тестах',
    whyText: 'Самый быстрый VPN в наших тестах — 98 Мбит/с. Lightway-протокол и split tunneling. Подойдёт тем, кто не экономит на качестве.',
    pros: ['98 Мбит/с','160+ стран серверов','Лёгкая настройка','Split tunneling'],
    cons: ['Самый дорогой в списке','Нет бесплатного тарифа','Закрытый исходный код'],
    speed: 98, maxSpeed: 100,
    price: 'от $8.32/мес (~770 ₽)',
    review: '"Дорого, но быстро и без проблем. Для бизнеса или требовательных задач — отлично."',
    lifehack: 'Активируй протокол Lightway — быстрее OpenVPN на ~40% и лучше работает на мобильных.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к ExpressVPN'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      <div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <div class="card-name">${vpn.name}</div>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Лайфхак</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10</div>`;
    html += `<div class="cards-grid" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру сервисов не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mobile nav
const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

// Active nav link on scroll
const navSections = ['rating','table','methodology','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
