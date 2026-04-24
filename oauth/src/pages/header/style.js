import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';



const Header = () => {
    return (
        <div>
            <S.Header>
                <S.Link to={"/member/login"}>로그인</S.Link>
                <S.Link to={"/member/join"}>회원가입</S.Link>
                <S.Link to={"/member/join"}>마이페이지</S.Link>
            </S.Header>
        </div>
    );
};

export default Header;