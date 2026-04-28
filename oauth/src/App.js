import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useEffect } from 'react';
import useAuthStore from './store/useAuthStore';

function App() {
    const { isAuthenticated, member, setMember, setIsAuthenticated } = useAuthStore();

    useEffect(() => {
        const intializeAuth = async () => {
            try {
                const response = await fetch("http://localhost:10000/api/members/me", {
                    credentials: "include"
                });

                if (!response.ok) throw new Error("Access Token Expired");

                const datas = await response.json();
                const { success, data } = datas;
                if (success) {
                    setMember(data);
                    setIsAuthenticated(true);
                }

            } catch (err) {
                // 1. Access Token이 만료된 경우 여기로 옵니다.
                console.log("Access Token 만료, 재발급 시도 중...");
                
                try {
                    // 여기서 Refresh Token을 이용한 재발급 fetch 요청을 보냅니다.
                    // const refreshRes = await fetch("..."); 
                    
                    // 만약 여기서도 에러가 발생하면 아래 catch로 이동합니다.
                } catch (refreshErr) {
                    // 2. Refresh 토큰까지 만료된 경우
                    console.log("Refresh 토큰 만료, 재로그인 필요");
                    setIsAuthenticated(false);
                }
            } // 이 부분의 괄호가 중복되거나 잘못 닫혀있던 것이 에러의 원인이었습니다.
        };

        intializeAuth();
    }, [isAuthenticated, setIsAuthenticated, setMember]); // 의존성 배열에 스토어 함수 추가 권장

    console.log(member);

    return (
        <RouterProvider router={router} />
    );
}

export default App;