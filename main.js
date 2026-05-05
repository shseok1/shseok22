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
