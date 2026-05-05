// 다크 모드 전환 로직
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

document.getElementById('suggestion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('menu-input');
    const menu = input.value;
    
    if (menu.trim() !== "") {
        document.getElementById('suggested-menu').textContent = menu;
        document.getElementById('result-message').classList.remove('hidden');
        
        // 입력창 초기화
        input.value = "";
    }
});
