const toggler = document.getElementById('theme-toggle')

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"/></svg>`

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M7.633 3.067A3.001 3.001 0 1 1 4.017 6.32M22 13.05a3.5 3.5 0 1 0-3 5.914"/><path stroke-linecap="round" stroke-linejoin="round" d="m14.5 8.51l.01-.011M10 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></g></svg>`

toggler.innerHTML =
  document.documentElement.getAttribute('data-theme') === 'dark' ? moonIcon : sunIcon

toggler?.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)

  toggler.innerHTML = newTheme === 'dark' ? moonIcon : sunIcon
})
