"use strict";
// 인터페이스 , 클래스 
const author = { name: '홍길동', height: 123, action: function walk(params) {
        console.log(params + " 와 함께 걷는다.");
    } };
author.action('토끼');
