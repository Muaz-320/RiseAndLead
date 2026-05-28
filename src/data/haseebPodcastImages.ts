const podcastModules = import.meta.glob<string>('../assets/haseeb/podcast-*.jpg', {
  eager: true,
  import: 'default'
});

export const HASEEB_PODCAST_IMAGES = Object.entries(podcastModules)
  .filter(([path]) => /podcast-\d+\.jpg$/.test(path))
  .sort(([a], [b]) => {
    const num = (path: string) => Number(path.match(/podcast-(\d+)/)?.[1] ?? 0);
    return num(a) - num(b);
  })
  .map(([, src]) => src);
