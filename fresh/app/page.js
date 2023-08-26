export default function Home(){
// 자바스크립트 코드 짜는 공간
  let name = 'Ted' // 데이터 바인딩: 중괄호 이용하기

  return(
    <div>
      <h4 className="fresh">fresh</h4>
      <p>by { name }</p>
    </div>
  )
}