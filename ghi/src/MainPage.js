import { useGetTokenQuery } from "./store/authApi";


function MainPage() {
    const { data } = useGetTokenQuery()
    return (
        <p>Test</p>
    );
}

export default MainPage;
