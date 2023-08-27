import Image from "next/image"
import food0 from "/public/food0.png"

export default function List(){

  let thing = ['Tomatoes', 'Pasta', 'Apple']


      return(
        <div>
          <h4 className="title">상품목록</h4>
          {
            thing.map((a, i)=>{
              return(
                <div className="food" key={i}>
                  <img src={'food' + i + '.png'} 
                  className="food-img"></img>
                  <h4>{thing[i]} $40</h4>
                </div>
              )
            })
          }
        </div>
      )
    }

    /* Next.js에서 URL과 페이지 만들기
    1. app 폴더 안에 폴더만들기
    2. page.js 넣기
    3. 레이아웃 넣기
    */

    /* html 내에서 for 반복문 사용 금지 -> map(a, i) 
    - 함수안의 코드 반복 실행
    - array안의 자료 출력줌
    - i는 반복될 때마다 0부터 1씩 커짐
    - return에 적은 것을 array로 담아준다.
    */

    /* image 넣기 */