// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들
    const animatedElements = document.querySelectorAll('.section-block, .info-card, .cta-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 참가 신청 버튼 클릭 추적 (선택사항)
    const applyButton = document.querySelector('.apply-button');
    if (applyButton) {
        applyButton.addEventListener('click', function() {
            console.log('참가 신청 버튼 클릭됨');
            // 필요시 analytics 트래킹 코드 추가
        });
    }

    // 동영상 자동재생 (선택사항 - 사용자 경험에 따라)
    const video = document.getElementById('promo-video');
    if (video) {
        // 모바일에서 자동재생은 제한될 수 있음
        video.addEventListener('loadeddata', function() {
            console.log('동영상 로드 완료');
        });
    }

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 마감 임박 카운트다운 (선택사항)
// 필요시 활성화하여 사용
/*
function updateCountdown() {
    const deadline = new Date('2025-02-15T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        // 카운트다운 표시 엘리먼트가 있다면 업데이트
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = `마감까지 ${days}일 ${hours}시간 남았습니다!`;
        }
    }
}

// 1분마다 업데이트
setInterval(updateCountdown, 60000);
updateCountdown();
*/
