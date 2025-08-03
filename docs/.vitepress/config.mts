import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Broccoli ART MAP",
  description: "Broccoli's ART MAP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ottawa', link: '/ottawa/ottawa-list' },
      { text: 'Montreal', link: '/montreal/montreal-list' },
      { text: '任何相關疑問，歡迎透過IG聯繫網站工程師=>', link: 'https://www.instagram.com/broccoliincanada' }
    ],

    sidebar: {
      // Sidebar for all routes under `/ottawa/`
      '/ottawa/': [
        {
          text: 'Galleries & Museums & Historical Sites',
          items: [
            { text: 'National Gallery of Canada', link: '/ottawa/art/ngc' },
            { text: 'Notre Dame Cathedral Basilica', link: '/ottawa/art/ndb' },
            { text: 'National Arts Centre', link: '/ottawa/art/nac' },
            { text: 'Bytown Museum', link: '/ottawa/art/bm' },
            { text: 'Canadian Museum of History', link: '/ottawa/art/cmh' },
            { text: 'Canadian War Museum', link: '/ottawa/art/cwm' },
            { text: 'Bank of Canada Museum', link: '/ottawa/art/bcm' },
            { text: 'Canadian Museum of Nature', link: '/ottawa/art/cmn' },
            { text: "Diefenbunker: Canada's Cold War Museum", link: '/ottawa/art/dccwm' },
            { text: 'Canadian Aviation and Space Museum', link: '/ottawa/art/casm' },
          ]
        },
        {
          text: 'Cafes & Restaurants',
          items: [
            { text: 'Art House', link: '/ottawa/coffee/ah' },
            { text: 'Absolute Comedy Ottawa', link: '/ottawa/coffee/aco' },
            { text: 'Moo Shu Ice Cream', link: '/ottawa/coffee/msic' },
            { text: 'LIVE! on Elgin', link: '/ottawa/coffee/loe' },
            { text: 'Sharpfle Coffee & Bar', link: '/ottawa/coffee/sharpfle' },
          ]
        }
      ],

      // Sidebar for all routes under `/getting-started/`
      '/montreal/': [
        {
          text: 'Montreal',
          items: [
            { text: 'Montreal Museum of Archaeology and History', link: '/montreal/art/mmah' },
            { text: 'Basilique Notre-Dame de Montréal', link: '/montreal/art/bndm' },
            { text: 'Bank of Montreal Museum', link: '/montreal/art/bmm' },
            { text: 'Museum of Illusions Montréal', link: '/montreal/art/mim' },
            { text: 'OASIS immersion', link: '/montreal/art/oasis' },
            { text: 'Omega Park', link: '/montreal/art/omega' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/broccoliincanada' }
    ]
  },
  base: '/broccoliARTMAP/',
})
