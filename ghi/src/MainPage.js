import { useGetTokenQuery } from "./store/authApi";


function MainPage() {
    const { data } = useGetTokenQuery()
    console.log(data)
    return (
        <p>Test</p>
    );
}

export default MainPage;
