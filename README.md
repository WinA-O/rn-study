# Git
<pre>
	깃 등록 : cmd -> 깃을 열 디렉토리로 이동 -> git init -> git remote add origin 깃주소
 	
	git init
	git add README.md // git add .
	git commit -m "first commit"
	git remote add origin https://github.com/WinA-O/RN.git
	git push -u origin master
	git remote set-url origin https://github.com/WinA-O/RN.git
</pre>

# Issue
<pre>
	상황 : 깃 푸시가 안됨
	원인 : SeungA-O로 로그인 되어 있는 terminal로 WinA-O 의 reposit에 접근하려 함
	해결 : 아래 참고하여 해결
	참고 : https://meaownworld.tistory.com/78
</pre>
<pre>
	상황 : README 수정 후 커밋 안되는 현상
	Error Message : Your branch is up to date with 'origin/master'.
	해결 : git add README.md => git status(생략가능) => git commit -m "메세지" => git push -u origin master
	참고 : https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0
</pre>

# Git bash
<pre>
	node -v => v12.13.1
	npm -v => 6.12.1
	npm install -g npxcd 
	npx => 6.12.1
</pre>

# Memo
<pre>
	리액트 홈 : https://reactjs.org/docs/create-a-new-react-app.html
</pre>











This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
test
