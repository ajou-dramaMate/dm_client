# Drama Mate - 드라마 OTT 추천 서비스

## 더미데이터 넣기
- ott, drama -> 등록용 api 호출
- user, review, community, comment -> mysql import (json)

### 1. ott
- ott 등록: `/src/pages/ott.js`에서 `putOTTData()` 호출
### 2. drama
- 드라마 등록: `/src/pages/drama.js`에서 `putDramaData()` 호출
### 3. user
- [user.json 다운로드](https://github.com/ajou-dramaMate/dm_data/blob/main/json/user.json)
### 4. review
- [review.json 다운로드](https://github.com/ajou-dramaMate/dm_data/blob/main/json/review.json)
### 5. community
- [community.json 다운로드](https://github.com/ajou-dramaMate/dm_data/blob/main/json/community.json)
### 6. comment
- [comment.json 다운로드](https://github.com/ajou-dramaMate/dm_data/blob/main/json/comment.json)
