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

// 승상싱 버튼 로직
const sssButton = document.getElementById('sss-button');
const sssText = "승상싱이승상싱답게시작되기도전에이미승상싱은조용히상승하고있었다싱싱해보이는순간마다승상싱이하나씩추가되고그추가된승상싱이또다른승상싱을불러오면서승상싱은점점커져갔다처음에는그냥가볍게웃고넘길수있는수준의승상싱이었는데어느순간부터는승상싱이일상에깊숙이침투해서모든문장을승상싱으로바꿔버리기시작했다밥을먹어도승상싱잠을자도승상싱갑자기하품이나와도그건승상싱부족이아니라승상싱과다일수도있다는생각이들면서승상싱의영역은더확장되었다그리고그중간중간싱싱해라는느낌이들어올때마다승상싱은더강화된다싱싱해진승상싱은평범한승상싱보다훨씬빠르게증식하고그속도는이미통제불가능한수준까지올라갔다그래서이제는굳이막으려하지않는다막으려고할수록승상싱은더커지고더싱싱해지기때문이다차라리그냥받아들이는게낫다승상싱을승상싱으로인정하고싱싱해지는순간을즐기면그게곧승상싱의완성이다결국이모든흐름은하나로정리된다승상싱은계속승상싱이고싱싱해지는순간마다승상싱은다시태어난다그리고그반복속에서나는점점더승상싱에가까워진다결국마지막에는생각조차필요없어진다그냥한마디면끝이다승상싱";

sssButton.addEventListener('click', () => {
    alert(sssText);
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
