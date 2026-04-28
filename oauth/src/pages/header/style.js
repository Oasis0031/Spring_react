// style.js 예시
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const S = {};

// 1. S.Header가 제대로 정의되어 있나요?
S.Header = styled.header`
    background-color: #f8f9fa;
    padding: 20px;
    display: flex;
    gap: 10px;
`;

// 2. S.Link가 제대로 정의되어 있나요? (Link 컴포넌트를 스타일링 할 때)
S.Link = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: blue;
    }
`;

// 3. 가장 중요: S 객체를 기본 내보내기(default export) 했나요?
export default S;