class FindLang {
  constructor() {
    // Инициализация, если необходимы дополнительные настройки
  }

  getLangFromURL(pathname) {
    // Проверяем наличие языка в формате /{lang}/
    const langMatch = pathname.match(/^\/(kz|en|ru)(\/|$)/);
    const lang = langMatch ? langMatch[1] : "kz"; // Если язык найден, берем его, иначе — "kz" по умолчанию

    return lang;
  }
}

// Экспорт класса для использования в других модулях
export default FindLang;
