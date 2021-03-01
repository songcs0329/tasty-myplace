# 게시판지도 프로젝트

```
// package 설치
npm install

// create-react-app 시작
npm start
```

### 1) Auth(안증: 회원가입 / 로그인)
- [x] 구글 FireBase Auth를 통한 인증 제작
- [x] 이메일 & 비밀번호로 인증(기본값) / 구글 인증

### 2) 게시판
#### 2-1) 작성
- [ ] 구글 FireBase FireStore를 통한 게시판 제작
- [ ] 내가 쓴 글만 수정,삭제 가능
- [ ] 제목, 내용, 장소, 주소, 사진 최대 3개 등록

#### 2-2) 리스트
- [ ] 대표사진 1장, 제목, 작성자 이메일, 날짜만 표시

#### 2-3) 상세
- [ ] 수정, 삭제 버튼
- [ ] 사진 3개 Swiper.js, 1개일 땐 Swiper 활성화X
- [ ] 카카오지도 장소 이름 및 주소

### 3) 지도
- [ ] 지도영역 + 등록된 목록(필터링 o)
- [ ] 카카오 지도 사용
- [ ] 지도안에 맛집 picker 심어주기
- [ ] 카카오 지도검색: 맛집 위경도 저장, 지역 맛집 검색

### 4) React 설계
- styled-components 사용
- react-router-dom로 라우팅
- index, container, presenter 디자인패턴 사용
- 리덕스를 통한 로그인 유저정보, 게시판 상태관리