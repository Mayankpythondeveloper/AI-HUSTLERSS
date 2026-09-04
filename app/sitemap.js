export default async function sitemap() {
  const baseUrl = 'https://aihustlerss.com';

  // Yahan aap apni website ke baaki main pages bhi add kar sakte hain
  const routes = [
    '',
    '/resources',
    '/explore',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
