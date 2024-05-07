
const styleBtns = document.querySelectorAll('div.style-container input')
const styleFrame = document.querySelector('div.style-frame')

const designBtns = document.querySelectorAll('div.design-container input')
const frameBg = document.querySelector('div.frame-bg')

const fontCg = document.querySelector('id#text')
const fontColorBtns = document.querySelectorAll('div.font-color-container input')

//텍스트
document.getElementById('input-text').addEventListener('input', function() {
    let inputText = this.value;
    document.getElementById('output').innerText = inputText;

    
        let inputValue = event.target.value;
    
        // 영어 알파벳만 포함된 텍스트인지 확인
        let isEnglish = /^[a-zA-Z]*$/.test(inputValue);
    
        // 영어 알파벳이 아닌 경우 입력 제한
        if (!isEnglish) {
            // 영어 이외의 문자 제거
            let sanitizedValue = inputValue.replace(/[^a-zA-Z]/g, '');
            // 입력 필드에 반영
            event.target.value = sanitizedValue;
        }
    
});

//폰트
document.getElementById('font1').addEventListener('click', function() {
    document.getElementById('output').style.fontFamily = 'Pretendard';
});

document.getElementById('font2').addEventListener('click', function() {
    document.getElementById('output').style.fontFamily = "Poetsen One";
});

//폰트컬러
document.getElementById('color1').addEventListener('click', function() {
    document.getElementById('output').style.color = 'white';
});
document.getElementById('color2').addEventListener('click', function() {
    document.getElementById('output').style.color = '#B90404';
});
document.getElementById('color3').addEventListener('click', function() {
    document.getElementById('output').style.color = '#FFDF00';
});
document.getElementById('color4').addEventListener('click', function() {
    document.getElementById('output').style.color = '#67CEF0';
});
document.getElementById('color5').addEventListener('click', function() {
    document.getElementById('output').style.color = '#FF43A5';
});

//스타일
// 버튼을 클릭했을 때 이벤트 처리

document.getElementById('image1').addEventListener('click', function() {
    document.getElementById('style-frame').style.backgroundImage = "none";
});
document.getElementById('image2').addEventListener('click', function() {
    document.getElementById('style-frame').style.backgroundImage = "url('img/스타일프레임1.png')";
});

document.getElementById('image3').addEventListener('click', function() {
    document.getElementById('style-frame').style.backgroundImage = "url('img/스타일프레임2.png')";
});

//디자인
designBtns[0].addEventListener("click", function(){
    frameBg.style.background= "#fff"
})
designBtns[1].addEventListener("click", function(){
    frameBg.style.background= "#FAD527"
})
designBtns[2].addEventListener("click", function(){
    frameBg.style.background= "#F38FC8"
})
designBtns[3].addEventListener("click", function(){    
    frameBg.style.background= 'linear-gradient(to bottom right, red, yellow, green)'
})
designBtns[4].addEventListener("click", function(){    
    frameBg.style.background= 'linear-gradient(to bottom right, #D0B1FF, #fae8c1, #F795BA)'
})

//리셋
document.querySelector('.set-title button').addEventListener('click', function() {
    // 텍스트 입력 초기화
    document.getElementById('input-text').value = 'text';

    // 폰트 초기화
    document.getElementById('output').style.fontFamily = '';

    // 폰트 컬러 초기화
    document.getElementById('output').style.color = '';

    // 스타일 프레임 이미지 초기화
    document.getElementById('style-frame').style.backgroundImage = 'none';

    // 디자인 프레임 배경색 초기화
    document.querySelector('.frame-bg').style.backgroundColor = 'transparent';
});
