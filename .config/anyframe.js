// https://github.com/anyframe-org/css
export default {
  include: ['index.html', 'src/**/*.js'],
  preflight: true,
  aliases: {
    btn: 'size-10 radius-md inline-flex items-center justify-center hover:bg-neutral-500/20 transition-colors duration-300',
    'font-mono': 'font-(family:{default-font-mono})'
  },
  variants: {
    dark: '[data-theme=dark] &'
  },
  theme: {
    ':root': '[--default-font-family]-Inter [--default-font-mono]-[JetBrains_Mono]'
  }
}
