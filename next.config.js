/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.nine.com.au/travel-guides/win-20k-holiday-travel-money-oz', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Travel Guides', // e.g Black Hawk
      title: 'Win a $20,000 holiday!', // e.g Being a good pet parent starts at mealtime
      description: 'You could be off on your dream holiday brought to you by Travel Money Oz - the leading foreign exchange service by travellers, for travellers.Wherever your travels take you, Travel Money Oz has the foreign currency you’ll need for your holiday.',
      siteName: 'Nine', // The Sydney Morning Herald, Good Food
      themeColour: '#0a1633', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/04/travel-money-social-0423.jpg',
      date: '19-04-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11595-travel-money-comp', // used for nine ga scripts
    guidelines: true, // shows or hides layout guideline bars
  }
}

module.exports = nextConfig