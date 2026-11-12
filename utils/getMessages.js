export async function getMessages(locale) {
  return (await import(`../locales/${locale}.json`)).default;
}
