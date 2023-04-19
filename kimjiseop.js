// 정적인 객체 리터럴, 데이터를 넣을 자리를 마련
let basicData = {
  header: {},
  main: {},
  footer: {}
}
// fromjsonData 변수는
// json.parse()를 통해 받아온 데이터라고 가정
let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc"
    }
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333"
    }
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666"
    }
  }
}

function exampleOne(basicData, fromJsonData) {
  basicData.header = {
    content: fromJsonData.header.content,
    style: fromJsonData.header.style
  },
    basicData.main = {
      content: fromJsonData.main.content,
      style: fromJsonData.main.style
    },
    basicData.footer = {
      content: fromJsonData.footer.content,
      style: fromJsonData.footer.style
    }
  let value = `
  <div id=${Object.keys(fromJsonData)[0]} style="width:${basicData.header.style.width};height:${basicData.header.style.height};background-color:${basicData.header.style.backgroundColor}">
  ${fromJsonData.header.content}
  </div>
  <div id=${Object.keys(fromJsonData)[1]} style="width:${basicData.main.style.width};height:${basicData.main.style.height};background-color:${basicData.main.style.backgroundColor}">
  ${fromJsonData.main.content}
  </div><div id=${Object.keys(fromJsonData)[2]} style="width:${basicData.footer.style.width};height:${basicData.footer.style.height};background-color:${basicData.footer.style.backgroundColor}">
  ${fromJsonData.footer.content}
  </div>
  `;
  // 아래의 호출부를 참고하여, 지역변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.

  return value;
}

// 특정 HTML요소에 값을 넣는 것을 가정

const element = document.createElement('div');
element.innerHTML = exampleOne(basicData, fromJsonData);
document.body.appendChild(element);

//위의 fromJsonData와 같은 객체나 JSON을 생성하기 위한
// 생성자함수, 클래스를 작성
// setter 기능을 활용하여 인스턴스의 값들은 모두 문자열만 들어가도록
// 안정성 확보
class exampleTwo {
  constructor(header = {}, main = {}, footer = {}) {
    this.header = header;
    this.main = main;
    this.footer = footer;
  }

  set header(data) {
    if (typeof (data) === 'string') {
      this._header = {
        content: "header 부분입니다.",
        style: {
          width: "100vw",
          height: "100px",
          backgroundColor: "#ccc"
        }
      }
    }
  }

  set main(data) {
    if (typeof (data) === 'string') {
      this._main = {
        content: "main 부분입니다.",
        style: {
          width: "100vw",
          height: "100px",
          backgroundColor: "#333"
        }
      }
    }
  }
  set footer(data) {
    if (typeof (data) === 'string') {
      this._footer = {
        content: "footer 부분입니다.",
        style: {
          width: "100vw",
          height: "100px",
          backgroundColor: "#666"
        }
      }
    }
  }
}
// 클래스룸 javascript 14번을 참고하며 만들었지만
// 클래스 관련한 문제는 확실히 어렵다고 느끼는 부분이 있습니다.
// 어떻게 활용하느냐부터 활용한 다음에 출력을 어떻게 하는지 까지의 문제도 있었으면 좋겠습니다
const example = new exampleTwo();
example.exampleOne(basicData, fromJsonData);
// exampleOne(basicData, fromJsonData);
