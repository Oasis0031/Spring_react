import S from "./style";

const Header = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <>
            {/* 전체 조건을 중괄호로 감싸야 합니다 */}
            {isAuthenticated ? (
                <S.Header>
                    <S.Link to={"/member/join"}>마이페이지</S.Link>
                </S.Header>
            ) : (
                <S.Header>
                    <S.Link to={"/member/join"}>회원가입</S.Link>
                    <S.Link to={"/member/login"}>로그인</S.Link>
                </S.Header>
            )}
        </>
    );
};