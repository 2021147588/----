# 프로젝트 구성
### 웹 구조도
![웹 구조도](https://github.com/2021147588/sw_ai_miri/blob/master/%EC%9B%B9%20%EA%B5%AC%EC%A1%B0%EB%8F%84.png)
### 동작 시나리오
![동작 시나리오](https://github.com/2021147588/sw_ai_miri/blob/master/%EB%8F%99%EC%9E%91%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4.png)

# 프로젝트 요구사항
- nodejs
- Banuba client token
- Browser with support of WebGL2.0

# 프로젝트 실행 방법

### 로컬에서 실행하는 방법
1. `cd sw_ai_miri` 
2. `node app.js`
3. 크롬에서 `localhost:3000` 접속

### EC2 인스턴스에서 실행하는 방법
1. `git pull //처음 설치라면 git clone`
2. `cd sw_ai_miri`
3. `pm2 start app.js`
