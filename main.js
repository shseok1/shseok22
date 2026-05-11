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

const suggestionForm = document.getElementById('suggestion-form');
const resultMessage = document.getElementById('result-message');
const suggestedMenuSpan = document.getElementById('suggested-menu');

suggestionForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const input = document.getElementById('menu-input');
    const menu = input.value;
    const formData = new FormData(this);
    
    if (menu.trim() !== "") {
        try {
            const response = await fetch(this.action, {
                method: this.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                suggestedMenuSpan.textContent = menu;
                resultMessage.classList.remove('hidden');
                input.value = "";
                // 5초 후 메시지 숨기기 (선택 사항)
                setTimeout(() => {
                    resultMessage.classList.add('hidden');
                }, 5000);
            } else {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            alert("연결 오류가 발생했습니다.");
        }
    }
});
