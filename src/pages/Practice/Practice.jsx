// 스타일 파일 호출
import './Practice.css';

// 컴포넌트 호출
import DefinitionList from './DefinitionList';
import Controller from './parts/Controller';


function Practice() {
  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />
      {/* Extract Component = 컴포넌트 추출 */ }
      {/* dl 있던곳임~~ */ }
      <DefinitionList />

      {/* <Controller /> 컴포넌트 분리(추출)하기*/ }
      <Controller />
    </div>
  );
}

export default Practice;
