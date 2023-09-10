// compilerOptions : 타입스크립트를 자바스크립트로 컴파일할때 사용될 옵션 (나오는 값은 기본값 :: 설명)
//        - "target" : "ES3" :: 컴파일될 ES 버전 명시
//        - "module" : "Commonjs" :: 모듈 시스템 지정 (CommonJS, AMD, ESNext)
//        - "moduleResolution" : "Node" :: 모듈 해석 방식 지정 (Node, Classic)
//        - "esModuleInterop" : false :: ESM 모듈 방식 호환성 활성화 여부
//        - "isolatedModules" : false :: 모든 파일을 모듈로 컴파일 --> import 혹은 export 키워드 필수
//        - "baseUrl" : "./" :: 모듈 해석에 사용할 기준 경로 지정
//        - "typeRoots" : ["./node_modules/@types"] :: 컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
//        - "lib" : [] :: 컴파일에서 사용할 라이브러리 지정 ("ESNext", "DOM", "ES2015")
//        - "script" : true :: 더 엄격한 타입 검사 활성화 --> 아래 noImplicitAny부터 scriptBindCallApply까지 script를 수정하면 같이 변함
//        - "noImplicitAny" : false :: 암시적 any 타입 검사 활성화
//        - "noImplicitThis" : false :: 암시적 this 타입 검사 활성화
//        - "scriptNullChecks" : false :: 엄격한 Nullish 타입 검사 활성화
//        - "scriptFunctionTypes" : false :: 엄격한 함수의 매개변수 타입 검사 활성화
//        - "scriptPropertyInitialization" : false :: 엄격한 클래스의 속성 초기화 검사 활성화
//        - "scriptBindCallApply" : false :: 엄격한 Bind, Call, Apply 매소드의 인수 검사 활성화
// include : 컴파일할 파일 경로
// exclude : 컴파일에서 제외할 파일 경로

// {
//     "compilerOptions": 
//     {
//         "target":"ES2015",
//         "module":"ESNext",
//         "moduleResolution": "Node",
//         "esModuleInterop": true,
//         "lib":
//         [
//             "ESNext", 
//             "DOM"
//         ],
//         "strict": true,
//         "typeRoots":["./node_modules/@types"]
//     },
//     "include":
//     [
//         "src/**/*.ts"
//     ],
//     "exclude": 
//     [
//         "node_modules"
//     ]
// }