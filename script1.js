const sideMenu = document.querySelector('#side-menu');
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenProjects = document.querySelectorAll('.project-item.hidden');
const navBar = document.querySelector('nav');
const linksNav = document.getElementById('menu-1');

// toggle side menu
function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
};

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
};


// toggle show more projects
showMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => project.classList.toggle('hidden'));
    showMoreBtn.textContent = hiddenProjects[0].classList.contains('hidden') ? 'Show More' : 'Show Less';
});


// background for nav while scrolling
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-lg',
            'dark:bg-darkTheme', 'dark:shadow-white/20', 'transition', 'duration-500');
        linksNav.classList.remove('bg-white', 'shadow-lg', 'bg-opacity-50',
            'dark:bg-transparent', 'dark:bg-[#000008]', 'transition', 'duration-500');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-lg',
            'dark:bg-darkTheme', 'dark:shadow-white/20', 'transition', 'duration-500');
        linksNav.classList.add('bg-white', 'shadow-lg', 'bg-opacity-50',
            'dark:bg-transparent', 'dark:bg-[#000008]', 'transition', 'duration-500');
    }
});

// light and dark mode
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

function toggleTheme() {

    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }

};
