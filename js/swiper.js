const swiper1 = new Swiper('.main', {
  // Optional parameters
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true, // 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수

  autoplay: {     //자동슬라이드 (false-비활성화)
     delay: 2500, // 시간 설정
     disableOnInteraction: false, // false-스와이프 후 자동 재생
},
navigation: {
  // 슬라이드 이전/다음 버튼 사용 여부
  prevEl: ".main-slide .swiper-prev", // 이전 버튼 선택자
  nextEl: ".main-slide .swiper-next", // 다음 버튼 선택자
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },

});