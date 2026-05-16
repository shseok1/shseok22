// 메뉴 추천 로직
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

// 랜덤 메뉴 추천 로직
const randomMenuButton = document.getElementById('random-menu-button');
const randomMenuResult = document.getElementById('random-menu-result');

const dinnerMenus = [
    "치킨", "피자", "파스타", "스테이크", "초밥", "라멘", "햄버거", "타코", "김치찌개", "된장찌개", "부대찌개", "곱창", "삼겹살", "불고기", "비빔밥", "떡볶이"
];

randomMenuButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    randomMenuResult.textContent = `오늘의 추천 메뉴는... ${selectedMenu} 입니다! 🎉`;
    randomMenuResult.classList.remove('hidden');
});
